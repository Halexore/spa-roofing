"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Hammer,
  HardHat,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Wrench,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Lang = "en" | "es";

const copy = {
  en: {
    nav: { home: "Home", services: "Services", work: "Our Work", about: "About", faq: "FAQ", contact: "Contact" },
    estimate: "Request Free Estimate",
    heroEyebrow: "Based in Little Rock • Serving All of Arkansas",
    heroTitle1: "Roofing Built",
    heroTitle2: "To Protect.",
    heroText:
      "Dependable residential and commercial roofing backed by quality workmanship, honest service, and more than 10 years of experience.",
    call: "Call Now",
    email: "Email Us",
    trust: ["Licensed & Insured", "Family Owned", "10+ Years Experience", "Free Inspections"],
    servicesEyebrow: "What We Do",
    servicesTitle: "Roofing services you can rely on.",
    servicesText:
      "From a small leak to a complete roof replacement, SPA Roofing brings the same care and attention to every job.",
    galleryEyebrow: "Real Work. Real Results.",
    galleryTitle: "Recent Projects",
    galleryText: "A look at roofing work completed by the SPA Roofing team.",
    aboutEyebrow: "Locally Owned & Operated",
    aboutTitle: "Quality above all.",
    aboutText1:
      "SPA Roofing is a family-owned roofing company based in Little Rock and proudly serving homeowners and businesses across Arkansas.",
    aboutText2:
      "With over 10 years of experience, we focus on dependable solutions, quality materials and professional workmanship. Whether you need an inspection, emergency repair or a full replacement, we treat your property with the care it deserves.",
    insuranceTitle: "Storm damage or insurance claim?",
    insuranceText:
      "We can help you understand the roofing side of the insurance claim process and provide the inspection and documentation needed for your project.",
    emergency: "Emergency roof repairs available",
    faqEyebrow: "Common Questions",
    faqTitle: "Straight answers before we get started.",
    formEyebrow: "Free Estimate",
    formTitle: "Tell us about your roof.",
    formText:
      "Send us a few details and SPA Roofing will follow up to discuss your project and schedule an appointment.",
    form: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      address: "Property Address",
      service: "Service Needed",
      message: "Tell us about your roofing needs",
      submit: "Send Estimate Request",
      note: "Prefer to talk? Call (501) 549-8833.",
    },
    footerText: "Based in Little Rock. Proudly serving all Arkansans.",
    appointment: "Available by appointment",
    rights: "All rights reserved.",
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", work: "Nuestro Trabajo", about: "Nosotros", faq: "Preguntas", contact: "Contacto" },
    estimate: "Solicitar Cotización Gratis",
    heroEyebrow: "Con sede en Little Rock • Sirviendo a todo Arkansas",
    heroTitle1: "Techos Hechos",
    heroTitle2: "Para Proteger.",
    heroText:
      "Servicios confiables de techado residencial y comercial, respaldados por trabajo de calidad, servicio honesto y más de 10 años de experiencia.",
    call: "Llamar Ahora",
    email: "Enviar Correo",
    trust: ["Licenciados y Asegurados", "Negocio Familiar", "10+ Años de Experiencia", "Inspecciones Gratis"],
    servicesEyebrow: "Nuestros Servicios",
    servicesTitle: "Servicios de techado en los que puede confiar.",
    servicesText:
      "Desde una pequeña fuga hasta un reemplazo completo, SPA Roofing brinda el mismo cuidado y atención a cada trabajo.",
    galleryEyebrow: "Trabajo Real. Resultados Reales.",
    galleryTitle: "Proyectos Recientes",
    galleryText: "Una muestra del trabajo realizado por el equipo de SPA Roofing.",
    aboutEyebrow: "Propiedad y Operación Local",
    aboutTitle: "La calidad ante todo.",
    aboutText1:
      "SPA Roofing es una compañía familiar con sede en Little Rock que sirve con orgullo a propietarios de viviendas y negocios en todo Arkansas.",
    aboutText2:
      "Con más de 10 años de experiencia, nos enfocamos en soluciones confiables, materiales de calidad y trabajo profesional. Ya sea una inspección, reparación de emergencia o reemplazo completo, cuidamos su propiedad como se merece.",
    insuranceTitle: "¿Daños por tormenta o reclamo de seguro?",
    insuranceText:
      "Podemos ayudarle con la parte de techado del proceso de reclamo de seguro y proporcionar la inspección y documentación necesarias para su proyecto.",
    emergency: "Reparaciones de emergencia disponibles",
    faqEyebrow: "Preguntas Comunes",
    faqTitle: "Respuestas claras antes de comenzar.",
    formEyebrow: "Cotización Gratis",
    formTitle: "Cuéntenos sobre su techo.",
    formText:
      "Envíenos algunos detalles y SPA Roofing se comunicará con usted para hablar de su proyecto y programar una cita.",
    form: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo Electrónico",
      address: "Dirección de la Propiedad",
      service: "Servicio Necesario",
      message: "Cuéntenos qué necesita",
      submit: "Enviar Solicitud",
      note: "¿Prefiere hablar? Llame al (501) 549-8833.",
    },
    footerText: "Con sede en Little Rock. Sirviendo con orgullo a todo Arkansas.",
    appointment: "Disponible con cita previa",
    rights: "Todos los derechos reservados.",
  },
};

