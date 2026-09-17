import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import img00 from "@/assets/img-00.png.asset.json";
import img01 from "@/assets/img-01.png.asset.json";
import img02 from "@/assets/img-02.png.asset.json";
import img03 from "@/assets/img-03.png.asset.json";
import img04 from "@/assets/img-04.png.asset.json";
import img05 from "@/assets/img-05.png.asset.json";
import img06 from "@/assets/img-06.png.asset.json";
import testi1 from "@/assets/img-07.png.asset.json";
import testi2 from "@/assets/img-08.png.asset.json";
import testi3 from "@/assets/img-09.png.asset.json";
import bono1 from "@/assets/bono1.jpg.asset.json";
import bono2 from "@/assets/bono2.webp.asset.json";
import bono3 from "@/assets/bono3.webp.asset.json";
import bono4 from "@/assets/bono4.jpg.asset.json";
import heroReference from "@/assets/hero-reference.png.asset.json";

const CHECKOUT = "https://pay.hotmart.com/V107267658F?checkoutMode=10";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escenarios Bíblicos 3D para Niños | 121 creativos para imprimir y armar" },
      {
        name: "description",
        content:
          "Escenarios bíblicos 3D estilo videojuego para niños: imprime, recorta y arma. 30 creativos en el plan Básico y 121 en el Premium, con libro para colorear de 71 páginas y más bonos de regalo.",
      },
      {
        property: "og:title",
        content: "Escenarios Bíblicos 3D para Niños: imprime, recorta y juega",
      },
      {
        property: "og:description",
        content:
          "Convierte una hoja de papel en un mundo bíblico 3D para niños. 121 creativos, libro para colorear de 71 páginas y súper bonos de regalo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const tickerItems = [
  "Acceso inmediato y de por vida",
  "121 creativos bíblicos 3D en el Premium",
  "Libro para colorear de 71 páginas de regalo",
  "Bonos de regalo incluidos",
  "Pago único · Sin mensualidades",
  "Imprime todas las veces que quieras",
];

const gallery = [img00, img01, img02, img03, img04, img05, img06];

const pains = [
  { icon: "😩", text: "¿Preparaste una clase y notaste que los niños estaban perdiendo la atención?" },
  { icon: "🔎", text: "¿Pasaste horas buscando ideas y materiales para contar una historia bíblica?" },
  { icon: "✂️", text: "¿Tuviste que crear recursos desde cero para hacer tu clase más divertida?" },
  { icon: "😰", text: "¿Querías hacer algo diferente, pero no sabías por dónde empezar?" },
  { icon: "📚", text: "¿Tienes muchas historias para enseñar, pero sientes que falta un recurso visual?" },
  { icon: "🕐", text: "¿No quieres pasar horas preparando materiales antes de cada clase?" },
];

const steps = [
  { icon: "🖨️", label: "Imprime" },
  { icon: "✂️", label: "Recorta" },
  { icon: "🏗️", label: "Arma" },
  { icon: "📖", label: "¡A jugar la historia!" },
];

const benefits = [
  {
    icon: "👀",
    title: "Los niños VEN la historia",
    text: "En lugar de solo escuchar, siguen con los ojos cada escena como si fuera su videojuego favorito.",
  },
  {
    icon: "🎮",
    title: "Aprenden jugando",
    text: "Colores vivos y personajes estilo juego 3D hacen que la clase se sienta como un momento de diversión.",
  },
  {
    icon: "⏰",
    title: "Ahorras horas de preparación",
    text: "No empiezas cada clase buscando referencias ni creando todo desde cero. Imprimes y listo.",
  },
  {
    icon: "🌍",
    title: "Un mundo para cada historia",
    text: "Arca de Noé, David y Goliat, Jonás y el gran pez, el pesebre de Belén… y muchos más.",
  },
  {
    icon: "💰",
    title: "Gastas poco, juegas mucho",
    text: "Archivos digitales que imprimes según tu necesidad, sin materiales físicos caros.",
  },
  {
    icon: "✨",
    title: "Todos quieren participar",
    text: "Los niños observan, señalan, comentan y ayudan a armar. La historia se vuelve de todos.",
  },
];

