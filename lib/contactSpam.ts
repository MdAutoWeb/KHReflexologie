const MIN_SUBMIT_MS = 3000;
const MAX_REQUESTS_PER_HOUR = 5;

const SPAM_PATTERNS = [
  /viagra|cialis|casino|crypto|bitcoin|forex|seo services|backlinks/i,
  /(https?:\/\/[^\s]+.*){3,}/i,
];

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export type ContactSubmission = {
  naam: string;
  email: string;
  bericht: string;
  website?: string;
  _ts?: number;
};

export type SpamCheckResult =
  | { ok: true }
  | { ok: false; silent: true }
  | { ok: false; silent: false; message: string };

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_HOUR) {
    return true;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
}

export function validateContactSubmission(
  data: ContactSubmission,
  request: Request,
): SpamCheckResult {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return {
      ok: false,
      silent: false,
      message:
        "Je hebt te veel berichten verstuurd. Probeer het later opnieuw of bel ons rechtstreeks.",
    };
  }

  if (data.website?.trim()) {
    return { ok: false, silent: true };
  }

  const submittedAt = Number(data._ts);
  if (!submittedAt || Date.now() - submittedAt < MIN_SUBMIT_MS) {
    return { ok: false, silent: true };
  }

  const combined = `${data.naam} ${data.email} ${data.bericht}`;
  if (SPAM_PATTERNS.some((pattern) => pattern.test(combined))) {
    return { ok: false, silent: true };
  }

  if (data.naam.length > 120 || data.email.length > 120 || data.bericht.length > 5000) {
    return { ok: false, silent: true };
  }

  return { ok: true };
}
