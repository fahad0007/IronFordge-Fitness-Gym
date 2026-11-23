import { ArrowUpRight } from 'lucide-react'
import { programs } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Programs() {
  return (
    <section className="section programs-section" id="programs">
      <div className="container">
        <SectionHeading eyebrow="FIND YOUR EDGE" title="TRAINING THAT" accent="MOVES YOU." description="Whether you're here to get stronger, move better, or find your rhythm — there's a place for you here." number="01 / 04" />
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.number}>
              <img src={program.image} alt="" loading="lazy" />
              <div className="program-overlay" />
              <div className="program-top"><span>{program.number}</span><span className="program-tag">{program.tag}</span></div>
              <div className="program-info"><h3>{program.title}</h3><p>{program.description}</p><a href="#contact" aria-label={`Enquire about ${program.title}`}><ArrowUpRight size={20} /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}