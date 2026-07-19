import { useState } from 'react'
import './App.css'

type Locale = 'tr' | 'en'

type LocalizedText = Record<Locale, string>

type CapabilityGroup = {
  title: LocalizedText
  items: string[]
}

type Experience = {
  company: string
  role: LocalizedText
  period: string
  summary: LocalizedText
}

type Project = {
  title: string
  category: LocalizedText
  role: LocalizedText
  summary: LocalizedText
  impact: LocalizedText
  stack: string[]
  visual: string
  accent: string
}

type Education = {
  school: string
  degree: LocalizedText
  period: string
}

type SkillLane = {
  title: LocalizedText
  items: string[]
}

const uiCopy = {
  tr: {
    eyebrow: 'HAKKI MERT PEYK • YAZILIM MÜHENDİSİ',
    heroTitleLead: 'SaaS, mobil ve operasyonel sistemler',
    heroTitleTail: ' üzerine ürün ve yazılım geliştiriyorum.',
    heroText:
      'Full-stack ürün geliştirme, mobil uygulamalar ve iş sistemleri tarafında çalışıyorum. Son dönem işlerim ERP, MES, gerçek zamanlı paneller, tüketici mobil uygulamaları ve KOBİ odaklı dijital çözümler etrafında şekilleniyor.',
    viewProjects: 'Projeleri Gör',
    downloadCv: 'CV İndir',
    contact: 'İletişim',
    currentFocus: 'Güncel odak',
    stack: 'Stack',
    domain: 'Alan',
    background: 'Arka plan',
    style: 'Tarz',
    focusLine: 'SaaS, MES, dijital operasyonlar, mobil tüketici ürünleri ve iş akışı odaklı sistemler',
    backgroundLine: 'Yazılım Mühendisliği mezunu, şu an yüksek lisansa devam ediyor',
    styleLine: 'Hızlı teslim, güçlü sahiplik ve pratik mimari kararlar',
    now: 'Bugün',
    focus: 'Odak',
    based: 'Konum',
    nowLine: 'CodeThinx tarafında Software Engineer ve Yazılım Mühendisliği yüksek lisans öğrencisi',
    focusLine2: 'İş sistemleri, mobil ürünler, API tasarımı ve ürün kalitesinde arayüzler',
    basedLine: 'Ankara, Türkiye',
    capabilities: 'Yetkinlikler',
    capabilitiesTitle: 'Ürün yönü, mühendislik derinliği ve hızlı teslimin kesiştiği yerde daha iyi iş çıkartıyorum.',
    experience: 'Deneyim',
    experienceTitle: 'Profesyonel tarafım ürün geliştirme, özel yazılım ve operasyonel düşünce etrafında şekillendi.',
    selectedWork: 'Seçili Projeler',
    selectedWorkTitle: 'Teknik aralığı ve gerçek dünyadaki faydayı aynı anda gösteren projeler.',
    techStack: 'Kullandığım Teknolojiler',
    techStackTitle: 'Frontend, backend, mobil ve teslim tarafında aktif kullandığım araçlar.',
    education: 'Eğitim',
    educationTitle: 'Yazılım mühendisliği ekseninde ilerleyen akademik yolculuk.',
    principles: 'Çalışma Biçimi',
    principlesTitle: 'Kısa süreli gösterişten ziyade uzun vadeli ürün değeri hedeflediğimde nasıl çalışıyorum.',
    contactTitle: 'Ciddi ürün, yazılım ve sistem işlerine açığım.',
    portfolioRepo: 'Portfolio Reposu',
    liveSite: 'Canlı Site',
    toggleTr: 'TR',
    toggleEn: 'EN',
    photoNote: 'Profil fotoğrafı alanı hazır',
    photoHint: 'Gerçek fotoğrafını gönder, bunu doğrudan portreyle değiştireyim.',
  },
  en: {
    eyebrow: 'HAKKI MERT PEYK • SOFTWARE ENGINEER',
    heroTitleLead: 'Building products across SaaS, mobile,',
    heroTitleTail: ' and operational systems.',
    heroText:
      'I focus on full-stack product delivery, mobile applications, and business systems that need more than a good-looking surface. My recent work spans ERP, MES, real-time dashboards, consumer mobile products, and custom digital solutions for SMEs.',
    viewProjects: 'View Projects',
    downloadCv: 'Download CV',
    contact: 'Contact',
    currentFocus: 'Current focus',
    stack: 'Stack',
    domain: 'Domain',
    background: 'Background',
    style: 'Style',
    focusLine: 'ERP, MES, digital operations, mobile consumer products, and SaaS workflows',
    backgroundLine: 'Software Engineering graduate, currently continuing a master\'s degree',
    styleLine: 'Fast-moving execution with strong ownership and practical architecture',
    now: 'Now',
    focus: 'Focus',
    based: 'Based in',
    nowLine: 'Software Engineer at CodeThinx and MSc student in Software Engineering',
    focusLine2: 'Business systems, mobile products, API design, and product-grade interfaces',
    basedLine: 'Ankara, Turkey',
    capabilities: 'Capabilities',
    capabilitiesTitle: 'I work best where product direction, engineering depth, and execution speed meet.',
    experience: 'Experience',
    experienceTitle: 'Professional work shaped by product building, custom software, and operational thinking.',
    selectedWork: 'Selected Work',
    selectedWorkTitle: 'Projects that reflect both technical range and a bias toward real-world usefulness.',
    techStack: 'Tech Stack',
    techStackTitle: 'Technologies I actively use across frontend, backend, mobile, and delivery work.',
    education: 'Education',
    educationTitle: 'Academic work shaped around software engineering and applied product building.',
    principles: 'Principles',
    principlesTitle: 'How I work when the goal is long-term product value rather than short-term flash.',
    contactTitle: 'Open to serious product, software, and systems work.',
    portfolioRepo: 'Portfolio Repository',
    liveSite: 'Live Site',
    toggleTr: 'TR',
    toggleEn: 'EN',
    photoNote: 'Profile photo slot is ready',
    photoHint: 'Send me your actual photo and I will replace this area with a real portrait.',
  },
} as const

