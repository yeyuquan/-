import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Strengths } from './components/Strengths'

function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </div>
  )
}

export default App
