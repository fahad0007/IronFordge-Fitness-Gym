import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  const [notice, setNotice] = useState('')
  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 3200)
  }

  return (
    <>
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <section className="intro-strip">
          <div className="container intro-inner">
            <span className="eyebrow">MORE THAN A GYM</span>
            <p>A stronger body starts with a stronger decision. <strong>Make yours today.</strong></p>
            <a className="text-link" href="#programs">Explore training <span>↗</span></a>
          </div>
        </section>
        <Programs />
        <section className="manifesto">
          <div className="manifesto-image" />
          <div className="manifesto-content">
            <span className="eyebrow">THE IRONFORGE STANDARD</span>
            <h2>NO SHORTCUTS.<br /><em>JUST</em> STRONGER.</h2>
            <p>Progress isn't built in a day. It's built in every session, every rep, and every choice to show up when it would be easier not to.</p>
            <div className="manifesto-points">
              <div><b>01</b><span>Coaching that meets you where you are.</span></div>
              <div><b>02</b><span>Equipment that helps you push further.</span></div>
              <div><b>03</b><span>A community that keeps you accountable.</span></div>
            </div>
            <a href="#membership" className="btn btn-primary">Find your membership <span>↗</span></a>
          </div>
        </section>
        <Trainers />
        <Pricing onChoose={() => showNotice('Thanks for your interest! Contact us to activate your membership.')} />
        <Testimonials />
        <FAQ />
        <section className="final-cta">
          <div className="final-cta-bg" />
          <div className="container final-cta-content">
            <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>READY TO<br /><em>GET AFTER IT?</em></h2>
            <p>One decision can change your routine. Make it count.</p>
            <a href="#contact" className="btn btn-primary">Start your journey <span>↗</span></a>
          </div>
        </section>
      </main>
      <Footer onSubmit={showNotice} />
      {notice && <div className="toast" role="status">{notice}</div>}
      </ThemeProvider>
    </>
  )
}