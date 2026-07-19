import './App.css'

type Project = {
  title: string
  category: string
  summary: string
  impact: string
  stack: string[]
  status: string
}

const capabilityGroups = [
  {
    title: 'Product Engineering',
    items: ['React & Next.js interfaces', 'Flutter mobile apps', 'Design systems that stay shippable'],
  },
  {
    title: 'Backend Systems',
    items: ['Node.js APIs', 'PostgreSQL & Prisma', 'Auth, admin, catalog, and messaging flows'],
  },
  {
    title: 'Delivery Mindset',
    items: ['Fast iteration', 'Readable codebases', 'Polish that survives real usage'],
  },
]

const projects: Project[] = [
  {
    title: 'OtoTeklifim',
    category: 'Marketplace Platform',
    summary:
      'End-to-end automotive marketplace with mobile client, admin surface, listings, offers, favorites, and messaging.',
    impact:
      'Connected the mobile flow to a real Node.js + PostgreSQL backend and aligned catalog, auth, and listing routes with production-style data.',
    stack: ['Flutter', 'Node.js', 'PostgreSQL', 'Prisma', 'Fastify'],
    status: 'Private case study',
  },
  {
    title: 'FinalWhistles',
    category: 'Mobile Product',
    summary:
      'Football prediction app focused on content delivery, premium access, notifications, and admin publishing workflows.',
    impact:
      'Built for fast editorial updates with Supabase-backed auth and a separate admin publishing surface.',
    stack: ['Flutter', 'Supabase', 'Firebase', 'Vercel'],
    status: 'Private repository',
  },
  {
    title: 'Altinweb Ecosystem',
    category: 'Finance Experience',
    summary:
      'A connected set of mobile and web products around market tracking, dashboard workflows, and admin operations.',
    impact:
      'Split into dedicated frontend, backend, and mobile surfaces to keep customer-facing speed and internal operations clean.',
    stack: ['Flutter', 'Next.js', 'Node.js', 'REST APIs'],
    status: 'Private multi-repo system',
  },
  {
    title: 'CamAvrupa',
    category: 'CMS Website',
    summary:
      'Corporate website with a structured content layer, reusable sections, and a presentation that feels modern without being generic.',
    impact:
      'Set up around Next.js and Sanity to make content updates practical without sacrificing layout quality.',
    stack: ['Next.js', 'Sanity', 'SCSS'],
    status: 'Private repository',
  },
  {
    title: 'Sahibinden Arac Takip',
    category: 'Utility App',
    summary:
      'Vehicle tracking workflow for monitoring listings and surfacing useful data instead of forcing manual checking.',
    impact:
      'Combined a simple frontend with persistence so the product could move beyond a throwaway script into a usable tool.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    status: 'Private repository',
  },
  {
    title: 'AffectEd',
    category: 'Concept to Execution',
    summary:
      'A product concept shaped with technical framing, narrative clarity, and implementation thinking instead of staying at idea level.',
    impact:
      'An example of turning a raw concept into a structured digital product direction with technical detail.',
    stack: ['Product Strategy', 'Frontend Prototyping', 'Technical Writing'],
    status: 'Project archive',
  },
]

const principles = [
  'I like products that feel finished, not just functional.',
  'I care about shipping speed, but not at the cost of maintainability.',
  'I usually work across UI, API, data, and deployment until the whole flow actually works.',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">MERT PEYK • SOFTWARE ENGINEER</p>
          <h1>
            Building products that look sharp,
            <span> move fast, and hold together under real use.</span>
          </h1>
          <p className="hero-text">
            I design and ship full-stack products across web and mobile, with a strong bias
            toward clean interfaces, practical backends, and iterations that make the product
            feel more mature every week.
          </p>
          <div className="hero-actions">
            <a href="#selected-work" className="primary-link">
              Selected work
            </a>
            <a
              href="https://github.com/mertpeyk"
              className="secondary-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span>Current focus</span>
            <span>2026</span>
          </div>
          <div className="signal-grid">
            <article>
              <strong>Web</strong>
              <p>React, Next.js, dashboards, CMS surfaces, and admin tooling</p>
            </article>
            <article>
              <strong>Mobile</strong>
              <p>Flutter apps with production-minded onboarding, flows, and polish</p>
            </article>
            <article>
              <strong>Backend</strong>
              <p>APIs, auth, relational data, catalog logic, and operational structure</p>
            </article>
            <article>
              <strong>Approach</strong>
              <p>Fast iterations, product taste, and code that stays readable later</p>
            </article>
          </div>
        </div>
      </section>

      <section className="summary-band">
        <div>
          <span className="summary-label">Work style</span>
          <p>Product-minded full-stack execution</p>
        </div>
        <div>
          <span className="summary-label">Primary stack</span>
          <p>React, Next.js, Flutter, Node.js, PostgreSQL</p>
        </div>
        <div>
          <span className="summary-label">Preferred output</span>
          <p>Interfaces that feel premium and systems that stay usable</p>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>From visual polish to backend wiring, I usually carry the whole product flow.</h2>
        </div>

        <div className="capability-grid">
          {capabilityGroups.map((group) => (
            <article className="capability-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="selected-work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Recent projects shaped around real interfaces, real flows, and real constraints.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-impact">{project.impact}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section">
        <div className="section-heading compact">
          <p className="eyebrow">Principles</p>
          <h2>How I tend to work when the goal is quality, not just completion.</h2>
        </div>
        <div className="principles-list">
          {principles.map((principle, index) => (
            <article key={principle}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{principle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Next</p>
          <h2>Open to building serious digital products with strong taste and clean execution.</h2>
        </div>
        <div className="contact-links">
          <a href="https://github.com/mertpeyk" target="_blank" rel="noreferrer">
            github.com/mertpeyk
          </a>
          <a href="https://github.com/mertpeyk/mertpeykportfolio" target="_blank" rel="noreferrer">
            Portfolio repository
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