const bonuses = [
  {
    tag: "BONO 01",
    price: "US$ 70,00",
    title: "Súper Bono Devocional Diario",
    text: "50 Citas con Jesús + Buenas Noches con Jesús + Oraciones y Devociones + Devocionales de Poder 30 Días.",
    image: bono1,
  },
  {
    tag: "BONO 02",
    price: "US$ 77,00",
    title: "Súper Bono Guías de Estudio Profundo",
    text: "El Plan Daniel 40 Días + Guía Devocional + Guía de Estudio Espiritual Personal.",
    image: bono2,
  },
  {
    tag: "BONO 03",
    price: "US$ 64,00",
    title: "Súper Bono Herramientas Visuales Bíblicas",
    text: "Fichas de la Biblia + Mapas Mentales de los 73 Libros + La Biblia en Acción + El Poder de la Palabra.",
    image: bono3,
  },
  {
    tag: "BONO 04",
    price: "US$ 29,00",
    title: "Libro Bíblico para Colorear · 71 páginas",
    text: "71 páginas bíblicas listas para imprimir y colorear: personajes, escenas y versículos.",
    image: bono4,
  },
];

const faqs = [
  {
    q: "“¿Pero tendrá el tema que necesito?”",
    a: "La colección fue creada justamente para ofrecer muchos escenarios bíblicos distintos, con opciones para cada historia.",
  },
  {
    q: "“Yo no sé armar estas cosas…”",
    a: "No necesitas experiencia. Imprimes, recortas y armas siguiendo el propio material.",
  },
  {
    q: "“No tengo impresora.”",
    a: "Sin problema. Puedes llevar los archivos a una imprenta o papelería y pedir la impresión.",
  },
  {
    q: "¿Es un producto físico?",
    a: "No. Es digital: recibes los archivos para descargar e imprimir cuantas veces quieras.",
  },
  {
    q: "¿Puedo usarlo en el Ministerio Infantil?",
    a: "Sí. Sirven como apoyo visual en historias, clases, cultos infantiles, escuela dominical y catequesis.",
  },
  {
    q: "¿Cómo recibo el material?",
    a: "Después de confirmarse la compra recibes acceso inmediato a los archivos digitales.",
  },
];

const testimonials = [testi1, testi2, testi3];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Ticker />
      <Header />
      <Hero />
      <Marquee />
      <Pains />
      <Solution />
      <Benefits />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <Faq />
      <FinalCta />
      <footer className="bg-navy-deep py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Escenarios Bíblicos 3D · Producto digital · Todos los derechos
        reservados
      </footer>
    </div>
  );
}

