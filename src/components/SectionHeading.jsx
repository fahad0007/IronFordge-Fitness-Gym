export default function SectionHeading({ eyebrow, title, accent, description, number }) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title} <em>{accent}</em></h2></div>
      <div className="heading-side">{description && <p>{description}</p>}{number && <span className="section-number">{number}</span>}</div>
    </div>
  )
}