import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <main>
        <Stats />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
