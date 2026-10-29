/**
 * Site-level content: profile, stats, experience, education, skills.
 * Edit this file to update copy across the whole site.
 */

export const site = {
  name: 'Manish Kumar',
  firstName: 'Manish',
  lastName: 'Kumar',
  role: 'UI/UX Designer',
  roleLong: 'UI/UX & Product Designer',
  email: 'awesome.manish49@gmail.com',
  phone: '7838082254',
  phoneHref: 'tel:+917838082254',
  linkedin: 'https://www.linkedin.com/in/manish-kumar-52b490194/',
  location: 'India',
  availability: 'Available for new work',
  years: '6+',
  intro:
    'I design enterprise products that people use for eight hours a day. For the last six years I have worked with HR, sales, warehouse and clinical teams — turning messy, spreadsheet-driven operations into clear, role-based interfaces that ship.',
  introShort:
    'Product designer working on enterprise SaaS, HRMS, CRM and healthcare systems. Six years of taking complex operations — payroll, dispatch, inventory, clinics — and making them calm, legible and usable every single day.',
}

export const stats = [
  {
    value: '6+',
    label: 'Years designing digital products',
    note: 'Since July 2019',
  },
  {
    value: '15',
    label: 'Projects shipped across 3 product suites',
    note: 'Web, mobile and brand',
  },
  {
    value: '74+',
    label: 'Product modules designed end to end',
    note: 'HRMS 41 · Aarogya 33',
  },
  {
    value: '5',
    label: 'Role-based dashboards in one system',
    note: 'Admin, HR, Manager, Employee, Accounts',
  },
]

export const experience = [
  {
    company: 'EHS25 HR INDIA PVT. LTD.',
    role: 'UI/UX Designer',
    period: 'Oct 2023 — Present',
    summary:
      'Own end-to-end product design for GuruPayroll, an HR operating system, plus two standalone products for the same company.',
    points: [
      'GuruPayroll HRMS — 41 modules across web admin and a companion mobile app for employees.',
      'Designed the recruitment-to-retirement journey: vacancy, candidate, interview, onboarding, attendance, payroll, assets, exit.',
      'Built role-based dashboards for Admin, HR, Manager, Employee, Accounts and Authorised Signatory.',
      'Designed a Chat application and an Influencer Panel from first flows to final UI.',
      'Worked day to day with developers on states, edge cases and handoff.',
    ],
  },
  {
    company: 'Aarogya India',
    role: 'Product Designer — sister concern of EHS25',
    period: 'Oct 2023 — Present',
    summary:
      'Design partner for the group\u2019s Ayurvedic healthcare business — CRM, warehouse, hospital operations, patient app and brand.',
    points: [
      'Aarogya CRM: lead capture, verification, dispatch, NDR/RTO, attendance and MIS for a tele-sales operation.',
      'Stock & warehouse: multi-warehouse inventory, transfers, returns, delivery challans and B2B ledger.',
      'Wellness hospital admin: doctors, appointments, therapy sessions, pharmacy, billing and revenue analytics.',
      'Patient & Doctor app: clinic and video consultations, prescriptions, orders, EMR.',
      'Branding: website direction, Ayurvedic and Hindi healthcare creatives, franchise presentations.',
    ],
  },
  {
    company: 'Finoit Technologies',
    role: 'UI/UX Designer (joined as Intern)',
    period: 'Jul 2019 — Sep 2023',
    summary:
      'Four years designing optimised mobile apps and websites for clients across hospitality, healthcare and education.',
    points: [
      'Designed responsive UI for multiple devices and screen sizes, from wireframe to final screens.',
      'Hospitality: online store, guest experience and feedback tools, PoS, loyalty and inventory management.',
      'Healthcare: a web-based behavioural health navigation platform for Orange County residents.',
      'Education: multi-location website for the world\u2019s first sustainable-certified surf school.',
      'Created social media banners, festival posts and thumbnails for the marketing team.',
    ],
  },
]

export const education = [
  {
    year: '2019',
    title: 'Diploma in Graphic Design',
    place: 'Croma Campus Institute',
  },
  {
    year: '2016',
    title: 'B.Com',
    place: 'CCS University, Meerut',
  },
  {
    year: '2013',
    title: 'Class XII',
    place: 'Uttar Pradesh Board',
  },
  {
    year: '2010',
    title: 'Class X',
    place: 'Uttar Pradesh Board',
  },
]

export const skills = [
  { name: 'Product & UX design', level: 'Core' },
  { name: 'User flows & information architecture', level: 'Core' },
  { name: 'Design systems & components', level: 'Core' },
  { name: 'Dashboard & data-dense UI', level: 'Core' },
  { name: 'Responsive web design', level: 'Core' },
  { name: 'Mobile app UI (iOS / Android)', level: 'Strong' },
  { name: 'Interactive prototyping', level: 'Strong' },
  { name: 'Wireframing & rapid iteration', level: 'Strong' },
  { name: 'Branding & social media design', level: 'Strong' },
  { name: 'Developer handoff & QA', level: 'Strong' },
]

export const tools = [
  'Figma',
  'Adobe XD',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Prototyping',
  'Design systems',
  'Wireframing',
  'Responsive UI',
  'Social media creatives',
]

export const process = [
  {
    name: 'Understand',
    desc: 'Sit with the people who use the product — HR, sales agents, accountants, doctors — and map how work actually happens.',
  },
  {
    name: 'Map the flow',
    desc: 'Turn that into a numbered flow map of every module and role, so nothing is discovered halfway through UI.',
  },
  {
    name: 'Wireframe',
    desc: 'Low-fidelity layouts to settle structure, hierarchy and states before any visual polish.',
  },
  {
    name: 'Design',
    desc: 'High-fidelity screens on a shared component library — consistent spacing, type scale, states and empty cases.',
  },
  {
    name: 'Handoff',
    desc: 'Documented specs, prototypes and a review loop with developers until it matches what was designed.',
  },
]
