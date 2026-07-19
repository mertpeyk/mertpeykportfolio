import { useEffect, useState } from 'react'
import profilePhoto from './assets/hakki-mert-peyk.jpg'
import altinwebGram from './assets/projects/altinweb-gram.png'
import codethinxLogo from './assets/projects/codethinx-logo.png'
import misilBebekIcon from './assets/projects/misil-bebek-icon.png'
import pbYazilimOffice from './assets/projects/pb-yazilim-office.png'
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

type Education = {
  school: string
  degree: LocalizedText
  period: string
}

type SkillLane = {
  title: LocalizedText
  items: string[]
}

type ProjectMetric = {
  label: LocalizedText
  value: string
}

type ProjectDetailGroup = {
  title: LocalizedText
  items: LocalizedText[]
}

type ProjectMedia = {
  src: string
  alt: LocalizedText
  fit?: 'cover' | 'contain'
}

type Project = {
  slug: string
  title: string
  category: LocalizedText
  role: LocalizedText
  summary: LocalizedText
  impact: LocalizedText
  overview: LocalizedText
  metrics: ProjectMetric[]
  detailGroups: ProjectDetailGroup[]
  stack: string[]
  media?: ProjectMedia[]
  visual: string
  accent: string
}

const cvFile = `${import.meta.env.BASE_URL}cv/hakki-mert-peyk-cv.pdf`

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
    selectedWorkTitle: 'Projeye tıklayınca açılan detay sayfalarıyla teknik kapsamı ve gerçek dünyadaki etkisini birlikte gösteren işler.',
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
    photoNote: 'Hakkı Mert Peyk',
    photoHint: 'Yazılım mühendisi, ürün odaklı geliştirici ve operasyonel sistem kurucusu.',
    projectCta: 'Detay sayfasını aç',
    detailBack: 'Ana sayfaya dön',
    detailBrowse: 'Diğer projeler',
    detailSummary: 'Proje özeti',
    detailStack: 'Kullanılan teknolojiler',
    detailOutcome: 'Çıkan sonuç',
    detailRole: 'Rol',
    detailCategory: 'Kategori',
    detailStatus: 'Kapsam',
    detailMedia: 'Proje görselleri',
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
    selectedWorkTitle: 'Projects with click-through detail pages that show both technical depth and real-world value.',
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
    photoNote: 'Hakkı Mert Peyk',
    photoHint: 'Software engineer focused on products, execution, and operational systems.',
    projectCta: 'Open detail page',
    detailBack: 'Back to homepage',
    detailBrowse: 'Browse other projects',
    detailSummary: 'Project summary',
    detailStack: 'Technology stack',
    detailOutcome: 'Outcome',
    detailRole: 'Role',
    detailCategory: 'Category',
    detailStatus: 'Scope',
    detailMedia: 'Project media',
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
    period: 'Aralık 2024 - Devam ediyor',
    summary: {
      tr: 'KOBİ\'ler için özel yazılımlar, ERP odaklı sistemler, operasyon panelleri ve dijital dönüşüm ürünleri geliştiriyorum.',
      en: 'Building custom business software, ERP-oriented systems, operational dashboards, and digital transformation products for SMEs.',
    },
  },
  {
    company: 'Figen Eğitim Kurumları',
    role: {
      tr: 'Bilişim Uzmanı',
      en: 'IT Specialist',
    },
    period: 'Nisan 2026 - Devam ediyor',
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
    period: 'Haziran 2024 - Kasım 2024',
    summary: {
      tr: 'Dijital ürünler ve iç iş çözümleri için hem frontend hem backend teslimlerinde görev aldım.',
      en: 'Worked across frontend and backend delivery for digital products and internal business solutions.',
    },
  },
]

