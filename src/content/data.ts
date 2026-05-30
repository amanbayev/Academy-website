import type {EventItem, ImpactMetric, NewsItem, Partner, Program, TeamMember, Trainer} from './types';

export const learningAreas = [
  {id: 'finance', icon: 'chart', title: {ru: 'Финансы и рынки капитала', en: 'Finance and capital markets', kk: 'Қаржы және капитал нарықтары'}},
  {id: 'law', icon: 'scale', title: {ru: 'Право и юрисдикция МФЦА', en: 'AIFC law and jurisdiction', kk: 'AIFC құқығы және юрисдикциясы'}},
  {id: 'compliance', icon: 'shield', title: {ru: 'Комплаенс и риск', en: 'Compliance and risk', kk: 'Комплаенс және тәуекел'}},
  {id: 'digital', icon: 'network', title: {ru: 'Цифровые активы и FinTech', en: 'Digital assets and FinTech', kk: 'Цифрлық активтер және FinTech'}},
  {id: 'leadership', icon: 'users', title: {ru: 'Leadership', en: 'Leadership', kk: 'Leadership'}},
  {id: 'esg', icon: 'leaf', title: {ru: 'ESG', en: 'ESG', kk: 'ESG'}}
] as const;

export const metrics: ImpactMetric[] = [
  {id: 'professionals', value: '15 000+', verified: false, sourceNoteInternal: 'Editable placeholder until Academy verifies.', label: {ru: 'обученных профессионалов', en: 'trained professionals', kk: 'оқытылған мамандар'}, description: {ru: 'Показатель редактируется', en: 'Editable metric', kk: 'Өңделетін көрсеткіш'}},
  {id: 'events', value: '3 000+', verified: false, sourceNoteInternal: 'Editable placeholder until Academy verifies.', label: {ru: 'участников мероприятий', en: 'event participants', kk: 'іс-шара қатысушылары'}, description: {ru: 'Показатель редактируется', en: 'Editable metric', kk: 'Өңделетін көрсеткіш'}},
  {id: 'programs', value: '30+', verified: false, sourceNoteInternal: 'Editable placeholder until Academy verifies.', label: {ru: 'образовательных программ', en: 'education programs', kk: 'білім беру бағдарламалары'}, description: {ru: 'Показатель редактируется', en: 'Editable metric', kk: 'Өңделетін көрсеткіш'}},
  {id: 'partners', value: '50+', verified: false, sourceNoteInternal: 'Editable placeholder until Academy verifies.', label: {ru: 'партнеров в экосистеме', en: 'ecosystem partners', kk: 'экожүйе серіктестері'}, description: {ru: 'Показатель редактируется', en: 'Editable metric', kk: 'Өңделетін көрсеткіш'}}
];

export const trainers: Trainer[] = [
  {
    id: 'trainer-legal',
    isPlaceholder: true,
    photo: '/images/portrait-1.svg',
    name: {ru: 'Эксперт AIFC Academy', en: 'AIFC Academy Expert', kk: 'AIFC Academy сарапшысы'},
    title: {ru: 'Практик в области права МФЦА', en: 'AIFC law practitioner', kk: 'AIFC құқығы бойынша практик'},
    bio: {ru: 'Профиль будет заменен на подтвержденные данные преподавателя.', en: 'This profile will be replaced with verified trainer information.', kk: 'Бұл профиль расталған оқытушы деректерімен ауыстырылады.'},
    credentials: {ru: ['Практический опыт в юрисдикции МФЦА', 'Работа с корпоративными сделками'], en: ['AIFC jurisdiction practice', 'Corporate transaction experience'], kk: ['AIFC юрисдикциясы тәжірибесі', 'Корпоративтік мәмілелер тәжірибесі']}
  }
];

