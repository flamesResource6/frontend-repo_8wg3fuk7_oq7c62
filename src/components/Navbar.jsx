import { Menu, Github, Linkedin, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="size-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 shadow-[0_0_35px_rgba(245,158,11,0.45)] grid place-items-center">
                <Sparkles className="text-slate-950" size={18} />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-orange-500/10 blur-xl" aria-hidden />
            </div>
            <div>
              <p className="text-white font-semibold leading-tight tracking-tight">ROBOFOLIO</p>
              <p className="text-xs text-orange-300/80 -mt-0.5">Autonomous Portfolio Console</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#hero" className="text-slate-300 hover:text-white transition-colors">Overview</a>
            <a href="#stats" className="text-slate-300 hover:text-white transition-colors">Metrics</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-slate-200 hover:text-white hover:border-white/20 transition-colors">
              <Github size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-slate-200 hover:text-white hover:border-white/20 transition-colors">
              <Linkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <button className="md:hidden inline-flex items-center justify-center size-9 rounded-lg border border-white/10 text-slate-200 hover:text-white">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
