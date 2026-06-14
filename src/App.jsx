import React, { useState, useEffect, useCallback } from 'react';
import { Mail, Instagram, Menu, X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ------------------------------------------------------------------ *
 *  PHOTOGRAPHY CONTENT
 *  Images live in /public. Paths are relative to the site root.
 * ------------------------------------------------------------------ */

/* Dances of India — a personal passion project. Each form maps to one photograph. */
const DANCES = [
  {
    name: 'Bharatanatyam',
    label: 'Classical Form · Tamil Nadu',
    src: '/Photos/Dances Of India/dance1.JPG',
    alt: 'Bharatanatyam dancer, Tamil Nadu',
    body: (
      <>
        <p>
          Originating within the ancient temples of Tamil Nadu, Bharatanatyam is considered
          the &ldquo;fire dance,&rdquo; serving as a physical manifestation of devotion and
          mythological storytelling.
        </p>
        <p>
          It is defined by a brilliant synthesis of <em>Nritta</em> (complex, rhythmic
          footwork and geometric postures) and <em>Nritya</em> (highly expressive narrative
          sequences driven by intricate hand gestures or mudras).
        </p>
      </>
    ),
  },
  {
    name: 'Kathakali',
    label: 'Classical Form · Kerala',
    src: '/Photos/Dances Of India/dance2.JPG',
    alt: 'Kathakali performer in green pacha makeup, Kerala',
    body: (
      <>
        <p>
          A mesmerizing classical dance-drama from the southwestern state of Kerala, renowned
          worldwide for its striking, larger-than-life visual language.
        </p>
        <p>
          Performers utilize a vivid array of highly stylized facial makeup&mdash;such as the
          green &lsquo;pacha&rsquo; denoting noble heroes&mdash;combined with massive, ornate
          headdresses. The narrative unfolds entirely in silence through incredibly precise
          micro-movements of the eyes, eyebrows, and facial muscles.
        </p>
      </>
    ),
  },
  {
    name: 'Yakshagana',
    label: 'Folk Theatre · Karnataka',
    src: '/Photos/Dances Of India/dance3.JPG',
    alt: 'Yakshagana performer in ornate headdress, Karnataka',
    body: (
      <>
        <p>
          A vibrant, open-air traditional theatre form rooted deeply in the coastal regions of
          Karnataka. Unbound by the rigid strictures of classical dance, it celebrates
          community, mythology, and raw energy.
        </p>
        <p>
          Translating to &ldquo;songs of the demi-gods,&rdquo; it weaves thunderous drum beats,
          acrobatic dance steps, and extempore, quick-witted dialogue. Performances traditionally
          span from dusk to dawn, bringing Hindu epics to life under the open sky.
        </p>
      </>
    ),
  },
];

const SELECTED = {
  id: 'selected',
  title: 'Selected Frames',
  ratio: '4 / 5',
  photos: [
    { src: '/Photos/photo1.jpg', alt: 'Photograph by Chethan Kanakamurthy' },
    { src: '/Photos/photo2.jpg', alt: 'Photograph by Chethan Kanakamurthy' },
    { src: '/Photos/photo3.jpg', alt: 'Photograph by Chethan Kanakamurthy' },
    { src: '/Photos/photo4.jpg', alt: 'Photograph by Chethan Kanakamurthy' },
    { src: '/Photos/photo5.jpg', alt: 'Photograph by Chethan Kanakamurthy' },
    { src: '/Photos/photo6.jpg', alt: 'Photograph by Chethan Kanakamurthy' },
  ],
};

/* Prints offered for sale. Edit titles, editions, sizes and prices freely. */
const PRINTS = {
  id: 'prints',
  intro:
    'Each photograph is available as an archival pigment print on cotton-rag paper — ' +
    'hand-finished, signed, and shipped worldwide. Choose a frame, send a request, and ' +
    'I confirm size, finish, and shipping by email.',
  sizes: [
    { size: 'A4 · 8×12″', price: '₹3,500' },
    { size: 'A3 · 12×18″', price: '₹6,500' },
    { size: 'A2 · 18×24″', price: '₹10,500' },
    { size: 'A1 · 24×36″', price: '₹18,000' },
  ],
  items: [
    { src: '/Photos/Dances Of India/dance2.JPG', title: 'Kathakali', edition: 'Edition of 25', ratio: '3 / 4', alt: 'Kathakali performer in green pacha makeup, Kerala' },
    { src: '/Photos/photo5.jpg', title: 'Selected · 05', edition: 'Open edition', ratio: '4 / 5', alt: 'Photograph by Chethan Kanakamurthy' },
    { src: '/Photos/photo2.jpg', title: 'Selected · 02', edition: 'Open edition', ratio: '4 / 5', alt: 'Photograph by Chethan Kanakamurthy' },
    { src: '/Photos/Dances Of India/dance1.JPG', title: 'Bharatanatyam', edition: 'Edition of 25', ratio: '3 / 4', alt: 'Bharatanatyam dancer, Tamil Nadu' },
    { src: '/Photos/photo4.jpg', title: 'Selected · 04', edition: 'Open edition', ratio: '4 / 5', alt: 'Photograph by Chethan Kanakamurthy' },
    { src: '/Photos/photo6.jpg', title: 'Selected · 06', edition: 'Open edition', ratio: '4 / 5', alt: 'Photograph by Chethan Kanakamurthy' },
  ],
};

const NAV = [
  { id: 'series', label: 'Dances' },
  { id: 'selected', label: 'Selected' },
  { id: 'prints', label: 'Prints' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const frameNo = (i) => String(i + 1).padStart(2, '0');

/* Pre-filled order email for a given print title. */
const orderHref = (title) =>
  'mailto:ckanakamurthy@gmail.com' +
  `?subject=${encodeURIComponent(`Print order — ${title}`)}` +
  `&body=${encodeURIComponent(
    `Hi Chethan,\n\nI'd like to order a print of "${title}".\n\n` +
    `Size:\nFinish (matte / luster):\nQuantity:\nShipping address:\n\nThank you!`
  )}`;

/* ------------------------------------------------------------------ */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // lightbox = { list: [photos], index, label } | null
  const [lightbox, setLightbox] = useState(null);

  /* scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* lightbox open/close + body scroll lock */
  const openLightbox = useCallback((list, index, label) => {
    setLightbox({ list, index, label });
  }, []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir) =>
      setLightbox((lb) =>
        lb ? { ...lb, index: (lb.index + dir + lb.list.length) % lb.list.length } : lb
      ),
    []
  );

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, closeLightbox, step]);

  /* small reusable pieces ---------------------------------------- */

  const Caption = ({ label, frame }) => (
    <figcaption className="mt-4 flex items-baseline justify-between font-mono-cap text-[10px] uppercase tracking-[0.28em] text-[#8C887F]">
      <span className="flex items-center gap-2">
        <span className="text-[#1A1916]/35" aria-hidden>
          ✛
        </span>
        {label}
      </span>
      <span>{frame}</span>
    </figcaption>
  );

  const Print = ({ photo, ratio, label, frame, onOpen, priority }) => (
    <figure className="reveal">
      <div
        role="button"
        tabIndex={0}
        aria-label={`Open ${label} ${frame}`}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen();
          }
        }}
        className="group block cursor-zoom-in bg-[#F4F2EC] p-3 md:p-4 shadow-[0_1px_3px_rgba(26,25,22,0.10)] transition-transform duration-700 ease-out hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1916] focus-visible:ring-offset-4 focus-visible:ring-offset-[#E7E4DD]"
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
          <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-[#1A1916]/12" />
          <img
            src={photo.src}
            alt={photo.alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
          />
        </div>
      </div>
      <Caption label={label} frame={frame} />
    </figure>
  );

  /* --------------------------------------------------------------- */

  return (
    <div className="min-h-screen bg-[#E7E4DD] font-grotesk text-[#1A1916] antialiased selection:bg-[#1A1916] selection:text-[#E7E4DD]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300&family=Archivo:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

        .font-serif-display { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; }
        .font-grotesk { font-family: 'Archivo', system-ui, -apple-system, sans-serif; }
        .font-mono-cap { font-family: 'Space Mono', ui-monospace, 'SFMono-Regular', monospace; }

        html { scroll-behavior: smooth; }

        .reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 1.1s cubic-bezier(.2,.8,.2,1), transform 1.1s cubic-bezier(.2,.8,.2,1);
        }
        .reveal.is-visible { opacity: 1; transform: none; }

        .lb-fade { animation: lbFade .45s ease both; }
        @keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .lb-fade { animation: none; }
          * { transition-duration: .01ms !important; }
        }
      `}</style>

      {/* ---------------------------------------------------------- HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1A1916]/10 bg-[#E7E4DD]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          <a
            href="#top"
            className="font-grotesk text-sm font-semibold uppercase tracking-[0.22em] text-[#1A1916]"
          >
            Chethan&nbsp;Kanakamurthy
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="font-mono-cap text-[11px] uppercase tracking-[0.25em] text-[#8C887F] transition-colors hover:text-[#1A1916]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <button
            className="text-[#1A1916] md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col gap-10 bg-[#E7E4DD] px-8 pt-28 transition-transform duration-500 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            onClick={() => setIsMenuOpen(false)}
            className="font-serif-display text-4xl text-[#1A1916]"
          >
            {n.label}
          </a>
        ))}
      </div>

      <main id="top" className="relative">
        {/* -------------------------------------------------------- HERO */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">
          <div className="grid items-end gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="reveal font-mono-cap text-[11px] uppercase tracking-[0.4em] text-[#8C887F]">
                Chethan Kanakamurthy — Photography
              </p>
              <h1 className="reveal mt-8 font-serif-display text-[3.25rem] font-light leading-[0.98] tracking-[-0.02em] text-[#1A1916] md:text-[6.5rem]">
                Looking for the<br />
                moment form<br />
                becomes&nbsp;
                <span className="italic">gesture.</span>
              </h1>
              <p
                className="reveal mt-10 max-w-xl font-serif-display text-xl font-light leading-relaxed text-[#1A1916]/70"
                style={{ transitionDelay: '120ms' }}
              >
                An engineer's eye carried off the shop floor — chasing light, line, and
                motion between Bengaluru and Michigan.
              </p>
              <div
                className="reveal mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono-cap text-[10px] uppercase tracking-[0.28em] text-[#8C887F]"
                style={{ transitionDelay: '200ms' }}
              >
                <span>Based in Bengaluru &amp; Michigan</span>
                <span className="hidden h-3 w-px bg-[#1A1916]/20 md:inline-block" />
                <span>Shooting since grade five</span>
              </div>
            </div>

            {/* lead frame */}
            <div className="reveal lg:col-span-4" style={{ transitionDelay: '160ms' }}>
              <Print
                photo={SELECTED.photos[0]}
                ratio="3 / 4"
                label="Lead"
                frame="01"
                priority
                onOpen={() => openLightbox(SELECTED.photos, 0, 'Selected')}
              />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------- DANCES OF INDIA */}
        <section id="series" className="scroll-mt-24 border-t border-[#1A1916]/10">
          {/* intro */}
          <div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-32">
            <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="font-mono-cap text-[11px] uppercase tracking-[0.35em] text-[#8C887F]">
                  My Passion Project
                </p>
                <h2 className="mt-4 font-serif-display text-5xl font-light tracking-[-0.02em] text-[#1A1916] md:text-7xl">
                  Dances of India
                </h2>
              </div>
              <p className="font-serif-display text-lg font-light leading-relaxed text-[#1A1916]/70 md:col-span-5">
                An ongoing personal project documenting the classical and folk dance traditions of
                India — chasing the instant a held pose becomes motion.
              </p>
            </div>
          </div>

          {/* one full-width panel per dance form */}
          <div className="mt-16 md:mt-24">
            {DANCES.map((d) => (
              <article
                key={d.name}
                className="grid items-stretch border-t border-[#1A1916]/10 lg:grid-cols-2"
              >
                {/* image (top on mobile, right on desktop) */}
                <button
                  type="button"
                  aria-label={`Open ${d.name}`}
                  onClick={() =>
                    openLightbox(
                      DANCES.map((x) => ({ src: x.src, alt: x.alt })),
                      DANCES.indexOf(d),
                      'Dances of India'
                    )
                  }
                  className="group relative block min-h-[58vh] cursor-zoom-in overflow-hidden lg:order-2 lg:min-h-[86vh]"
                >
                  <img
                    src={d.src}
                    alt={d.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  />
                </button>

                {/* text (bottom on mobile, left on desktop) */}
                <div className="reveal flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:order-1 lg:px-16">
                  <p className="font-mono-cap text-[11px] uppercase tracking-[0.32em] text-[#8C887F]">
                    {d.label}
                  </p>
                  <h3 className="mt-7 font-serif-display text-5xl font-light tracking-[-0.02em] text-[#1A1916] md:text-7xl">
                    {d.name}
                  </h3>
                  <div className="mt-8 max-w-xl space-y-6 font-grotesk text-base leading-relaxed text-[#1A1916]/75 md:text-lg [&_em]:italic">
                    {d.body}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- SELECTED */}
        <section
          id="selected"
          className="mx-auto max-w-[1400px] scroll-mt-24 border-t border-[#1A1916]/10 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="reveal flex items-end justify-between">
            <h2 className="font-serif-display text-5xl font-light tracking-[-0.02em] text-[#1A1916] md:text-7xl">
              {SELECTED.title}
            </h2>
            <p className="hidden font-mono-cap text-[11px] uppercase tracking-[0.35em] text-[#8C887F] md:block">
              {String(SELECTED.photos.length).padStart(2, '0')} frames
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-10">
            {SELECTED.photos.map((photo, i) => (
              <div key={photo.src} style={{ transitionDelay: `${(i % 3) * 90}ms` }} className="reveal">
                <Print
                  photo={photo}
                  ratio={SELECTED.ratio}
                  label="Selected"
                  frame={frameNo(i)}
                  onOpen={() => openLightbox(SELECTED.photos, i, 'Selected')}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ PRINTS */}
        <section
          id="prints"
          className="mx-auto max-w-[1400px] scroll-mt-24 border-t border-[#1A1916]/10 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-mono-cap text-[11px] uppercase tracking-[0.35em] text-[#8C887F]">
                For sale · Archival prints
              </p>
              <h2 className="mt-4 font-serif-display text-5xl font-light tracking-[-0.02em] text-[#1A1916] md:text-7xl">
                Prints
              </h2>
            </div>
            <p className="font-serif-display text-lg font-light leading-relaxed text-[#1A1916]/70 md:col-span-5">
              {PRINTS.intro}
            </p>
          </div>

          {/* size / price list */}
          <dl className="reveal mt-14 grid grid-cols-2 border-t border-[#1A1916]/12 md:grid-cols-4">
            {PRINTS.sizes.map((s, i) => (
              <div
                key={s.size}
                className={`flex items-baseline justify-between gap-4 border-b border-[#1A1916]/10 py-5 md:px-6 ${
                  i % 2 === 0 ? 'pr-4 md:pr-6' : 'pl-4 md:pl-0'
                } ${i < PRINTS.sizes.length - 1 ? 'md:border-r md:border-[#1A1916]/10' : ''}`}
              >
                <dt className="font-mono-cap text-[10px] uppercase tracking-[0.22em] text-[#8C887F]">
                  {s.size}
                </dt>
                <dd className="font-serif-display text-2xl font-light text-[#1A1916]">{s.price}</dd>
              </div>
            ))}
          </dl>

          {/* print grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-10">
            {PRINTS.items.map((item, i) => (
              <figure
                key={item.src}
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
                className="reveal flex flex-col"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${item.title}`}
                  onClick={() => openLightbox(PRINTS.items, i, 'Prints')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(PRINTS.items, i, 'Prints');
                    }
                  }}
                  className="group block cursor-zoom-in bg-[#F4F2EC] p-3 shadow-[0_1px_3px_rgba(26,25,22,0.10)] transition-transform duration-700 ease-out hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1916] focus-visible:ring-offset-4 focus-visible:ring-offset-[#E7E4DD] md:p-4"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: item.ratio }}>
                    <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-[#1A1916]/12" />
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
                    />
                  </div>
                </div>

                <figcaption className="mt-4 flex items-baseline justify-between font-mono-cap text-[10px] uppercase tracking-[0.28em] text-[#8C887F]">
                  <span className="flex items-center gap-2">
                    <span className="text-[#1A1916]/35" aria-hidden>✛</span>
                    {item.title}
                  </span>
                  <span>{item.edition}</span>
                </figcaption>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="font-serif-display text-lg font-light text-[#1A1916]">
                    From {PRINTS.sizes[0].price}
                  </span>
                  <a
                    href={orderHref(item.title)}
                    className="group inline-flex items-center gap-2 bg-[#1A1916] px-6 py-3 font-mono-cap text-[10px] uppercase tracking-[0.3em] text-[#E7E4DD] transition-colors hover:bg-[#33302a]"
                  >
                    Order
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </figure>
            ))}
          </div>

          {/* assurances */}
          <div className="reveal mt-20 grid gap-10 border-t border-[#1A1916]/10 pt-12 md:grid-cols-3">
            {[
              { label: 'Archival quality', text: 'Pigment inks on cotton-rag paper, rated to outlast a century without fading.' },
              { label: 'Signed & numbered', text: 'Limited editions are signed and numbered by hand; open editions signed on the reverse.' },
              { label: 'Shipped worldwide', text: 'Sent flat or rolled in protective packaging. Shipping is quoted by email per destination.' },
            ].map((f) => (
              <div key={f.label}>
                <p className="font-mono-cap text-[10px] uppercase tracking-[0.3em] text-[#8C887F]">
                  {f.label}
                </p>
                <p className="mt-4 font-serif-display text-lg font-light leading-relaxed text-[#1A1916]/75">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------- ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-[#1A1916]/10 bg-[#1A1916] text-[#E7E4DD]"
        >
          <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:grid-cols-12 md:items-center md:px-10 md:py-36">
            <div className="reveal md:col-span-5">
              <div className="bg-[#23211C] p-3 md:p-4">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                  <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-[#E7E4DD]/10" />
                  <img
                    src="/profile.jpg"
                    alt="Chethan Kanakamurthy"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 font-mono-cap text-[10px] uppercase tracking-[0.28em] text-[#E7E4DD]/45">
                <span className="text-[#E7E4DD]/30">✛</span>&nbsp;&nbsp;The photographer
              </p>
            </div>

            <div className="reveal md:col-span-7" style={{ transitionDelay: '120ms' }}>
              <p className="font-mono-cap text-[11px] uppercase tracking-[0.35em] text-[#E7E4DD]/45">
                About
              </p>
              <p className="mt-8 font-serif-display text-2xl font-light leading-relaxed text-[#E7E4DD] md:text-[2rem] md:leading-[1.45]">
                I made my first photograph in the fifth grade, on a film camera, and never
                quite put it down. Engineering trained my eye for structure, line, and
                tolerance; the camera lets me chase the same precision in light and
                gesture — most often pointed at the dancers and streets I grew up around.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-28 md:px-10 md:py-44"
        >
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="font-mono-cap text-[11px] uppercase tracking-[0.4em] text-[#8C887F]">
              Prints · Collaborations · Enquiries
            </p>
            <h2 className="mt-8 font-serif-display text-5xl font-light tracking-[-0.02em] text-[#1A1916] md:text-8xl">
              Let&apos;s make something.
            </h2>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href="mailto:ckanakamurthy@gmail.com"
                className="group inline-flex items-center gap-3 bg-[#1A1916] px-9 py-4 font-mono-cap text-[11px] uppercase tracking-[0.3em] text-[#E7E4DD] transition-colors hover:bg-[#33302a]"
              >
                <Mail size={15} strokeWidth={1.75} />
                ckanakamurthy@gmail.com
              </a>
              <a
                href="https://www.instagram.com/chethan_kanakamurthy/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 border border-[#1A1916]/25 px-9 py-4 font-mono-cap text-[11px] uppercase tracking-[0.3em] text-[#1A1916] transition-colors hover:bg-[#1A1916] hover:text-[#E7E4DD]"
              >
                <Instagram size={15} strokeWidth={1.75} />
                Instagram
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* -------------------------------------------------------- FOOTER */}
      <footer className="border-t border-[#1A1916]/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row md:px-10">
          <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.22em]">
            Chethan Kanakamurthy
          </span>
          <span className="font-mono-cap text-[10px] uppercase tracking-[0.3em] text-[#8C887F]">
            Bengaluru / Michigan — © {new Date().getFullYear()}
          </span>
        </div>
      </footer>

      {/* ------------------------------------------------------ LIGHTBOX */}
      {lightbox && (
        <div
          className="lb-fade fixed inset-0 z-[100] flex items-center justify-center bg-[#15140F]/97 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* counter */}
          <div className="pointer-events-none absolute left-6 top-6 font-mono-cap text-[11px] uppercase tracking-[0.3em] text-[#E7E4DD]/55 md:left-10 md:top-8">
            {lightbox.label} — {frameNo(lightbox.index)} / {String(lightbox.list.length).padStart(2, '0')}
          </div>

          <button
            aria-label="Close"
            onClick={closeLightbox}
            className="absolute right-6 top-6 text-[#E7E4DD]/70 transition-colors hover:text-[#E7E4DD] md:right-10 md:top-8"
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 z-10 p-3 text-[#E7E4DD]/60 transition-colors hover:text-[#E7E4DD] md:left-8"
          >
            <ChevronLeft size={34} strokeWidth={1.25} />
          </button>

          <figure className="mx-16 flex max-h-[86vh] flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.list[lightbox.index].src}
              alt={lightbox.list[lightbox.index].alt}
              className="max-h-[80vh] max-w-full object-contain shadow-2xl"
            />
            <figcaption className="mt-5 font-mono-cap text-[10px] uppercase tracking-[0.3em] text-[#E7E4DD]/55">
              {lightbox.list[lightbox.index].alt}
            </figcaption>
          </figure>

          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 z-10 p-3 text-[#E7E4DD]/60 transition-colors hover:text-[#E7E4DD] md:right-8"
          >
            <ChevronRight size={34} strokeWidth={1.25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