const capabilityGroups: CapabilityGroup[] = [
  {
    title: {
      tr: 'Full Stack Teslim',
      en: 'Full Stack Delivery',
    },
    items: ['Next.js, React, TypeScript', 'FastAPI, Node.js, REST APIs', 'MySQL, PostgreSQL, SQL modeling'],
  },
  {
    title: {
      tr: 'Mobil Ürünler',
      en: 'Mobile Products',
    },
    items: ['Flutter for iOS and Android', 'Release workflows and store readiness', 'Analytics, monetization, and product iteration'],
  },
  {
    title: {
      tr: 'Sistem Düşüncesi',
      en: 'Systems Thinking',
    },
    items: ['ERP and MES product design', 'RBAC, JWT, multi-tenant structures', 'Agile delivery and practical architecture'],
  },
]

const experience: Experience[] = [
  {
    company: 'CodeThinx',
    role: {
      tr: 'Software Engineer',
      en: 'Software Engineer',
    },
    period: 'Dec 2024 - Present',
    summary: {
      tr: 'KOBİ\'ler için özel yazılımlar, ERP odaklı sistemler, operasyon panelleri ve dijital dönüşüm ürünleri geliştiriyorum.',
      en: 'Building custom business software, ERP-oriented systems, operational dashboards, and digital transformation products for SMEs.',
    },
  },
  {
    company: 'Figen Egitim Kurumlari',
    role: {
      tr: 'Bilişim Uzmanı',
      en: 'IT Specialist',
    },
    period: 'Apr 2026 - Present',
    summary: {
      tr: 'Kurumsal teknoloji operasyonlarını desteklerken aynı zamanda ürün ve mühendislik işlerini sürdürüyorum.',
      en: 'Supporting institutional technology operations while continuing product and engineering work in parallel.',
    },
  },
  {
    company: 'ADL Kurumsal Hizmetler',
    role: {
      tr: 'Software Engineer',
      en: 'Software Engineer',
    },
    period: 'Jun 2024 - Nov 2024',
    summary: {
      tr: 'Dijital ürünler ve iç iş çözümleri için hem frontend hem backend teslimlerinde görev aldım.',
      en: 'Worked across frontend and backend delivery for digital products and internal business solutions.',
    },
  },
]

