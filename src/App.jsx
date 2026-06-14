import React, { useState, useEffect } from 'react';
import {
  Mail, Linkedin, Instagram, Camera, Menu, X,
  ArrowRight, Maximize2, ShoppingBag, Ruler, Check, Truck, Aperture
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // --- PHOTOGRAPHY CONFIGURATION ---
  const generalPhotos = [
    "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"
  ];

  const dancePhotos = [
    "dance1.JPG", "dance2.JPG", "dance3.JPG"
  ];

  // --- PRINTS FOR SALE ---
  // Edit titles, editions, and the image list to control what's offered.
  const prints = [
    { title: "Geometry in Motion", image: "/Photos/photo5.jpg", edition: "Limited Edition / 25" },
    { title: "Urban Lines", image: "/Photos/photo2.jpg", edition: "Open Edition" },
    { title: "Dances of India — II", image: "/Photos/Dances Of India/dance2.JPG", edition: "Limited Edition / 25" },
    { title: "Quiet Light", image: "/Photos/photo4.jpg", edition: "Open Edition" },
    { title: "Dances of India — I", image: "/Photos/Dances Of India/dance1.JPG", edition: "Limited Edition / 25" },
    { title: "Still Frame", image: "/Photos/photo6.jpg", edition: "Open Edition" },
  ];

  // Global size / price options (edit to taste).
  const printSizes = [
    { size: '8" × 10"', price: "$45" },
    { size: '12" × 18"', price: "$80" },
    { size: '18" × 24"', price: "$130" },
    { size: '24" × 36"', price: "$220" },
  ];

  // Build a pre-filled order email for a given print.
  const orderLink = (title) =>
    `mailto:ckanakamurthy@gmail.com?subject=${encodeURIComponent(`Print Order — ${title}`)}` +
    `&body=${encodeURIComponent(
      `Hi Chethan,\n\nI'd like to order a print of "${title}".\n\n` +
      `Preferred size:\nQuantity:\nFinish (matte / luster):\nShipping address:\n\nThanks!`
    )}`;

  // Scroll reveal animations logic
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  const NavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => { setActiveTab(id); setIsMenuOpen(false); window.scrollTo({ top: 0 }); }}
      className={`relative flex items-center gap-2 px-5 py-2 transition-all cursor-pointer group ${
        activeTab === id ? 'text-red-500' : 'text-slate-500 hover:text-slate-300'
      }`}
    >
      <Icon size={14} className={activeTab === id ? 'text-red-600' : 'text-slate-700'} />
      <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{label}</span>
      {activeTab === id && (
        <div className="absolute -bottom-1 left-5 right-5 h-[2px] bg-red-600 rounded-full animate-in fade-in duration-500"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Background HUD Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <svg className="absolute top-20 right-[-10%] w-[600px] h-[600px] text-white" viewBox="0 0 100 100">
           <path fill="currentColor" d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 25c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zM92.5 45H83.8c-.8-4.1-2.4-7.9-4.8-11.2l6.2-6.2c1-1 1-2.6 0-3.5l-5-5c-1-1-2.6-1-3.5 0l-6.2 6.2c-3.3-2.4-7.1-4-11.2-4.8V11.8c0-1.4-1.1-2.5-2.5-2.5h-7c-1.4 0-2.5 1.1-2.5 2.5v8.7c-4.1.8-7.9 2.4-11.2 4.8l-6.2-6.2c-1-1-2.6-1-3.5 0l-5 5c-1 1-1 2.6 0 3.5l6.2 6.2c-2.4 3.3-4 7.1-4.8 11.2h-8.7c-1.4 0-2.5 1.1-2.5 2.5v7c0 1.4 1.1 2.5 2.5 2.5h8.7c.8 4.1 2.4 7.9 4.8 11.2l-6.2 6.2c-1 1-1 2.6 0 3.5l5 5c1 1 2.6 1 3.5 0l6.2-6.2c3.3 2.4 7.1 4 11.2 4.8v8.7c0 1.4 1.1 2.5 2.5 2.5h7c1.4 0 2.5-1.1 2.5-2.5v-8.7c4.1-.8 7.9-2.4 11.2-4.8l6.2 6.2c1 1 2.6 1 3.5 0l5-5c1-1 1-2.6 0-3.5l-6.2-6.2c2.4-3.3 4-7.1 4.8-11.2h8.7c1.4 0 2.5-1.1 2.5-2.5v-7c0-1.4-1.1-2.5-2.5-2.5z"/>
        </svg>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: all 1s cubic-bezier(0.2, 1, 0.3, 1); }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        .bg-grid { background-size: 40px 40px; background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px); }
      `}</style>

      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-red-900/10 pointer-events-none z-0"></div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-red-500 transition-colors"><X size={32} /></button>
          <img src={selectedImage} className="max-w-full max-h-[85vh] object-contain border border-white/10 rounded-sm shadow-2xl" alt="Gallery detail" />
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6 cursor-pointer group" onClick={() => { setActiveTab('gallery'); window.scrollTo({ top: 0 }); }}>
            <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center text-white font-black text-xl group-hover:bg-blue-600 transition-colors duration-500">CK</div>
            <div className="flex flex-col border-l border-white/10 pl-6">
              <h1 className="font-bold text-lg text-white uppercase tracking-tight leading-none">Chethan Kanakamurthy</h1>
              <p className="text-[9px] text-blue-400 font-bold uppercase tracking-[0.3em] mt-1">Photography</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <NavItem id="gallery" label="Gallery" icon={Camera} />
            <NavItem id="prints" label="Prints" icon={ShoppingBag} />
            <div className="w-[1px] h-4 bg-white/10 mx-4"></div>
            <div className="flex gap-4">
              <a href="mailto:ckanakamurthy@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors"><Mail size={18} /></a>
              <a href="https://www.instagram.com/chethan_kanakamurthy/" target="_blank" className="text-slate-400 hover:text-red-500 transition-colors"><Instagram size={18} /></a>
              <a href="https://linkedin.com/in/chethan-nk" target="_blank" className="text-slate-400 hover:text-red-500 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-[#020617] pt-32 px-8 flex flex-col gap-8 transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <NavItem id="gallery" label="Gallery" icon={Camera} />
        <NavItem id="prints" label="Prints" icon={ShoppingBag} />
      </div>

      <main className="relative z-10 pt-20">
        {/* GALLERY */}
        {activeTab === 'gallery' && (
          <section className="relative min-h-screen">
            <div className="absolute inset-0 z-0 bg-cover bg-fixed bg-center opacity-[0.03] grayscale pointer-events-none" style={{ backgroundImage: "url('/camera.jpg')" }}></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-10 py-48">
              <div className="mb-48 reveal text-center max-w-4xl mx-auto">
                <span className="inline-flex items-center gap-3 px-3 py-1 rounded bg-red-600/10 text-red-500 border border-red-600/20 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                  <Aperture size={12} /> Bengaluru • Houghton
                </span>
                <h2 className="text-7xl md:text-[11rem] font-black text-white mb-12 tracking-tighter leading-none italic opacity-90 uppercase">Practice.</h2>
                <p className="text-slate-400 text-3xl font-medium leading-relaxed italic opacity-80 border-x border-white/10 px-14 py-4">
                  "Photography has been a passion of mine right from my 5th grade, when I first clicked an image from a film camera.
                  Today, I use the lens to explore geometry beyond the engineering floor."
                </p>
                <button
                  onClick={() => { setActiveTab('prints'); window.scrollTo({ top: 0 }); }}
                  className="mt-16 inline-flex items-center gap-4 px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-[11px] rounded-sm hover:bg-red-700 transition-all shadow-2xl shadow-red-900/30"
                >
                  <ShoppingBag size={16} /> Shop Fine-Art Prints <ArrowRight size={16} />
                </button>
              </div>

              {/* Dances of India */}
              <div className="mb-72 reveal">
                <div className="mb-32 flex items-center justify-between border-b border-white/5 pb-16">
                  <h3 className="text-5xl font-black text-white uppercase tracking-tighter italic">Dances Of India</h3>
                  <div className="flex flex-col items-end gap-2 font-mono text-[9px] text-red-600 uppercase tracking-[0.5em]">
                    <span>Project_Archive_01</span>
                    <span>Bengaluru_Series</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                  {dancePhotos.map((filename, index) => (
                    <div
                      key={index}
                      className="group cursor-zoom-in reveal"
                      style={{ transitionDelay: `${index * 300}ms` }}
                      onClick={() => setSelectedImage(`/Photos/Dances Of India/${filename}`)}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 shadow-2xl mb-8 transition-all duration-1000 group-hover:translate-y-[-10px]">
                        <img src={`/Photos/Dances Of India/${filename}`} className="w-full h-full object-cover transition-all duration-[3000ms] grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"} />
                        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity bg-red-600/30 backdrop-blur-xl p-4 border border-white/20">
                          <Maximize2 size={20} className="text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Log */}
              <div className="pt-48 border-t border-white/5 reveal">
                <div className="mb-32"><h3 className="text-5xl font-black text-white uppercase italic tracking-tighter">Visual Log</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
                  {generalPhotos.map((filename, index) => (
                    <div key={index} className="group relative aspect-square overflow-hidden bg-neutral-900 transition-all duration-1000 cursor-zoom-in reveal hover:shadow-2xl" onClick={() => setSelectedImage(`/Photos/${filename}`)}>
                      <img src={`/Photos/${filename}`} className="w-full h-full object-cover transition-all duration-[3000ms] opacity-30 group-hover:opacity-100 group-hover:scale-105" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PRINTS / SHOP */}
        {activeTab === 'prints' && (
          <section className="max-w-7xl mx-auto px-6 py-32">
            <div className="mb-24 reveal text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-3 px-3 py-1 rounded bg-red-600/10 text-red-500 border border-red-600/20 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                <ShoppingBag size={12} /> Fine-Art Prints
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic mb-10">Own the Frame.</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">
                Each photograph is available as a museum-grade archival print, hand-finished and ready to hang.
                Select a piece below and send an order request — I'll confirm sizing, finish, and shipping by email.
              </p>
            </div>

            {/* Pricing / sizes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 reveal">
              {printSizes.map((s, i) => (
                <div key={i} className="p-8 bg-white/[0.02] border border-white/10 rounded-sm text-center hover:border-red-600/40 transition-all">
                  <Ruler size={18} className="text-blue-400 mx-auto mb-5" />
                  <p className="text-lg font-black text-white uppercase tracking-tight">{s.size}</p>
                  <p className="text-red-500 font-mono text-sm mt-2 tracking-widest">{s.price}</p>
                </div>
              ))}
            </div>

            {/* Print grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
              {prints.map((print, i) => (
                <div
                  key={i}
                  className="group bg-slate-900 border border-white/5 overflow-hidden flex flex-col reveal shadow-2xl hover:border-red-600/40 transition-all"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="aspect-[4/5] overflow-hidden relative cursor-zoom-in" onClick={() => setSelectedImage(print.image)}>
                    <img
                      src={print.image}
                      alt={print.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                      onError={(e) => e.target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent"></div>
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xl p-3 border border-white/20">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col gap-5 flex-1">
                    <div>
                      <p className="text-[10px] text-blue-400 uppercase font-bold tracking-[0.3em] mb-3">{print.edition}</p>
                      <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-none group-hover:text-red-500 transition-colors">{print.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm font-medium">From <span className="text-white font-bold">{printSizes[0].price}</span></p>
                    <a
                      href={orderLink(print.title)}
                      className="mt-auto flex items-center justify-center gap-3 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-sm transition-all text-[10px] uppercase tracking-[0.3em]"
                    >
                      <ShoppingBag size={14} /> Order Print
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Process / assurances */}
            <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-24 reveal">
              {[
                { icon: Camera, title: "Archival Quality", text: "Printed on museum-grade fine-art paper with pigment inks rated for 100+ years." },
                { icon: Check, title: "Signed & Numbered", text: "Limited editions are hand-signed and numbered; open editions are signed on the reverse." },
                { icon: Truck, title: "Shipped Worldwide", text: "Prints ship flat or rolled in protective packaging. Shipping quoted at checkout by email." },
              ].map((f, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <f.icon size={24} className="text-red-500 mb-6" />
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-4">{f.title}</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-white/5 py-72 bg-[#020617] text-center px-10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto reveal">
          <div className="flex flex-col items-center gap-24">
            <h4 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight max-w-4xl italic opacity-80 uppercase leading-none">This is just the beginning.</h4>
            <div className="flex flex-col items-center gap-12">
              <p className="text-blue-400 uppercase tracking-[0.8em] text-[10px] font-bold">Prints, Commissions & Enquiries via DM or Mail</p>
              <a href="mailto:ckanakamurthy@gmail.com" className="inline-flex items-center gap-10 bg-red-600 text-white font-black text-xl px-24 py-10 transition-all hover:bg-red-700 uppercase tracking-[0.4em] shadow-3xl shadow-red-900/40">
                <Mail size={24} strokeWidth={2} /> Enquiry
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-24 mt-48">
            {[
              { href: "mailto:ckanakamurthy@gmail.com", icon: Mail, color: 'hover:text-red-500' },
              { href: "https://www.instagram.com/chethan_kanakamurthy/", icon: Instagram, color: 'hover:text-red-400' },
              { href: "https://linkedin.com/in/chethan-nk", icon: Linkedin, color: 'hover:text-blue-400' }
            ].map((link, lIdx) => (
              <a key={lIdx} href={link.href} target="_blank" className={`group transition-transform hover:scale-125 duration-500 ${link.color}`}>
                <link.icon size={28} strokeWidth={1.5} className="text-slate-700 transition-all duration-700" />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-slate-700 uppercase tracking-[1em] mt-52 font-bold">© 2026 Chethan Kanakamurthy • Photography</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
