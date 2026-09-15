"use client";

import { useState } from "react";

// <!-- THESIS: معرض مراد هو البرهان - كل بكسل يبيع المهارة. نرفض القالب الآمن ونبني Poster Editorial فاخر يحوّل الزائر من متصفح إلى عميل.
// OWN-WORLD: Warm Ivory #F2ECE0 + Charcoal #1B1815 + Gold #B49468 ≤5%، Bodoni Moda + Aref Ruqaa للعناوين، Archivo + Amiri للنص، 12 عمود، 8px baseline، hairlines، coordinates، mono labels.
// STORY: الزائر يفهم في ثوانٍ أن مراد يبني مواقع لا تُنسى، يرى أعماله الحقيقية، وينقر واتساب/نموذج.
// FIRST VIEWPORT: MURAD كلمة واحدة تملأ الشاشة clamp(4.5rem,20vw,15rem) + إحداثيات + Gold hairline + عبارة "أبني مواقع تبيع" + زر واتساب Primary، على Ivory، مع Grid lines خفيفة.
// FORM: Whole surface inside established world - Editorial Luxury Poster، لا concept tournament.
// FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance -->

const projects = [
  {
    id: "01",
    titleAr: "مطعم 56",
    titleEn: "Street Fifty Six",
    category: "مطعم / Editorial",
    year: "2025",
    descAr: "هوية رقمية لمطعم آسيوي في جدة. Raw Paper Brutalism، أزرق كوبالت #1E3EB3، حدود حادة 0px، وثلاث صفحات حقيقية.",
    descEn: "Digital identity for an Asian street food spot in Jeddah. Raw paper, cobalt blue, sharp 0px radius.",
    href: "#",
    featured: true,
  },
  {
    id: "02",
    titleAr: "بطاقة NFC",
    titleEn: "NFC Business Card",
    category: "منتج / Product",
    year: "2025",
    descAr: "بطاقة أعمال رقمية بنقرة واحدة. vCard + QR + مشاركة فورية، واجهة عربية أصيلة.",
    descEn: "Tap-to-share digital card. vCard + QR + instant share.",
    href: "#",
  },
  {
    id: "03",
    titleAr: "متجر إلكتروني",
    titleEn: "Store Backend",
    category: "تجارة / Commerce",
    year: "2024",
    descAr: "نظام طلبات متكامل: سلة، دفع سعودي (Moyasar/Tabby)، وتتبع مباشر.",
    descEn: "Full ordering: cart, Saudi payments, live tracking.",
    href: "#",
  },
  {
    id: "04",
    titleAr: "خدمات صناعية",
    titleEn: "MT Services",
    category: "شركات / Corporate",
    year: "2024",
    descAr: "موقع صناعي لثمان خدمات: كشط، خرسانة، ودهان مقاوم للحريق.",
    descEn: "Industrial site for 8 services: blasting, concrete, fireproofing.",
    href: "#",
  },
];