const featuredProjects: Project[] = [
  {
    title: 'CodeThinx ERP & MES',
    category: {
      tr: 'Endüstriyel SaaS Platformu',
      en: 'Industrial SaaS Platform',
    },
    role: {
      tr: 'Kurucu & Lead Software Engineer',
      en: 'Founder & Lead Software Engineer',
    },
    summary: {
      tr: 'Finans, operasyon, üretim planlama, makine izleme ve vardiya yönetimini tek çatı altında toplayan ölçeklenebilir bir platform.',
      en: 'A scalable platform for finance, operations, production planning, machine monitoring, and shift management.',
    },
    impact: {
      tr: 'Multi-tenant yapı, rol bazlı yetkilendirme, gerçek zamanlı izleme ve üretim operasyonları için görünürlük odaklı kurgulandı.',
      en: 'Designed around multi-tenant thinking, role-based access, real-time monitoring, and operational visibility for production environments.',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'MySQL'],
    visual: 'ERP / MES',
    accent: 'amber',
  },
  {
    title: 'AltinWeb',
    category: {
      tr: 'Piyasa Verisi SaaS',
      en: 'Market Data SaaS',
    },
    role: {
      tr: 'Kurucu & Full Stack Engineer',
      en: 'Founder & Full Stack Engineer',
    },
    summary: {
      tr: 'Kuyumculuk sektörü için geliştirilmiş, canlı altın ve döviz yönetimini operasyon modülleriyle birleştiren bir platform.',
      en: 'Live gold and exchange management platform tailored for the jewelry sector with operational modules and screen-based experiences.',
    },
    impact: {
      tr: 'SOAP ve REST veri akışları, stok mantığı, akıllı fiyatlama ve admin kontrol yüzleriyle yüksek frekanslı operasyonlara göre kuruldu.',
      en: 'Connected SOAP and REST market feeds with high-frequency price workflows, stock logic, smart pricing, and admin control surfaces.',
    },
    stack: ['Next.js', 'React', 'FastAPI', 'Python', 'MySQL', 'SOAP/REST'],
    visual: 'LIVE PRICING',
    accent: 'blue',
  },
  {
    title: 'Misil Bebek',
    category: {
      tr: 'Mobil Tüketici Uygulaması',
      en: 'Consumer Mobile App',
    },
    role: {
      tr: 'Kurucu & Mobile Engineer',
      en: 'Founder & Mobile Engineer',
    },
    summary: {
      tr: 'Beyaz gürültü, ninni ve çok dilli deneyimle ebeveynlerin uyku rutinini kolaylaştıran tüketici odaklı mobil uygulama.',
      en: 'A consumer mobile app designed to make sleep routines easier for parents through white noise, lullabies, and a calmer multilingual product experience.',
    },
    impact: {
      tr: 'Uygulama içi dil değiştirme, lokalize store içerikleri, onboarding akışı, release süreçleri ve reklam dengesini ürün hissini bozmadan yönettim.',
      en: 'Handled multilingual UX, in-app language switching, localized app metadata, onboarding polish, release operations, and monetization tuning without making the product feel spammy.',
    },
    stack: ['Flutter', 'Dart', 'Firebase Analytics', 'Google AdMob', 'App Store Connect', 'Google Play'],
    visual: 'SLEEP AUDIO',
    accent: 'mint',
  },
  {
    title: 'Sigarayi Birakiyoruz',
    category: {
      tr: 'Davranış Değişimi Ürünü',
      en: 'Behavior Change Product',
    },
    role: {
      tr: 'Kurucu & Full Stack Mobile Developer',
      en: 'Founder & Full Stack Mobile Developer',
    },
    summary: {
      tr: 'Motivasyon, kriz anı desteği, ilerleme takibi ve alışkanlık pekiştirme akışlarıyla sigarayı bırakma sürecine odaklanan mobil ürün.',
      en: 'A behavior-change mobile product built to support smoking cessation through motivation, crisis support, progress tracking, and habit reinforcement.',
    },
    impact: {
      tr: 'Onboarding kalitesi, kriz anı ekranları, motive edici içerikler, çok dilli metinler, store policy uyumlu sağlık içeriği ve iOS/Android stabilite iyileştirmeleri üzerinde çalıştım.',
      en: 'Focused on onboarding quality, crisis moments, motivational content, multilingual copy, store-policy compliant health messaging, and stability improvements across iOS and Android releases.',
    },
    stack: ['Flutter', 'Dart', 'Firebase', 'Google AdMob', 'App Store Connect', 'Google Play'],
    visual: 'QUIT TRACKING',
    accent: 'rose',
  },
  {
    title: 'AKKANA',
    category: {
      tr: 'Otonom Deniz Aracı',
      en: 'Autonomous Marine Project',
    },
    role: {
      tr: 'Proje Lideri & Yazılım Mühendisi',
      en: 'Project Lead & Software Engineer',
    },
    summary: {
      tr: 'Üniversite ve kuluçka desteğiyle prototip aşamasına gelen sonar tabanlı insansız deniz aracı projesi.',
      en: 'Sonar-based unmanned marine vehicle project developed through university and incubation support.',
    },
    impact: {
      tr: 'Takım liderliği altında prototip aşamasına taşındı ve Ostim Teknik Üniversitesi Pitching Day\'de ikinci oldu.',
      en: 'Reached prototype phase under team leadership and earned second place at Ostim Technical University Pitching Day.',
    },
    stack: ['Product Leadership', 'Embedded Collaboration', 'Prototyping'],
    visual: 'SONAR NAV',
    accent: 'violet',
  },
  {
    title: 'Cancer Tissue Detection from MR Images',
    category: {
      tr: 'Bitirme Araştırma Projesi',
      en: 'Graduation Research Project',
    },
    role: {
      tr: 'Araştırmacı & Yazılım Geliştirici',
      en: 'Researcher & Software Developer',
    },
    summary: {
      tr: 'MR görüntülerinden kanserli doku tespitine odaklanan derin öğrenme tabanlı tıbbi görüntüleme çalışması.',
      en: 'Deep learning-based medical imaging project focused on cancerous tissue detection from MR scans.',
    },
    impact: {
      tr: 'TensorFlow ve CNN tabanlı yaklaşımlarla akademik bağlamda yüksek doğruluk hedeflenerek geliştirildi.',
      en: 'Built with TensorFlow and CNN-based methods, targeting high diagnostic accuracy in an academic context.',
    },
    stack: ['Python', 'TensorFlow', 'Computer Vision', 'CNN'],
    visual: 'MED AI',
    accent: 'slate',
  },
]

