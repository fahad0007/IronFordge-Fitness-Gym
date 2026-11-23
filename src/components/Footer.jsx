import { useState } from 'react'
import { ArrowUpRight, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer({ onSubmit }) {
  const [email, setEmail] = useState('')
  const submit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    onSubmit(`Thanks! ${email} has been added to the demo enquiry list.`)
    setEmail('')
  }
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">IF</span><span>IRON<span>FORGE</span><small>FITNESS CLUB</small></span></a><p>Show up. Put in the work.<br />Leave stronger than you came.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram /></a><a href="https://facebook.com" aria-label="Facebook"><Facebook /></a><a href="https://youtube.com" aria-label="YouTube"><Youtube /></a></div></div>
          <div className="footer-news"><span className="eyebrow">STAY IN THE LOOP</span><h3>GOOD ENERGY.<br /><em>IN YOUR INBOX.</em></h3><form onSubmit={submit}><input type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} aria-label="Your email address" /><button aria-label="Submit email"><ArrowUpRight /></button></form><small>Training tips, club news, and member stories. No spam.</small></div>
          <div className="footer-contact"><span className="eyebrow">COME SAY HELLO</span><p><MapPin size={17} /> 24 Fitness Avenue, Allahabad</p><p><Phone size={17} /> +91 9876543210</p><p><Mail size={17} /> hello@ironforge.fit</p><span className="hours">MON – SAT &nbsp; 5:30 AM – 10 PM<br />SUNDAY &nbsp; 7 AM – 2 PM</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} IRONFORGE FITNESS CLUB</span><span>BUILT ON DISCIPLINE. POWERED BY YOU.</span><a href="#home">BACK TO TOP ↑</a></div>
      </div>
    </footer>
  )
}