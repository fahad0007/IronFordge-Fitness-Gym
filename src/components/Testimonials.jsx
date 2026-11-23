import { Quote } from 'lucide-react'
import { testimonials } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHeading eyebrow="REAL PEOPLE. REAL PROGRESS." title="THE WORK" accent="SPEAKS." description="The best part of what we do is seeing members discover what they're capable of." />
        <div className="testimonial-grid">
          {testimonials.map(item => <article className="testimonial-card" key={item.name}><Quote size={25} /><p>“{item.quote}”</p><div className="member"><span>{item.initials}</span><div><b>{item.name}</b><small>{item.detail}</small></div></div></article>)}
        </div>
      </div>
    </section>
  )
}