const services = {
  en: [
    ["Residential Roofing", "Dependable roofing solutions designed to protect Arkansas homes.", Home],
    ["Commercial Roofing", "Professional roofing service for businesses and commercial properties.", Building2],
    ["Roof Replacement", "Complete replacements using durable materials and careful installation.", HardHat],
    ["Roof Repairs", "Reliable repairs for leaks, storm damage and everyday wear.", Wrench],
    ["Metal Roofing", "Long-lasting metal roofing with a clean, professional finish.", ShieldCheck],
    ["Asphalt Shingles", "Classic, dependable shingle systems for homes of every style.", Sparkles],
    ["Emergency Repairs", "Responsive help when unexpected roof damage cannot wait.", Hammer],
    ["Insurance Assistance", "Roof inspections and project support for insurance-related damage.", Check],
  ],
  es: [
    ["Techos Residenciales", "Soluciones confiables para proteger hogares en todo Arkansas.", Home],
    ["Techos Comerciales", "Servicio profesional para negocios y propiedades comerciales.", Building2],
    ["Reemplazo de Techos", "Reemplazos completos con materiales duraderos e instalación cuidadosa.", HardHat],
    ["Reparación de Techos", "Reparaciones confiables para fugas, tormentas y desgaste.", Wrench],
    ["Techos de Metal", "Techos metálicos duraderos con un acabado limpio y profesional.", ShieldCheck],
    ["Tejas Asfálticas", "Sistemas de tejas clásicos y confiables para todo tipo de hogar.", Sparkles],
    ["Reparaciones de Emergencia", "Ayuda cuando el daño inesperado no puede esperar.", Hammer],
    ["Ayuda con Seguros", "Inspecciones y apoyo para proyectos relacionados con reclamos de seguro.", Check],
  ],
};

const faqs = {
  en: [
    ["Do you offer free roof inspections?", "Yes. SPA Roofing offers free inspections so we can evaluate the roof and discuss the best next step."],
    ["What areas do you serve?", "SPA Roofing is based in Little Rock and accepts roofing projects throughout Arkansas."],
    ["Do you handle emergency roof repairs?", "Yes. Emergency roofing service is available. Call us to discuss the damage and availability."],
    ["Can you help with insurance claims?", "Yes. We can assist with the roofing portion of an insurance claim, including inspection and project documentation."],
    ["Do you work on both homes and businesses?", "Yes. We provide both residential and commercial roofing services."],
  ],
  es: [
    ["¿Ofrecen inspecciones gratis?", "Sí. SPA Roofing ofrece inspecciones gratuitas para evaluar el techo y hablar sobre el mejor siguiente paso."],
    ["¿Qué áreas atienden?", "SPA Roofing tiene su sede en Little Rock y acepta proyectos de techado en todo Arkansas."],
    ["¿Hacen reparaciones de emergencia?", "Sí. Hay servicio de emergencia disponible. Llámenos para hablar sobre el daño y la disponibilidad."],
    ["¿Pueden ayudar con reclamos de seguro?", "Sí. Podemos ayudar con la parte de techado del reclamo, incluyendo inspección y documentación del proyecto."],
    ["¿Trabajan en casas y negocios?", "Sí. Ofrecemos servicios de techado residencial y comercial."],
  ],
};

