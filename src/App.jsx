import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  FileText, 
  Mail, 
  Linkedin, 
  Instagram,
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Award, 
  Settings, 
  Cpu, 
  Camera, 
  Menu, 
  X,
  ChevronLeft,
  ArrowRight,
  Zap,
  Target,
  ShieldCheck,
  Image as ImageIcon
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- PHOTOGRAPHY CONFIGURATION ---
  // Folder path: public/Photos/
  const generalPhotos = [
    "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"
  ];

  // Folder path: public/Photos/Dances Of India/
  // Updated with .JPG extension as per your local files
  const dancePhotos = [
    "dance1.JPG", "dance2.JPG", "dance3.JPG", "dance4.JPG", "dance5.JPG", "dance6.JPG"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, selectedProject]);

  const projects = [
    {
      id: 'motion-multiplication',
      title: "Motion Multiplication Mechanism",
      subtitle: "Life-Safety Hardware | Best Innovation Award",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
      context: "Existing exit devices provided ~1\" of latch engagement. Under hurricane/tornado conditions, this caused unlatching due to door deflection. The challenge was to double engagement without changing the product form factor.",
      role: [
        "Concept Generation & Mechanism Design",
        "Motion Multiplication Strategy",
        "Kinematic Reasoning & Packaging Optimization",
        "DFM-aware Design Thinking"
      ],
      mechanism: "A cam-driven mechanism was designed to transform limited input motion into 2\" of linear travel. The cam profile was optimized for smooth actuation while maintaining existing ergonomics.",
      results: [
        "100% Increase in latch engagement (1\" to 2\")",
        "No change to external form factor or user effort",
        "Improved resistance to wind-induced unlatching",
        "Received Allegion's 'Best Innovation Award'"
      ],
      tags: ["Kinematics", "SolidWorks", "Life-Safety"]
    },
    {
      id: 'deadbolt-design',
      title: "Low Profile Deadbolt",
      subtitle: "Residential Hardware | Double Crank Mechanism",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      context: "Competing with slim-profile urban locks while maintaining Schlage's BHMA Grade 1 security standards. The goal was to fit a heavy-duty mechanism into a 0.5\" housing protrusion.",
      role: [
        "Competitive Benchmarking (Schlage vs Kwikset)",
        "Mechanism Synthesis & Kinematic Analysis",
        "FEA for BHMA Grade 1 Loads",
        "Prototyping & Tolerance Analysis"
      ],
      mechanism: "A Double Crank Mechanism was selected to translate rotational input into linear motion within a flat plane, allowing the linkage to 'fold' into the thin housing.",
      results: [
        "Successfully achieved 0.5-inch profile",
        "Validated against Grade 1 impact standards",
        "Integration of full 1-inch throw in compact footprint",
        "Preserved premium tactile feel and torque requirements"
      ],
      tags: ["FEA", "Linkage Synthesis", "Manufacturing"]
    },
    {
      id: 'ag-ev',
      title: "Self-Driving Ag-EV Concept",
      subtitle: "Electric Vehicle Drivetrain | Internship Project",
      image: "https://images.unsplash.com/photo-1530268576341-94943f65600c?auto=format&fit=crop&q=80&w=800",
      context: "Development of an autonomous agricultural vehicle concept to optimize farm efficiency and sustainability.",
      role: [
        "Gearbox Design & Optimization",
        "Structural Analysis of Chassis & Roll Cage",
        "Industrial Design Collaboration",
        "SolidWorks Modeling"
      ],
      mechanism: "Optimized drivetrain performance through custom gear ratios and conducted FEA on the roll cage to ensure operator safety during maneuvers.",
      results: [
        "Optimized gearbox efficiency",
        "Validated structural integrity via FEA",
        "Aesthetic and functional integration"
      ],
      tags: ["Drivetrain", "EV", "SolidWorks"]
    }
  ];

  const NavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => { setActiveTab(id); setSelectedProject(null); setIsMenuOpen(false); }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer ${
        activeTab === id && !selectedProject 
          ? 'bg-yellow-500 text-black font-semibold shadow-lg shadow-yellow-500/20' 
          : 'text-gray-400 hover:text-white hover:bg-white/10'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-500 selection:text-black">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center text-black font-bold text-xl">
              CK
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg leading-tight text-white uppercase tracking-tighter">Chethan NK</h1>
              <p className="text-xs text-yellow-500 font-medium tracking-wide">Mechanical Design Engineer</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <NavItem id="home" label="Overview" icon={User} />
            <NavItem id="portfolio" label="Projects" icon={Settings} />
            <NavItem id="experience" label="Experience" icon={Briefcase} />
            <NavItem id="photography" label="Photography" icon={Camera} />
          </div>

          <button className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 p-6 flex flex-col gap-4 animate-in slide-in-from-top border-b border-white/10">
            <NavItem id="home" label="Overview" icon={User} />
            <NavItem id="portfolio" label="Projects" icon={Settings} />
            <NavItem id="experience" label="Experience" icon={Briefcase} />
            <NavItem id="photography" label="Photography" icon={Camera} />
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20">
        {activeTab === 'home' && !selectedProject && (
          <div className="animate-in fade-in duration-700">
            <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8">
                  <span className="inline-block px-3 py-1 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-bold uppercase tracking-widest mb-6">
                    MS Mechanical Engineering @ Michigan Tech
                  </span>
                  <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase italic">
                    Designing Systems for <br /><span className="text-yellow-500 underline decoration-4 underline-offset-8">Real-World</span> Impact.
                  </h2>
                  <p className="max-w-2xl text-xl text-slate-400 mb-8 leading-relaxed">
                    Building strong fundamentals in product design and system-level thinking.
                    Focused on bridging engineering excellence with manufacturing scalability.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setActiveTab('portfolio')}
                      className="px-8 py-4 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-yellow-500/20"
                    >
                      View Project Portfolio <ArrowRight size={20} />
                    </button>
                    <div className="flex gap-2">
                      <a href="https://linkedin.com/in/chethan-nk" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors text-slate-400 hover:text-white"><Linkedin size={20} /></a>
                      <a href="https://www.instagram.com/chethan_kanakamurthy/" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors text-slate-400 hover:text-white"><Instagram size={20} /></a>
                      <a href="mailto:ckanakamurthy@gmail.com" className="p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors text-slate-400 hover:text-white"><Mail size={20} /></a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 w-full max-w-sm mx-auto lg:max-w-none mb-12 lg:mb-0">
                  <div className="relative group">
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-yellow-500"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-yellow-500 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                    <div className="aspect-[4/5] bg-slate-900 border border-white/10 overflow-hidden transition-all duration-700 shadow-2xl">
                      <img 
                        src="/profile.jpg" 
                        alt="Chethan Nittur Kanakamurthy" 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-yellow-500"></div> Executive Vision
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed italic border-l-4 border-yellow-500/30 pl-6">
                  "I am mastering engineering as the foundation for future leadership. My goal is to bridge the gap between complex engineering, manufacturing excellence, and supply chain operations to lead organizations that create world-class, reliable products."
                </p>
                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  <div>
                    <h4 className="text-white font-bold text-3xl">$300K</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-wider font-bold">Procurement Savings</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-3xl">95%</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-wider font-bold">On-Time Delivery</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Technical Domains</h3>
                <div className="space-y-4">
                  {[
                    { label: "3D CAD & GD&T", val: "SolidWorks, Creo, Tolerance Stack-up", icon: Settings },
                    { label: "Simulation & FEA", val: "Ansys, Simcenter Amesim, MATLAB", icon: Cpu },
                    { label: "Manufacturing Processes", val: "Die Casting, Sheet Metal, PDC, PM", icon: Briefcase },
                    { label: "Project Leadership", val: "Innovation Lead, Global Coordination", icon: Award }
                  ].map((skill, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/5 flex gap-4 items-start group hover:border-yellow-500/30 transition-all hover:bg-white/[0.08]">
                      <div className="p-2 bg-yellow-500/10 text-yellow-500 rounded group-hover:bg-yellow-500 group-hover:text-black transition-colors"><skill.icon size={20} /></div>
                      <div>
                        <h5 className="font-bold text-white leading-none mb-1 uppercase tracking-tight">{skill.label}</h5>
                        <p className="text-slate-500 text-sm">{skill.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'portfolio' && !selectedProject && (
          <section className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-500">
            <div className="mb-16">
              <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight italic">Engineering Records</h2>
              <p className="text-slate-400 max-w-2xl text-lg">
                Technical archives detailing mechanical systems development, design validation, and manufacturing optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-slate-900 rounded-xl overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all cursor-pointer flex flex-col h-full shadow-lg"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100" />
                    <div className="absolute top-4 left-4 flex gap-1">
                      {project.tags.slice(0, 2).map(t => (
                        <span key={t} className="px-2 py-0.5 bg-yellow-500 text-black text-[10px] font-bold uppercase rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-yellow-500 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-2">{project.subtitle}</p>
                    <button className="flex items-center gap-2 text-yellow-500 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                      Read Technical Case <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedProject && (
          <div className="animate-in slide-in-from-right duration-500">
            <div className="bg-slate-900 border-b border-white/10 py-16">
              <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors cursor-pointer uppercase text-xs font-bold tracking-widest mx-auto md:mx-0 group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Records
                </button>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight leading-none italic">{selectedProject.title}</h2>
                <p className="text-xl text-yellow-500 font-bold uppercase tracking-widest border-l-4 border-yellow-500 pl-4 inline-block">{selectedProject.subtitle}</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                  <section>
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Problem Scope</h4>
                    <p className="text-lg text-slate-300 leading-relaxed font-medium italic border-l-2 border-white/10 pl-6">"{selectedProject.context}"</p>
                  </section>

                  <section>
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Mechanism Synthesis</h4>
                    <p className="text-lg text-slate-300 leading-relaxed">{selectedProject.mechanism}</p>
                    <div className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-black aspect-video flex items-center justify-center text-slate-600 relative">
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                      <p className="italic text-xs font-black uppercase tracking-[0.5em] z-10">[ CAD VISUALIZATION ARCHIVE ]</p>
                    </div>
                  </section>
                </div>

                <aside className="space-y-12">
                  <section className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Key Roles</h4>
                    <ul className="space-y-4">
                      {selectedProject.role.map((r, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-400 font-medium">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 shrink-0"></div>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl shadow-xl shadow-black/20">
                    <h4 className="text-xs font-black text-yellow-500 uppercase tracking-[0.2em] mb-6">Results & Impact</h4>
                    <ul className="space-y-4">
                      {selectedProject.results.map((res, i) => (
                        <li key={i} className="flex gap-3 text-sm text-white font-bold italic tracking-tight leading-tight">
                          <div className="p-1 bg-yellow-500 text-black rounded h-fit shrink-0 mt-0.5"><Award size={12} /></div>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <section className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-500">
             <div className="mb-16">
              <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight italic">Professional History</h2>
              <p className="text-slate-400 text-lg">Chronological record of technical impact and manufacturing optimization.</p>
            </div>

            <div className="space-y-16 border-l border-white/10 ml-4 pl-12 relative">
              <div className="relative group">
                <div className="absolute -left-[56px] top-0 w-8 h-8 bg-yellow-500 rounded-full border-4 border-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                  <Award size={14} className="text-black" />
                </div>
                <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">2025 — Present</span>
                <h3 className="text-3xl font-black text-white mt-2 group-hover:text-yellow-500 transition-colors tracking-tight italic">MS Mechanical Engineering</h3>
                <p className="text-slate-400 font-medium italic text-lg">Michigan Technological University</p>
              </div>

              <div className="relative group">
                <div className="absolute -left-[56px] top-0 w-8 h-8 bg-slate-800 rounded-full border-4 border-slate-950 group-hover:bg-yellow-500/50 transition-colors"></div>
                <span className="text-slate-500 font-bold text-sm uppercase tracking-widest">July 2022 — July 2025</span>
                <h3 className="text-3xl font-black text-white mt-2 uppercase tracking-tight italic">Associate Mechanical Engineer</h3>
                <p className="text-yellow-500 font-medium italic text-lg">Allegion India | Product Development</p>
                <ul className="mt-6 space-y-6 text-slate-400">
                  <li className="flex gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-white/20 transition-all">
                    <Zap size={20} className="text-yellow-500 shrink-0 mt-1" />
                    <span className="text-lg leading-relaxed">Drove localization efforts for \"India for India\" project, achieving <b>$300K savings</b> in Phase 1 through strategic procurement and DFM.</span>
                  </li>
                  <li className="flex gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-white/20 transition-all">
                    <Zap size={20} className="text-yellow-500 shrink-0 mt-1" />
                    <span className="text-lg leading-relaxed">Engineered mechanical lock mechanisms and deadbolt latches in compliance with <b>BHMA Grade 1 standards</b>.</span>
                  </li>
                  <li className="flex gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-white/20 transition-all">
                    <Zap size={20} className="text-yellow-500 shrink-0 mt-1" />
                    <span className="text-lg leading-relaxed">Coordinated global engineering teams to maintain <b>95% on-time delivery</b> across project lifecycle.</span>
                  </li>
                </ul>
              </div>

              <div className="relative group">
                <div className="absolute -left-[56px] top-0 w-8 h-8 bg-slate-800 rounded-full border-4 border-slate-950 group-hover:bg-yellow-500/50 transition-colors"></div>
                <span className="text-slate-500 font-bold text-sm uppercase tracking-widest">Aug 2021 — Dec 2021</span>
                <h3 className="text-3xl font-black text-white mt-2 uppercase tracking-tight italic">Engineering Intern</h3>
                <p className="text-slate-400 font-medium italic text-lg">Bullwork Mobility | Ag-EV Drivetrain</p>
                <ul className="mt-4 text-slate-400 space-y-2">
                  <li className="flex gap-4">
                    <Zap size={16} className="text-yellow-500 shrink-0 mt-1" />
                    <span>Optimized electric agricultural vehicle performance and conducted chassis/roll-cage FEA analysis.</span>
                  </li>
                </ul>
              </div>

              <div className="relative group">
                <div className="absolute -left-[56px] top-0 w-8 h-8 bg-slate-800 rounded-full border-4 border-slate-950 group-hover:bg-yellow-500/50 transition-colors"></div>
                <span className="text-slate-500 font-bold text-sm uppercase tracking-widest">2017 — 2021</span>
                <h3 className="text-3xl font-black text-white mt-2 uppercase tracking-tight italic">BE in Mechanical Engineering</h3>
                <p className="text-slate-400 font-medium italic text-lg">Don Bosco Institute of Technology</p>
                <p className="mt-2 text-slate-500 text-sm">Bachelor's Degree in Mechanical Engineering - Foundation of technical expertise and engineering principles.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'photography' && (
          <section className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-500">
            <div className="mb-16">
              <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight italic">Photography</h2>
              <p className="text-slate-400 max-w-2xl text-lg">
                Capturing moments beyond the drafting board. A collection of trekking adventures, architectural geometry, and natural landscapes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
              {generalPhotos.map((filename, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden bg-slate-900 border border-white/5 hover:border-yellow-500/50 transition-all rounded-xl">
                  <img 
                    src={`/Photos/${filename}`} 
                    alt={filename} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="pt-16 border-t border-white/10">
              <div className="mb-12">
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight italic flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-yellow-500"></div> Dances Of India
                </h3>
                <p className="text-slate-400 max-w-2xl text-lg font-medium italic border-l-2 border-yellow-500/30 pl-6 leading-relaxed">
                  "This is my personal photography project exploring and taking photographs of different art forms."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dancePhotos.map((filename, index) => (
                  <div key={index} className="group relative aspect-square overflow-hidden bg-slate-900 border border-white/5 hover:border-yellow-500/50 transition-all rounded-xl">
                    <img 
                      src={`/Photos/Dances Of India/${filename}`} 
                      alt={filename} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-white/5 py-24 mt-20 bg-slate-950/80 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-widest italic">Let's Connect</h4>
          <p className="text-slate-500 mb-10 max-w-sm mx-auto font-medium leading-relaxed text-lg">
            Seeking Mechanical Engineering Internships for Summer 2026. <br /> Based in Houghton, MI.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <a href="mailto:ckanakamurthy@gmail.com" className="group flex items-center gap-3 text-yellow-500 font-bold border-b-2 border-yellow-500/30 pb-1 hover:text-white hover:border-white transition-all tracking-[0.3em] uppercase text-sm">
              <Mail size={16} /> Email
            </a>
            <a href="https://linkedin.com/in/chethan-nk" target="_blank" className="group flex items-center gap-3 text-yellow-500 font-bold border-b-2 border-yellow-500/30 pb-1 hover:text-white hover:border-white transition-all tracking-[0.3em] uppercase text-sm">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/chethan_kanakamurthy/" target="_blank" className="group flex items-center gap-3 text-yellow-500 font-bold border-b-2 border-yellow-500/30 pb-1 hover:text-white hover:border-white transition-all tracking-[0.3em] uppercase text-sm">
              <Instagram size={16} /> Instagram
            </a>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
             <p className="text-[10px] text-slate-500 uppercase tracking-[0.6em] font-black">
               © 2026 Chethan Nittur Kanakamurthy
             </p>
             <p className="text-[10px] text-slate-500 uppercase tracking-[0.6em] font-black">
               Michigan Tech • Mechanical Systems Design
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;