const featuredProjects: Project[] = [
  {
    slug: 'codethinx-erp-mes',
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
      en: 'A scalable platform that unifies finance, operations, production planning, machine monitoring, and shift management.',
    },
    impact: {
      tr: 'Multi-tenant kurgu, RBAC, canlı operasyon izleme ve yüksek hacimli SQL optimizasyonu ile gerçek üretim ortamlarına göre şekillendirildi.',
      en: 'Shaped for real production environments through multi-tenant architecture, RBAC, live operational visibility, and high-volume SQL optimization.',
    },
    overview: {
      tr: 'CodeThinx altında geliştirdiğim bu ana ürün, KOBİ tarafındaki üretim ve finans süreçlerini tek panelden yönetilebilir hale getirmek için tasarlandı. CV’deki kapsamı siteye taşıyarak BOM, iş emri, vardiya, makine takibi ve çoklu para birimi gibi işlevleri daha görünür hale getirdim.',
      en: 'This flagship CodeThinx product was designed to centralize production and finance workflows for SMEs. I carried the CV narrative into the portfolio so BOM, work orders, shifts, machine monitoring, and multi-currency finance are visible as one coherent system.',
    },
    metrics: [
      {
        label: {
          tr: 'Kapsam',
          en: 'Scope',
        },
        value: 'ERP + MES + Finance + Monitoring',
      },
      {
        label: {
          tr: 'Teslim modeli',
          en: 'Delivery model',
        },
        value: 'SaaS / Multi-tenant',
      },
      {
        label: {
          tr: 'Çekirdek odak',
          en: 'Core focus',
        },
        value: 'Operations visibility',
      },
    ],
    detailGroups: [
      {
        title: {
          tr: 'Geliştirdiğim modüller',
          en: 'Modules I built',
        },
        items: [
          {
            tr: 'İş emirleri, ürün reçeteleri ve üretim rotaları için endüstriyel MES akışları kurdum.',
            en: 'Built industrial MES flows for work orders, product recipes, and production routes.',
          },
          {
            tr: 'Makine parkuru için çalışma, arıza ve hazırlık durumlarını canlı izleyen dashboard yapısı hazırladım.',
            en: 'Created dashboards that track machine running, fault, and preparation states in real time.',
          },
          {
            tr: 'Cari, stok, banka ve kasa süreçlerini çoklu para birimi mantığıyla aynı finansal akış içinde topladım.',
            en: 'Connected ledger, stock, bank, and cash workflows under a multi-currency financial model.',
          },
        ],
      },
      {
        title: {
          tr: 'Çıkan sonuç',
          en: 'What came out of it',
        },
        items: [
          {
            tr: 'Üretim ve finans tarafını ayrı yazılımlar yerine ortak bir operasyon panelinde toplayan daha okunabilir bir sistem oluştu.',
            en: 'The result was a more readable operations system that merges production and finance instead of splitting them across disconnected tools.',
          },
          {
            tr: 'Yetki sınırları ve tenant izolasyonu sayesinde farklı firma yapılarına uyarlanabilir güçlü bir temel çıktı.',
            en: 'RBAC and tenant isolation created a stronger foundation that can be adapted across different company structures.',
          },
        ],
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'MySQL', 'JWT', 'RBAC'],
    media: [
      {
        src: codethinxLogo,
        alt: {
          tr: 'CodeThinx reposundan alınan marka görseli',
          en: 'Brand asset pulled from the CodeThinx repository',
        },
        fit: 'contain',
      },
    ],
    visual: 'ERP / MES',
    accent: 'amber',
  },
  {
    slug: 'altinweb',
    title: 'AltinWeb',
    category: {
      tr: 'Piyasa Verisi SaaS',
      en: 'Market Data SaaS',
    },
    role: {
      tr: 'Kurucu & Full Stack Software Engineer',
      en: 'Founder & Full Stack Software Engineer',
    },
    summary: {
      tr: 'Kuyumculuk sektörü için geliştirilen, canlı altın ve döviz verisini operasyon modülleri ve ekran yönetimiyle birleştiren platform.',
      en: 'A platform for the jewelry sector that combines live gold and exchange data with operational modules and multi-screen management.',
    },
    impact: {
      tr: 'SOAP ve REST akışlarını yönetip stok, barkodlama, akıllı fiyatlama ve satış süreçlerini tek sistemde topladım.',
      en: 'Integrated SOAP and REST feeds while unifying stock, barcoding, smart pricing, and sales flows inside one system.',
    },
    overview: {
      tr: 'AltinWeb tarafında temel mesele sadece veri göstermek değil, fiyat değişiminin çok hızlı aktığı bir işte operasyonel akışı bozmadan çalışmaktı. Bu yüzden veri entegrasyonunu ve arka ofis tarafını birlikte kurguladım.',
      en: 'The real challenge in AltinWeb was not just displaying live data but keeping the business workflow stable in a high-frequency pricing environment. I designed the data layer and admin side together.',
    },
    metrics: [
      {
        label: {
          tr: 'Sektör',
          en: 'Industry',
        },
        value: 'Jewelry / precious metals',
      },
      {
        label: {
          tr: 'Veri akışı',
          en: 'Data flow',
        },
        value: 'SOAP + REST',
      },
      {
        label: {
          tr: 'Yayın',
          en: 'Deployment',
        },
        value: 'Vercel',
      },
    ],
    detailGroups: [
      {
        title: {
          tr: 'Öne çıkan taraflar',
          en: 'What stands out',
        },
        items: [
          {
            tr: 'Canlı piyasa verilerini senkronize edip çoklu ekran gösterimi için hızlı güncellenen yüzler kurdum.',
            en: 'Synchronized live market feeds and built interfaces that update fast enough for multi-screen displays.',
          },
          {
            tr: 'Stok, barkod ve satış yönetimiyle fiyat verisini aynı operasyon mantığı içinde birleştirdim.',
            en: 'Combined stock, barcode, and sales workflows with live pricing inside one operational model.',
          },
          {
            tr: 'Ani fiyat hareketlerinde gecikmeyi azaltmak için cache ve backend akışlarını performans odaklı tasarladım.',
            en: 'Designed cache and backend flows around performance so sudden market shifts would not create visible lag.',
          },
        ],
      },
      {
        title: {
          tr: 'Etki',
          en: 'Impact',
        },
        items: [
          {
            tr: 'Sektöre özel kurgulanmış bir SaaS ürün olarak canlı veri ve operasyon tarafını tek ürün hissiyle birleştirdi.',
            en: 'It brought together live data and operations with the feel of one focused SaaS product for a niche industry.',
          },
        ],
      },
    ],
    stack: ['Next.js', 'React', 'FastAPI', 'Python', 'MySQL', 'SOAP/REST API', 'JWT', 'Vercel'],
    media: [
      {
        src: altinwebGram,
        alt: {
          tr: 'AltinWeb ile ilişkili kuyumculuk ürün görseli',
          en: 'Jewelry product image tied to the AltinWeb ecosystem',
        },
        fit: 'contain',
      },
    ],
    visual: 'LIVE PRICING',
    accent: 'blue',
  },
  {
    slug: 'misil-bebek',
    title: 'Mışıl Bebek',
    category: {
      tr: 'Mobil Tüketici Uygulaması',
      en: 'Consumer Mobile App',
    },
    role: {
      tr: 'Kurucu & Mobile Software Engineer',
      en: 'Founder & Mobile Software Engineer',
    },
    summary: {
      tr: 'Bebeklerin uykuya geçişini kolaylaştırmak için beyaz gürültü, fön, elektrik süpürgesi ve ninni sesleri sunan çok dilli mobil uygulama.',
      en: 'A multilingual mobile app that helps babies fall asleep through white noise, lullabies, and calming household sounds.',
    },
    impact: {
      tr: 'Çoklu dil altyapısı, uygulama içi dil değişimi, ASO, release yönetimi ve reklam optimizasyonunu ürün hissini bozmadan yürüttüm.',
      en: 'Handled multilingual support, in-app language switching, ASO, release management, and monetization tuning without harming the product feel.',
    },
    overview: {
      tr: 'CV’deki Mışıl Bebek maddesini burada daha ürün odaklı hale getirdim. Sadece ses listesi değil; onboarding, çok dilli launcher adı, store metadata ve reklam akışı da bu ürünün parçasıydı.',
      en: 'I expanded the CV bullet into a more product-focused story here. This was not only a sound library; onboarding, multilingual app naming, store metadata, and ad flow were all part of the product.',
    },
    metrics: [
      {
        label: {
          tr: 'Platform',
          en: 'Platform',
        },
        value: 'iOS + Android',
      },
      {
        label: {
          tr: 'Kullanım senaryosu',
          en: 'Use case',
        },
        value: 'Sleep support',
      },
      {
        label: {
          tr: 'Gelir modeli',
          en: 'Revenue model',
        },
        value: 'AdMob',
      },
    ],
    detailGroups: [
      {
        title: {
          tr: 'Ürün geliştirmeleri',
          en: 'Product work',
        },
        items: [
          {
            tr: 'Android ve iOS için çoklu dil altyapısı ile uygulama içi dil değiştirme deneyimi kurdum.',
            en: 'Built multilingual infrastructure and in-app language switching for both Android and iOS.',
          },
          {
            tr: 'Store listing, app adı, açıklama ve görsel metadata tarafını yerelleştirilmiş şekilde yönettim.',
            en: 'Managed localized store listing, naming, copy, and metadata across releases.',
          },
          {
            tr: 'Onboarding ve ekran bazlı reklam senaryolarını kullanıcıyı yormadan dengeledim.',
            en: 'Balanced onboarding and screen-level ad scenarios without making the experience feel noisy.',
          },
        ],
      },
      {
        title: {
          tr: 'Sonuç',
          en: 'Outcome',
        },
        items: [
          {
            tr: 'Anne-bebek odağında sakin ve işlevsel bir mobil deneyim çıktı; teknik taraf ile ürün hissi aynı çizgide kaldı.',
            en: 'The end result was a calm, useful mobile experience for parents where technical delivery and product feel stayed aligned.',
          },
        ],
      },
    ],
    stack: ['Flutter', 'Dart', 'Firebase Analytics', 'Google AdMob', 'App Store Connect', 'Google Play Console'],
    media: [
      {
        src: misilBebekIcon,
        alt: {
          tr: 'Mışıl Bebek reposundan alınan uygulama ikonu',
          en: 'Application icon pulled from the Misil Bebek repository',
        },
        fit: 'contain',
      },
    ],
    visual: 'SLEEP AUDIO',
    accent: 'mint',
  },
  {
    slug: 'sigarayi-birakiyoruz',
    title: 'Sigarayı Bırakıyoruz',
    category: {
      tr: 'Davranış Değişimi Ürünü',
      en: 'Behavior Change Product',
    },
    role: {
      tr: 'Kurucu & Full Stack Mobile Developer',
      en: 'Founder & Full Stack Mobile Developer',
    },
    summary: {
      tr: 'Sigarayı bırakma sürecindeki kullanıcılar için motivasyon, kriz anı desteği ve ilerleme takibi sunan mobil ürün.',
      en: 'A mobile product for smoking cessation with motivation loops, crisis support, and progress tracking.',
    },
    impact: {
      tr: 'Onboarding, kriz ekranları, çok dilli içerik, sağlık metinleri ve iOS/Android stabilite iyileştirmeleriyle yayın kalitesini güçlendirdim.',
      en: 'Strengthened release quality through onboarding, crisis screens, multilingual content, policy-safe health messaging, and stability work across iOS and Android.',
    },
    overview: {
      tr: 'Bu projede ürün akışının davranış değişimi mantığına göre kurulması önemliydi. Kullanıcıyı suçlamayan ama motivasyonu koruyan bir dil ve kriz anında işe yarayan hızlı ekranlar üzerine yoğunlaştım.',
      en: 'This product needed flows shaped around behavior change rather than generic utility patterns. I focused on non-judgmental motivation and fast crisis moments that actually help when the user is close to relapsing.',
    },
    metrics: [
      {
        label: {
          tr: 'Platform',
          en: 'Platform',
        },
        value: 'iOS + Android',
      },
      {
        label: {
          tr: 'Ürün tipi',
          en: 'Product type',
        },
        value: 'Habit change',
      },
      {
        label: {
          tr: 'Uyumluluk',
          en: 'Compliance',
        },
        value: 'App Store + Google Play',
      },
    ],
    detailGroups: [
      {
        title: {
          tr: 'Kurduğum akışlar',
          en: 'Flows I designed',
        },
        items: [
          {
            tr: 'Kurulum akışı, kriz ekranı desteği, motive edici içerikler ve ilerleme takibi bir bütün halinde tasarlandı.',
            en: 'Setup, crisis support, motivational content, and progress tracking were designed as one cohesive journey.',
          },
          {
            tr: 'Store policy gereksinimlerine uygun sağlık metinleri, gizlilik içerikleri ve release süreçleri yönetildi.',
            en: 'Handled policy-compliant health copy, privacy content, and release workflows required by the app stores.',
          },
          {
            tr: 'Crash azaltma ve yayın öncesi stabilite iyileştirmeleriyle ürünün teknik kalitesini güçlendirdim.',
            en: 'Improved product reliability through crash reduction and pre-release stability work.',
          },
        ],
      },
      {
        title: {
          tr: 'Neyi güçlendirdi',
          en: 'What it improved',
        },
        items: [
          {
            tr: 'Basit bir takip uygulamasından daha fazlasına dönüştü; kullanıcıyı süreç içinde tutan daha bilinçli bir ürün akışı çıktı.',
            en: 'It became more than a tracking app; the product flow was shaped to keep the user engaged through the quitting journey.',
          },
        ],
      },
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Google AdMob', 'App Store Connect', 'Google Play Console'],
    visual: 'QUIT TRACKING',
    accent: 'rose',
  },
  {
    slug: 'cancer-tissue-detection',
    title: 'Derin Öğrenme ile Kanserli Doku Tespiti',
    category: {
      tr: 'Bitirme Araştırma Projesi',
      en: 'Graduation Research Project',
    },
    role: {
      tr: 'Araştırmacı & Yazılım Geliştirici',
      en: 'Researcher & Software Developer',
    },
    summary: {
      tr: 'MR görüntülerinden kanserli hücreleri otomatik tespit etmeye odaklanan derin öğrenme tabanlı medikal görüntüleme çalışması.',
      en: 'A deep learning medical imaging project focused on automatic detection of cancerous tissue from MR scans.',
    },
    impact: {
      tr: 'TensorFlow ve VGG16/CNN yaklaşımıyla yaklaşık %98 doğruluk seviyesine çıkan akademik bir bitirme projesi.',
      en: 'A graduation project built with TensorFlow and VGG16/CNN methods, reaching roughly 98% accuracy in the academic context.',
    },
    overview: {
      tr: 'Akademik tarafta ürün işlerinden farklı bir derinlik gerekiyordu. Bu projede veri, model mimarisi ve doğruluk hedefi etrafında daha araştırma odaklı çalıştım.',
      en: 'This required a different kind of depth than product work. I approached it as a research problem centered on data, model architecture, and diagnostic accuracy.',
    },
    metrics: [
      {
        label: {
          tr: 'Alan',
          en: 'Field',
        },
        value: 'Medical imaging',
      },
      {
        label: {
          tr: 'Model',
          en: 'Model',
        },
        value: 'VGG16 / CNN',
      },
      {
        label: {
          tr: 'Doğruluk',
          en: 'Accuracy',
        },
        value: '~98%',
      },
    ],
    detailGroups: [
      {
        title: {
          tr: 'Teknik çalışma',
          en: 'Technical work',
        },
        items: [
          {
            tr: 'MR görüntülerinden kanserli doku tespitine yönelik bir veri ve modelleme akışı kurdum.',
            en: 'Built a data and modeling pipeline for detecting cancerous tissue from MR imagery.',
          },
          {
            tr: 'TensorFlow ve VGG16 mimarisini kullanarak CNN tabanlı sınıflandırma yaklaşımı geliştirdim.',
            en: 'Developed a CNN-based classification approach using TensorFlow and the VGG16 architecture.',
          },
        ],
      },
      {
        title: {
          tr: 'Akademik etki',
          en: 'Academic impact',
        },
        items: [
          {
            tr: 'Bitirme projesi olmanın ötesinde, yapay zekânın tıbbi teşhis süreçlerine katkısını gösteren referans bir çalışma olarak konumlandı.',
            en: 'It positioned itself as more than a graduation project by showing how AI can contribute to medical diagnosis workflows.',
          },
        ],
      },
    ],
    stack: ['Python', 'TensorFlow', 'VGG16', 'CNN', 'Medical Imaging'],
    visual: 'MED AI',
    accent: 'slate',
  },
  {
    slug: 'akkana',
    title: 'AKKANA',
    category: {
      tr: 'Sonarlı İnsansız Deniz Aracı',
      en: 'Sonar-Based Unmanned Marine Vehicle',
    },
    role: {
      tr: 'Proje Lideri & Yazılım Mühendisi',
      en: 'Project Lead & Software Engineer',
    },
    summary: {
      tr: 'Üniversite ve kuluçka desteğiyle prototip aşamasına gelen, sonar tabanlı insansız deniz aracı projesi.',
      en: 'A sonar-based unmanned marine vehicle project that reached prototype stage with university and incubation support.',
    },
    impact: {
      tr: 'Takım liderliği, ürün yönü ve prototipleme süreciyle Ostim Teknik Üniversitesi Pitching Day\'de ikincilik aldı.',
      en: 'Earned second place at Ostim Technical University Pitching Day through team leadership, product direction, and prototype delivery.',
    },
    overview: {
      tr: 'AKKANA benim için sadece teknik değil, liderlik tarafını da görünür kılan bir projeydi. Takımı, prototiplemeyi ve sunum tarafını aynı anda yönetmek gerekiyordu.',
      en: 'AKKANA mattered because it showcased leadership as much as engineering. I had to coordinate the team, prototype work, and presentation layer at the same time.',
    },
    metrics: [
      {
        label: {
          tr: 'Rol',
          en: 'Role',
        },
        value: 'Project lead',
      },
      {
        label: {
          tr: 'Aşama',
          en: 'Stage',
        },
        value: 'Prototype',
      },
      {
        label: {
          tr: 'Ödül',
          en: 'Award',
        },
        value: 'Pitching Day #2',
      },
    ],
    detailGroups: [
      {
        title: {
          tr: 'Süreç',
          en: 'Process',
        },
        items: [
          {
            tr: 'Proje Ostim Yatırım A.Ş. kuluçka merkezi desteğiyle yürütüldü ve takım liderliğiyle prototip aşamasına taşındı.',
            en: 'The project was developed with incubation support from Ostim Yatırım A.Ş. and pushed to prototype stage through team leadership.',
          },
          {
            tr: 'Teknik ve ürün yönünü birlikte tutarak ekip koordinasyonunu yürüttüm.',
            en: 'Handled team coordination while keeping the technical and product direction aligned.',
          },
        ],
      },
      {
        title: {
          tr: 'Sonuç',
          en: 'Outcome',
        },
        items: [
          {
            tr: 'Yarışma başarısı ve somut prototip çıktısı sayesinde üniversite dönemindeki en güçlü liderlik örneklerinden biri oldu.',
            en: 'It became one of the strongest examples of leadership from my university years thanks to both the award and the concrete prototype outcome.',
          },
        ],
      },
    ],
    stack: ['Product Leadership', 'Prototyping', 'Team Coordination', 'Marine Tech'],
    visual: 'SONAR NAV',
    accent: 'violet',
  },
  {
    slug: 'adl-dijital-cozumler',
    title: 'ADL Kurumsal Hizmetler Dijital Çözümleri',
    category: {
      tr: 'Kurumsal Web ve İK Sistemleri',
      en: 'Corporate Web and HR Systems',
    },
    role: {
      tr: 'Frontend & Backend Developer',
      en: 'Frontend & Backend Developer',
    },
    summary: {
      tr: 'adlkurumsal.com.tr ve HRSync gibi kurumsal çözümlerin uçtan uca yazılım süreçlerinde aktif rol aldım.',
      en: 'Worked across the full software lifecycle for corporate solutions such as adlkurumsal.com.tr and HRSync.',
    },
    impact: {
      tr: 'Kurumsal site teslimiyle birlikte İK süreçlerini yöneten ürün tarafında hem frontend hem backend mimarisine dokundum.',
      en: 'Contributed to both public-facing corporate delivery and the frontend/backend architecture of an HR operations product.',
    },
    overview: {
      tr: 'ADL dönemi, kurumsal müşteri ihtiyaçlarına daha hızlı cevap verme ve üretim kalitesi yüksek teslim çıkarma tarafımı güçlendirdi. Site ve ürün işi aynı anda yürüdü.',
      en: 'My ADL period strengthened my ability to deliver quickly for corporate clients while maintaining production quality. Public web and product work happened in parallel.',
    },
    metrics: [
      {
        label: {
          tr: 'Ürünler',
          en: 'Products',
        },
        value: 'Website + HRSync',
      },
      {
        label: {
          tr: 'Teslim şekli',
          en: 'Delivery mode',
        },
        value: 'Frontend + Backend',
      },
      {
        label: {
          tr: 'Odak',
          en: 'Focus',
        },
        value: 'Corporate systems',
      },
    ],
    detailGroups: [
      {
        title: {
          tr: 'Yaptığım işler',
          en: 'What I worked on',
        },
        items: [
          {
            tr: 'adlkurumsal.com.tr platformunun yazılım süreçlerinde yer aldım.',
            en: 'Contributed to the software delivery of adlkurumsal.com.tr.',
          },
          {
            tr: 'HRSync projesinde İK süreçlerini yöneten yapının frontend ve backend mimarisinde aktif görev aldım.',
            en: 'Worked actively on the frontend and backend architecture of HRSync, a product for HR process management.',
          },
        ],
      },
      {
        title: {
          tr: 'Kazanım',
          en: 'Outcome',
        },
        items: [
          {
            tr: 'Kurumsal teslim disiplini ile daha ürünleşmiş iç sistem tasarımını aynı dönemde deneyimleme fırsatı verdi.',
            en: 'Provided experience across both disciplined corporate delivery and more productized internal system design.',
          },
        ],
      },
    ],
    stack: ['React', 'JavaScript', 'Backend APIs', 'Corporate Web Delivery'],
    visual: 'HR / WEB',
    accent: 'blue',
  },
  {
    slug: 'pb-yazilim-tasarim',
    title: 'PB Yazılım Tasarım Projeleri',
    category: {
      tr: 'Kurumsal Platform ve UI/UX Teslimleri',
      en: 'Corporate Platforms and UI/UX Deliveries',
    },
    role: {
      tr: 'Full Stack Developer',
      en: 'Full Stack Developer',
    },
    summary: {
      tr: 'CHATRIKA platformu UI/UX tasarımı ile teklok.com, pbyazilimtasarim.com ve çamavrupa.com gibi kurumsal platformların yazılım süreçlerinde yer aldım.',
      en: 'Worked on CHATRIKA UI/UX and end-to-end software delivery for corporate platforms such as teklok.com, pbyazilimtasarim.com, and camavrupa.com.',
    },
    impact: {
      tr: 'Birden fazla marka ve platform için tasarım ile uygulama tarafını aynı anda yöneten daha geniş bir teslim aralığı sağladı.',
      en: 'Expanded my delivery range by combining design and implementation across multiple brands and platforms.',
    },
    overview: {
      tr: 'Bu başlık altındaki işler farklı sektörlerde ama ortak bir beklentiyle geldi: hızlı, profesyonel ve uçtan uca teslim. UI/UX ile uygulama arasındaki kopukluğu azaltmaya çalıştım.',
      en: 'These projects came from different sectors but shared the same expectation: fast, professional, end-to-end delivery. I focused on reducing the gap between UI/UX intent and implementation.',
    },
    metrics: [
      {
        label: {
          tr: 'Kapsam',
          en: 'Scope',
        },
        value: 'Multiple brands',
      },
      {
        label: {
          tr: 'Teslim tipi',
          en: 'Delivery type',
        },
        value: 'UI/UX + Full stack',
      },
      {
        label: {
          tr: 'Sektör',
          en: 'Sector',
        },
        value: 'Corporate web',
      },
    ],
    detailGroups: [
      {
        title: {
          tr: 'Detay',
          en: 'Details',
        },
        items: [
          {
            tr: 'CHATRIKA platformu için UI/UX tasarım çalışmaları yürüttüm.',
            en: 'Worked on UI/UX design for the CHATRIKA platform.',
          },
          {
            tr: 'teklok.com, pbyazilimtasarim.com ve çamavrupa.com gibi kurumsal sitelerin uçtan uca yazılım süreçlerini tamamladım.',
            en: 'Completed end-to-end software delivery for corporate sites including teklok.com, pbyazilimtasarim.com, and camavrupa.com.',
          },
        ],
      },
      {
        title: {
          tr: 'Etki',
          en: 'Impact',
        },
        items: [
          {
            tr: 'Farklı müşteri beklentilerine uyum sağlarken hem tasarım dili hem de uygulama kalitesini koruyan pratik bir çalışma biçimi geliştirdim.',
            en: 'Built a practical delivery style that keeps both design quality and implementation quality intact across different client expectations.',
          },
        ],
      },
    ],
    stack: ['UI/UX', 'Frontend', 'Backend', 'Corporate Websites'],
    media: [
      {
        src: pbYazilimOffice,
        alt: {
          tr: 'PB Yazılım Tasarım reposundan alınan kurumsal görsel',
          en: 'Corporate image pulled from the PB Yazilim Tasarim repository',
        },
        fit: 'cover',
      },
    ],
    visual: 'MULTI BRAND',
    accent: 'amber',
  },
]

const education: Education[] = [
  {
    school: 'OSTİM Teknik Üniversitesi',
    degree: {
      tr: 'Yüksek Lisans, Yazılım Mühendisliği',
      en: 'MSc in Software Engineering',
    },
    period: 'Ekim 2025 - Devam ediyor',
  },
  {
    school: 'OSTİM Teknik Üniversitesi',
    degree: {
      tr: 'Lisans, Yazılım Mühendisliği',
      en: 'BSc in Software Engineering',
    },
    period: 'Ekim 2020 - Haziran 2024',
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

function getProjectSlugFromHash() {
  if (typeof window === 'undefined') {
    return null
  }

  const match = window.location.hash.match(/^#\/projects\/([^/?#]+)/)
  return match?.[1] ?? null
}

function App() {
  const [locale, setLocale] = useState<Locale>('tr')
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(() => getProjectSlugFromHash())
  const copy = uiCopy[locale]
  const activeProject = featuredProjects.find((project) => project.slug === activeProjectSlug) ?? null

  useEffect(() => {
    const syncProjectFromHash = () => {
      setActiveProjectSlug(getProjectSlugFromHash())
    }

    window.addEventListener('hashchange', syncProjectFromHash)
    return () => window.removeEventListener('hashchange', syncProjectFromHash)
  }, [])

  useEffect(() => {
    if (activeProject) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (activeProjectSlug) {
      window.location.hash = '#selected-work'
    }
  }, [activeProject, activeProjectSlug])

  const openProject = (slug: string) => {
    window.location.hash = `#/projects/${slug}`
  }

  const closeProject = () => {
    window.location.hash = '#selected-work'
  }

  if (activeProject) {
    return (
      <main className="page-shell detail-shell">
        <section className="project-detail-panel">
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

          <div className="detail-actions">
            <button type="button" className="secondary-link action-button" onClick={closeProject}>
              {copy.detailBack}
            </button>
            <a href={cvFile} className="secondary-link" download>
              {copy.downloadCv}
            </a>
          </div>

          <div className="detail-hero">
            <div className="detail-copy">
              <p className="eyebrow">{activeProject.category[locale]}</p>
              <h1>{activeProject.title}</h1>
              <p className="hero-text">{activeProject.overview[locale]}</p>
              <div className="detail-meta-grid">
                <article>
                  <span>{copy.detailRole}</span>
                  <strong>{activeProject.role[locale]}</strong>
                </article>
                <article>
                  <span>{copy.detailCategory}</span>
                  <strong>{activeProject.category[locale]}</strong>
                </article>
                <article>
                  <span>{copy.detailStatus}</span>
                  <strong>{activeProject.impact[locale]}</strong>
                </article>
              </div>
            </div>

            <div className={`project-visual detail-visual accent-${activeProject.accent}`}>
              <span className="project-visual-code">{activeProject.visual}</span>
              <strong>{activeProject.title}</strong>
              <p>{activeProject.summary[locale]}</p>
            </div>
          </div>

          <section className="detail-summary-card">
            <div className="section-heading compact">
              <p className="eyebrow">{copy.detailSummary}</p>
              <h2>{activeProject.summary[locale]}</h2>
            </div>

            <div className="detail-metrics-grid">
              {activeProject.metrics.map((metric) => (
                <article key={`${activeProject.slug}-${metric.label.en}`}>
                  <span>{metric.label[locale]}</span>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>
          </section>

          {activeProject.media?.length ? (
            <section className="detail-media-card">
              <div className="section-heading compact">
                <p className="eyebrow">{copy.detailMedia}</p>
                <h2>{activeProject.title}</h2>
              </div>

              <div className="detail-media-grid">
                {activeProject.media.map((item) => (
                  <figure className="detail-media-item" key={`${activeProject.slug}-${item.src}`}>
                    <img
                      src={item.src}
                      alt={item.alt[locale]}
                      className={item.fit === 'contain' ? 'detail-media-image is-contain' : 'detail-media-image'}
                    />
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          <section className="detail-content-grid">
            {activeProject.detailGroups.map((group) => (
              <article className="detail-block" key={`${activeProject.slug}-${group.title.en}`}>
                <h3>{group.title[locale]}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.en}>{item[locale]}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="detail-stack-card">
            <div className="section-heading compact">
              <p className="eyebrow">{copy.detailStack}</p>
              <h2>{activeProject.title}</h2>
            </div>

            <div className="tag-row">
              {activeProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="detail-related-card">
            <div className="section-heading compact">
              <p className="eyebrow">{copy.detailBrowse}</p>
              <h2>{copy.selectedWorkTitle}</h2>
            </div>

            <div className="related-projects-grid">
              {featuredProjects
                .filter((project) => project.slug !== activeProject.slug)
                .slice(0, 4)
                .map((project) => (
                  <button
                    type="button"
                    className="related-project-card"
                    key={project.slug}
                    onClick={() => openProject(project.slug)}
                  >
                    <span>{project.category[locale]}</span>
                    <strong>{project.title}</strong>
                    <p>{project.summary[locale]}</p>
                  </button>
                ))}
            </div>
          </section>
        </section>
      </main>
    )
  }

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
            <a href={cvFile} className="secondary-link" download>
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
              <img src={profilePhoto} alt="Portrait of Hakkı Mert Peyk" className="portrait-image" />
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
            <button type="button" className="project-card project-card-button" key={project.slug} onClick={() => openProject(project.slug)}>
              <div className={`project-visual accent-${project.accent}${project.media?.length ? ' has-image' : ''}`}>
                {project.media?.[0] ? (
                  <img
                    src={project.media[0].src}
                    alt={project.media[0].alt[locale]}
                    className={project.media[0].fit === 'contain' ? 'project-visual-image is-contain' : 'project-visual-image'}
                  />
                ) : null}
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
              <span className="project-cta">{copy.projectCta}</span>
            </button>
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
          <a href={cvFile} download>
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
