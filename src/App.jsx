import React, { useState, useEffect } from 'react';
import { 
  User, Briefcase, FileText, Mail, Linkedin, Instagram,
  ChevronRight, Award, Settings, Cpu, Camera, Menu, X,
  ChevronLeft, ArrowRight, Zap, Target, ShieldCheck,
  Maximize2, Download, ExternalLink, PenTool, Layers,
  ChevronDown
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAllegionExpanded, setIsAllegionExpanded] = useState(false);
  const [isBullworkExpanded, setIsBullworkExpanded] = useState(false);

  // --- PHOTOGRAPHY CONFIGURATION ---
  const generalPhotos = [
    "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"
  ];

  const dancePhotos = [
    "dance1.JPG", "dance2.JPG", "dance3.JPG"
  ];

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
    
    // Refresh observer when tabs change or dropdowns open
    return () => observer.disconnect();
  }, [activeTab, selectedProject, isAllegionExpanded, isBullworkExpanded]);

  const projects = [
    {
      id: 'motion-multiplication',
      title: "Motion Multiplication Mechanism",
      subtitle: "Life-Safety Hardware | Best Innovation Award",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
      context: "Existing exit devices provided ~1\" of latch engagement. Under hurricane/tornado conditions, this caused unlatching due to door deflection. My design doubled this to 2\" within the same footprint.",
      role: ["Concept Generation", "Kinematic Analysis", "DFM-aware Design"],
      mechanism: "A cam-driven mechanism was engineered to transform limited push-bar motion into 2\" of linear travel. The profile was optimized for smooth mechanical advantage and durability.",
      results: [
        "100% Increase in latch engagement",
        "Zero unlatching in simulated storm tests",
        "Allegion Best Innovation Award Winner"
      ],
      tags: ["Kinematics", "SolidWorks", "Safety"]
    },
    {
      id: 'deadbolt-design',
      title: "Low Profile Deadbolt",
      subtitle: "Residential Security | Double Crank Mechanism",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      context: "Developed a BHMA Grade 1 security lock matching the 0.5\" slim profile of competitors without compromising internal mechanical integrity.",
      role: ["Competitive Benchmarking", "Mechanism Synthesis", "FEA Analysis"],
      mechanism: "Utilized a Double Crank Linkage operating on a flat plane, allowing the high-strength mechanism to 'fold' into a thin housing protrusion.",
      results: [
        "Achieved 0.5-inch slim profile",
        "Validated against BHMA Grade 1 standards",
        "Maintained premium tactile user experience"
      ],
      tags: ["FEA", "Linkage", "Manufacturing"]
    },
    {
      id: 'ag-ev',
      title: "Self-Driving Ag-EV Drivetrain",
      subtitle: "Electric Vehicle | Structural Optimization",
      image: "https://images.unsplash.com/photo-1530268576341-94943f65600c?auto=format&fit=crop&q=80&w=800",
      context: "Concept development for an autonomous agricultural vehicle drivetrain, focusing on efficiency and safety.",
      role: ["Gearbox Optimization", "Structural FEA", "Chassis Design"],
      mechanism: "Optimized drivetrain performance through custom gear ratios and conducted structural FEA on the roll cage to ensure operator safety during heavy maneuvers.",
      results: [
        "Optimized Gearbox Efficiency",
        "Validated Structural Integrity",
        "3D Printed Functional Prototype"
      ],
      tags: ["EV", "Drivetrain", "Simcenter"]
    }
  ];

  const NavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => { setActiveTab(id); setSelectedProject(null); setIsMenuOpen(false); }}
      className={`relative flex items-center gap-2 px-5 py-2 transition-all cursor-pointer group ${
        activeTab === id && !selectedProject ? 'text-red-500' : 'text-slate-500 hover:text-slate-300'
      }`}
    >
      <Icon size={14} className={activeTab === id && !selectedProject ? 'text-red-600' : 'text-slate-700'} />
      <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{label}</span>
      {activeTab === id && !selectedProject && (
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

      {/* Photography Lightbox */}
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
          <div className="flex items-center gap-6 cursor-pointer group" onClick={() => { setActiveTab('home'); setSelectedProject(null); }}>
            <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center text-white font-black text-xl group-hover:bg-blue-600 transition-colors duration-500">CK</div>
            <div className="flex flex-col border-l border-white/10 pl-6">
              <h1 className="font-bold text-lg text-white uppercase tracking-tight leading-none">Chethan Kanakamurthy</h1>
              <p className="text-[9px] text-blue-400 font-bold uppercase tracking-[0.3em] mt-1">Design Engineer • Michigan Tech</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <NavItem id="home" label="Index" icon={Target} />
            <NavItem id="portfolio" label="Records" icon={Layers} />
            <NavItem id="experience" label="Timeline" icon={Briefcase} />
            <NavItem id="photography" label="Gallery" icon={Camera} />
            <div className="w-[1px] h-4 bg-white/10 mx-4"></div>
            <div className="flex gap-4">
              <a href="mailto:ckanakamurthy@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors"><Mail size={18} /></a>
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
        <NavItem id="home" label="Index" icon={Target} />
        <NavItem id="portfolio" label="Records" icon={Layers} />
        <NavItem id="experience" label="Timeline" icon={Briefcase} />
        <NavItem id="photography" label="Gallery" icon={Camera} />
      </div>

      <main className="relative z-10 pt-20">
        {activeTab === 'home' && !selectedProject && (
          <div className="animate-in fade-in duration-700">
            {/* HERO - UPDATED FOR INTERNSHIP/CO-OP SEEKING */}
            <section className="max-w-7xl mx-auto px-6 py-24 md:py-48">
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-8 reveal">
                  <span className="inline-block px-3 py-1 rounded bg-red-600/10 text-red-500 border border-red-600/20 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                    Seeking Summer / Fall 2026 Internships & Co-ops
                  </span>
                  <h2 className="text-6xl md:text-9xl font-bold text-white mb-10 leading-[0.95] tracking-tight uppercase italic">
                    Engineering <br /><span className="text-red-600 not-italic font-black">the Future.</span>
                  </h2>
                  <p className="max-w-2xl text-2xl text-slate-400 mb-14 leading-relaxed font-medium">
                    Master's candidate at Michigan Tech with 3 years of industrial experience at Allegion. 
                    Actively seeking roles to contribute technical rigor in mechanical design and manufacturing.
                  </p>
                  <div className="flex flex-wrap gap-8">
                    <button 
                      onClick={() => setActiveTab('portfolio')}
                      className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-[11px] rounded-sm hover:bg-red-700 transition-all shadow-2xl shadow-red-900/30"
                    >
                      View Technical Record <ArrowRight size={16} className="inline ml-2" />
                    </button>
                    <div className="flex gap-4 items-center">
                       <a href="https://www.instagram.com/chethan_kanakamurthy/" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-red-600 hover:text-white transition-all"><Instagram size={22} /></a>
                    </div>
                  </div>
                  <div className="mt-12 flex items-center gap-4 text-slate-500 uppercase tracking-[0.4em] text-[10px] font-bold">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div> Available for Relocation
                  </div>
                </div>

                <div className="lg:col-span-4 w-full reveal" style={{ transitionDelay: '200ms' }}>
                  <div className="relative group">
                    <div className="aspect-[4/5] bg-slate-900 border border-white/5 overflow-hidden relative shadow-2xl rounded-sm">
                      <img 
                        src="/profile.jpg" 
                        alt="Chethan Portrait" 
                        className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        onError={(e) => e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"}
                      />
                      <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
                    </div>
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-red-600 opacity-40"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-red-600 opacity-40"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* STRENGTHS */}
            <section className="bg-white/[0.02] border-y border-white/5 py-24">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.6em] mb-16 text-center reveal">Clifton Strengths Profile</div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
                  {[
                    "Strategic", "Responsibility", "Analytical", "Learner", "Futuristic"
                  ].map((strength, i) => (
                    <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                      <div className="text-red-500 mb-6 flex justify-center"><Target size={24} /></div>
                      <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase italic">{strength}</h3>
                      <div className="w-1 h-1 bg-blue-500 rounded-full mx-auto mt-6 group-hover:scale-[6] transition-all"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DOMAINS */}
            <section className="max-w-7xl mx-auto px-6 py-32">
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { title: "Analysis", icon: Cpu, skills: ["Simcenter Amesim", "MATLAB", "FEA (Ansys)"] },
                  { title: "Design", icon: PenTool, skills: ["SolidWorks Mastery", "PTC Creo", "GD&T Application"] },
                  { title: "Industrial", icon: Settings, skills: ["Die Casting", "Sheet Metal DFM", "Metallurgy"] }
                ].map((group, i) => (
                  <div key={i} className="p-10 bg-white/[0.01] border border-white/5 hover:border-red-600/30 transition-all reveal group shadow-sm" style={{ transitionDelay: `${i * 150}ms` }}>
                    <div className="w-12 h-12 bg-red-600/10 text-red-500 flex items-center justify-center rounded-sm mb-10 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <group.icon size={22} />
                    </div>
                    <h5 className="text-xl font-bold text-white uppercase tracking-tight mb-8">{group.title}</h5>
                    <ul className="space-y-4">
                      {group.skills.map(s => (
                        <li key={s} className="flex items-center gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-300">
                          <div className="w-1.5 h-[1px] bg-red-600"></div> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PROJECTS SECTION */}
        {activeTab === 'portfolio' && !selectedProject && (
          <section className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-5xl font-black text-white mb-20 uppercase tracking-tighter italic border-b-4 border-red-600 w-fit pb-2 reveal">Records</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project, i) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-slate-900 border border-white/5 overflow-hidden cursor-pointer hover:border-red-600/40 transition-all flex flex-col reveal shadow-2xl"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="h-72 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent"></div>
                  </div>
                  <div className="p-12">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-none uppercase tracking-tight group-hover:text-red-500 transition-colors">{project.title}</h3>
                    <p className="text-[10px] text-blue-400 uppercase font-bold tracking-widest leading-loose mb-10 italic">"{project.subtitle}"</p>
                    <div className="flex items-center gap-3 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] group-hover:translate-x-4 transition-transform">
                      Open Log <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJECT DETAIL */}
        {selectedProject && (
          <div className="animate-in slide-in-from-right duration-700 pb-32">
            <div className="bg-[#020617] border-b border-white/5 py-32">
              <div className="max-w-5xl mx-auto px-6">
                <button onClick={() => setSelectedProject(null)} className="flex items-center gap-4 text-slate-500 hover:text-white mb-16 uppercase font-black text-[10px] tracking-widest group">
                  <ChevronLeft size={16} className="group-hover:-translate-x-2 transition-transform text-red-600" /> Return to Index
                </button>
                <h2 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.9]">{selectedProject.title}</h2>
                <div className="px-8 py-3 bg-red-600 text-white font-black uppercase tracking-[0.2em] text-[11px] w-fit shadow-lg shadow-red-900/20">Ref: {selectedProject.id.toUpperCase()}</div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-24 space-y-40">
               <div className="grid md:grid-cols-12 gap-24">
                  <div className="md:col-span-8 space-y-32">
                     <section className="reveal">
                        <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[0.6em] flex items-center gap-6 mb-12">
                           <div className="w-12 h-[1px] bg-red-600"></div> Challenge
                        </h4>
                        <p className="text-4xl text-slate-300 leading-[1.3] font-medium italic border-l-4 border-blue-600/30 pl-10">"{selectedProject.context}"</p>
                     </section>
                     <section className="reveal">
                        <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[0.6em] flex items-center gap-6 mb-12">
                           <div className="w-10 h-[1px] bg-red-600"></div> Engineering Solution
                        </h4>
                        <p className="text-xl text-slate-400 leading-relaxed font-light">{selectedProject.mechanism}</p>
                     </section>
                  </div>
                  <aside className="md:col-span-4 space-y-20">
                     <section className="p-12 bg-red-600/[0.03] border border-red-600/10 space-y-12 reveal">
                        <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[0.5em]">Validation</h4>
                        <ul className="space-y-10">
                           {selectedProject.results.map((res, i) => (
                              <li key={i} className="flex gap-6 text-[11px] text-white font-bold uppercase tracking-widest leading-tight italic">
                                 <div className="w-8 h-8 bg-red-600 flex items-center justify-center shrink-0 shadow-lg"><Award size={14} /></div>
                                 <span className="mt-1">{res}</span>
                              </li>
                           ))}
                        </ul>
                     </section>
                  </aside>
               </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE TIMELINE */}
        {activeTab === 'experience' && (
          <section className="max-w-5xl mx-auto px-6 py-32">
             <div className="mb-32 reveal">
              <h2 className="text-6xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter italic border-b-4 border-red-600 w-fit pb-2">Timeline.</h2>
              <p className="text-slate-400 text-xl font-medium mt-10">Industrial footprint and academic evolution from 2017 to Present.</p>
            </div>

            <div className="space-y-52 relative border-l-2 border-white/5 ml-4 pl-20">
               {[
                 { 
                   id: 'mtu',
                   date: "2025 — PRESENT", 
                   org: "Michigan Technological University",
                   title: "Master's in Mechanical Engineering", 
                   logo: "/Logos/mtu.png", 
                   current: true,
                   sub: "Learnt Engineering by not eating Masala Dosa."
                 },
                 { 
                   id: 'allegion',
                   date: "2022 — 2025", 
                   title: "Associate Mechanical Engineer", 
                   org: "Allegion India", 
                   logo: "/Logos/allegion.png",
                   sub: "Drove mechanical innovation and localization achieving $300K savings.",
                   isExpanded: isAllegionExpanded,
                   setExpanded: setIsAllegionExpanded,
                   details: [
                     "Engineered mechanical lock mechanisms and deadbolt latches with 100% compliance to BHMA and industry standards.",
                     "Spearheaded localization efforts as part of the core team for the 'India for India' project, reducing dependency on imports and improving supply resilience.",
                     "Leveraged ERP systems for Zion (Wave 1/2) and Project Martha, achieving 95% on-time delivery and $300K savings in Phase 1.",
                     "Improved product reliability through kinematic studies, advanced GD&T application, and tolerance stack-up analysis.",
                     "Enhanced security and innovation by researching competitor products and patents, contributing to new technical disclosures.",
                     "Streamlined procurement by handling RFQs, supplier quotations, and documentation for prototypes."
                   ]
                 },
                 { 
                   id: 'bullwork',
                   date: "2021 — 2021", 
                   title: "Engineering Intern", 
                   org: "Bullwork Mobility", 
                   logo: "/Logos/bullwork.png",
                   sub: "Optimized Ag-EV drivetrain and chassis structural analysis.",
                   isExpanded: isBullworkExpanded,
                   setExpanded: setIsBullworkExpanded,
                   details: [
                     "Optimized performance of an electric agricultural vehicle by designing a high-efficiency gearbox tailored for low-speed high-torque applications.",
                     "Conducted comprehensive structural analysis of the chassis, roll cage, and cabin using SolidWorks Simulation.",
                     "Collaborated on industrial design initiatives for improved cabin ergonomics and serviceability."
                   ]
                 },
                 { 
                   id: 'dbit',
                   date: "2017 — 2021", 
                   title: "Bachelor's in Mechanical Engineering", 
                   org: "Don Bosco Institute of Technology, Bangalore", 
                   logo: "/Logos/dbit.png",
                   sub: "Learnt Engineering by eating lot of Masala Dosa." 
                 }
               ].map((item, i) => (
                 <div key={i} className="relative reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                    {/* Node */}
                    <div className={`absolute -left-[103px] top-1 w-6 h-6 rounded-full border-4 border-[#020617] transition-all duration-700 ${item.current ? 'bg-red-600 shadow-[0_0_25px_rgba(220,38,38,0.7)]' : 'bg-slate-800'}`}></div>
                    
                    <span className={`text-[10px] font-bold uppercase tracking-[0.5em] mb-10 block ${item.current ? 'text-red-500' : 'text-slate-600'}`}>{item.date}</span>
                    
                    <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                      <div className="w-[75px] h-[75px] bg-white rounded-sm flex items-center justify-center p-1 shrink-0 shadow-2xl group overflow-hidden">
                        <img 
                          src={item.logo} 
                          alt={item.org} 
                          className="max-w-full max-h-full object-contain brightness-100 opacity-100"
                          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=100" }} 
                        />
                      </div>
                      <div>
                        <p className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-3 leading-none">{item.org}</p>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">{item.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-10 pl-6 border-l border-white/5 ml-2">
                        {item.sub && <p className="text-slate-300 text-2xl font-medium leading-relaxed italic opacity-90">"{item.sub}"</p>}
                        
                        {item.details && (
                          <div className="pt-4">
                            <button 
                              onClick={() => item.setExpanded(!item.isExpanded)}
                              className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 hover:text-white transition-all py-3 px-8 border border-white/10 hover:border-red-600/40 bg-white/[0.01]"
                            >
                              Technical Breakdown <ChevronDown size={14} className={`transition-transform duration-700 ${item.isExpanded ? 'rotate-180 text-red-600' : ''}`} />
                            </button>
                            
                            {item.isExpanded && (
                              <div className="mt-12 space-y-6 animate-in slide-in-from-top-4 duration-700">
                                {item.details.map((detail, dIdx) => (
                                  <div key={dIdx} className="flex gap-8 p-8 bg-white/[0.02] border border-white/5 shadow-sm">
                                    <Zap size={18} className="text-red-600 shrink-0 mt-1" />
                                    <p className="text-slate-200 text-lg leading-relaxed font-medium">{detail}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                    </div>
                 </div>
               ))}
            </div>
          </section>
        )}

        {activeTab === 'photography' && (
          <section className="relative min-h-screen">
            {/* Artistic Texture */}
            <div className="absolute inset-0 z-0 bg-cover bg-fixed bg-center opacity-[0.03] grayscale pointer-events-none" style={{ backgroundImage: "url('/camera.jpg')" }}></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-10 py-48">
              <div className="mb-48 reveal text-center max-w-4xl mx-auto">
                <h2 className="text-7xl md:text-[11rem] font-black text-white mb-12 tracking-tighter leading-none italic opacity-90 uppercase">Practice.</h2>
                <p className="text-slate-400 text-3xl font-medium leading-relaxed italic opacity-80 border-x border-white/10 px-14 py-4">
                  "Photography has been a passion of mine right from my 5th grade, when I first clicked an image from a film camera. 
                  Today, I use the lens to explore geometry beyond the engineering floor."
                </p>
              </div>

              {/* Dances Of India */}
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

              {/* General Visual Log */}
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
      </main>

      <footer className="border-t border-white/5 py-72 bg-[#020617] text-center px-10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto reveal">
          {activeTab === 'photography' ? (
            <div className="flex flex-col items-center gap-24">
              <h4 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight max-w-4xl italic opacity-80 uppercase leading-none">This is just the beginning.</h4>
              <div className="flex flex-col items-center gap-12">
                <p className="text-blue-400 uppercase tracking-[0.8em] text-[10px] font-bold">Follow Work / Enquiries via DM or Mail</p>
                <a href="mailto:ckanakamurthy@gmail.com" className="inline-flex items-center gap-10 bg-red-600 text-white font-black text-xl px-24 py-10 transition-all hover:bg-red-700 uppercase tracking-[0.4em] shadow-3xl shadow-red-900/40">
                  <Mail size={24} strokeWidth={2} /> Enquiry
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-16">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.6em]">Quote</span>
              <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto px-6">
                <div className="relative shrink-0">
                  <img 
                    src="/Photos/steve.jpeg" 
                    className="w-32 h-32 rounded-full border-4 border-red-600/30 object-cover grayscale contrast-125 shadow-2xl" 
                    alt="Steve Jobs"
                  />
                  <div className="absolute inset-0 rounded-full border border-red-600 animate-pulse opacity-50"></div>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] italic uppercase">
                    "Creativity is just <br className="hidden md:block" /> connecting things."
                  </h4>
                  <p className="text-red-500 font-mono text-xs mt-6 uppercase tracking-[0.4em] font-bold">
                    — Steve Jobs
                  </p>
                </div>
              </div>
              <div className="w-40 h-1 bg-red-600 rounded-full shadow-[0_0_40px_rgba(220,38,38,0.8)] mt-8"></div>
            </div>
          )}
          
          <div className="flex justify-center gap-24 mt-48">
            {[
              { href: "mailto:ckanakamurthy@gmail.com", icon: Mail, color: 'hover:text-red-500' },
              { href: "https://linkedin.com/in/chethan-nk", icon: Linkedin, color: 'hover:text-blue-400' },
              { href: "https://www.instagram.com/chethan_kanakamurthy/", icon: Instagram, color: 'hover:text-red-400' }
            ].map((link, lIdx) => (
              <a key={lIdx} href={link.href} target="_blank" className={`group transition-transform hover:scale-125 duration-500 ${link.color}`}>
                <link.icon size={28} strokeWidth={1.5} className="text-slate-700 transition-all duration-700" />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-slate-700 uppercase tracking-[1em] mt-52 font-bold">© 2026 Chethan Kanakamurthy • Michigan Tech</p>
        </div>
      </footer>
    </div>
  );
};

export default App;