const moduleSet = [
  {
    title: {ru: 'Основы и контекст', en: 'Foundations and context', kk: 'Негіздер және контекст'},
    description: {ru: 'Ключевые понятия, участники рынка и практическая рамка темы.', en: 'Key concepts, market participants and practical framing.', kk: 'Негізгі ұғымдар, нарық қатысушылары және практикалық негіз.'},
    duration: {ru: '0,5 дня', en: '0.5 day', kk: '0,5 күн'}
  },
  {
    title: {ru: 'Практические инструменты', en: 'Practical tools', kk: 'Практикалық құралдар'},
    description: {ru: 'Методы, шаблоны и подходы, которые можно применять в работе.', en: 'Methods, templates and approaches ready for professional use.', kk: 'Жұмыста қолдануға болатын әдістер, үлгілер және тәсілдер.'},
    duration: {ru: '1 день', en: '1 day', kk: '1 күн'}
  },
  {
    title: {ru: 'Кейсы и разбор решений', en: 'Cases and solution review', kk: 'Кейстер және шешімдерді талдау'},
    description: {ru: 'Разбор прикладных ситуаций и типичных ошибок.', en: 'Applied scenarios and common mistakes review.', kk: 'Қолданбалы жағдайлар мен жиі қателерді талдау.'},
    duration: {ru: '1 день', en: '1 day', kk: '1 күн'}
  }
];

