"use client";

import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import SoftFadeSection from "../components/SoftFadeSection";
import LocationAddress from "../components/LocationAddress";
import LocationMap from "../components/LocationMap";

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bericht: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [calendlyUrl, setCalendlyUrl] = useState(
    "https://calendly.com/kimberley-hwong",
  );

  useEffect(() => {
    setCalendlyUrl(
      `https://calendly.com/kimberley-hwong?redirect_url=${encodeURIComponent(`${window.location.origin}/bedankt`)}`,
    );
  }, []);

  // Load Calendly script
  useEffect(() => {
    // Check if script is already loaded
    if (window.Calendly) {
      return;
    }

    if (
      document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      );
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "" });
        setFormData({ naam: "", email: "", bericht: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            data.error ||
            "Er is een fout opgetreden. Probeer het later opnieuw.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Er is een fout opgetreden. Probeer het later opnieuw.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <Hero
        title=""
        imageUrl="/images/KImberley_reflexologie_10.jpg"
        compact={true}
        fadeBottom={true}
        showIntro={false}
      />

      <SoftFadeSection>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C]/90 mb-6 font-light">
              Heb je een vraag of wil je even afstemmen?
            </h2>
            <p className="text-[#3F342C]/75 text-base md:text-lg leading-relaxed font-light mb-4">
              Twijfel je of voetreflexologie iets voor jou is, of wil je eerst even kennismaken? Stuur me
              gerust een berichtje. Ik denk graag met je mee.
            </p>
            <p className="text-[#3F342C]/65 text-sm md:text-base leading-relaxed font-light">
              Ik probeer altijd binnen de 24u te reageren. Omdat ik ook nog in de logistiek werk, beantwoord ik
              berichten vaak in de avonduren of tijdens mijn vrije momenten. Bedankt voor je geduld!
            </p>
          </div>
        </div>
      </SoftFadeSection>

      <section className="pt-4 md:pt-6 pb-20 md:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-10 font-light">
                  Contactgegevens
                </h2>
                <div className="space-y-6 text-[#3F342C]">
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#B8A89A] mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="font-light">
                      <p className="font-light text-base mb-1">Locatie</p>
                      <p className="text-[#3F342C]/80">
                        <LocationAddress />
                      </p>
                      <p className="text-[#3F342C]/70 text-sm mt-1">
                        waar de thee altijd klaarstaat
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#B8A89A] mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="font-light">
                      <p className="font-light text-base mb-1">
                        WhatsApp / Telefoon
                      </p>
                      <a
                        href="tel:+32476514248"
                        className="text-[#3F342C]/80 hover:text-[#B8A89A] transition-colors duration-300"
                      >
                        +32 (0) 476 51 42 48
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-[#B8A89A] mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="font-light">
                      <p className="font-light text-base mb-1">Email</p>
                      <a
                        href="mailto:kimberley.hwong@outlook.be"
                        className="text-[#3F342C]/80 hover:text-[#B8A89A] transition-colors duration-300"
                      >
                        kimberley.hwong@outlook.be
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-10 font-light">
                  Locatie
                </h2>
                <div className="w-full h-72 bg-[#E8DED4] rounded-xl overflow-hidden shadow-sm">
                  <LocationMap />
                </div>
              </div>
            </div>

            {/* Calendly and Contact Form Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              {/* Calendly Booking Section */}
              <div id="afspraak">
                <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-6 font-light">
                  Boek hier jouw moment van rust
                </h2>
                <p className="text-[#3F342C]/70 mb-6 font-light text-base md:text-lg">
                  Kies een geschikt tijdstip voor je afspraak via onderstaande
                  kalender.
                </p>
                <div className="w-full min-h-[600px] rounded-xl overflow-hidden shadow-lg bg-white">
                  {/* Calendly inline widget */}
                  <div
                    className="calendly-inline-widget"
                    data-url={calendlyUrl}
                    style={{
                      minWidth: "320px",
                      height: "600px",
                      width: "100%",
                    }}
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-6 font-light">
                  Contactformulier
                </h2>
                <p className="text-[#3F342C]/70 mb-6 font-light text-base md:text-lg">
                  Of stuur een bericht via het formulier.
                </p>

                {submitStatus.type === "success" && (
                  <div className="mb-6 p-6 md:p-8 rounded-xl bg-[#F5EFE8] border border-[#E8DED4] text-left space-y-4">
                    <h3 className="text-xl md:text-2xl font-serif text-[#3F342C] font-light">
                      Wat fijn dat je voor jezelf kiest!
                    </h3>
                    <div className="space-y-3 text-[#3F342C]/80 text-sm md:text-base leading-relaxed font-light">
                      <p>
                        Bedankt voor je bericht. Ik kijk ernaar uit om je te mogen helpen en denk graag met je mee.
                      </p>
                      <p>Ik probeer altijd binnen de 24u te reageren. Heb je nog vragen? Stel ze gerust.</p>
                      <p className="text-[#3F342C]">Warme groet, Kimberley</p>
                    </div>
                    <p className="text-[#3F342C]/65 italic text-sm font-light pt-2">
                      Landen bij jezelf, te beginnen bij je voeten.
                    </p>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-800 border border-red-200">
                    <p className="font-light">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="naam"
                      className="block text-[#3F342C] mb-2 font-light text-base"
                    >
                      Naam
                    </label>
                    <input
                      type="text"
                      id="naam"
                      value={formData.naam}
                      onChange={(e) =>
                        setFormData({ ...formData, naam: e.target.value })
                      }
                      className="w-full px-5 py-3 border border-[#B8A89A]/30 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#B8A89A] focus:border-transparent transition-all bg-white text-[#3F342C] font-light"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#3F342C] mb-2 font-light text-base"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-3 border border-[#B8A89A]/30 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#B8A89A] focus:border-transparent transition-all bg-white text-[#3F342C] font-light"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bericht"
                      className="block text-[#3F342C] mb-2 font-light text-base"
                    >
                      Bericht
                    </label>
                    <textarea
                      id="bericht"
                      value={formData.bericht}
                      onChange={(e) =>
                        setFormData({ ...formData, bericht: e.target.value })
                      }
                      rows={6}
                      className="w-full px-5 py-3 border border-[#B8A89A]/30 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#B8A89A] focus:border-transparent transition-all resize-none bg-white text-[#3F342C] font-light"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-4 bg-[#B8A89A] text-white font-light text-base rounded-xl hover:bg-[#A39284] transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "VERZENDEN..." : "BERICHT VERSTUREN"}
                    {!isSubmitting && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
