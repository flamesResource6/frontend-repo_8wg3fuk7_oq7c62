import { Cpu, Rocket, Gauge, CircuitBoard } from 'lucide-react'

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="group rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-orange-500/30 transition-colors">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="size-10 rounded-xl bg-gradient-to-b from-orange-500 to-amber-600 grid place-items-center text-slate-950 shadow-[0_10px_30px_rgba(251,146,60,0.35)]">
            <Icon size={18} />
          </div>
          <div className="absolute -inset-2 rounded-2xl bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div>
          <p className="text-slate-400 text-sm">{label}</p>
          <p className="text-white text-2xl font-semibold mt-0.5">{value}</p>
        </div>
      </div>
    </div>
  )
}

function Stats() {
  return (
    <section id="stats" className="relative py-20">
      <div className="absolute -inset-24 bg-[radial-gradient(circle_at_80%_50%,rgba(251,146,60,0.12),transparent_35%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Mission Metrics</h2>
          <p className="text-slate-400 mt-2">Real-time signals from your creative systems.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Cpu} label="Processing Uptime" value="99.97%" />
          <StatCard icon={Rocket} label="Deploy Velocity" value="14/week" />
          <StatCard icon={Gauge} label="Performance Index" value="A+" />
          <StatCard icon={CircuitBoard} label="Systems Online" value="7" />
        </div>
      </div>
    </section>
  )
}

export default Stats