const education: Education[] = [
  {
    school: 'Ostim Teknik Universitesi',
    degree: {
      tr: 'Yüksek Lisans, Yazılım Mühendisliği',
      en: 'MSc in Software Engineering',
    },
    period: 'Oct 2025 - Present',
  },
  {
    school: 'Ostim Teknik Universitesi',
    degree: {
      tr: 'Lisans, Yazılım Mühendisliği',
      en: 'BSc in Software Engineering',
    },
    period: 'Oct 2020 - Jun 2024',
  },
]

const skillLanes: SkillLane[] = [
  {
    title: {
      tr: 'Frontend & Mobil',
      en: 'Frontend & Mobile',
    },
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Flutter', 'Dart', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    title: {
      tr: 'Backend & Veri',
      en: 'Backend & Data',
    },
    items: ['FastAPI', 'Node.js', 'Python', 'REST APIs', 'SOAP', 'JWT', 'MySQL', 'PostgreSQL', 'T-SQL'],
  },
  {
    title: {
      tr: 'Mimari & Teslim',
      en: 'Architecture & Delivery',
    },
    items: ['OOP', 'Design Patterns', 'Dependency Injection', 'Agile', 'Scrum', 'SDLC', 'Docker', 'RBAC'],
  },
]

const principles: LocalizedText[] = [
  {
    tr: 'Sadece güzel arayüz değil, operasyonel problemi çözen ürünleri seviyorum.',
    en: 'I like products that solve operational problems, not just interface exercises.',
  },
  {
    tr: 'Ürün düşüncesi, arayüz kalitesi ve backend yapısı arasında kopmadan ilerlemeyi seviyorum.',
    en: 'I enjoy moving between product thinking, interface quality, and backend structure without breaking continuity.',
  },
  {
    tr: 'Sistem büyüdükçe okunabilir kalmalı; isimlendirme, sınırlar ve teslim disiplini bence kritik.',
    en: 'I prefer systems that stay readable as they grow; naming, boundaries, and delivery discipline matter.',
  },
]