export const programs: Program[] = [
  {
    id: 'p-law',
    slug: 'aifc-corporate-law',
    title: {ru: 'Право МФЦА: корпоративное управление и сделки', en: 'AIFC Law: Corporate Governance and Transactions', kk: 'AIFC құқығы: корпоративтік басқару және мәмілелер'},
    shortDescription: {ru: 'Практический курс о стандартах корпоративного управления и сделках в юрисдикции МФЦА.', en: 'A practical course on corporate governance and transactions in the AIFC jurisdiction.', kk: 'AIFC юрисдикциясындағы корпоративтік басқару және мәмілелер бойынша практикалық курс.'},
    fullDescription: {ru: 'Курс помогает разобраться в применимых нормах, лучших практиках и кейсах реальных транзакций.', en: 'The course explains applicable rules, best practices and real transaction cases.', kk: 'Курс қолданылатын нормаларды, үздік практикаларды және нақты мәміле кейстерін түсіндіреді.'},
    category: 'law',
    startDate: '2026-06-16',
    endDate: '2026-06-18',
    duration: {ru: '3 дня', en: '3 days', kk: '3 күн'},
    format: 'hybrid',
    city: {ru: 'Астана', en: 'Astana', kk: 'Астана'},
    online: true,
    language: 'Русский',
    level: 'intermediate',
    price: 320000,
    currency: 'KZT',
    certificate: {ru: 'Сертификат AIFC Academy', en: 'AIFC Academy certificate', kk: 'AIFC Academy сертификаты'},
    image: '/images/visual-law.svg',
    trainerIds: ['trainer-legal'],
    modules: moduleSet,
    outcomes: {ru: ['Понимание норм МФЦА', 'Инструменты для сделок', 'Шаблоны и чек-листы', 'Сертификат'], en: ['AIFC rules understanding', 'Transaction tools', 'Templates and checklists', 'Certificate'], kk: ['AIFC нормаларын түсіну', 'Мәміле құралдары', 'Үлгілер мен чек-листтер', 'Сертификат']},
    audience: {ru: ['Юристы', 'Комплаенс-специалисты', 'Руководители', 'Инвестиционные команды'], en: ['Lawyers', 'Compliance specialists', 'Executives', 'Investment teams'], kk: ['Заңгерлер', 'Комплаенс мамандары', 'Басшылар', 'Инвестициялық командалар']},
    faq: [{question: {ru: 'Можно ли оплатить от организации?', en: 'Can an organization pay?', kk: 'Ұйым атынан төлеуге бола ма?'}, answer: {ru: 'Да, запросите счет через форму курса.', en: 'Yes, request an invoice through the course form.', kk: 'Иә, курс формасы арқылы шот сұраңыз.'}}],
    relatedProgramIds: ['p-finance', 'p-compliance'],
    status: 'upcoming'
  },
  {
    id: 'p-finance',
    slug: 'financial-instruments',
    title: {ru: 'Финансовые инструменты и рынки капитала МФЦА', en: 'Financial Instruments and AIFC Capital Markets', kk: 'Қаржы құралдары және AIFC капитал нарықтары'},
    shortDescription: {ru: 'Инструменты, рынки, корпоративные финансы и оценка стоимости.', en: 'Instruments, markets, corporate finance and valuation.', kk: 'Құралдар, нарықтар, корпоративтік қаржы және бағалау.'},
    fullDescription: {ru: 'Курс для специалистов, которым нужно понимать структуру финансовых рынков и практику AIFC.', en: 'A course for specialists who need to understand financial markets and AIFC practice.', kk: 'Қаржы нарықтары мен AIFC тәжірибесін түсінуді қажет ететін мамандарға арналған курс.'},
    category: 'finance',
    startDate: '2026-06-16',
    endDate: '2026-06-18',
    duration: {ru: '3 дня', en: '3 days', kk: '3 күн'},
    format: 'offline',
    city: {ru: 'Астана', en: 'Astana', kk: 'Астана'},
    online: false,
    language: 'Русский',
    level: 'intermediate',
    price: 320000,
    currency: 'KZT',
    certificate: {ru: 'Сертификат AIFC Academy', en: 'AIFC Academy certificate', kk: 'AIFC Academy сертификаты'},
    image: '/images/visual-finance.svg',
    trainerIds: ['trainer-legal'],
    modules: moduleSet,
    outcomes: {ru: ['Рыночная логика', 'Практические модели', 'Сертификат'], en: ['Market logic', 'Practical models', 'Certificate'], kk: ['Нарық логикасы', 'Практикалық модельдер', 'Сертификат']},
    audience: {ru: ['Финансисты', 'Инвесторы', 'Менеджеры'], en: ['Finance professionals', 'Investors', 'Managers'], kk: ['Қаржыгерлер', 'Инвесторлар', 'Менеджерлер']},
    faq: [],
    relatedProgramIds: ['p-law', 'p-digital'],
    status: 'upcoming'
  },
  {
    id: 'p-digital',
    slug: 'digital-assets-regulation',
    title: {ru: 'Цифровые активы: регулирование и практика', en: 'Digital Assets: Regulation and Practice', kk: 'Цифрлық активтер: реттеу және практика'},
    shortDescription: {ru: 'Правовые и практические аспекты рынка цифровых активов в МФЦА.', en: 'Legal and practical aspects of digital assets in the AIFC.', kk: 'AIFC-тегі цифрлық активтер нарығының құқықтық және практикалық аспектілері.'},
    fullDescription: {ru: 'Программа дает системное понимание регулирования, рисков и операционных моделей.', en: 'The program gives a structured view of regulation, risks and operating models.', kk: 'Бағдарлама реттеу, тәуекелдер және операциялық модельдер туралы жүйелі түсінік береді.'},
    category: 'digital',
    startDate: '2026-06-23',
    endDate: '2026-06-25',
    duration: {ru: '3 дня', en: '3 days', kk: '3 күн'},
    format: 'online',
    city: {ru: 'Онлайн', en: 'Online', kk: 'Онлайн'},
    online: true,
    language: 'Русский',
    level: 'intermediate',
    price: 290000,
    currency: 'KZT',
    certificate: {ru: 'Сертификат AIFC Academy', en: 'AIFC Academy certificate', kk: 'AIFC Academy сертификаты'},
    image: '/images/visual-digital.svg',
    trainerIds: ['trainer-legal'],
    modules: moduleSet,
    outcomes: {ru: ['Регуляторная карта', 'Оценка рисков', 'Сертификат'], en: ['Regulatory map', 'Risk assessment', 'Certificate'], kk: ['Реттеу картасы', 'Тәуекелді бағалау', 'Сертификат']},
    audience: {ru: ['FinTech-команды', 'Юристы', 'Риск-специалисты'], en: ['FinTech teams', 'Lawyers', 'Risk specialists'], kk: ['FinTech командалары', 'Заңгерлер', 'Тәуекел мамандары']},
    faq: [],
    relatedProgramIds: ['p-finance', 'p-compliance'],
    status: 'upcoming'
  },
  {
    id: 'p-compliance',
    slug: 'risk-and-compliance',
    title: {ru: 'Управление рисками и внутренний контроль', en: 'Risk Management and Internal Control', kk: 'Тәуекелдерді басқару және ішкі бақылау'},
    shortDescription: {ru: 'Практический курс по управлению рисками, AML/CFT, комплаенсу и внутреннему контролю.', en: 'A practical course on risk, AML/CFT, compliance and internal control.', kk: 'Тәуекел, AML/CFT, комплаенс және ішкі бақылау бойынша практикалық курс.'},
    fullDescription: {ru: 'Программа помогает выстроить контрольную среду и работать с регуляторными ожиданиями.', en: 'The program helps build a control environment and address regulatory expectations.', kk: 'Бағдарлама бақылау ортасын құруға және реттеуші күтулерімен жұмыс істеуге көмектеседі.'},
    category: 'compliance',
    startDate: '2026-07-21',
    endDate: '2026-07-23',
    duration: {ru: '3 дня', en: '3 days', kk: '3 күн'},
    format: 'online',
    city: {ru: 'Онлайн', en: 'Online', kk: 'Онлайн'},
    online: true,
    language: 'Русский',
    level: 'intermediate',
    price: 290000,
    currency: 'KZT',
    certificate: {ru: 'Сертификат AIFC Academy', en: 'AIFC Academy certificate', kk: 'AIFC Academy сертификаты'},
    image: '/images/visual-risk.svg',
    trainerIds: ['trainer-legal'],
    modules: moduleSet,
    outcomes: {ru: ['Карта рисков', 'Контрольные процедуры', 'Сертификат'], en: ['Risk map', 'Control procedures', 'Certificate'], kk: ['Тәуекел картасы', 'Бақылау рәсімдері', 'Сертификат']},
    audience: {ru: ['Комплаенс', 'Риск', 'Внутренний аудит'], en: ['Compliance', 'Risk', 'Internal audit'], kk: ['Комплаенс', 'Тәуекел', 'Ішкі аудит']},
    faq: [],
    relatedProgramIds: ['p-law', 'p-digital'],
    status: 'upcoming'
  }
];

