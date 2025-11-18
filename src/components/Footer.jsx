function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-slate-950/60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Robofolio. All systems nominal.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