function App() {
  const [locale, setLocale] = useState<Locale>('tr')
  const copy = uiCopy[locale]

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="locale-switch" aria-label="Language switch">
          <button
            type="button"
            className={locale === 'tr' ? 'locale-button is-active' : 'locale-button'}
            onClick={() => setLocale('tr')}
          >
            {copy.toggleTr}
          </button>
          <button
            type="button"
            className={locale === 'en' ? 'locale-button is-active' : 'locale-button'}
            onClick={() => setLocale('en')}
          >
            {copy.toggleEn}
          </button>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>
            {copy.heroTitleLead}
            <span>{copy.heroTitleTail}</span>
          </h1>
          <p className="hero-text">{copy.heroText}</p>
          <div className="hero-actions">
            <a href="#selected-work" className="primary-link">
              {copy.viewProjects}
            </a>
            <a href="/cv/hakki-mert-peyk-cv.pdf" className="secondary-link" download>
              {copy.downloadCv}
            </a>
            <a href="mailto:hakkimertpeyk@gmail.com" className="secondary-link">
              {copy.contact}
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="portrait-shell">
            <div className="portrait-ring">
              <div className="portrait-fallback">MP</div>
            </div>
            <div className="portrait-copy">
              <strong>{copy.photoNote}</strong>
              <p>{copy.photoHint}</p>
            </div>
          </div>
          <div className="hero-card-top">
            <span>{copy.currentFocus}</span>
            <span>Ankara / Remote</span>
          </div>
          <div className="signal-grid">
            <article>
              <strong>{copy.stack}</strong>
              <p>TypeScript, React, Next.js, FastAPI, Flutter, PostgreSQL, MySQL</p>
            </article>
            <article>
              <strong>{copy.domain}</strong>
              <p>{copy.focusLine}</p>
            </article>
            <article>
              <strong>{copy.background}</strong>
              <p>{copy.backgroundLine}</p>
            </article>
            <article>
              <strong>{copy.style}</strong>
              <p>{copy.styleLine}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="summary-band">
        <div>
          <span className="summary-label">{copy.now}</span>
          <p>{copy.nowLine}</p>
        </div>
        <div>
          <span className="summary-label">{copy.focus}</span>
          <p>{copy.focusLine2}</p>
        </div>
        <div>
          <span className="summary-label">{copy.based}</span>
          <p>{copy.basedLine}</p>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.capabilities}</p>
          <h2>{copy.capabilitiesTitle}</h2>
        </div>

        <div className="capability-grid">
          {capabilityGroups.map((group) => (
            <article className="capability-card" key={group.title.en}>
              <h3>{group.title[locale]}</h3>
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
          <p className="eyebrow">{copy.experience}</p>
          <h2>{copy.experienceTitle}</h2>
        </div>
        <div className="timeline-grid">
          {experience.map((item) => (
            <article className="timeline-card" key={`${item.company}-${item.period}`}>
              <span className="timeline-period">{item.period}</span>
              <h3>{item.role[locale]}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-summary">{item.summary[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="selected-work">
        <div className="section-heading">
          <p className="eyebrow">{copy.selectedWork}</p>
          <h2>{copy.selectedWorkTitle}</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual accent-${project.accent}`}>
                <span className="project-visual-code">{project.visual}</span>
                <strong>{project.title}</strong>
                <p>{project.category[locale]}</p>
              </div>
              <div className="project-meta">
                <span>{project.category[locale]}</span>
                <span>{project.role[locale]}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary[locale]}</p>
              <p className="project-impact">{project.impact[locale]}</p>
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
          <p className="eyebrow">{copy.techStack}</p>
          <h2>{copy.techStackTitle}</h2>
        </div>
        <div className="skills-grid">
          {skillLanes.map((lane) => (
            <article className="skills-card" key={lane.title.en}>
              <h3>{lane.title[locale]}</h3>
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
          <p className="eyebrow">{copy.education}</p>
          <h2>{copy.educationTitle}</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={`${item.school}-${item.period}`}>
              <span className="timeline-period">{item.period}</span>
              <h3>{item.degree[locale]}</h3>
              <p className="timeline-company">{item.school}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section">
        <div className="section-heading compact">
          <p className="eyebrow">{copy.principles}</p>
          <h2>{copy.principlesTitle}</h2>
        </div>
        <div className="principles-list">
          {principles.map((principle, index) => (
            <article key={principle.en}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{principle[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">{copy.contact}</p>
          <h2>{copy.contactTitle}</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:hakkimertpeyk@gmail.com">hakkimertpeyk@gmail.com</a>
          <a href="/cv/hakki-mert-peyk-cv.pdf" download>
            {copy.downloadCv}
          </a>
          <a href="https://github.com/mertpeyk" target="_blank" rel="noreferrer">
            github.com/mertpeyk
          </a>
          <a href="https://github.com/mertpeyk/mertpeykportfolio" target="_blank" rel="noreferrer">
            {copy.portfolioRepo}
          </a>
          <a href="https://mertpeyk.github.io/mertpeykportfolio/" target="_blank" rel="noreferrer">
            {copy.liveSite}
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