export const events: EventItem[] = [
  {id: 'e-forum', slug: 'aifc-forum-2026', featured: true, image: '/images/visual-forum.svg', date: '2026-10-16', format: 'offline', city: {ru: 'Астана', en: 'Astana', kk: 'Астана'}, location: {ru: 'МФЦА', en: 'AIFC', kk: 'AIFC'}, type: {ru: 'Форум', en: 'Forum', kk: 'Форум'}, title: {ru: 'AIFC Forum: финансы будущего и устойчивое развитие', en: 'AIFC Forum: Future Finance and Sustainable Growth', kk: 'AIFC Forum: болашақ қаржы және тұрақты даму'}, description: {ru: 'Ежегодный форум для лидеров финансового рынка и партнеров экосистемы.', en: 'Annual forum for financial market leaders and ecosystem partners.', kk: 'Қаржы нарығы көшбасшылары мен экожүйе серіктестеріне арналған жыл сайынғы форум.'}, tags: {ru: ['Финансы', 'ESG'], en: ['Finance', 'ESG'], kk: ['Қаржы', 'ESG']}},
  {id: 'e-webinar', slug: 'digital-assets-webinar', image: '/images/visual-digital.svg', date: '2026-06-03', format: 'online', city: {ru: 'Онлайн', en: 'Online', kk: 'Онлайн'}, location: {ru: 'Онлайн', en: 'Online', kk: 'Онлайн'}, type: {ru: 'Вебинар', en: 'Webinar', kk: 'Вебинар'}, title: {ru: 'Цифровые активы и регулирование: глобальные тренды', en: 'Digital assets and regulation: global trends', kk: 'Цифрлық активтер және реттеу: жаһандық трендтер'}, description: {ru: 'Краткий экспертный обзор для профессионалов.', en: 'A concise expert briefing for professionals.', kk: 'Кәсіби мамандарға арналған қысқа сараптамалық шолу.'}, tags: {ru: ['FinTech'], en: ['FinTech'], kk: ['FinTech']}}
];

