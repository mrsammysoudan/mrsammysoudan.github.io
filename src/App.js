import { useState, useEffect, useRef } from 'react'
import { projects, skills } from './portfolio'
import './App.css'

const imagePath = (name) => `/images/projects/${name}`
const Arrow = () => <span aria-hidden='true'>↗</span>
function ProjectDetail({ project, onClose }) {
  const [slide, setSlide] = useState(0)
  const closeRef = useRef(null)
  const modalRef = useRef(null)
  useEffect(() => {
    const previous = document.activeElement
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current.focus()
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const nodes = modalRef.current.querySelectorAll(
          'a[href],button:not([disabled]),[tabindex="0"]'
        )
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = oldOverflow
      document.removeEventListener('keydown', handleKey)
      previous?.focus()
    }
  }, [onClose])
  const shot = project.images[slide]
  return (
    <div className='modal-backdrop'>
      <section
        className={`project-modal ${project.id}`}
        role='dialog'
        aria-modal='true'
        aria-labelledby='detail-title'
        ref={modalRef}
      >
        <div className='modal-bar'>
          <span className='eyebrow'>A closer look / {project.category}</span>
          <button
            type='button'
            ref={closeRef}
            className='close-button'
            onClick={onClose}
            aria-label='Close project'
          >
            ×
          </button>
        </div>
        <div className='modal-title'>
          <p className='eyebrow'>{project.type}</p>
          <h2 id='detail-title'>
            {project.name}
            <span>.</span>
          </h2>
          <p>{project.line}</p>
        </div>
        {shot && (
          <figure
            className={`detail-gallery ${
              project.category === 'Mobile' ? 'portrait-gallery' : ''
            }`}
          >
            <img src={imagePath(shot.src)} alt={shot.alt} />
            <figcaption>{shot.caption}</figcaption>
            {project.images.length > 1 && (
              <div className='gallery-tabs' aria-label='Project screenshots'>
                {project.images.map((im, i) => (
                  <button
                    type='button'
                    key={im.src}
                    aria-pressed={slide === i}
                    onClick={() => setSlide(i)}
                  >
                    Screen {i + 1}
                  </button>
                ))}
              </div>
            )}
          </figure>
        )}
        <div className='detail-body'>
          <aside>
            <span className='eyebrow'>My role</span>
            <p>{project.role}</p>
            <span className='eyebrow'>When</span>
            <p>{project.period}</p>
            <div className='tags'>
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </aside>
          <div>
            <h3>The work</h3>
            <p>{project.story}</p>
            <h3>What I worked on</h3>
            <ul>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className='project-note'>{project.note}</p>
            {project.link && (
              <a
                className='button primary'
                href={project.link}
                target='_blank'
                rel='noreferrer'
              >
                {project.linkLabel}
                <Arrow />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
function ProjectVisual({ project }) {
  if (project.id === 'tailorcv')
    return (
      <div className='project-visual tailor-visual'>
        <div className='browser-frame'>
          <div className='browser-bar'>
            <i />
            <i />
            <i />
            <span>tailorcv.</span>
          </div>
          <img
            src={imagePath(project.images[0].src)}
            alt={project.images[0].alt}
            loading='lazy'
            width='1440'
            height='1000'
          />
        </div>
        <span className='visual-caption'>
          WEB APPLICATION / REACT + TYPESCRIPT
        </span>
      </div>
    )
  if (project.id === 'dishify' || project.id === 'roxfit')
    return (
      <div className={`project-visual phone-scene ${project.id}-visual`}>
        <div className='phone phone-back'>
          <img
            src={imagePath(project.images[1].src)}
            alt={project.images[1].alt}
            loading='lazy'
          />
        </div>
        <div className='phone phone-front'>
          <img
            src={imagePath(project.images[0].src)}
            alt={project.images[0].alt}
            loading='lazy'
          />
        </div>
        <span className='visual-caption'>
          {project.id === 'dishify'
            ? 'FROM IDEA TO APP STORE'
            : 'MOBILE / NATIVE / WEARABLES'}
        </span>
      </div>
    )
  if (project.id === 'ailoupe')
    return (
      <div className='project-visual material-visual'>
        <img
          src={imagePath(project.images[0].src)}
          alt={project.images[0].alt}
          loading='lazy'
        />
        <span className='visual-caption'>
          MATERIAL INTELLIGENCE / PROJECT DESIGN
        </span>
      </div>
    )
  return (
    <div
      className={`project-visual typographic-visual ${project.id}-visual`}
      aria-hidden='true'
    >
      <span className='lab-index'>
        {project.id === 'wellbeing' ? '05 / RESEARCH' : '06 / PROTOTYPE'}
      </span>
      <span className='lab-symbol'>
        {project.id === 'wellbeing' ? '↝' : '↔'}
      </span>
      <p>
        {project.id === 'wellbeing'
          ? 'Observe.\nUnderstand.\nExplore.'
          : 'A place for\nconnection.'}
      </p>
      <span className='visual-caption'>
        {project.id === 'wellbeing'
          ? 'DATA → INTERFACE'
          : 'LOCAL STATE ↔ SHARED SPACES'}
      </span>
    </div>
  )
}
function App() {
  const [filter, setFilter] = useState('All work')
  const [selected, setSelected] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const filtered =
    filter === 'All work'
      ? projects
      : projects.filter((p) => p.category === filter)
  const closeModal = useRef(() => setSelected(null)).current
  return (
    <>
      <a className='skip-link' href='#main'>
        Skip to content
      </a>
      <header className='site-header'>
        <a href='#top' className='wordmark' aria-label='Sammy Soudan home'>
          <span className='monogram'>
            s<span>.</span>
          </span>
          <span>
            Sammy
            <br />
            Soudan
          </span>
        </a>
        <button
          type='button'
          className='menu-toggle'
          aria-expanded={menuOpen}
          aria-controls='site-nav'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          id='site-nav'
          className={menuOpen ? 'is-open' : ''}
          aria-label='Main navigation'
        >
          <a href='#work' onClick={() => setMenuOpen(false)}>
            Selected work
          </a>
          <a href='#about' onClick={() => setMenuOpen(false)}>
            About me
          </a>
          <a
            href='https://github.com/mrsammysoudan'
            target='_blank'
            rel='noreferrer'
          >
            GitHub <Arrow />
          </a>
          <a
            className='nav-contact'
            href='#contact'
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>
      <main id='main'>
        <section id='top' className='hero container'>
          <div className='hero-copy'>
            <p className='eyebrow'>
              <span className='status-dot' /> SOFTWARE ENGINEER · LONDON
            </p>
            <h1>
              Thoughtful
              <br />
              interfaces.
              <br />
              <em>Real-world</em>
              <br />
              software.
            </h1>
            <p className='hero-description'>
              I’m Sammy. I build products that make complex things feel simple —
              across the web, mobile and the systems behind them.
            </p>
            <div className='hero-actions'>
              <a href='#work' className='button primary'>
                Explore my work <span aria-hidden='true'>↓</span>
              </a>
              <a
                className='text-link'
                href='https://www.linkedin.com/in/sammy-soudan/'
                target='_blank'
                rel='noreferrer'
              >
                Find me on LinkedIn <Arrow />
              </a>
            </div>
          </div>
          <div className='hero-art'>
            <div className='hero-grid' aria-hidden='true' />
            <span className='art-label'>FROM THE WORKBENCH</span>
            <div className='hero-web'>
              <div className='browser-bar'>
                <i />
                <i />
                <i />
                <span>tailorcv.</span>
              </div>
              <img
                src={imagePath('tailorcv-home.webp')}
                alt='TailorCV: a React and TypeScript CV builder'
                width='1440'
                height='1000'
              />
            </div>
            <div className='hero-phone'>
              <img
                src={imagePath('dishify-recipes.webp')}
                alt='Dishify: recipe discovery in the iOS app'
                width='874'
                height='1900'
              />
            </div>
            <div className='hero-sticker'>
              <span aria-hidden='true'>✳</span> Frontend craft.
              <br />
              Full-stack thinking.
            </div>
            <div className='hero-art-footer'>
              <span>Web ↔ Mobile ↔ AI</span>
              <span>Built by Sammy / 2026</span>
            </div>
          </div>
        </section>
        <div className='proof-strip container'>
          <div>
            <strong>600k</strong>
            <p>
              users on ROXFIT,
              <br />
              where I contribute as an engineer
            </p>
          </div>
          <div>
            <strong>1st class</strong>
            <p>
              BSc Computer Science & AI
              <br />
              Brunel University, 2024
            </p>
          </div>
          <div>
            <strong>Idea → launch</strong>
            <p>
              Independent products,
              <br />
              from interface to infrastructure
            </p>
          </div>
        </div>
        <section
          id='work'
          className='work-section container'
          aria-labelledby='work-title'
        >
          <div className='section-heading'>
            <div>
              <p className='eyebrow'>01 / SELECTED WORK</p>
              <h2 id='work-title'>
                More than
                <br />
                <em>a screen.</em>
              </h2>
            </div>
            <p>
              A selection of products I’ve built, professional work I’ve
              contributed to, and ideas I’ve explored.
            </p>
          </div>
          <div className='filter-bar' role='group' aria-label='Filter projects'>
            {['All work', 'Web', 'Mobile', 'Research'].map((f) => (
              <button
                type='button'
                key={f}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
                <span>
                  {f === 'All work'
                    ? projects.length
                    : projects.filter((p) => p.category === f).length}
                </span>
              </button>
            ))}
            <span className='filter-caption' aria-live='polite'>
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}{' '}
              to explore
            </span>
          </div>
          <div className='projects-grid'>
            {filtered.map((project) => (
              <article
                className={`project-card ${project.id}`}
                key={project.id}
              >
                <button
                  type='button'
                  className='visual-button'
                  onClick={() => setSelected(project)}
                  aria-label={`Explore ${project.name}`}
                >
                  <ProjectVisual project={project} />
                  <span className='open-project' aria-hidden='true'>
                    ↗
                  </span>
                </button>
                <div className='project-copy'>
                  <div className='project-meta'>
                    <span>{project.type}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>
                    <button type='button' onClick={() => setSelected(project)}>
                      {project.name}
                      <Arrow />
                    </button>
                  </h3>
                  <p>{project.summary}</p>
                  <div className='tags'>
                    {project.stack.slice(0, 4).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <button
                    type='button'
                    className='text-link case-link'
                    onClick={() => setSelected(project)}
                  >
                    Inside the project <Arrow />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className='workshop container'
          aria-labelledby='workshop-title'
        >
          <div>
            <p className='eyebrow'>ALSO ON MY WORKBENCH</p>
            <h2 id='workshop-title'>
              Better tools.
              <br />
              Better building.
            </h2>
          </div>
          <div>
            <h3>Design-to-development tooling</h3>
            <p>
              I built a Figma plugin that turns selected frames into structured
              implementation prompts, grounded in real design tokens. It
              connects layout, component names and intended behaviour so
              AI-assisted development starts with better context.
            </p>
            <div className='tags'>
              <span>Figma Plugin API</span>
              <span>JavaScript</span>
              <span>Design tokens</span>
              <span>Internal tooling</span>
            </div>
          </div>
        </section>
        <section id='about' className='about-section'>
          <div className='container about-grid'>
            <div>
              <p className='eyebrow'>02 / A LITTLE ABOUT ME</p>
              <h2>
                Close to the user.
                <br />
                <em>Across the stack.</em>
              </h2>
              <p className='about-lead'>
                My strongest work starts at the interface. My curiosity takes me
                all the way through the product.
              </p>
              <p>
                I’m a London-based software engineer with a first-class degree
                in Computer Science & Artificial Intelligence from Brunel. I’ve
                built independent products, worked in applied AI research, and
                now contribute to ROXFIT’s mobile platform.
              </p>
              <p>
                I enjoy the details that make software feel considered: a clear
                flow, a responsive interaction, a useful error state. I’m
                equally comfortable following those decisions into an API, a
                database or a native integration.
              </p>
              <div className='personal-note'>
                <span aria-hidden='true'>♫</span>
                <p>
                  Outside the editor, I’m a pianist and music producer. The same
                  care for rhythm and detail finds its way into my interfaces.
                </p>
              </div>
            </div>
            <div className='skills-panel'>
              <p className='eyebrow'>MY TOOLKIT</p>
              {skills.map((s) => (
                <div className='skill-group' key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
              <p className='skills-note'>
                Used across professional work and independent projects. Project
                details show the context.
              </p>
            </div>
          </div>
        </section>
        <section
          className='experience container'
          aria-labelledby='experience-title'
        >
          <div>
            <p className='eyebrow'>THE PATH SO FAR</p>
            <h2 id='experience-title'>
              Built through
              <br />
              doing.
            </h2>
          </div>
          <div className='timeline'>
            <article>
              <span>2025 — NOW</span>
              <div>
                <h3>ROXFIT</h3>
                <p>
                  Software engineering · mobile, native integrations and backend
                  services.
                </p>
              </div>
            </article>
            <article>
              <span>2023 — NOW</span>
              <div>
                <h3>Independent products</h3>
                <p>
                  Dishify, TailorCV and hands-on experiments across mobile, web
                  and AI.
                </p>
              </div>
            </article>
            <article>
              <span>2024 — 2025</span>
              <div>
                <h3>AiDLab</h3>
                <p>
                  Research software · material intelligence and cross-platform
                  visual interfaces.
                </p>
              </div>
            </article>
            <article>
              <span>MAY 2024</span>
              <div>
                <h3>Brunel University</h3>
                <p>
                  First-class BSc Computer Science & AI. Software Innovation
                  Award winner for Dishify.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id='contact' className='contact-section'>
          <div className='container contact-inner'>
            <p className='eyebrow'>03 / WHAT’S NEXT?</p>
            <h2>
              Something good
              <br />
              starts with <em>hello.</em>
            </h2>
            <p>
              Have a product to build, an interface to rethink,
              <br />
              or an interesting engineering role? Let’s talk.
            </p>
            <a className='contact-email' href='mailto:mr.sammysoudan@gmail.com'>
              mr.sammysoudan@gmail.com <Arrow />
            </a>
            <div className='contact-links'>
              <a
                href='https://www.linkedin.com/in/sammy-soudan/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn <Arrow />
              </a>
              <a
                href='https://github.com/mrsammysoudan'
                target='_blank'
                rel='noreferrer'
              >
                GitHub <Arrow />
              </a>
              <a href='mailto:mr.sammysoudan@gmail.com?subject=CV%20request'>
                Request my CV <Arrow />
              </a>
            </div>
          </div>
          <span className='contact-star' aria-hidden='true'>
            ✳
          </span>
        </section>
      </main>
      <footer className='container'>
        <a className='footer-name' href='#top'>
          Sammy Soudan<span>.</span>
        </a>
        <span>London, UK · © {new Date().getFullYear()}</span>
        <a href='#top'>Back to top ↑</a>
      </footer>
      {selected && (
        <ProjectDetail
          key={selected.id}
          project={selected}
          onClose={closeModal}
        />
      )}
    </>
  )
}
export default App
