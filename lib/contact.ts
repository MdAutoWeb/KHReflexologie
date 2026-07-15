export const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL ??
  process.env.SMTP_USER ??
  "kimberley.hwong@gmail.com";

export const CONTACT_PHONE = "+32 (0) 476 51 42 48";

export const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.gmail.com";
export const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
export const SMTP_USER = process.env.SMTP_USER ?? CONTACT_EMAIL;
export const SMTP_PASS = process.env.SMTP_PASS?.replace(/\s/g, "");