export default function Page() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const isAr = lang === "ar";

  return (
    <div dir={isAr ? "rtl" : "ltr"} lang={isAr ? "ar" : "en"}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--ivory)]/90 backdrop-blur border-b border-[var(--hair)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[64px]">
          <div className="flex items-center gap-8">
            <a href="#" className="font-display text-[22px] font-black tracking-[-0.02em] text-[var(--charcoal)]">
              MURAD<span className="text-[var(--gold)]">.</span>
            </a>
            <nav aria-label={isAr ? "التنقل الرئيسي" : "Main navigation"} className="hidden md:flex items-center gap-6">
              <a href="#work" className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors">
                {isAr ? "الأعمال" : "WORK"}
              </a>
              <a href="#services" className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors">
                {isAr ? "الخدمات" : "SERVICES"}
              </a>
              <a href="#contact" className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors">
                {isAr ? "تواصل" : "CONTACT"}
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
              N 21.54° · E 39.17° · JEDDAH
            </span>
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              aria-label={isAr ? "Switch to English" : "التبديل للعربية"}
              className="inline-flex items-center gap-2 border border-[var(--charcoal)] px-4 py-2 text-[12px] font-semibold tracking-[0.14em] hover:bg-[var(--charcoal)] hover:text-[var(--ivory)] transition-colors"
            >
              {isAr ? "EN" : "ع"}
            </button>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-[var(--charcoal)] text-[var(--ivory)] px-5 py-2.5 text-[13px] font-semibold tracking-wide hover:translate-y-[-2px] transition-transform"
            >
              {isAr ? "واتساب" : "WhatsApp"} ↗
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero - Poster */}
        <section className="relative overflow-hidden bg-[var(--ivory)] border-b border-[var(--hair)]" aria-labelledby="hero-title">
          {/* Grid lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden="true">
            <div className="h-full max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-s border-[var(--hair)] last:border-e" />
              ))}
            </div>
          </div>

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-16 lg:pb-24">
            {/* Top meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)]">
                FIG. 01 — MURAD KHUDRI / 2025
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)]">
                CRAFTED PREMIUM · JEDDAH — RIYADH
              </span>
            </div>

            {/* Giant word */}
            <h1
              id="hero-title"
              className="font-display font-black leading-[0.82] tracking-[-0.03em] text-[var(--charcoal)]"
              style={{ fontSize: "var(--t-giant)" }}
            >
              <span className="block">{isAr ? "مراد" : "MURAD"}</span>
            </h1>

            {/* Gold hairline */}
            <div className="mt-6 h-[2px] bg-[var(--gold)] w-full max-w-[320px]" aria-hidden="true" />

            {/* Intro */}
            <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <p className={`text-[var(--t-lead)] leading-relaxed text-[var(--charcoal)] ${isAr ? "font-arabicBody" : ""}`}>
                  {isAr ? (
                    <>
                      <span className="font-bold">أبني مواقع تبيع.</span> كل تفصيلة برهان — من الحرف الأول حتى آخر بكسل. معرضي هو أقوى مشروع أملكه.
                    </>
                  ) : (
                    <>
                      <span className="font-bold">I build sites that sell.</span> Every detail is proof — from first letter to last pixel. This portfolio is my strongest project.
                    </>
                  )}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="inline-flex bg-[var(--charcoal)] text-[var(--ivory)] px-7 py-3.5 text-[14px] font-semibold tracking-wide hover:translate-y-[-1px] transition-transform"
                  >
                    {isAr ? "شاهد الأعمال" : "See Work"} — 04
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex border border-[var(--charcoal)] text-[var(--charcoal)] px-7 py-3.5 text-[14px] font-semibold hover:bg-[var(--charcoal)] hover:text-[var(--ivory)] transition-colors"
                  >
                    {isAr ? "ابدأ مشروعك" : "Start Project"}
                  </a>
                </div>
                <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">
                  {isAr ? "استجابة خلال ساعات · دفعات مرنة · تسليم على Vercel" : "Reply in hours · Flexible payments · Ship on Vercel"}
                </p>
              </div>

              <div className="lg:col-span-5 lg:text-end">
                <div className="inline-block border border-[var(--hair)] bg-[var(--paper)] p-5 text-start">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">LANDING / HERO.tsx</p>
                  <p className={`mt-3 text-[18px] leading-snug font-semibold text-[var(--charcoal)] ${isAr ? "font-arabicDisplay" : "font-display"}`}>
                    {isAr ? "جرأة منضبطة. طباعة هي البطل. فراغ محسوب." : "Disciplined Bold. Type Leads. Space Calculated."}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                    {isAr ? "لا قوالب، لا تدرجات بنفسجي→أزرق، لا بطاقات متطابقة." : "No templates, no purple→blue gradients, no identical cards."}
                  </p>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-[var(--muted)]">
                    <span className="h-px flex-1 bg-[var(--hair)]" />
                    <span>01 — 04</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurements */}
            <div className="mt-10 flex flex-wrap gap-6 font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">
              <span>12 COL · 1280 MAX · 8PX BASE</span>
              <span className="hidden sm:inline">WCAG AA · 4.5:1</span>
              <span className="hidden sm:inline">PREFERS-REDUCED-MOTION ✓</span>
              <span>RTL · LTR</span>
            </div>
          </div>
        </section>

        {/*Projects - Editorial, not cards */}
        <section id="work" className="bg-[var(--paper)] border-b border-[var(--hair)]" aria-labelledby="work-title">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="flex items-baseline justify-between gap-4 mb-10">
              <h2 id="work-title" className={`font-display text-[var(--t-d1)] font-black tracking-[-0.02em] text-[var(--charcoal)] ${isAr ? "font-arabicDisplay" : ""}`}>
                {isAr ? "أعمال" : "Selected Work"}
                <span className="font-mono text-[12px] tracking-[0.2em] text-[var(--muted)] align-super ms-3">04</span>
              </h2>
              <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)]">2024 — 2025</span>
            </div>

            <div className="grid gap-8">
              {projects.map((p, idx) => (
                <article
                  key={p.id}
                  className={`group relative border border-[var(--hair)] bg-[var(--ivory)] overflow-hidden ${p.featured ? "lg:grid lg:grid-cols-12" : "lg:grid lg:grid-cols-12"}`}
                >
                  {/* Number */}
                  <div className="absolute top-4 end-4 font-mono text-[11px] tracking-[0.2em] text-[var(--muted)]">
                    {p.id} / 04
                  </div>

                  {/* Image placeholder - full bleed */}
                  <div className={`bg-[var(--charcoal)] text-[var(--ivory)] flex items-center justify-center p-8 lg:p-10 ${p.featured ? "lg:col-span-7 min-h-[320px]" : "lg:col-span-5 min-h-[260px]"}`}>
                    <div className="text-center">
                      <p className="font-mono text-[10px] tracking-[0.2em] opacity-70">{p.category}</p>
                      <p className={`mt-3 font-display text-[32px] lg:text-[42px] font-black leading-[0.9] ${isAr ? "font-arabicDisplay" : ""}`}>
                        {isAr ? p.titleAr : p.titleEn}
                      </p>
                      <p className="mt-2 font-mono text-[11px] tracking-[0.14em] opacity-60">{p.year} · JEDDAH</p>
                    </div>
                  </div>

                  <div className={`p-6 lg:p-8 flex flex-col justify-between ${p.featured ? "lg:col-span-5" : "lg:col-span-7"}`}>
                    <div>
                      <h3 className={`font-display text-[22px] font-bold leading-tight text-[var(--charcoal)] ${isAr ? "font-arabicDisplay" : ""}`}>
                        {isAr ? p.titleAr : p.titleEn}
                        <span className="ms-2 inline-block h-px w-8 bg-[var(--gold)] align-middle" aria-hidden="true" />
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)] font-mono tracking-[0.02em]">
                        {p.category} · {p.year}
                      </p>
                      <p className={`mt-4 text-[15px] leading-relaxed text-[var(--charcoal)] ${isAr ? "font-arabicBody" : ""}`}>
                        {isAr ? p.descAr : p.descEn}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <a href={p.href} className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--charcoal)] underline underline-offset-4 decoration-[var(--hair)] hover:decoration-[var(--charcoal)]">
                        {isAr ? "عرض التفاصيل" : "View Case"} ↗
                      </a>
                      <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--muted)]">
                        FIG. {p.id}
                      </span>
                    </div>
                  </div>

                  {/* Hairline corner marks */}
                  <span className="pointer-events-none absolute top-0 start-0 h-3 w-3 border-s border-t border-[var(--charcoal)] opacity-40" aria-hidden="true" />
                  <span className="pointer-events-none absolute bottom-0 end-0 h-3 w-3 border-e border-b border-[var(--charcoal)] opacity-40" aria-hidden="true" />
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a href="#" className="font-mono text-[12px] tracking-[0.18em] text-[var(--muted)] hover:text-[var(--charcoal)] underline underline-offset-4">
                {isAr ? "كل الأعمال — 12 مشروع" : "All Work — 12 Projects"} →
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-[var(--ivory)] border-b border-[var(--hair)]" aria-labelledby="services-title">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <h2 id="services-title" className={`font-display text-[var(--t-d2)] font-black tracking-[-0.02em] text-[var(--charcoal)] ${isAr ? "font-arabicDisplay" : ""}`}>
              {isAr ? "ماذا أبني" : "What I Build"}
            </h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  tAr: "مواقع تبيع",
                  tEn: "Sites That Sell",
                  dAr: "Landing فاخر، متجر، وحجز — كل صفحة Poster لها شخصية.",
                  dEn: "Luxury landing, store, booking — each page a Poster.",
                },
                {
                  n: "02",
                  tAr: "نظام تصميم",
                  tEn: "Design System",
                  dAr: "توكنز، شبكة 12 عمود، وقياس 8px — لا قيم عشوائية.",
                  dEn: "Tokens, 12-col grid, 8px scale — no random values.",
                },
                {
                  n: "03",
                  tAr: "أداء وسيو",
                  tEn: "Perf & SEO",
                  dAr: "Core Web Vitals، صور محسنة، وميتا كاملة.",
                  dEn: "Core Web Vitals, optimized images, full meta.",
                },
              ].map((s) => (
                <div key={s.n} className="border border-[var(--hair)] bg-[var(--paper)] p-6">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--gold)]">{s.n}</p>
                  <h3 className={`mt-3 font-display text-[20px] font-bold text-[var(--charcoal)] ${isAr ? "font-arabicDisplay" : ""}`}>
                    {isAr ? s.tAr : s.tEn}
                  </h3>
                  <p className={`mt-2 text-[14px] leading-relaxed text-[var(--muted)] ${isAr ? "font-arabicBody" : ""}`}>{isAr ? s.dAr : s.dEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[var(--charcoal)] text-[var(--ivory)]" aria-labelledby="contact-title">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--hair)]">04 — CONTACT</p>
                <h2 id="contact-title" className={`mt-3 font-display text-[var(--t-d2)] font-black leading-[0.9] tracking-[-0.02em] ${isAr ? "font-arabicDisplay" : ""}`}>
                  {isAr ? "خلّ فكرتك تبيع" : "Make Your Idea Sell"}
                </h2>
                <p className={`mt-4 text-[var(--t-lead)] leading-relaxed text-[var(--hair)] ${isAr ? "font-arabicBody" : ""}`}>
                  {isAr ? "احكِ لي عن مشروعك. أرد خلال ساعات." : "Tell me about your project. I reply within hours."}
                </p>

                <form className="mt-8 grid gap-4 max-w-[560px]" onSubmit={(e) => e.preventDefault()} aria-label={isAr ? "نموذج التواصل" : "Contact form"}>
                  <label className="grid gap-2">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--hair)]">{isAr ? "الاسم" : "Name"}</span>
                    <input
                      required
                      aria-required="true"
                      placeholder={isAr ? "مراد خضري" : "Murad Khudri"}
                      className="w-full bg-transparent border-b border-[var(--hair)] px-0 py-3 text-[16px] placeholder:text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--hair)]">{isAr ? "واتساب / جوال" : "WhatsApp / Phone"}</span>
                    <input
                      required
                      aria-required="true"
                      type="tel"
                      inputMode="numeric"
                      placeholder="+966 5X XXX XXXX"
                      className="w-full bg-transparent border-b border-[var(--hair)] px-0 py-3 text-[16px] placeholder:text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--hair)]">{isAr ? "رسالتك" : "Message"}</span>
                    <textarea
                      required
                      aria-required="true"
                      rows={4}
                      placeholder={isAr ? "أريد موقعًا فاخرًا لمطعمي..." : "I need a premium site for my restaurant..."}
                      className="w-full bg-transparent border-b border-[var(--hair)] px-0 py-3 text-[16px] placeholder:text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none resize-y"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 inline-flex justify-center bg-[var(--ivory)] text-[var(--charcoal)] px-7 py-3.5 text-[14px] font-bold tracking-wide hover:bg-white transition-colors"
                  >
                    {isAr ? "إرسال" : "Send"} — {isAr ? "أرد سريعًا" : "Quick reply"}
                  </button>
                  <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--hair)]/70">
                    {isAr ? "أو راسلني مباشرة على واتساب" : "Or message me directly on WhatsApp"}
                  </p>
                </form>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-[var(--hair)]/20 bg-[var(--espresso)] p-6 lg:p-8">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--gold)]">DIRECT</p>
                  <a href="https://wa.me/966500000000" className="mt-3 inline-flex text-[18px] font-semibold tracking-wide hover:underline underline-offset-4">
                    WhatsApp ↗
                  </a>
                  <p className="mt-2 font-mono text-[12px] tracking-[0.12em] text-[var(--hair)]">+966 50 000 0000</p>
                  <div className="mt-6 h-px bg-[var(--hair)]/20" />
                  <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-[var(--hair)]">JEDDAH · RIYADH · REMOTE</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--hair)]">
                    {isAr ? "أعمل مع عملاء في السعودية والخليج. تسليم على Vercel، دفعات مرنة." : "Working with clients across Saudi & Gulf. Ship on Vercel, flexible payments."}
                  </p>
                </div>
                <p className="mt-4 font-mono text-[10px] tracking-[0.14em] text-[var(--hair)]/60">
                  FIG. 04 — CONTACT / FORM-AR.tsx · WCAG AA · 44px targets
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--ivory)] border-t border-[var(--hair)] py-8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--muted)]">
            © 2025 MURAD KHUDRI · CRAFTED PREMIUM · JEDDAH
          </p>
          <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--muted)]">
            N 21.54° E 39.17° · {isAr ? "صُنع بعناية" : "Built with care"}
          </p>
        </div>
      </footer>
    </div>
  );
}
