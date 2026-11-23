import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function FAQ() {
  const [active, setActive] = useState(0)
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <SectionHeading eyebrow="GOOD TO KNOW" title="GOT" accent="QUESTIONS?" description="Everything you need to know before your first session." />
        <div className="faq-list">{faqs.map((faq, i) => <article className={`faq-item ${active === i ? 'active' : ''}`} key={faq.q}>
          <button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}><span className="faq-num">0{i + 1}</span><b>{faq.q}</b>{active === i ? <Minus size={18} /> : <Plus size={18} />}</button>
          {active === i && <p>{faq.a}</p>}
        </article>)}</div>
      </div>
    </section>
  )
}