export const news: NewsItem[] = [
  {id: 'n-featured', slug: 'kazakhstan-finance-2026', featured: true, image: '/images/visual-news.svg', date: '2026-05-30', category: {ru: 'Аналитика', en: 'Analytics', kk: 'Талдау'}, author: {ru: 'AIFC Academy', en: 'AIFC Academy', kk: 'AIFC Academy'}, title: {ru: 'Перспективы развития финансового сектора Казахстана', en: 'Prospects for Kazakhstan’s financial sector', kk: 'Қазақстан қаржы секторының даму перспективалары'}, summary: {ru: 'Ключевые тренды, регуляторные инициативы и роль человеческого капитала.', en: 'Key trends, regulatory initiatives and the role of human capital.', kk: 'Негізгі трендтер, реттеуші бастамалар және адами капиталдың рөлі.'}, tags: {ru: ['Рынки капитала'], en: ['Capital markets'], kk: ['Капитал нарықтары']}},
  {id: 'n-partnership', slug: 'university-cooperation', image: '/images/visual-campus.svg', date: '2026-05-26', category: {ru: 'Новости', en: 'News', kk: 'Жаңалықтар'}, author: {ru: 'AIFC Academy', en: 'AIFC Academy', kk: 'AIFC Academy'}, title: {ru: 'AIFC Academy развивает академическое сотрудничество', en: 'AIFC Academy expands academic cooperation', kk: 'AIFC Academy академиялық ынтымақтастықты дамытады'}, summary: {ru: 'Новые инициативы для студентов, преподавателей и университетских партнеров.', en: 'New initiatives for students, faculty and university partners.', kk: 'Студенттер, оқытушылар және университет серіктестері үшін жаңа бастамалар.'}, tags: {ru: ['Университеты'], en: ['Universities'], kk: ['Университеттер']}}
];

export const partners: Partner[] = [
  {id: 'aifc', name: 'AIFC', logoText: 'AIFC', category: 'ecosystem', verified: true},
  {id: 'afsa', name: 'AFSA', logoText: 'AFSA', category: 'ecosystem', verified: true},
  {id: 'court', name: 'AIFC Court and IAC', logoText: 'AIFC Court', category: 'ecosystem', verified: true},
  {id: 'techhub', name: 'Tech Hub', logoText: 'Tech Hub', category: 'ecosystem', verified: true},
  {id: 'university-placeholder', name: 'University partner', logoText: 'University', category: 'university', verified: false}
];

export const team: TeamMember[] = [
  {id: 'team-1', order: 1, isPlaceholder: true, photo: '/images/portrait-1.svg', name: {ru: 'Эксперт Academy', en: 'Academy Expert', kk: 'Academy сарапшысы'}, title: {ru: 'Руководитель образовательных программ', en: 'Head of education programs', kk: 'Білім беру бағдарламаларының жетекшісі'}, bio: {ru: 'Профиль редактируется после подтверждения команды.', en: 'Profile editable after team confirmation.', kk: 'Профиль команда расталғаннан кейін өңделеді.'}},
  {id: 'team-2', order: 2, isPlaceholder: true, photo: '/images/portrait-2.svg', name: {ru: 'Эксперт по рынкам', en: 'Markets Expert', kk: 'Нарықтар сарапшысы'}, title: {ru: 'Куратор программ по финансам', en: 'Finance program curator', kk: 'Қаржы бағдарламаларының кураторы'}, bio: {ru: 'Профиль редактируется после подтверждения команды.', en: 'Profile editable after team confirmation.', kk: 'Профиль команда расталғаннан кейін өңделеді.'}}
];