const gallery = [
  { src: "/images/hero-house.jpg", alt: "Completed residential roofing project in Arkansas" },
  { src: "/images/project-shingles.jpg", alt: "Finished asphalt shingle roof" },
  { src: "/images/project-brick-house.jpg", alt: "Roofing project on a brick home" },
  { src: "/images/project-ladder.jpg", alt: "SPA Roofing crew working on a roof" },
  { src: "/images/project-tearoff.jpg", alt: "Roof tear-off and replacement work" },
  { src: "/images/project-flashing.jpg", alt: "Detailed roof flashing workmanship" },
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#home" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="SPA Roofing home">
      <span className="brand-mark" aria-hidden="true">
        <span className="roof-line" />
        <span className="chimney" />
        <span className="window-mark" />
      </span>
      <span className="brand-copy">
        <strong><span>SPA</span> ROOFING</strong>
        <small>QUALITY ABOVE ALL</small>
      </span>
    </a>
  );
}

export default function RoofingSite() {
  const [lang, setLang] = useState<Lang>("en");
  const [menu, setMenu] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 760px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const serviceList = services[lang];
  const faqList = faqs[lang];

  const mailto = useMemo(
    () => `mailto:sparoofing6@gmail.com?subject=${encodeURIComponent(lang === "en" ? "Roofing Estimate Request" : "Solicitud de Cotización")}`,
    [lang]
  );

  function submitEstimate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = [
      `${t.form.name}: ${form.get("name") || ""}`,
      `${t.form.phone}: ${form.get("phone") || ""}`,
      `${t.form.email}: ${form.get("email") || ""}`,
      `${t.form.address}: ${form.get("address") || ""}`,
      `${t.form.service}: ${form.get("service") || ""}`,
      "",
      `${t.form.message}:`,
      `${form.get("message") || ""}`,
    ].join("\n");

    const subject = lang === "en" ? "Free Roofing Estimate Request" : "Solicitud de Cotización de Techo";
    window.location.href = `mailto:sparoofing6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">{t.nav.services}</a>
            <a href="#work">{t.nav.work}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#faq">{t.nav.faq}</a>
          </nav>
          <div className="nav-actions">
            <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "es" : "en")} aria-label="Change language">
              <span className={lang === "en" ? "active" : ""}>EN</span>
              <i />
              <span className={lang === "es" ? "active" : ""}>ES</span>
            </button>
            <a className="btn btn-small desktop-cta" href="#estimate">{t.estimate}</a>
            <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Open menu">
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menu && (
          <div className="mobile-menu">
            {Object.entries(t.nav).slice(1, 6).map(([key, label]) => (
              <a key={key} href={`#${key === "work" ? "work" : key === "contact" ? "estimate" : key}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a className="btn" href="#estimate" onClick={() => setMenu(false)}>{t.estimate}</a>
          </div>
        )}
      </header>

      <section className="hero" id="home">
        <Image src="/images/hero-house.jpg" alt="Completed SPA Roofing residential project" fill priority className="hero-image" sizes="100vw" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow light">{t.heroEyebrow}</p>
          <h1>{t.heroTitle1}<br /><em>{t.heroTitle2}</em></h1>
          <p className="hero-copy">{t.heroText}</p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#estimate">{t.estimate}<ArrowRight size={18} /></a>
            <a className="btn btn-outline-light" href={isMobile ? "tel:+15015498833" : mailto}>
              {isMobile ? <Phone size={18} /> : <Mail size={18} />}
              {isMobile ? t.call : t.email}
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container trust-grid">
            {t.trust.map((item, i) => (
              <div key={item} className="trust-item">
                {i === 0 ? <ShieldCheck /> : i === 1 ? <Home /> : i === 2 ? <HardHat /> : <Check />}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">{t.servicesEyebrow}</p>
              <h2>{t.servicesTitle}</h2>
            </div>
            <p>{t.servicesText}</p>
          </div>
          <div className="service-grid">
            {serviceList.map(([title, desc, Icon], i) => (
              <article className="service-card" key={String(title)}>
                <span className="service-number">0{i + 1}</span>
                <Icon className="service-icon" size={29} strokeWidth={1.6} />
                <h3>{String(title)}</h3>
                <p>{String(desc)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="work">
        <div className="container">
          <div className="section-head centered">
            <p className="eyebrow">{t.galleryEyebrow}</p>
            <h2>{t.galleryTitle}</h2>
            <p>{t.galleryText}</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((img, i) => (
              <button className={`gallery-item gallery-${i + 1}`} key={img.src} onClick={() => setLightbox(i)} aria-label={`Open project photo ${i + 1}`}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                <span>{lang === "en" ? "View Project" : "Ver Proyecto"} <ArrowRight size={16} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <Image src="/images/project-ladder.jpg" alt="Roofing work by SPA Roofing" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <div className="experience-card"><strong>10+</strong><span>{lang === "en" ? "Years of Roofing Experience" : "Años de Experiencia"}</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
            <div className="about-points">
              <span><Check /> {lang === "en" ? "Premium materials" : "Materiales de calidad"}</span>
              <span><Check /> {lang === "en" ? "Professional workmanship" : "Trabajo profesional"}</span>
              <span><Check /> {lang === "en" ? "Appointments across Arkansas" : "Citas en todo Arkansas"}</span>
            </div>
            <a className="text-link" href="#estimate">{t.estimate}<ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="insurance-strip">
        <div className="container insurance-inner">
          <div className="insurance-icon"><ShieldCheck size={38} /></div>
          <div>
            <p className="eyebrow light">{lang === "en" ? "We're Here To Help" : "Estamos Para Ayudar"}</p>
            <h2>{t.insuranceTitle}</h2>
            <p>{t.insuranceText}</p>
          </div>
          <a href="#estimate" className="btn btn-light">{t.estimate}</a>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">{t.faqEyebrow}</p>
            <h2>{t.faqTitle}</h2>
            <div className="emergency-card">
              <Phone />
              <div><strong>{t.emergency}</strong><a href="tel:+15015498833">(501) 549-8833</a></div>
            </div>
          </div>
          <div className="faq-list">
            {faqList.map(([q, a], i) => (
              <button className={`faq-item ${openFaq === i ? "open" : ""}`} key={q} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <span className="faq-question">{q}<ChevronDown size={20} /></span>
                <span className="faq-answer">{a}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="estimate-section" id="estimate">
        <div className="container estimate-grid">
          <div className="estimate-copy">
            <p className="eyebrow light">{t.formEyebrow}</p>
            <h2>{t.formTitle}</h2>
            <p>{t.formText}</p>
            <div className="contact-stack">
              <a href="tel:+15015498833"><Phone /><span><small>{lang === "en" ? "Call" : "Llame"}</small>(501) 549-8833</span></a>
              <a href="mailto:sparoofing6@gmail.com"><Mail /><span><small>Email</small>sparoofing6@gmail.com</span></a>
              <div><MapPin /><span><small>{lang === "en" ? "Home Base" : "Sede"}</small>Little Rock, Arkansas</span></div>
            </div>
          </div>
          <form className="estimate-form" onSubmit={submitEstimate}>
            <div className="form-row">
              <label>{t.form.name}<input name="name" required autoComplete="name" /></label>
              <label>{t.form.phone}<input name="phone" required autoComplete="tel" /></label>
            </div>
            <label>{t.form.email}<input name="email" type="email" required autoComplete="email" /></label>
            <label>{t.form.address}<input name="address" autoComplete="street-address" /></label>
            <label>{t.form.service}
              <select name="service" required defaultValue="">
                <option value="" disabled>{lang === "en" ? "Select a service" : "Seleccione un servicio"}</option>
                {serviceList.map(([title]) => <option key={String(title)}>{String(title)}</option>)}
              </select>
            </label>
            <label>{t.form.message}<textarea name="message" rows={4} /></label>
            <button className="btn btn-submit" type="submit">{t.form.submit}<ArrowRight size={18} /></button>
            <small className="form-note">{t.form.note}</small>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><Brand inverse /><p>{t.footerText}</p></div>
          <div><h3>{lang === "en" ? "Contact" : "Contacto"}</h3><a href="tel:+15015498833">(501) 549-8833</a><a href="mailto:sparoofing6@gmail.com">sparoofing6@gmail.com</a><span>{t.appointment}</span></div>
          <div><h3>{lang === "en" ? "Services" : "Servicios"}</h3><a href="#services">{lang === "en" ? "Residential Roofing" : "Techos Residenciales"}</a><a href="#services">{lang === "en" ? "Commercial Roofing" : "Techos Comerciales"}</a><a href="#services">{lang === "en" ? "Emergency Repairs" : "Reparaciones de Emergencia"}</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} SPA Roofing. {t.rights}</span><span>Little Rock, Arkansas</span></div>
      </footer>

      <div className="mobile-contact-bar">
        <a href="tel:+15015498833"><Phone size={18} />{t.call}</a>
        <a href="#estimate">{t.estimate}</a>
      </div>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button aria-label="Close gallery"><X /></button>
          <div className="lightbox-image" onClick={(e) => e.stopPropagation()}>
            <Image src={gallery[lightbox].src} alt={gallery[lightbox].alt} fill sizes="95vw" />
          </div>
        </div>
      )}
    </main>
  );
}
