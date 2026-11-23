import { ArrowUpRight } from 'lucide-react'
import { trainers } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Trainers() {
  return (
    <section className="section trainers-section" id="trainers">
      <div className="container">
        <SectionHeading eyebrow="PEOPLE WHO PUSH YOU FORWARD" title="MEET YOUR" accent="CORNER TEAM." description="Good coaching changes everything. Meet the people who bring knowledge, energy, and accountability to every session." number="02 / 04" />
        <div className="trainer-grid">
          {trainers.map((trainer, i) => <article className="trainer-card" key={trainer.name}>
            <div className="trainer-image"><img src={trainer.image} alt={trainer.name} loading="lazy" /><span>0{i + 1}</span><a href="#contact" aria-label={`Ask about training with ${trainer.name}`}><ArrowUpRight size={19} /></a></div>
            <div className="trainer-info"><div><h3>{trainer.name}</h3><p>{trainer.specialty}</p></div><span>{trainer.role}</span></div>
          </article>)}
        </div>
      </div>
    </section>
  )
}