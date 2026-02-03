import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Mail, 
  Linkedin, 
  ChevronRight, 
  Award, 
  Settings, 
  Cpu, 
  Menu, 
  X,
  ChevronLeft,
  ArrowRight,
  Zap,
  Target
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-scroll to top when navigating
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
      tags: ["Kinematics", "SolidWorks", "Mechanism Design"]
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
      tags: ["FEA", "Linkage Synthesis", "PDC/PM"]
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
      className={`flex items-center gap-2 px-5 py-2 rounded transition-all cursor-pointer ${
        activeTab === id && !selectedProject 
          ? 'bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest' 
          : 'text-slate-500 hover:text-white hover:bg-white/5 uppercase text-[10px] tracking-widest font-bold'
      }`}
    >
      <Icon size={14} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans antialiased selection:bg-yellow-500 selection:text-black">
      {/* Fallback Styles for Environment Reliability */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-technical {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Engineering Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center text-black font-black text-xl shadow-lg shadow-yellow-500/20">
              CK
            </div>
            <div>
              <h1 className="font-black text-lg leading-none text-white uppercase tracking-tighter">Chethan Nittur Kanakamurthy</h1>
              <p className="text-[9px] text-yellow-500 font-black uppercase tracking-[0.3em] mt-1">Mechanical Systems Engineer</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <NavItem id="home" label="Overview" icon={Target} />
            <NavItem id="portfolio" label="Records" icon={Settings} />
            <NavItem id="experience" label="Timeline" icon={Briefcase} />
          </div>

          <button className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 p-6 flex flex-col gap-4 border-b border-white/10">
            <NavItem id="home" label="Overview" icon={Target} />
            <NavItem id="portfolio" label="Records" icon={Settings} />
            <NavItem id="experience" label="Timeline" icon={Briefcase} />
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20">
        {activeTab === 'home' && !selectedProject && (
          <div className="animate-technical">
            <section className="max-w-6xl mx-auto px-6 py-24 md:py-40">
              <span className="inline-block px-3 py-1 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                MS Mechanical Engineering @ Michigan Tech
              </span>
              <h2 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter uppercase italic">
                Designing for <br /><span className="text-yellow-500 underline decoration-4 underline-offset-16">Resilience.</span>
              </h2>
              <p className="max-w-2xl text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                Focused on bridging kinematic complexity with industrial reliability. 
                Bridging the gap between engineering and organizational leadership.
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => setActiveTab('portfolio')}
                  className="px-10 py-5 bg-yellow-500 text-black font-black uppercase tracking-widest text-xs rounded-sm hover:translate-y-[-2px] transition-all flex items-center gap-3 group cursor-pointer shadow-lg shadow-yellow-500/20"
                >
                  Engineering Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/chethan-nk" target="_blank" className="p-5 bg-white/5 rounded-sm hover:bg-white/10 transition-colors border border-white/10"><Linkedin size={20} /></a>
                  <a href="mailto:ckanakamurthy@gmail.com" className="p-5 bg-white/5 rounded-sm hover:bg-white/10 transition-colors border border-white/10"><Mail size={20} /></a>
                </div>
              </div>
            </section>

            <section className="bg-slate-900/50 border-y border-white/5 py-24">
              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                <div className="p-10 border-l-4 border-yellow-500 bg-white/[0.02]">
                  <h3 className="text-5xl font-black text-white">$300K</h3>
                  <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mt-2">Procurement Savings Achieved</p>
                </div>
                <div className="p-10 border-l-4 border-white/10">
                  <h3 className="text-5xl font-black text-white">95%</h3>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">On-Time Project Delivery</p>
                </div>
                <div className="p-10 border-l-4 border-white/10">
                  <h3 className="text-5xl font-black text-white">100%</h3>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Engagement Increase</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'portfolio' && !selectedProject && (
          <section className="max-w-6xl mx-auto px-6 py-24 animate-technical">
            <h2 className="text-5xl font-black text-white mb-12 uppercase tracking-tighter italic border-b-4 border-yellow-500 w-fit pb-2">Records</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-slate-900 border border-white/5 hover:border-yellow-500/50 transition-all cursor-pointer flex flex-col"
                >
                  <div className="h-64 overflow-hidden relative bg-black">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tags.map(t => (
                        <span key={t} className="px-2 py-1 bg-yellow-500 text-black text-[9px] font-black uppercase tracking-tighter">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-white mb-3 leading-none uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-8">{project.subtitle}</p>
                    <div className="flex items-center gap-3 text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em]">
                      Read Technical Case <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedProject && (
          <div className="animate-technical pb-32">
            <div className="bg-slate-900 border-b border-white/10 py-24">
              <div className="max-w-4xl mx-auto px-6">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-slate-500 hover:text-white mb-10 transition-colors uppercase font-black text-[10px] tracking-widest cursor-pointer group"
                >
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Return to Archives
                </button>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none italic">{selectedProject.title}</h2>
                <div className="px-4 py-2 bg-yellow-500 text-black font-black uppercase tracking-widest text-[10px] w-fit">
                  {selectedProject.subtitle}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20 space-y-24">
              <div className="grid md:grid-cols-12 gap-16">
                <div className="md:col-span-8 space-y-16">
                  <section className="space-y-6">
                    <h4 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.4em] flex items-center gap-4">
                      <div className="w-10 h-[1px] bg-yellow-500"></div> THE CHALLENGE
                    </h4>
                    <p className="text-2xl text-slate-300 italic font-medium leading-relaxed">{selectedProject.context}</p>
                  </section>

                  <section className="space-y-6">
                    <h4 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.4em] flex items-center gap-4">
                      <div className="w-10 h-[1px] bg-yellow-500"></div> MECHANICAL ANALYSIS
                    </h4>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">{selectedProject.mechanism}</p>
                    <div className="mt-10 border border-white/10 bg-black aspect-video flex items-center justify-center text-slate-700 uppercase font-black tracking-widest text-[10px]">
                       [ CAD VISUALIZATION ARCHIVE ]
                    </div>
                  </section>
                </div>

                <aside className="md:col-span-4 space-y-12">
                  <section className="p-8 border border-white/10 bg-white/[0.01] space-y-8">
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">ROLES</h4>
                    <ul className="space-y-4">
                      {selectedProject.role.map((r, i) => (
                        <li key={i} className="flex gap-4 text-xs text-slate-400 font-bold uppercase tracking-tight italic">
                          <span className="text-yellow-500">0{i+1}.</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="p-8 bg-yellow-500/5 border border-yellow-500/20 space-y-8">
                    <h4 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.4em]">VALIDATION</h4>
                    <ul className="space-y-5">
                      {selectedProject.results.map((res, i) => (
                        <li key={i} className="flex gap-4 text-xs text-white font-black uppercase tracking-widest leading-none">
                          <Zap size={14} className="text-yellow-500 shrink-0" />
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
          <section className="max-w-4xl mx-auto px-6 py-24 animate-technical">
             <div className="mb-24">
              <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic border-b-4 border-yellow-500 w-fit pb-2">Timeline</h2>
            </div>

            <div className="space-y-24 relative border-l border-white/10 ml-4 pl-12">
              <div className="relative">
                <div className="absolute -left-[57px] top-1 w-5 h-5 bg-yellow-500 rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                <span className="text-yellow-500 font-black text-[10px] uppercase tracking-[0.5em]">2025 — PRESENT</span>
                <h3 className="text-4xl font-black text-white mt-4 uppercase italic tracking-tighter">MS Mechanical Engineering</h3>
                <p className="text-slate-500 font-black uppercase tracking-widest text-xs mt-2">Michigan Technological University</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[57px] top-1 w-5 h-5 bg-slate-800 rounded-full border-4 border-slate-950"></div>
                <span className="text-slate-500 font-black text-[10px] uppercase tracking-[0.5em]">JULY 2022 — JULY 2025</span>
                <h3 className="text-4xl font-black text-white mt-4 uppercase italic tracking-tighter">Associate Mechanical Engineer</h3>
                <p className="text-yellow-500 font-black uppercase tracking-widest text-xs mt-2">Allegion India | Bengaluru</p>
                <ul className="mt-8 space-y-6 text-slate-400">
                  <li className="flex gap-4 p-6 bg-white/[0.02] border border-white/5">
                    <Zap size={18} className="text-yellow-500 shrink-0" />
                    <span className="text-lg font-medium italic">Achieved <b>$300K savings</b> in Phase 1 through strategic localization and procurement.</span>
                  </li>
                  <li className="flex gap-4 p-6 bg-white/[0.02] border border-white/5">
                    <Zap size={18} className="text-yellow-500 shrink-0" />
                    <span className="text-lg font-medium italic">Maintained <b>95% on-time delivery</b> across Zion and Martha product lines.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="py-32 px-6 border-t border-white/10 text-center bg-slate-900/50 mt-32">
        <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter italic">Chethan Nittur Kanakamurthy</h4>
        <p className="text-slate-700 uppercase font-black tracking-[0.6em] text-[10px] mt-6">Mechanical Systems Design • Michigan Tech • 2026</p>
      </footer>
    </div>
  );
};

export default App;