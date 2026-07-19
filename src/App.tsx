import './App.css'

type CapabilityGroup = {
  title: string
  items: string[]
}

type Experience = {
  company: string
  role: string
  period: string
  summary: string
}

type Project = {
  title: string
  category: string
  role: string
  summary: string
  impact: string
  stack: string[]
}

type Education = {
  school: string
  degree: string
  period: string
}

type SkillLane = {
  title: string
  items: string[]
}

const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Full Stack Delivery',
    items: ['Next.js, React, TypeScript', 'FastAPI, Node.js, REST APIs', 'MySQL, PostgreSQL, SQL modeling'],
  },
  {
    title: 'Mobile Products',
    items: ['Flutter for iOS and Android', 'Release workflows and store readiness', 'Analytics, monetization, and product iteration'],
  },
  {
    title: 'Systems Thinking',
    items: ['ERP and MES product design', 'RBAC, JWT, multi-tenant structures', 'Agile delivery and practical architecture'],
  },
]

const experience: Experience[] = [
  {
    company: 'CodeThinx',
    role: 'Software Engineer',
    period: 'Dec 2024 — Present',
    summary:
      'Building custom business software, ERP-oriented systems, operational dashboards, and digital transformation products for SMEs.',
  },
  {
    company: 'Figen Egitim Kurumlari',
    role: 'Bilisim Uzmani',
    period: 'Apr 2026 — Present',
    summary:
      'Supporting institutional technology operations while continuing product and engineering work in parallel.',
  },
  {
    company: 'ADL Kurumsal Hizmetler',
    role: 'Software Engineer',
    period: 'Jun 2024 — Nov 2024',
    summary:
      'Worked across frontend and backend delivery for digital products and internal business solutions.',
  },
]

const featuredProjects: Project[] = [
  {
    title: 'CodeThinx ERP & MES',
    category: 'Industrial SaaS Platform',
    role: 'Founder & Lead Software Engineer',
    summary:
      'A scalable platform for finance, operations, production planning, machine monitoring, and shift management.',
    impact:
      'Designed around multi-tenant thinking, role-based access, real-time monitoring, and operational visibility for production environments.',
    stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'MySQL'],
  },
  {
    title: 'AltinWeb',
    category: 'Market Data SaaS',
    role: 'Founder & Full Stack Engineer',
    summary:
      'Live gold and exchange management platform tailored for the jewelry sector with operational modules and screen-based experiences.',
    impact:
      'Connected SOAP and REST market feeds with high-frequency price workflows, stock logic, smart pricing, and admin control surfaces.',
    stack: ['Next.js', 'React', 'FastAPI', 'Python', 'MySQL', 'SOAP/REST'],
  },
  {
    title: 'Misil Bebek',
    category: 'Consumer Mobile App',
    role: 'Founder & Mobile Engineer',
    summary:
      'A consumer mobile app designed to make sleep routines easier for parents through white noise, lullabies, and a calmer multilingual product experience.',
    impact:
      'Handled multilingual UX, in-app language switching, localized app metadata, onboarding polish, release operations, and monetization tuning without making the product feel spammy.',
    stack: ['Flutter', 'Dart', 'Firebase Analytics', 'Google AdMob', 'App Store Connect', 'Google Play'],
  },
  {
    title: 'Sigarayi Birakiyoruz',
    category: 'Behavior Change Product',
    role: 'Founder & Full Stack Mobile Developer',
    summary:
      'A behavior-change mobile product built to support smoking cessation through motivation, crisis support, progress tracking, and habit reinforcement.',
    impact:
      'Focused on onboarding quality, crisis moments, motivational content, multilingual copy, store-policy compliant health messaging, and stability improvements across iOS and Android releases.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Google AdMob', 'App Store Connect', 'Google Play'],
  },
  {
    title: 'AKKANA',
    category: 'Autonomous Marine Project',
    role: 'Project Lead & Software Engineer',
    summary:
      'Sonar-based unmanned marine vehicle project developed through university and incubation support.',
    impact:
      'Reached prototype phase under team leadership and earned second place at Ostim Technical University Pitching Day.',
    stack: ['Product Leadership', 'Embedded Collaboration', 'Prototyping'],
  },
  {
    title: 'Cancer Tissue Detection from MR Images',
    category: 'Graduation Research Project',
    role: 'Researcher & Software Developer',
    summary:
      'Deep learning-based medical imaging project focused on cancerous tissue detection from MR scans.',
    impact:
      'Built with TensorFlow and VGG16-style CNN methods, targeting high diagnostic accuracy in an academic context.',
    stack: ['Python', 'TensorFlow', 'Computer Vision', 'CNN'],
  },
]

