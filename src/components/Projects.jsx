import { ExternalLink, FolderGit2, Star, BadgeCheck } from 'lucide-react'

const projects = [
  {
    title: 'NeuroUI Kit',
    desc: 'A headless React kit for ultra-fast interface prototyping with robotic precision.',
    stars: 1240,
    link: '#'
  },
  {
    title: 'Orbital Tasker',
    desc: 'An offline-first task system with sync protocols and delightful micro-interactions.',
    stars: 860,
    link: '#'
  },
  {
    title: 'Signal Studio',
    desc: 'A real-time viz toolkit for metrics, traces, and signals with GPU acceleration.',
    stars: 1530,
    link: '#'
  }
]

function ProjectCard({ p }) {
  return (
    <div className="group rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-orange-500/30 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-0.5 text-[10px] text-orange-300">
            <FolderGit2 size={12} /> repository
          </div>
          <h3 className="mt-3 text-white text-xl font-semibold">{p.title}</h3>
          <p className="text-slate-400 text-sm mt-1.5">{p.desc}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1"><Star className="text-amber-400" size={14} /> {p.stars.toLocaleString()}</span>
            <span className="inline-flex items-center gap-1"><BadgeCheck className="text-emerald-400" size={14} /> stable</span>
          </div>
        </div>
        <a href={p.link} className="shrink-0 inline-flex items-center justify-center size-10 rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 hover:text-white" aria-label="Open project">
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_0%,rgba(251,146,60,0.12),transparent_35%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Systems</h2>
            <p className="text-slate-400 mt-2">Battle-tested builds with clean abstractions and sharp edges.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-b from-orange-500 to-amber-600 text-slate-950 font-semibold shadow-[0_8px_30px_rgba(251,146,60,0.35)]">View GitHub</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
