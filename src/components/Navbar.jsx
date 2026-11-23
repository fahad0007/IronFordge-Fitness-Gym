import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeSwitcher from "./ThemeSwitcher";

const links = [['Programs', '#programs'], ['Our coaches', '#trainers'], ['Membership', '#membership'], ['FAQ', '#faq']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="Ironforge home"><span className="brand-mark">IF</span><span>IRON<span>FORGE</span><small>FITNESS CLUB</small></span></a>
        <nav className={open ? 'nav-links is-open' : 'nav-links'}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="mobile-join" href="#contact" onClick={() => setOpen(false)}>Join the club <ArrowUpRight size={16} /></a>
        </nav>
        <a className="nav-cta" href="#contact">JOIN THE CLUB <ArrowUpRight size={16} /></a>
          <ThemeSwitcher />
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}