import { Check, ArrowUpRight } from 'lucide-react'
import { plans } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Pricing({ onChoose }) {
  return (
    <section className="section pricing-section" id="membership">
      <div className="container">
        <SectionHeading eyebrow="INVEST IN YOURSELF" title="PICK YOUR" accent="PACE." description="Straightforward memberships. Serious value. Choose the level that fits your goals." number="03 / 04" />
        <div className="pricing-grid">
          {plans.map(plan => <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
            {plan.featured && <span className="popular-label">MOST POPULAR</span>}
            <span className="plan-name">{plan.name}</span><p className="plan-desc">{plan.description}</p>
            <div className="price"><span>₹</span>{plan.price}<small>{plan.period}</small></div>
            <div className="price-divider" />
            <ul>{plan.features.map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
            <button className={plan.featured ? 'btn btn-primary' : 'btn btn-outline'} onClick={onChoose}>Choose {plan.name.toLowerCase()} <ArrowUpRight size={17} /></button>
          </article>)}
        </div>
        <p className="pricing-note">* Sample pricing for layout demonstration. Update rates and terms before publishing.</p>
      </div>
    </section>
  )
}