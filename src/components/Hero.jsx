import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-photo" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-kicker"><span className="live-dot" /> BUILT FOR THE WORK</div>
        <h1>TRAIN<br /><em>BEYOND</em><br />LIMITS<span className="hero-period">.</span></h1>
        <div className="hero-bottom">
          <p>Stronger every session.<br />Better every version of you.</p>
          <div className="hero-actions">
            <a href="#membership" className="btn btn-primary">Explore memberships <ArrowUpRight size={17} /></a>
            <a href="#programs" className="hero-scroll"><span className="scroll-icon"><ArrowDown size={16} /></span> SCROLL TO EXPLORE</a>
          </div>
        </div>
      </div>
      <div className="hero-side-label">EST. 2018 — BUILT ON DISCIPLINE</div>
      <div className="hero-index">01 <span /> 06</div>
    </section>
  )
}