const education: Education[] = [
  {
    school: 'Ostim Teknik Universitesi',
    degree: 'MSc in Software Engineering',
    period: 'Oct 2025 — Present',
  },
  {
    school: 'Ostim Teknik Universitesi',
    degree: 'BSc in Software Engineering',
    period: 'Oct 2020 — Jun 2024',
  },
]

const skillLanes: SkillLane[] = [
  {
    title: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Flutter', 'Dart', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    title: 'Backend & Data',
    items: ['FastAPI', 'Node.js', 'Python', 'REST APIs', 'SOAP', 'JWT', 'MySQL', 'PostgreSQL', 'T-SQL'],
  },
  {
    title: 'Architecture & Delivery',
    items: ['OOP', 'Design Patterns', 'Dependency Injection', 'Agile', 'Scrum', 'SDLC', 'Docker', 'RBAC'],
  },
]

const principles = [
  'I like products that solve operational problems, not just UI exercises.',
  'I enjoy moving between product thinking, interface quality, and backend structure without breaking continuity.',
  'I prefer systems that stay readable as they grow: naming, boundaries, and delivery discipline matter.',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">HAKKI MERT PEYK • SOFTWARE ENGINEER</p>
          <h1>
            Building software across
            <span> SaaS, mobile, and operational systems.</span>
          </h1>
          <p className="hero-text">
            I am a software engineer focused on full-stack product delivery, mobile
            applications, and business systems that need more than a good-looking surface. My
            recent work spans ERP, MES, real-time dashboards, consumer mobile products, and
            custom digital solutions for SMEs.
          </p>
          <div className="hero-actions">
            <a href="#selected-work" className="primary-link">
              View projects
            </a>
            <a href="mailto:hakkimertpeyk@gmail.com" className="secondary-link">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span>Current focus</span>
            <span>Ankara / Remote</span>
          </div>
          <div className="signal-grid">
            <article>
              <strong>Stack</strong>
              <p>TypeScript, React, Next.js, FastAPI, Flutter, PostgreSQL, MySQL</p>
            </article>
            <article>
              <strong>Domain</strong>
              <p>ERP, MES, digital operations, mobile consumer products, and SaaS workflows</p>
            </article>
            <article>
              <strong>Background</strong>
              <p>Software Engineering graduate, currently continuing a master&apos;s degree</p>
            </article>
            <article>
              <strong>Style</strong>
              <p>Fast-moving execution with strong product ownership and practical architecture</p>
            </article>
          </div>
        </div>
      </section>

      <section className="summary-band">
        <div>
          <span className="summary-label">Now</span>
          <p>Software Engineer at CodeThinx and MSc student in Software Engineering</p>
        </div>
        <div>
          <span className="summary-label">Focus</span>
          <p>Business systems, mobile products, API design, and product-grade interfaces</p>
        </div>
        <div>
          <span className="summary-label">Based in</span>
          <p>Ankara, Turkey</p>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>I work best where product direction, engineering depth, and execution speed meet.</h2>
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

      <section className="timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Professional work shaped by product building, custom software, and operational thinking.</h2>
        </div>
        <div className="timeline-grid">
          {experience.map((item) => (
            <article className="timeline-card" key={`${item.company}-${item.period}`}>
              <span className="timeline-period">{item.period}</span>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-summary">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="selected-work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects that reflect both technical range and a bias toward real-world usefulness.</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.role}</span>
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

      <section className="skills-section">
        <div className="section-heading compact">
          <p className="eyebrow">Tech Stack</p>
          <h2>Technologies I actively use across frontend, backend, mobile, and delivery work.</h2>
        </div>
        <div className="skills-grid">
          {skillLanes.map((lane) => (
            <article className="skills-card" key={lane.title}>
              <h3>{lane.title}</h3>
              <div className="tag-row">
                {lane.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="section-heading compact">
          <p className="eyebrow">Education</p>
          <h2>Academic track in software engineering with ongoing graduate-level work.</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={`${item.school}-${item.period}`}>
              <span className="timeline-period">{item.period}</span>
              <h3>{item.degree}</h3>
              <p className="timeline-company">{item.school}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section">
        <div className="section-heading compact">
          <p className="eyebrow">Principles</p>
          <h2>How I tend to work when the goal is long-term product value, not short-term flash.</h2>
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
          <p className="eyebrow">Contact</p>
          <h2>Open to serious product, software, and systems work.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:hakkimertpeyk@gmail.com">hakkimertpeyk@gmail.com</a>
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
