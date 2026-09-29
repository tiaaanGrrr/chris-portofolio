import { useEffect, useState } from 'react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

const skillGroups = [
  {
    number: '01',
    title: 'AI & automation',
    description:
      'Using Python with OpenCV and NumPy to explore intelligent systems, practical computer vision, and useful automation.',
    skills: ['Python', 'OpenCV', 'NumPy'],
    tone: 'lime',
  },
  {
    number: '02',
    title: 'Web development',
    description:
      'Building clear, responsive web experiences from interface to server-side logic.',
    skills: ['JavaScript', 'PHP', 'HTML', 'CSS'],
    tone: 'paper',
  },
  {
    number: '03',
    title: 'Core programming',
    description:
      'Strengthening low-level thinking, problem solving, and programming fundamentals with C.',
    skills: ['C'],
    tone: 'dark',
  },
]

function ArrowIcon({ direction = 'up' }) {
  return (
    <svg
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4.5 15.5 15.5 4.5M7 4.5h8.5V13" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.82 7.3L3 20l1.24-4.53A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.2 9.2c.8 3 2.1 4.3 5.2 5.2" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              C
            </span>
            <span>Chris</span>
          </a>

          <button
            className={`menu-button ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
              <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              AI engineer · curious builder
            </div>

            <h1>
              Intelligence,
              <br />
              built to be <em>useful.</em>
            </h1>

            <p className="hero-intro">
              Hi, I&apos;m Chris. I explore the space where artificial intelligence,
              practical engineering, and thoughtful digital experiences meet.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href="#contact">
                Start a conversation
                <ArrowIcon />
              </a>
              <a className="text-link" href="#projects">
                Explore my work
                <ArrowIcon direction="down" />
              </a>
            </div>

            <div className="hero-meta" aria-label="Quick facts">
              <div>
                <span>Focus</span>
                <strong>Applied AI</strong>
              </div>
              <div>
                <span>Core language</span>
                <strong>Python</strong>
              </div>
              <div>
                <span>Mindset</span>
                <strong>Always learning</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Chris developer profile card">
            <div className="visual-orbit visual-orbit--one" />
            <div className="visual-orbit visual-orbit--two" />
            <div className="code-card">
              <div className="code-card__top">
                <div className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span>profile.py</span>
              </div>

              <div className="code-card__body" aria-hidden="true">
                <div className="code-line">
                  <span className="line-number">01</span>
                  <code>
                    <b>class</b> <strong>Chris</strong>:
                  </code>
                </div>
                <div className="code-line">
                  <span className="line-number">02</span>
                  <code>
                    &nbsp;&nbsp;role = <mark>&quot;AI Engineer&quot;</mark>
                  </code>
                </div>
                <div className="code-line">
                  <span className="line-number">03</span>
                  <code>
                    &nbsp;&nbsp;tools = [<mark>&quot;Python&quot;</mark>,
                  </code>
                </div>
                <div className="code-line">
                  <span className="line-number">04</span>
                  <code>
                    &nbsp;&nbsp;&nbsp;&nbsp;<mark>&quot;JavaScript&quot;</mark>,{' '}
                    <mark>&quot;C&quot;</mark>]
                  </code>
                </div>
                <div className="code-line">
                  <span className="line-number">05</span>
                  <code>
                    &nbsp;&nbsp;status = <mark>&quot;building&quot;</mark>
                  </code>
                </div>
                <div className="code-line">
                  <span className="line-number">06</span>
                  <code />
                </div>
                <div className="code-line">
                  <span className="line-number">07</span>
                  <code>
                    chris = <strong>Chris</strong>()
                  </code>
                </div>
                <div className="code-line code-line--active">
                  <span className="line-number">08</span>
                  <code>
                    chris.keep_learning()<span className="cursor" />
                  </code>
                </div>
              </div>

              <div className="code-card__footer">
                <span>● ready</span>
                <span>UTF-8</span>
              </div>
            </div>

            <div className="floating-label floating-label--top">
              <span>01</span>
              Think clearly
            </div>
            <div className="floating-label floating-label--bottom">
              <span>02</span>
              Build simply
            </div>
          </div>
        </section>

        <section className="section about shell" id="about">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <p className="section-index">01 — Profile</p>
          </div>

          <div className="about-grid">
            <h2>
              Engineering with
              <br />
              <span>curiosity &amp; clarity.</span>
            </h2>
            <div className="about-copy">
              <p className="about-lead">
                I&apos;m an AI Engineer who enjoys turning complex ideas into focused,
                understandable solutions.
              </p>
              <p>
                My toolkit moves from Python and AI-oriented problem solving to web
                development with PHP, JavaScript, HTML, and CSS—grounded by the
                programming fundamentals I continue to sharpen with C.
              </p>
              <p>
                I&apos;m early in the journey and honest about it. Right now, I&apos;m
                focused on learning deeply, shipping consistently, and building the
                kind of work that deserves a place here.
              </p>
            </div>
          </div>

          <div className="principles" aria-label="Working principles">
            <div className="principle">
              <span>01</span>
              <strong>Understand first</strong>
              <p>Start with the real problem, not the trend.</p>
            </div>
            <div className="principle">
              <span>02</span>
              <strong>Keep it clear</strong>
              <p>Make the solution easy to use and explain.</p>
            </div>
            <div className="principle">
              <span>03</span>
              <strong>Improve in public</strong>
              <p>Stay curious, iterate, and let the work compound.</p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Capabilities</p>
              <p className="section-index">02 — Toolkit</p>
            </div>

            <div className="skills-title-row">
              <h2>A toolkit built for ideas that need to work.</h2>
              <p>
                A growing technical foundation across intelligent systems, the web,
                and core programming.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article
                  className={`skill-card skill-card--${group.tone}`}
                  key={group.title}
                >
                  <div className="skill-card__top">
                    <span>{group.number}</span>
                    <span className="skill-icon" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <ul aria-label={`${group.title} technologies`}>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects shell" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <p className="section-index">03 — Projects</p>
          </div>

          <div className="projects-intro">
            <div>
              <span className="projects-kicker">BUILD LOG</span>
              <h2>Real work, shown honestly.</h2>
            </div>
            <p>
              A shipped frontend, an academic computer-vision prototype, and an
              Android idea at day zero. Clear ownership, honest stages, and no
              inflated claims.
            </p>
          </div>

          <div className="projects-grid">
            <article className="project-card project-card--sinefolis">
              <div className="project-card__top">
                <span>01 / WEB</span>
                <span className="project-status">
                  <i /> Early build
                </span>
              </div>

              <div className="project-visual project-visual--cinema" aria-hidden="true">
                <div className="cinema-screen">
                  <span>SINÉFOLIS</span>
                  <strong>NOW SHOWING</strong>
                  <div className="cinema-progress"><i /></div>
                </div>
                <div className="cinema-seats">
                  {Array.from({ length: 18 }, (_, index) => (
                    <i key={index} />
                  ))}
                </div>
              </div>

              <div className="project-card__content">
                <p className="project-meta">Cinema frontend · 2026</p>
                <h3>Sinéfolis</h3>
                <p>
                  A multi-page cinema interface with interactive carousels, movie
                  discovery, cinema schedules, promotions, and client-side feedback
                  validation.
                </p>
                <ul className="project-tags" aria-label="Sinéfolis technologies">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <a
                  className="project-link"
                  href="https://github.com/tiaaanGrrr/Sinefolis"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <ArrowIcon />
                </a>
              </div>
            </article>

            <article className="project-card project-card--voice">
              <div className="project-card__top">
                <span>02 / ANDROID</span>
                <span className="project-status project-status--active">
                  <i /> Concept stage
                </span>
              </div>

              <div className="project-visual project-visual--voice" aria-hidden="true">
                <div className="voice-label">LISTENING FOR A COMMAND</div>
                <div className="voice-phone">
                  <span className="voice-phone__speaker" />
                  <div className="voice-orb">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="voice-command">“pause the music”</span>
                </div>
                <span className="voice-chip voice-chip--one">SpeechRecognizer</span>
                <span className="voice-chip voice-chip--two">MediaSession</span>
              </div>

              <div className="project-card__content">
                <p className="project-meta">Working title · Native Android</p>
                <h3>Voice-Controlled Media Assistant</h3>
                <p>
                  A hands-free playback assistant for Android users who are cooking,
                  exercising, driving, or multitasking. Spoken input is designed to
                  become playback commands for the active media session.
                </p>
                <div className="project-note">
                  <span>Planned architecture</span>
                  <p>
                    Java + Android SDK, SpeechRecognizer, MediaSessionManager,
                    MediaController, and a foreground service for background use.
                  </p>
                </div>
                <ul
                  className="project-tags project-tags--dark"
                  aria-label="Voice assistant planned technologies"
                >
                  <li>Java</li>
                  <li>Android SDK</li>
                  <li>Speech API</li>
                  <li>MediaSession</li>
                </ul>
                <span className="project-link project-link--disabled">
                  Repository coming soon
                </span>
              </div>
            </article>

            <article className="project-card project-card--traffic">
              <div className="project-card__top">
                <span>03 / CV</span>
                <span className="project-status">
                  <i /> Academic prototype
                </span>
              </div>

              <div className="project-visual project-visual--traffic" aria-hidden="true">
                <div className="traffic-monitor">
                  <div className="traffic-monitor__bar">
                    <span>CAM_01 / DYNAMIC ROI</span>
                    <span className="traffic-live"><i /> LIVE</span>
                  </div>
                  <div className="traffic-road">
                    <span className="traffic-lane traffic-lane--one" />
                    <span className="traffic-lane traffic-lane--two" />
                    <span className="traffic-roi">
                      <small>FRAME-RELATIVE ROI</small>
                    </span>
                    <span className="vehicle-detection vehicle-detection--one">
                      <small>ID 03</small>
                    </span>
                    <span className="vehicle-detection vehicle-detection--two">
                      <small>ID 04</small>
                    </span>
                    <span className="vehicle-detection vehicle-detection--three">
                      <small>ID 05</small>
                    </span>
                  </div>
                  <div className="traffic-metrics">
                    <div>
                      <span>Detected</span>
                      <strong>06</strong>
                    </div>
                    <div>
                      <span>Green estimate</span>
                      <strong>30s</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card__content">
                <p className="project-meta">Academic team project · Computer vision</p>
                <h3>Vehicle Detection for Traffic Light Optimization</h3>
                <p>
                  A CPU-based prototype that processes fixed-camera traffic video
                  through frame-relative ROI masking, MOG2 background subtraction,
                  morphological filtering, and centroid tracking, then explores a
                  bounded green-time calculation from cumulative detections.
                </p>
                <div className="project-note project-note--light">
                  <span>My contribution</span>
                  <p>
                    System architecture, Layer 1 ROI masking, Layer 2 MOG2
                    implementation, and presentation design.
                  </p>
                </div>
                <ul
                  className="project-tags"
                  aria-label="Traffic vision project technologies"
                >
                  <li>Python</li>
                  <li>OpenCV</li>
                  <li>NumPy</li>
                  <li>MOG2</li>
                </ul>
                <a
                  className="project-link"
                  href="https://github.com/Jozioo/Vehicle-Detecion---MOG"
                  target="_blank"
                  rel="noreferrer"
                >
                  View team repository <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell">
            <div className="contact-panel">
              <div className="contact-panel__copy">
                <p className="eyebrow eyebrow--light">Let&apos;s connect</p>
                <h2>
                  Have an idea?
                  <br />
                  Let&apos;s make it <em>real.</em>
                </h2>
                <p>
                  I&apos;m always open to a thoughtful conversation about AI,
                  technology, and opportunities to build something useful.
                </p>
              </div>

              <div className="contact-options">
                <a
                  className="contact-option"
                  href="mailto:leonardochrislim@gmail.com"
                >
                  <span className="contact-option__icon">
                    <MailIcon />
                  </span>
                  <span>
                    <small>Email me</small>
                    <strong>leonardochrislim@gmail.com</strong>
                  </span>
                  <ArrowIcon />
                </a>

                <a
                  className="contact-option"
                  href="https://wa.me/6281296813362"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-option__icon">
                    <ChatIcon />
                  </span>
                  <span>
                    <small>WhatsApp</small>
                    <strong>+62 812-9681-3362</strong>
                  </span>
                  <ArrowIcon />
                </a>
              </div>

              <div className="contact-decoration" aria-hidden="true">
                C
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              C
            </span>
            <span>Chris</span>
          </a>
          <p>AI Engineer · Building with purpose.</p>
          <a className="back-to-top" href="#home">
            Back to top <ArrowIcon />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