function Ticker() {
  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div className="section-navy overflow-hidden py-2">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 px-6 text-xs font-medium tracking-wide text-white/80 sm:text-sm"
          >
            <span className="text-gold">♥</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gold text-base">⭐</span>
          <span className="truncate font-display text-sm font-bold text-white sm:text-lg">
            Escenarios Bíblicos 3D
          </span>
        </div>
        <a href={CHECKOUT} className="btn-cta shrink-0 px-4 py-2.5 text-[11px] sm:px-5 sm:text-sm">
          <span className="sm:hidden">Comprar</span>
          <span className="hidden sm:inline">Lo quiero ahora</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="section-navy relative overflow-hidden px-4 py-10 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-gold-soft sm:px-4 sm:text-xs">
            ⭐ Colección completa · 121 Creativos Bíblicos 3D
          </span>
          <h1 className="mt-5 text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Convierte una hoja de papel en un{" "}
            <span className="text-gold">mundo bíblico 3D</span> que los niños aman
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg lg:mx-0">
            Escenarios con colores de videojuego para imprimir, recortar y armar: la forma más
            divertida, simple y económica de enseñar la Biblia a los peques.
          </p>
          <p className="mt-4 text-sm font-semibold text-gold-soft">
            🎮 ¡No tienes que diseñar nada, el trabajo creativo ya está hecho por ti!
          </p>
          <div className="mt-8">
            <a href={CHECKOUT} className="btn-cta w-full px-5 text-xs sm:w-auto sm:px-8 sm:text-base">
              Quiero darle vida a las historias bíblicas
            </a>
            <p className="mt-3 text-xs text-white/60">
              Desde US$ 4,99 · Acceso inmediato después de la compra
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gold/20 blur-2xl" />
          <img
            src={heroReference.url}
            alt="Escenarios bíblicos 3D armados sobre una mesa en un salón de clases"
            className="relative aspect-square w-full rounded-2xl object-cover shadow-card sm:rounded-3xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...gallery, ...gallery];
  return (
    <section className="overflow-hidden bg-background py-10 sm:py-12">
      <div className="mx-auto mb-6 max-w-6xl px-4 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">LA COLECCIÓN</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Mira los escenarios en acción</h2>
      </div>
      <div className="marquee-track">
        {items.map((image, i) => (
          <img
            key={i}
            src={image.url}
            alt="Escenario bíblico 3D impreso y armado"
            className="h-44 w-auto shrink-0 rounded-xl object-cover shadow-card sm:h-72 sm:rounded-2xl"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

function Pains() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">
          ¿TE SUENA FAMILIAR?
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl">¿Te ha pasado alguna de estas situaciones?</h2>
        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => (
            <div key={pain.text} className="surface-card p-6">
              <span className="text-2xl">{pain.icon}</span>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{pain.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-base font-semibold sm:text-lg">
          No necesitas convertir cada clase en un proyecto complicado. A veces, un recurso visual
          divertido ya es suficiente. 🎨
        </p>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="section-navy px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">LA SOLUCIÓN</p>
        <h2 className="mt-2 text-3xl text-white sm:text-4xl">
          Presenta las historias bíblicas como su juego favorito
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Con los 121 creativos bíblicos 3D recibes escenarios listos para usar como apoyo visual
          mientras cuentas historias bíblicas. Colores vivos, personajes simpáticos y mundos que se
          arman en minutos.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center justify-center gap-4">
              <div className="h-full w-full rounded-2xl bg-white/10 px-3 py-5 sm:w-auto sm:px-6">
                <div className="text-3xl">{step.icon}</div>
                <p className="mt-2 text-sm font-semibold text-white">{step.label}</p>
              </div>
              {i < steps.length - 1 && <span className="hidden text-gold sm:inline">→</span>}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-sm text-white/70">
          No necesitas ser artesana, diseñadora ni tener experiencia en manualidades. Una hoja A4 ya
          puede ser suficiente para empezar la aventura.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">BENEFICIOS</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">
          Más que un escenario. Una nueva forma de jugar la Palabra.
        </h2>
        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="surface-card p-6">
              <span className="text-2xl">{benefit.icon}</span>
              <h3 className="mt-3 text-lg">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">TESTIMONIOS</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">
          Quien los usa nota la diferencia a la hora de contar la historia.
        </h2>
        <div className="relative mx-auto mt-10 flex max-w-xs items-center justify-center sm:max-w-sm">
          <button
            type="button"
            aria-label="Testimonio anterior"
            onClick={() => go(-1)}
            className="absolute left-2 z-10 grid size-10 shrink-0 place-items-center rounded-full bg-card/95 text-lg shadow-card transition hover:bg-secondary sm:-left-14 sm:size-11"
          >
            ‹
          </button>
          <div className="surface-card w-full overflow-hidden p-2">
            <img
              src={testimonials[index]?.url}
              alt="Mensaje de una clienta compartiendo su experiencia con los escenarios"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
          <button
            type="button"
            aria-label="Testimonio siguiente"
            onClick={() => go(1)}
            className="absolute right-2 z-10 grid size-10 shrink-0 place-items-center rounded-full bg-card/95 text-lg shadow-card transition hover:bg-secondary sm:-right-14 sm:size-11"
          >
            ›
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.url}
              type="button"
              aria-label={`Ver testimonio ${i + 1}`}
              onClick={() => setIndex(i)}
              className={
                i === index
                  ? "h-2 w-8 rounded-full bg-primary transition"
                  : "size-2 rounded-full bg-border transition"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  return (
    <section className="section-navy px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">BONOS EXCLUSIVOS</p>
        <h2 className="mt-2 text-3xl text-white sm:text-4xl">
          Y además te llevas 4 súper bonos en el Plan Premium
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Regalos digitales que amplían tus clases y tus momentos de fe mucho más allá de los
          escenarios. Valorados en más de US$ 240,00 — hoy gratis.
        </p>
        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2">
          {bonuses.map((bonus) => (
            <div key={bonus.tag} className="rounded-3xl bg-white/10 p-5">
              <img
                src={bonus.image.url}
                alt={bonus.title}
                className="h-44 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-accent-foreground">
                  {bonus.tag}
                </span>
                <span className="text-xs text-white/60 line-through">{bonus.price}</span>
                <span className="text-xs font-bold text-gold-soft">Gratis</span>
              </div>
              <h3 className="mt-3 text-lg text-white">{bonus.title}</h3>
              <p className="mt-2 text-sm text-white/75">{bonus.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">ELIGE TU PLAN</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Elige el plan que mejor va contigo</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="surface-card flex flex-col p-7 text-left">
            <h3 className="text-xl">Plan Básico</h3>
            <p className="mt-1 text-sm text-muted-foreground">30 creativos 3D bíblicos</p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { text: "30 creativos 3D bíblicos", included: true },
                { text: "Archivos listos para imprimir", included: true },
                { text: "Material fácil de armar", included: true },
                { text: "Súper Bono Devocional Diario", included: false },
                { text: "Súper Bono Guías de Estudio Profundo", included: false },
                { text: "Súper Bono Herramientas Visuales Bíblicas", included: false },
                { text: "Libro Bíblico para Colorear de 71 páginas", included: false },
                { text: "Prioridad en el soporte", included: false },
                { text: "Acceso inmediato después de la compra", included: true },
              ].map((item) => (
                <li
                  key={item.text}
                  className={
                    item.included ? "flex gap-2" : "flex gap-2 text-muted-foreground line-through"
                  }
                >
                  <span className={item.included ? "text-accent" : "no-underline"}>
                    {item.included ? "✓" : "✕"}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">Solo</p>
            <p className="font-display text-4xl">US$ 4,99</p>

            <a href={CHECKOUT} className="btn-cta mt-6 text-sm">
              Quiero el plan Básico
            </a>
          </div>
          <div className="section-navy flex flex-col rounded-3xl p-7 text-left shadow-card">
            <span className="w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold text-accent-foreground">
              🏆 El más elegido
            </span>
            <h3 className="mt-4 text-xl text-white">Plan Premium</h3>
            <p className="mt-1 text-sm text-white/70">121 creativos bíblicos 3D</p>
            <ul className="mt-5 space-y-2 text-sm text-white/90">
              {[
                "121 creativos bíblicos 3D",
                "Archivos listos para imprimir",
                "Material fácil de armar",
                "Súper Bono Devocional Diario",
                "Súper Bono Guías de Estudio Profundo",
                "Súper Bono Herramientas Visuales Bíblicas",
                "Libro Bíblico para Colorear de 71 páginas",
                "Prioridad en el soporte",
                "Acceso inmediato después de la compra",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/70">Todo esto por solo</p>
            <p className="font-display text-4xl text-gold">US$ 9,99</p>
            <a href={CHECKOUT} className="btn-cta mt-6 text-sm">
              Quiero el plan Premium
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-sm text-muted-foreground">
          <strong className="text-foreground">Nuestra recomendación:</strong> si vas a usar los
          materiales con frecuencia en clases, cultos infantiles, escuela dominical o catequesis, el
          plan Premium te da 121 creativos y todos los bonos para trabajar todo el año.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">
            ¿TIENES ALGUNA DUDA?
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Respondemos lo que más nos preguntan</h2>
        </div>
        <div className="surface-card mt-10 divide-y divide-border overflow-hidden">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-6 py-5">
              <summary className="cursor-pointer list-none font-display text-base font-bold">
                {faq.q}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section-navy px-4 py-14 text-center sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl text-white sm:text-5xl">
          Tus historias bíblicas pueden ser mucho más visuales.
        </h2>
        <p className="mt-5 text-white/80">
          No necesitas pasar horas creando materiales desde cero. No necesitas ser experta. Y no
          necesitas gastar mucho.
        </p>
        <a href={CHECKOUT} className="btn-cta mt-8 text-sm sm:text-base">
          Quiero los 121 creativos por US$ 9,99
        </a>
        <p className="mt-4 text-sm">
          <a href={CHECKOUT} className="text-gold-soft underline">
            o empezar con 30 creativos por US$ 4,99
          </a>
        </p>
        <div className="mt-12 rounded-3xl bg-white/10 p-6 text-left text-sm text-white/80">
          <strong className="text-gold">P.D.:</strong> Imagina llegar a tu próxima clase ya sabiendo
          exactamente cómo vas a presentar la historia. Imprimes, armas tu escenario y, a la hora de
          contar, tienes un mundo 3D para mostrarles a los niños.
        </div>
      </div>
    </section>
  );
}
