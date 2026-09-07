import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MoveUpRight,
  Palette,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

type Skill = { name: string; value: number; color: string }

const skills: Skill[] = [
  { name: 'React / Next.js', value: 92, color: 'cyan' },
  { name: 'TypeScript', value: 88, color: 'violet' },
  { name: 'UI / UX Design', value: 86, color: 'cyan' },
  { name: 'JavaScript', value: 90, color: 'violet' },
  { name: 'Tailwind CSS', value: 94, color: 'cyan' },
  { name: 'Git & GitHub', value: 82, color: 'violet' },
]

const projects = [
  { title: 'Nexa Commerce', category: 'E-commerce', description: 'A conversion-focused storefront with a crisp product experience and flexible CMS blocks.', tags: ['Next.js', 'Stripe', 'Tailwind'], image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85', github: 'https://github.com/korezxyweb', live: 'https://github.com/korezxyweb' },
  { title: 'Pulse Dashboard', category: 'SaaS Dashboard', description: 'A data-rich analytics workspace that turns complex metrics into decisive moments.', tags: ['React', 'TypeScript', 'Charts'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85', github: 'https://github.com/korezxyweb', live: 'https://github.com/korezxyweb' },
  { title: 'Lumen Studio', category: 'Creative Platform', description: 'A calm, expressive home for a studio building unforgettable digital products.', tags: ['React', 'Motion', 'Design'], image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85', github: 'https://github.com/korezxyweb', live: 'https://github.com/korezxyweb' },
]

const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Problem Solver']

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const skillsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const current = roles[roleIndex]
    const delay = deleting ? 45 : typedRole === current ? 1700 : 85
    const timer = window.setTimeout(() => {
      if (!deleting && typedRole === current) setDeleting(true)
      else if (deleting && typedRole === '') { setDeleting(false); setRoleIndex((i) => (i + 1) % roles.length) }
      else setTypedRole(current.slice(0, typedRole.length + (deleting ? -1 : 1)))
    }, delay)
    return () => window.clearTimeout(timer)
  }, [typedRole, deleting, roleIndex])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setSkillsVisible(entry.isIntersecting), { threshold: 0.25 })
    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact']
    const onScroll = () => {
      const current = sections.find((id) => { const el = document.getElementById(id); return el && window.scrollY >= el.offsetTop - 180 })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = useMemo(() => ['home', 'about', 'skills', 'projects', 'contact'], [])
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMobileOpen(false) }
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `Hi Korezxy, I'm ${data.get('name')}. ${data.get('message')}`
    window.open(`https://wa.me/2348167526464?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setFormSent(true); event.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav glass" aria-label="Main navigation">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Korezxy home"><span>K</span><strong>Korezxy</strong><small>.</small></button>
          <div className={`nav-links ${mobileOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => <button key={item} className={activeSection === item ? 'active' : ''} onClick={() => scrollTo(item)}>{item}</button>)}
            <button className="nav-cta" onClick={() => scrollTo('contact')}>Let&apos;s talk <ArrowUpRight size={15} /></button>
          </div>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for new projects</p>
            <h1>Building digital<br /><em>experiences</em> that<br />matter.</h1>
            <p className="hero-intro">I&apos;m Korezxy — a <strong>{typedRole}<span className="cursor" /></strong> crafting thoughtful interfaces and scalable products for the web.</p>
            <div className="hero-actions"><button className="button primary" onClick={() => scrollTo('projects')}>See my work <ArrowUpRight size={17} /></button><button className="text-link" onClick={() => scrollTo('contact')}>Let&apos;s connect <span>→</span></button></div>
          </div>
          <div className="hero-art" aria-label="Abstract colorful digital artwork"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-core"><Sparkles size={28} /></div><div className="art-chip chip-one">&lt; / &gt;</div><div className="art-chip chip-two">✦</div><div className="art-label">design × code</div></div>
          <div className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={16} /></div>
        </section>

        <section id="about" className="about section-pad section-grid"><div className="section-label">01 / About me</div><div className="about-content"><h2>Turning ideas into <span>impact.</span></h2><p>I believe the best digital products live at the intersection of <strong>clarity, creativity, and craft.</strong> With a background in engineering and a love for design, I build experiences that are as beautiful as they are functional.</p><p>When I&apos;m not writing code, you&apos;ll find me exploring new ideas, sketching interfaces, or learning something I didn&apos;t know yesterday.</p><div className="signature">Korezxy <span>✳</span></div></div></section>

        <section id="skills" className="skills section-pad section-grid" ref={skillsRef}><div className="section-label">02 / What I do</div><div className="skills-content"><h2>Skills that <span>ship.</span></h2><p className="section-lead">A toolkit built for turning ambitious ideas into polished, performant products.</p><div className="skill-list">{skills.map((skill) => <div className="skill-row" key={skill.name}><div className="skill-meta"><span>{skill.name}</span><b>{skillsVisible ? skill.value : 0}%</b></div><div className="meter"><span className={`${skill.color} ${skillsVisible ? 'filled' : ''}`} style={{ '--width': `${skill.value}%` } as CSSProperties} /></div></div>)}</div></div></section>

        <section id="projects" className="projects section-pad"><div className="projects-heading"><div><div className="section-label">03 / Selected work</div><h2>Things I&apos;ve <span>built.</span></h2></div><p>Some of my favorite problems solved with code, curiosity, and a little bit of magic.</p></div><div className="project-grid">{projects.map((project, index) => <article className={`project-card ${index === 0 ? 'featured' : ''}`} key={project.title}><div className="project-image"><img src={project.image} alt="" /><div className="project-overlay"><a href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><MoveUpRight size={20} /></a></div></div><div className="project-info"><div className="project-title"><div><small>{project.category}</small><h3>{project.title}</h3></div><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><Github size={19} /></a></div><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><button className="button outline projects-button" onClick={() => window.open('https://github.com/korezxyweb', '_blank', 'noopener,noreferrer')}>View all projects <ArrowUpRight size={17} /></button></section>

        <section id="contact" className="contact section-pad"><div className="contact-card"><div className="contact-copy"><div className="section-label">04 / Get in touch</div><h2>Have a project<br />in mind?</h2><p>Let&apos;s talk about how we can make it happen. I&apos;m always open to new ideas and interesting conversations.</p><div className="contact-links"><a href="mailto:korezxy@gmail.com"><Mail size={17} /> korezxy@gmail.com</a><a href="https://wa.me/2348167526464" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp me</a></div></div><form className="contact-form" onSubmit={submitContact}><label>Name<input name="name" placeholder="Your name" required /></label><label>Message<textarea name="message" placeholder="Tell me a little about your project..." required /></label><button className="button primary" type="submit">Send message <Send size={16} /></button>{formSent && <p className="form-success"><Check size={15} /> Opening WhatsApp message…</p>}</form></div></section>
      </main>

      <footer className="footer"><div className="footer-brand"><span>K</span> Korezxy</div><p>Designed & built with intention.</p><div className="socials"><a href="https://github.com/korezxyweb" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:korezxy@gmail.com" aria-label="Email"><Mail size={18} /></a><a href="https://wa.me/2348167526464" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a></div><small>© 2025 Korezxy. All rights reserved.</small></footer>
    </div>
  )
}

export default App
