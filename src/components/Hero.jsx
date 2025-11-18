import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="hero" className="relative min-h-[88vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90 pointer-events-none" />
      <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(251,146,60,0.08),transparent_35%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-orange-300">
            <span className="size-1.5 rounded-full bg-orange-400" /> Live
            <span className="text-slate-300">Robotic Portfolio Dashboard</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Orchestrate your work like a machine
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            A matte-black control center to showcase projects, track metrics, and present your narrative — with playful robotics energy and cinematic depth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-b from-orange-500 to-amber-600 text-slate-950 font-semibold shadow-[0_8px_30px_rgba(251,146,60,0.35)] hover:shadow-[0_8px_35px_rgba(251,146,60,0.5)] transition-shadow">Explore Projects</a>
            <a href="#stats" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/10 text-slate-200 hover:text-white hover:border-white/20">View Metrics</a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <p className="text-3xl font-bold text-white">24</p>
              <p className="text-xs text-slate-400">Shipped Projects</p>
            </div>
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <p className="text-3xl font-bold text-white">5k+</p>
              <p className="text-xs text-slate-400">Users Impacted</p>
            </div>
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <p className="text-3xl font-bold text-white">21</p>
              <p className="text-xs text-slate-400">Open Source PRs</p>
            </div>
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-xs text-slate-400">Curiosity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
