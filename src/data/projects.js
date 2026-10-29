/**
 * Project content. Add a new object here and it appears on the Work page,
 * gets its own /work/:slug route and a card on the home page (if featured).
 */

export const categories = [
  'All work',
  'Enterprise SaaS',
  'CRM & Operations',
  'Healthcare',
  'Mobile Apps',
  'Brand & Marketing',
]

export const projects = [
  {
    slug: 'gurupayroll-hrms',
    title: 'GuruPayroll HRMS',
    subtitle: 'One HR system, from recruitment to retirement',
    client: 'EHS25 HR India Pvt. Ltd.',
    year: '2023 — Present',
    category: 'Enterprise SaaS',
    tags: ['HRMS', 'Web app', 'Mobile app', 'Design system'],
    accent: '#0f766e',
    status: 'Live',
    featured: true,
    cover: null,
    role: 'UI/UX Designer — sole designer',
    timeline: 'Oct 2023 — Present',
    platform: 'Web admin + Android / iOS app',
    team: 'Product owner, 6–8 developers, QA',
    deliverables: 'Flow map, IA, wireframes, UI kit, prototypes, handoff',
    summary:
      'An HR operating system for a distributed workforce: 41 modules across web admin and a companion mobile app, covering hiring, attendance, payroll, assets and exit. Five roles see the same data through five very different dashboards.',
    problem: {
      text: 'HR ran on disconnected spreadsheets and WhatsApp approvals. Attendance lived with one person, payroll with another, and asset records with a third. Managers approved leaves in chat, and field employees had no way to mark attendance without a desktop.',
      points: [
        'No single source of truth between attendance and payroll.',
        'Approvals happened in chat, with no record of who approved what.',
        'Every role needed a different view — but the data had to be one.',
        'Employees could not see their own payslip, leave balance or assets.',
      ],
    },
    audience: [
      { role: 'Admin / HR', desc: 'Runs hiring, onboarding, payroll and exit for the whole company.' },
      { role: 'Manager / Approver', desc: 'Approves leaves, missed punches, expenses and resignations for their team.' },
      { role: 'Employee', desc: 'Marks attendance, applies for leave, checks payslips and assets.' },
      { role: 'Accounts', desc: 'Freezes payroll, settles loans and expenses, handles arrears.' },
      { role: 'Authorised signatory', desc: 'Signs off final documents and relieving letters.' },
    ],
    scope: [
      {
        group: 'Recruitment & onboarding',
        items: ['Admin dashboard', 'Create vacancy', 'Candidate pipeline', 'Interviewer scheduling', 'Salary structure & approval', 'Offer letter & e-sign', 'Employee joining form'],
      },
      {
        group: 'Employee core',
        items: ['Employee self-service', 'My profile', 'Attendance & shifts', 'Roster management', 'Payroll freeze & payslips'],
      },
      {
        group: 'Work & performance',
        items: ['Lead acquisition', 'Lead approvals', 'Task management', 'Task targets', 'Reports & filters'],
      },
      {
        group: 'Assets & exit',
        items: ['Asset management', 'Asset return requests', 'Resignation & clearance', 'Termination workflow', 'Authorised signatory'],
      },
      {
        group: 'Finance',
        items: ['Loans & advances', 'EMI schedules', 'Expense & reimbursement', 'Arrears', 'Retirement benefits'],
      },
      {
        group: 'Beyond HR',
        items: ['Employee directory', 'Health & safety audits', 'Performance management'],
      },
    ],
    screens: [
      { title: 'Admin dashboard', caption: 'Holidays, attendance, leave and missed-punch requests in one glance.' },
      { title: 'Recruitment pipeline', caption: 'Vacancy to offer letter, with salary approval as an explicit step.' },
      { title: 'Employee self portal', caption: 'Attendance, leave and payslip — designed mobile-first.' },
      { title: 'Manager roster', caption: 'Shift assignment, roster publishing and team attendance.' },
      { title: 'Payroll', caption: 'Freeze, payouts and salary structure detail before release.' },
      { title: 'Exit & clearance', caption: 'Resignation, clearance checklist, notice and mark exit.' },
    ],
    decisions: [
      {
        title: 'Flow map before pixels',
        body: 'Before designing a single screen I mapped all 41 modules into one numbered roadmap, grouped by role. Engineering estimated from it, and I could design page by page without discovering missing modules halfway through.',
      },
      {
        title: 'One approval pattern everywhere',
        body: 'Leave, missed punch, loan, expense and resignation all use the same approval card: requester, reason, dates, approve/reject. A manager learns the pattern once and can act on anything.',
      },
      {
        title: 'Role-first navigation',
        body: 'Instead of one giant sidebar, the navigation is assembled per role. An employee never sees payroll settings, and a manager never sees configuration — same product, different surface.',
      },
      {
        title: 'Punch-in in three taps',
        body: 'Field staff use the mobile app standing up, often on poor networks. Attendance, break and punch-out are three taps from open, with the current state always visible.',
      },
      {
        title: 'Payroll freeze as an explicit state',
        body: 'Accounts can only process payroll once HR freezes attendance for the cycle. The UI makes that handoff visible, so nobody edits numbers that were already approved.',
      },
    ],
    outcome: [
      { value: '41', label: 'Modules designed and shipped' },
      { value: '5', label: 'Role-based dashboards' },
      { value: '2', label: 'Platforms — web and mobile' },
    ],
  },

  {
    slug: 'aarogya-crm',
    title: 'Aarogya CRM',
    subtitle: 'Lead to delivered order for a tele-sales healthcare brand',
    client: 'Aarogya India',
    year: 'Ongoing',
    category: 'CRM & Operations',
    tags: ['CRM', 'Sales ops', 'Logistics', 'Web app'],
    accent: '#2f6b4f',
    status: 'Live',
    featured: true,
    cover: null,
    role: 'Product Designer',
    timeline: 'Ongoing',
    platform: 'Web admin + agent panels',
    team: 'Product owner, backend and frontend team, QA',
    deliverables: 'Flow map, agent workflows, dashboards, UI kit',
    summary:
      'A tele-sales CRM built around one question: whose turn is this order? Lead capture, verification, courier dispatch, NDR and RTO all live in the same system — with attendance and MIS for the agents working it.',
    problem: {
      text: 'Orders moved between a sales agent, a verification team and a dispatch desk. Each handoff happened over calls and sheets, so nobody could say where an order actually was, and failed deliveries were discovered days late.',
      points: [
        'Leads arrived from many sources with duplicates and no owner.',
        'Verification, dispatch and courier status lived in three different places.',
        'NDR and RTO orders were tracked manually, and retries were missed.',
        'Agents had a separate attendance tool, so their day was split across two apps.',
      ],
    },
    audience: [
      { role: 'Admin / Manager', desc: 'Owns leads, campaigns, dispatch and reporting.' },
      { role: 'Sales agent', desc: 'Calls leads, converts them into verified orders.' },
      { role: 'Verification agent', desc: 'Confirms orders and moves them to dispatch.' },
      { role: 'NDR agent', desc: 'Handles failed deliveries and retries.' },
      { role: 'Team leader', desc: 'Monitors the team\u2019s lead pipeline and attendance.' },
    ],
    scope: [
      {
        group: 'Leads',
        items: ['Lead listing & history', 'Bulk add with de-duplication', 'Source-wise filters', 'Assign to agent / team', 'Team leader dashboard', 'Sales-agent workspace'],
      },
      {
        group: 'Orders & verification',
        items: ['Order listing', 'Verification 2.0', 'Hold & reject states', 'Order history', 'Draft orders'],
      },
      {
        group: 'Dispatch & delivery',
        items: ['Dispatch desk', 'Courier label generation', 'In transit', 'Out for delivery', 'Delivered', 'NDR & RTO'],
      },
      {
        group: 'Catalogue & billing',
        items: ['Products & categories', 'Clinic billing', 'Pharmacy billing (B2C)', 'Telecall billing'],
      },
      {
        group: 'Communication',
        items: ['WhatsApp chat', 'User-to-user chat history', 'Notifications'],
      },
      {
        group: 'Ops & configuration',
        items: ['Attendance 2.0', 'Agent NDR panel', 'Lead API & lead sources', 'Courier API settings', 'Campaigns', 'Lead dispositions'],
      },
    ],
    screens: [
      { title: 'Lead dashboard', caption: 'Source-wise leads, duplication checks and bulk assignment.' },
      { title: 'Sales agent workspace', caption: 'Lead status, call outcome and conversion to order.' },
      { title: 'Verification 2.0', caption: 'Processing, verified, hold and reject — with a reason on every move.' },
      { title: 'Dispatch desk', caption: 'Pending dispatch, retry failures and courier label generation.' },
      { title: 'NDR & RTO', caption: 'Failed deliveries, retry attempts and return tracking.' },
      { title: 'Attendance 2.0', caption: 'Punch in/out, breaks, team view and monthly overview.' },
    ],
    decisions: [
      {
        title: 'Status is the product',
        body: 'Every order has exactly one state and one owner at a time. The interface always answers "what happens next, and who does it" — which removed most of the internal status calls.',
      },
      {
        title: 'Bulk-first lead intake',
        body: 'Leads arrive in files, not one by one. Bulk upload, deduplication and team-level assignment are the primary path, with single-entry as the fallback.',
      },
      {
        title: 'Failures designed, not hidden',
        body: 'Dispatch failures, NDR and RTO are first-class screens with retry actions, because courier failures are the normal case at volume — not an error toast.',
      },
      {
        title: 'Attendance inside the sales tool',
        body: 'Punch in/out and breaks sit in the same app the agent already uses for leads, so the day is not split across two products.',
      },
      {
        title: 'Settings as a config surface',
        body: 'Lead sources, courier APIs, campaigns and dispositions are managed from the UI, so operations can change a workflow without waiting for a release.',
      },
    ],
    outcome: [
      { value: '21', label: 'Core CRM modules' },
      { value: '5', label: 'Agent and manager surfaces' },
      { value: '1', label: 'Order lifecycle, end to end' },
    ],
  },

  {
    slug: 'aarogya-warehouse',
    title: 'Aarogya Stock, Warehouse & B2B Ledger',
    subtitle: 'Multi-warehouse inventory with partner invoicing',
    client: 'Aarogya India',
    year: 'Ongoing',
    category: 'CRM & Operations',
    tags: ['Inventory', 'Warehouse', 'B2B', 'Ledger'],
    accent: '#a1662f',
    status: 'Live',
    featured: false,
    cover: null,
    role: 'Product Designer',
    timeline: 'Ongoing',
    platform: 'Web admin',
    team: 'Product owner, accounts team, developers',
    deliverables: 'Flow map, stock & ledger UI, challan documents',
    summary:
      'Stock movement for a healthcare brand across multiple warehouses and hospital stock — stock in, out, transfer, returns, delivery challans and a full ledger, synced with CRM dispatch.',
    problem: {
      text: 'Stock was counted per location in separate registers. Transferring between warehouses or to a hospital left no paper trail, and B2B partners reconciled invoices against a ledger built by hand at month end.',
      points: [
        'No unified view of stock across warehouses and hospital counters.',
        'Transfers and returns were recorded informally, so balances drifted.',
        'Free samples and opening stock were mixed into regular inventory.',
        'B2B partners had no statement they could verify line by line.',
      ],
    },
    audience: [
      { role: 'Warehouse admin', desc: 'Receives, moves and reconciles stock across locations.' },
      { role: 'Accounts', desc: 'Handles B2B invoices, payments and reconciliation.' },
      { role: 'B2B partner', desc: 'Needs a clear statement of what was sold and paid.' },
    ],
    scope: [
      {
        group: 'Inventory',
        items: ['Multiple warehouses', 'Hospital stock', 'Opening / closing balance', 'Free samples', 'Stock ledger'],
      },
      {
        group: 'Movement',
        items: ['Stock in', 'Stock out', 'Stock transfer', 'Returns', 'CRM dispatch adjustment'],
      },
      {
        group: 'Documents',
        items: ['Delivery challan (DC)', 'Return challan'],
      },
      {
        group: 'B2B partners',
        items: ['Partner listing & details', 'Billing & invoice', 'Shipping addresses', 'Ledger'],
      },
      {
        group: 'Ledger views',
        items: ['By single date', 'By month', 'Single party by date', 'Single party monthly', 'Stock ledger — date', 'Stock ledger — monthly'],
      },
    ],
    screens: [
      { title: 'Stock dashboard', caption: 'Balances across warehouses, with low and out-of-stock flags.' },
      { title: 'Stock transfer', caption: 'Transfer between warehouse and hospital stock with a challan.' },
      { title: 'Delivery challan', caption: 'Printable document that travels with the goods.' },
      { title: 'B2B partner billing', caption: 'Invoice creation with shipping address and payment state.' },
      { title: 'Party ledger', caption: 'Statement per partner, filterable by date or month.' },
      { title: 'Stock ledger', caption: 'Every movement, in and out, with a running balance.' },
    ],
    decisions: [
      {
        title: 'Ledger is the source of truth',
        body: 'Rather than a single editable "current stock" number, every change writes a ledger row. The balance is derived — so a wrong figure can always be traced to the movement that caused it.',
      },
      {
        title: 'Challan as the transfer document',
        body: 'Stock never moves without a delivery challan. It gives the warehouse a printable, signable document and gives accounts a record that matches the ledger.',
      },
      {
        title: 'Free samples as a separate bucket',
        body: 'Samples and promotional stock are tracked apart from sellable inventory, so marketing usage does not distort purchasing decisions.',
      },
      {
        title: 'CRM and inventory share one event',
        body: 'When a CRM order is dispatched, the stock adjustment is created from the same event. Warehouse teams stop re-entering data that already exists.',
      },
    ],
    outcome: [
      { value: '6', label: 'Ledger views for reconciliation' },
      { value: '2', label: 'Systems kept in sync — CRM & stock' },
      { value: '1', label: 'Document standard — the challan' },
    ],
  },

  {
    slug: 'aarogya-wellness',
    title: 'Aarogya Wellness Center',
    subtitle: 'Hospital, clinic and therapy operations in one admin',
    client: 'Aarogya India',
    year: 'Ongoing',
    category: 'Healthcare',
    tags: ['Hospital admin', 'Appointments', 'Billing', 'Pharmacy'],
    accent: '#0e7490',
    status: 'Live',
    featured: true,
    cover: null,
    role: 'Product Designer',
    timeline: 'Ongoing',
    platform: 'Web admin + practitioner portals',
    team: 'Operations head, doctors, developers',
    deliverables: 'Flow map, admin UI, doctor & therapist portals, billing',
    summary:
      'The operational layer of an Ayurvedic wellness hospital: doctors and slots, patients and appointments, treatments and therapy sessions, pharmacy stock and clinic-wise billing — with separate portals for doctors and therapists.',
    problem: {
      text: 'Front desk managed appointments on paper, therapists recorded sessions in a register, and pharmacy stock was checked by walking to the shelf. Revenue per clinic was assembled at the end of the month from several sources.',
      points: [
        'Appointments and doctor availability were never in one place.',
        'Therapy sessions that did not happen had no recorded reason, so billing disputes were common.',
        'Pharmacy stock-outs were discovered at the counter.',
        'Clinic-wise performance was not measurable.',
      ],
    },
    audience: [
      { role: 'Front desk', desc: 'Books, reschedules and checks in patients.' },
      { role: 'Doctor', desc: 'Sees appointments, records treatments and history.' },
      { role: 'Therapist', desc: 'Marks sessions completed, not completed, and why.' },
      { role: 'Clinic admin', desc: 'Billing, pharmacy and revenue per clinic.' },
    ],
    scope: [
      {
        group: 'Front desk',
        items: ['Patient listing & details', 'Appointments', 'Doctor-wise appointment view', 'Reschedule & slot selection'],
      },
      {
        group: 'Clinical',
        items: ['Doctors & profiles', 'Add new slot', 'Doctor remarks', 'Treatment & therapy plans'],
      },
      {
        group: 'Self portals',
        items: ['Doctor portal — treatment history', 'Therapist portal — session status'],
      },
      {
        group: 'Money',
        items: ['Billing & itemised bills', 'Remove item with reason', 'Payments & sales'],
      },
      {
        group: 'Pharmacy',
        items: ['Product listing & details', 'Out-of-stock alerts', 'Edit / delete product'],
      },
    ],
    screens: [
      { title: 'Appointment board', caption: 'Doctor-wise scheduling with slot control and remarks.' },
      { title: 'Patient record', caption: 'Details, visit history and treatment plan in one view.' },
      { title: 'Doctor portal', caption: 'Treatments, history and patient list for the practitioner.' },
      { title: 'Therapist portal', caption: 'Session status — completed, not completed, and the reason.' },
      { title: 'Billing', caption: 'Itemised bill with removal reasons for audit.' },
      { title: 'Pharmacy', caption: 'Products with stock-out alerts before the counter runs dry.' },
    ],
    decisions: [
      {
        title: 'Two audiences, one data model',
        body: 'The admin sees the whole clinic; a doctor sees only their patients. Both read from the same records, so there is no second system of truth for clinical data.',
      },
      {
        title: '"Not completed" is a first-class state',
        body: 'A therapy that did not happen still needs a reason — patient absent, doctor unavailable, or discontinued. Designing that state removed most billing disputes at the counter.',
      },
      {
        title: 'Removal needs a reason',
        body: 'Removing an item from a bill asks why. It protects the clinic during audits and gives accounts something to explain to a patient.',
      },
      {
        title: 'Slots are shared objects',
        body: 'Doctor availability, appointment booking and rescheduling all read the same slot model — so double-booking is structurally impossible rather than policed.',
      },
    ],
    outcome: [
      { value: '7', label: 'Operational modules' },
      { value: '2', label: 'Practitioner self portals' },
      { value: 'Clinic-wise', label: 'Revenue and performance visibility' },
    ],
  },

  {
    slug: 'aarogya-care-app',
    title: 'Aarogya Patient & Doctor App',
    subtitle: 'Consultations, prescriptions and orders in the patient\u2019s pocket',
    client: 'Aarogya India',
    year: 'Ongoing',
    category: 'Mobile Apps',
    tags: ['Patient app', 'Doctor app', 'Telemedicine', 'EMR'],
    accent: '#b4472a',
    status: 'Live',
    featured: false,
    cover: null,
    role: 'Product Designer',
    timeline: 'Ongoing',
    platform: 'Android / iOS + web',
    team: 'Product owner, mobile developers, doctors',
    deliverables: 'Flow map, patient app UI, doctor workspace, EMR',
    summary:
      'A patient app with a doctor workspace behind it: book a clinic visit or a video consultation, keep prescriptions and orders together, and let doctors build the EMR at the point of care.',
    problem: {
      text: 'Patients called the clinic to book, forgot prescriptions, and had no way to reorder products. Doctors wrote notes on paper after the consultation, so history never accumulated in one place.',
      points: [
        'Booking depended on a phone call during clinic hours.',
        'Prescriptions lived on paper and were lost between visits.',
        'No continuity — a new doctor had no access to past treatment.',
        'Product orders and consultations were separate journeys.',
      ],
    },
    audience: [
      { role: 'Patient', desc: 'Books appointments, joins video calls, keeps prescriptions.' },
      { role: 'Doctor', desc: 'Runs the consultation and writes the EMR in-flow.' },
      { role: 'Therapist', desc: 'Tracks therapy sessions in the same system.' },
    ],
    scope: [
      {
        group: 'Patient',
        items: ['Login & dashboard', 'Clinic & video appointment', 'Slot booking & reschedule', 'Prescriptions', 'My orders', 'Doctor profile & reviews'],
      },
      {
        group: 'Doctor',
        items: ['Patient listing', 'Create EMR', 'View report', 'Prescription', 'Patient history', 'Refer patient'],
      },
      {
        group: 'Therapist',
        items: ['Therapy history', 'Session completed or not', 'Preferred therapy'],
      },
      {
        group: 'Billing',
        items: ['Bill details', 'Mark paid', 'Invoice download'],
      },
    ],
    screens: [
      { title: 'Patient home', caption: 'Upcoming appointment, prescriptions and reorder in one list.' },
      { title: 'Book consultation', caption: 'Clinic visit or video call, with slot availability.' },
      { title: 'Video consultation', caption: 'One tap to join from the appointment card.' },
      { title: 'Doctor workspace', caption: 'Today\u2019s patients and a fast EMR entry.' },
      { title: 'Prescription', caption: 'Shared object between doctor and patient.' },
      { title: 'Orders', caption: 'Order tracking with prescription-linked products.' },
    ],
    decisions: [
      {
        title: 'The prescription is the shared object',
        body: 'The doctor writes it, the patient keeps it, and the order can reference it. That single decision connected three journeys that were previously separate.',
      },
      {
        title: 'EMR speed over completeness',
        body: 'Doctors fill history between patients. The form is ordered by what is said first in a consultation, with optional fields collapsed — and it can be completed later from history.',
      },
      {
        title: 'Booking without a phone call',
        body: 'Slot availability from the hospital admin is exposed directly to the patient, so booking, rescheduling and cancellation need no front-desk involvement.',
      },
    ],
    outcome: [
      { value: '4', label: 'Journeys in one app' },
      { value: '2', label: 'Consultation modes — clinic & video' },
      { value: '1', label: 'EMR per visit' },
    ],
  },

  {
    slug: 'chat-application',
    title: 'Chat Application',
    subtitle: 'Real-time conversations for teams and customers',
    client: 'EHS25 HR India Pvt. Ltd.',
    year: '2024',
    category: 'Enterprise SaaS',
    tags: ['Messaging', 'Real-time', 'Product design'],
    accent: '#1f2937',
    status: 'Live',
    featured: false,
    cover: null,
    role: 'UI/UX Designer',
    timeline: '2024',
    platform: 'Web app',
    team: 'Product owner, developers',
    deliverables: 'Conversation UX, message states, component kit',
    summary:
      'A messaging product for internal teams and customer conversations — conversation list, threads, presence, attachments and search, designed so an agent can hold several conversations without losing context.',
    problem: {
      text: 'Internal conversations and customer questions were spread across personal messaging apps, so nothing was searchable and no one could pick up a thread someone else started.',
      points: [
        'Conversation history lived on individual devices.',
        'No way to see who is online or who is already handling a thread.',
        'Files were shared without context or a record.',
      ],
    },
    audience: [
      { role: 'Team member', desc: 'Day-to-day one-to-one and group conversations.' },
      { role: 'Support agent', desc: 'Handles several customer threads in parallel.' },
    ],
    scope: [
      {
        group: 'Conversations',
        items: ['Conversation list', 'Unread and pinned threads', 'Search', 'Group chat'],
      },
      {
        group: 'Messaging',
        items: ['Composer with attachments', 'Message states (sent / delivered / read)', 'Typing indicator', 'Presence'],
      },
      {
        group: 'Account',
        items: ['Profile', 'Notifications', 'Settings'],
      },
    ],
    screens: [
      { title: 'Conversation list', caption: 'Unread, pinned and recent threads with presence.' },
      { title: 'Thread view', caption: 'Message grouping, attachments and delivery state.' },
      { title: 'Composer', caption: 'Attach, reply and send with keyboard-first behaviour.' },
      { title: 'Search', caption: 'Find people and messages without leaving the thread.' },
      { title: 'Profile', caption: 'Presence, status and notification preferences.' },
      { title: 'Empty states', caption: 'Designed first-run and no-conversation states.' },
    ],
    decisions: [
      {
        title: 'Context over chrome',
        body: 'The thread is the product, so the interface stays quiet: no decorative headers, and the composer is the largest interactive element on screen.',
      },
      {
        title: 'State is always visible',
        body: 'Sent, delivered and read use one consistent treatment, so people stop asking "did you get my message".',
      },
      {
        title: 'Designed empty and error states',
        body: 'First-run, no-results and connection-lost states were designed alongside the happy path — in messaging, they are the difference between usable and broken.',
      },
    ],
    outcome: [
      { value: '1:1', label: 'And group conversations' },
      { value: '3', label: 'Message delivery states' },
      { value: 'Keyboard', label: 'First interaction model' },
    ],
  },

  {
    slug: 'influencer-panel',
    title: 'Influencer Panel',
    subtitle: 'Campaigns, creators and payouts in one dashboard',
    client: 'EHS25 HR India Pvt. Ltd.',
    year: '2024',
    category: 'Enterprise SaaS',
    tags: ['Dashboard', 'Marketing ops', 'Web app'],
    accent: '#7c3aed',
    status: 'Live',
    featured: false,
    cover: null,
    role: 'UI/UX Designer',
    timeline: '2024',
    platform: 'Web dashboard',
    team: 'Product owner, developers',
    deliverables: 'Dashboard IA, creator profiles, campaign screens',
    summary:
      'A panel for running influencer campaigns end to end — onboarding creators, briefing campaigns, approving deliverables and tracking payouts without a spreadsheet.',
    problem: {
      text: 'Campaign tracking lived in sheets: who was briefed, who posted, what was approved and what was still unpaid. The same questions were answered manually every week.',
      points: [
        'No single view of a creator across campaigns.',
        'Deliverable approvals happened over chat with no record.',
        'Payout status was invisible to both team and creator.',
      ],
    },
    audience: [
      { role: 'Campaign manager', desc: 'Onboards creators, briefs campaigns, approves work.' },
      { role: 'Finance', desc: 'Tracks what is approved and what has been paid.' },
    ],
    scope: [
      {
        group: 'Creators',
        items: ['Creator listing', 'Profile & audience details', 'Onboarding status'],
      },
      {
        group: 'Campaigns',
        items: ['Campaign listing', 'Campaign detail', 'Deliverables & approval states'],
      },
      {
        group: 'Money & insight',
        items: ['Performance overview', 'Payouts', 'Reports'],
      },
    ],
    screens: [
      { title: 'Overview', caption: 'Active campaigns, pending approvals and payouts due.' },
      { title: 'Creator profile', caption: 'Audience, past campaigns and performance.' },
      { title: 'Campaign detail', caption: 'Brief, deliverables and approval trail.' },
      { title: 'Approvals', caption: 'Review deliverables with a clear record of decisions.' },
      { title: 'Payouts', caption: 'What is approved, what is paid, what is pending.' },
      { title: 'Reports', caption: 'Campaign-level performance comparison.' },
    ],
    decisions: [
      {
        title: 'Approval trail as a feature',
        body: 'Every deliverable keeps its approval history, so disputes about what was agreed stop being a memory test.',
      },
      {
        title: 'One creator view',
        body: 'A creator profile aggregates every campaign they worked on — the single most requested view from the operations team.',
      },
    ],
    outcome: [
      { value: '3', label: 'Core workflows' },
      { value: 'Sheets', label: 'Replaced by one dashboard' },
      { value: 'Creator', label: 'Centric information model' },
    ],
  },

  {
    slug: 'aarogya-brand',
    title: 'Aarogya Brand & Marketing',
    subtitle: 'Website direction, campaign creatives and business decks',
    client: 'Aarogya India',
    year: 'Ongoing',
    category: 'Brand & Marketing',
    tags: ['Branding', 'Social media', 'Website', 'Presentations'],
    accent: '#c2410c',
    status: 'Ongoing',
    featured: false,
    cover: null,
    role: 'Designer — brand and marketing',
    timeline: 'Ongoing',
    platform: 'Print, social, web direction',
    team: 'Marketing team, business development',
    deliverables: 'Website direction, creatives, banners, decks',
    summary:
      'Visual direction for an Ayurvedic healthcare brand — the wellness hospital website, festival and Ayurvedic social creatives, Hindi-language healthcare campaigns, and franchise business presentations.',
    problem: {
      text: 'Marketing output was made ad-hoc per campaign: different colours, different typography, and Hindi and English creatives that did not look like the same brand.',
      points: [
        'No reusable template system for recurring campaigns.',
        'Bilingual creatives (Hindi / English) needed their own type treatment.',
        'Business decks were rebuilt from scratch for every pitch.',
      ],
    },
    audience: [
      { role: 'Patients & families', desc: 'See the brand first on social and search.' },
      { role: 'Franchise partners', desc: 'Evaluate the business model from a deck.' },
      { role: 'Marketing team', desc: 'Needs repeatable templates, not one-off files.' },
    ],
    scope: [
      {
        group: 'Digital',
        items: ['Website design direction', 'Ayurvedic social creatives', 'Banners', 'Product creatives'],
      },
      {
        group: 'Language',
        items: ['Hindi healthcare creatives', 'Image editing & retouching', 'Bilingual typography'],
      },
      {
        group: 'Business',
        items: ['Franchise / business-model decks', 'Sales collateral'],
      },
      {
        group: 'Process & operations design',
        items: ['Courier credential OTP approval workflow', 'DNST distributor–client–agent model', 'B2B partner invoice flow'],
      },
    ],
    screens: [
      { title: 'Website direction', caption: 'Layout language for the wellness hospital site.' },
      { title: 'Ayurvedic social set', caption: 'Festival and product creatives on one system.' },
      { title: 'Hindi campaign', caption: 'Bilingual creatives with dedicated type treatment.' },
      { title: 'Franchise deck', caption: 'Business-model presentation for partners.' },
      { title: 'OTP approval flow', caption: 'Courier credential approval with verification steps.' },
      { title: 'DNST sales model', caption: 'Distributor, client and agent roles mapped.' },
    ],
    decisions: [
      {
        title: 'A template system, not one-off posts',
        body: 'Recurring formats — festival, offer, awareness — were built as templates so the marketing team can ship a campaign without a designer in the loop.',
      },
      {
        title: 'Hindi is designed, not translated',
        body: 'Devanagari needs more line height and different optical sizing. Hindi creatives got their own type settings instead of squeezing translated copy into an English layout.',
      },
      {
        title: 'Operational flows count as design',
        body: 'The OTP approval for courier credentials, the DNST sales model and the B2B invoice flow were designed as process diagrams before any screen — because the process was the actual problem.',
      },
    ],
    outcome: [
      { value: '3', label: 'Languages of brand output — print, social, web' },
      { value: '3', label: 'Operational flows designed' },
      { value: 'Templates', label: 'Reusable campaign kits' },
    ],
  },

  {
    slug: 'skill-courses-proposal',
    title: 'Government Skill Courses Proposal',
    subtitle: 'Wellness education for Indian and international students',
    client: 'Wellness education initiative',
    year: '2026',
    category: 'Brand & Marketing',
    tags: ['Proposal', 'Education', 'In progress'],
    accent: '#4b5563',
    status: 'In progress',
    featured: true,
    cover: null,
    role: 'Designer & proposal author',
    timeline: 'In progress',
    platform: 'Proposal document + landing concept',
    team: 'Business development, academic advisors',
    deliverables: 'Proposal structure, course information design, deck',
    summary:
      'A proposal for government-recognised wellness courses — Panchakarma, Yoga, Naturopathy, Acupuncture & Acupressure, and Ayurvedic Cosmetology — built around a 60:40 Indian-to-international student model, employment outcomes and wellness tourism.',
    problem: {
      text: 'Wellness education in India is fragmented across informal training centres. A government-facing proposal has to prove three things at once: academic credibility, employability, and a revenue model that also attracts international students.',
      points: [
        'Course structure had to be comparable across five very different disciplines.',
        'Two audiences — a government reviewer and a prospective student — read the same document.',
        'The 60:40 international model needed to read as an opportunity, not a restriction.',
        'Employment and wellness tourism had to be evidenced, not just claimed.',
      ],
    },
    audience: [
      { role: 'Government reviewer', desc: 'Assesses credibility, standards and public benefit.' },
      { role: 'Prospective student', desc: 'Wants course structure, cost and career outcome.' },
      { role: 'Partner institutes', desc: 'Evaluate the operating model and infrastructure.' },
    ],
    scope: [
      {
        group: 'Course system',
        items: ['Panchakarma', 'Yoga', 'Naturopathy', 'Acupuncture & Acupressure', 'Ayurvedic Cosmetology'],
      },
      {
        group: 'Model',
        items: ['60:40 Indian–international intake', 'Fee & scholarship structure', 'Duration and certification'],
      },
      {
        group: 'Outcomes',
        items: ['Employment pathways', 'Wellness tourism angle', 'Partner institutes'],
      },
    ],
    screens: [
      { title: 'Proposal cover', caption: 'Positioning: credible education, not a training centre.' },
      { title: 'Course comparison', caption: 'Five disciplines on one comparable structure.' },
      { title: '60:40 model', caption: 'Intake split explained as a growth model.' },
      { title: 'Employment map', caption: 'Where graduates work after certification.' },
      { title: 'Tourism angle', caption: 'Wellness tourism as a second revenue line.' },
      { title: 'Fee structure', caption: 'Transparent cost table for both audiences.' },
    ],
    decisions: [
      {
        title: 'One document, two reading paths',
        body: 'The proposal opens with an executive summary for reviewers, then structured course pages for students — so neither audience has to read the other\u2019s material to find what they need.',
      },
      {
        title: 'Comparable structure across disciplines',
        body: 'Each course follows the same page template: eligibility, duration, syllabus blocks, certification and career outcome. Comparison becomes possible without reading all five.',
      },
      {
        title: 'Employment shown as a map, not a promise',
        body: 'Roles and settings are laid out concretely — clinics, resorts, wellness centres, private practice — because "high demand" without specifics reads as marketing.',
      },
    ],
    outcome: [
      { value: '5', label: 'Course disciplines structured' },
      { value: '60:40', label: 'Indian–international intake model' },
      { value: 'In progress', label: 'Proposal under development' },
    ],
  },

  {
    slug: 'hospitality-ui',
    title: 'Hospitality Mobile Apps',
    subtitle: 'Guest journey, PoS and loyalty across devices',
    client: 'Finoit Technologies',
    year: '2019 — 2023',
    category: 'Mobile Apps',
    tags: ['Hospitality', 'Mobile UI', 'PoS', 'Loyalty'],
    accent: '#0e5e6f',
    status: 'Shipped',
    featured: false,
    cover: null,
    role: 'UI Designer',
    timeline: 'Finoit Technologies',
    platform: 'Mobile apps + responsive web',
    team: 'Design lead, developers, client stakeholders',
    deliverables: 'Screen design, responsive layouts, asset library',
    summary:
      'Mobile and web interfaces for hospitality clients — online store, guest experience and feedback tools, point of sale, loyalty and inventory management, designed to work across screen sizes.',
    problem: {
      text: 'Hospitality operators needed one connected guest journey, but each function — ordering, feedback, loyalty — had been built as a separate tool with its own visual language.',
      points: [
        'Inconsistent UI across the product family.',
        'Staff used PoS on small tablets in poor lighting.',
        'Guests dropped off at feedback because forms were long.',
      ],
    },
    audience: [
      { role: 'Guest', desc: 'Orders, gives feedback, earns loyalty points.' },
      { role: 'Front-of-house staff', desc: 'Uses PoS and inventory on a tablet.' },
      { role: 'Manager', desc: 'Checks assets, audits and stock.' },
    ],
    scope: [
      {
        group: 'Guest',
        items: ['Online store', 'Guest experience & feedback', 'Loyalty management'],
      },
      {
        group: 'Operations',
        items: ['PoS interface', 'Asset & inventory management', 'Audit & inspection tools'],
      },
      {
        group: 'Platform',
        items: ['Responsive web', 'Tablet layouts', 'Reusable component set'],
      },
    ],
    screens: [
      { title: 'Guest store', caption: 'Browse and order with a short, clear path.' },
      { title: 'Feedback', caption: 'Progressive disclosure instead of one long form.' },
      { title: 'PoS', caption: 'Large targets designed for tablet use in poor light.' },
      { title: 'Loyalty', caption: 'Points, tiers and rewards without a dashboard feel.' },
      { title: 'Inventory', caption: 'Stock and asset lists optimised for scanning.' },
      { title: 'Audit tool', caption: 'Checklist flow for on-site inspections.' },
    ],
    decisions: [
      {
        title: 'One visual language across the suite',
        body: 'Components were standardised across store, feedback, PoS and loyalty so the product family finally looked like one brand.',
      },
      {
        title: 'Built for the environment',
        body: 'PoS screens were designed at tablet size, with larger touch targets and high contrast, because staff use them standing up in dim rooms.',
      },
      {
        title: 'Shorter feedback forms',
        body: 'Feedback was split into rating first, comment second, so the completion rate stopped depending on how much a guest was willing to type.',
      },
    ],
    outcome: [
      { value: '6', label: 'Hospitality products designed' },
      { value: 'Responsive', label: 'Across phone, tablet and web' },
      { value: '1', label: 'Shared component language' },
    ],
  },

  {
    slug: 'healthcare-platform',
    title: 'Behavioural Health Platform',
    subtitle: 'A short assessment that routes people to the right care',
    client: 'Finoit Technologies',
    year: 'Finoit',
    category: 'Healthcare',
    tags: ['Web app', 'Assessment', 'Public health'],
    accent: '#2563eb',
    status: 'Shipped',
    featured: false,
    cover: null,
    role: 'UI Designer',
    timeline: 'Finoit Technologies',
    platform: 'Responsive web',
    team: 'Design lead, developers, client stakeholders',
    deliverables: 'Assessment UI, navigation flows, content layouts',
    summary:
      'A web-based behavioural health navigation platform for Orange County residents of all ages — a short assessment and questionnaire connects people with outpatient behavioural health options, plus emergency and stress-management support.',
    problem: {
      text: 'People looking for mental health support had to already know what kind of care they needed. The platform had to ask a few respectful questions and then present options that actually fit.',
      points: [
        'Users arrive in distress — the interface has to be calm and fast.',
        'Emergency support must be reachable from anywhere, without hiding the main flow.',
        'Results needed to feel like options, not a diagnosis.',
      ],
    },
    audience: [
      { role: 'Resident', desc: 'Answers a short assessment and sees matching care options.' },
      { role: 'Care navigator', desc: 'Supports people who need help choosing.' },
    ],
    scope: [
      {
        group: 'Assessment',
        items: ['Questionnaire flow', 'Progress and save state', 'Age-appropriate variants'],
      },
      {
        group: 'Support',
        items: ['Care option results', 'Mental health emergency support', 'Stress management resources'],
      },
    ],
    screens: [
      { title: 'Landing', caption: 'Plain language, no clinical jargon.' },
      { title: 'Assessment step', caption: 'One question per screen with visible progress.' },
      { title: 'Results', caption: 'Matched care options with distance and type.' },
      { title: 'Emergency support', caption: 'Always reachable, never competing with the flow.' },
      { title: 'Resources', caption: 'Stress management content built for reading.' },
      { title: 'Age variants', caption: 'Different entry points for youth and adults.' },
    ],
    decisions: [
      {
        title: 'One question per screen',
        body: 'A long assessment form reads as paperwork. One question at a time, with progress visible, kept completion high for users who were already anxious.',
      },
      {
        title: 'Emergency access always present',
        body: 'Crisis support sits in a persistent, quiet position — available from every step without pulling attention away from the main path.',
      },
      {
        title: 'Results framed as options',
        body: 'The result screen presents choices with filters rather than a verdict, so people feel guided instead of labelled.',
      },
    ],
    outcome: [
      { value: 'All ages', label: 'Assessment variants' },
      { value: '1', label: 'Guided path to outpatient care' },
      { value: 'Always on', label: 'Emergency support access' },
    ],
  },

  {
    slug: 'surf-school-web',
    title: 'Sustainable Surf School Web',
    subtitle: 'Multi-location website for a certified surf school',
    client: 'Finoit Technologies',
    year: 'Finoit',
    category: 'Brand & Marketing',
    tags: ['Website', 'Education', 'Multi-location'],
    accent: '#0d9488',
    status: 'Shipped',
    featured: false,
    cover: null,
    role: 'UI Designer',
    timeline: 'Finoit Technologies',
    platform: 'Responsive web',
    team: 'Design lead, developers, client',
    deliverables: 'Page layouts, responsive UI, imagery treatment',
    summary:
      'Website design for the world\u2019s first sustainable-certified surf school, covering three locations — Costa Rica, Panama and Ecuador — with courses, bookings and the sustainability story.',
    problem: {
      text: 'A single template had to serve three countries with different courses, pricing and local imagery, while keeping one unmistakable brand.',
      points: [
        'Location switching could not feel like leaving the site.',
        'Course content varied significantly per school.',
        'The sustainability claim needed proof, not a badge.',
      ],
    },
    audience: [
      { role: 'Traveller', desc: 'Compares locations and books a course.' },
      { role: 'Returning student', desc: 'Checks progression levels and next course.' },
    ],
    scope: [
      {
        group: 'Structure',
        items: ['Location switcher', 'Course catalogue', 'Booking entry points'],
      },
      {
        group: 'Content',
        items: ['Sustainability story', 'Gallery & local pages', 'Responsive layouts'],
      },
    ],
    screens: [
      { title: 'Home', caption: 'Location-aware hero with course entry points.' },
      { title: 'Location page', caption: 'Local courses, pricing and gallery.' },
      { title: 'Course detail', caption: 'Level, duration and what is included.' },
      { title: 'Sustainability', caption: 'Certification explained, not just stated.' },
      { title: 'Booking', caption: 'Short path from course to enquiry.' },
      { title: 'Mobile views', caption: 'Responsive layouts for on-the-road browsing.' },
    ],
    decisions: [
      {
        title: 'Location as a layer, not a separate site',
        body: 'Switching between Costa Rica, Panama and Ecuador changes the content in place, so the brand stays continuous and comparison is easy.',
      },
      {
        title: 'Evidence for the sustainability claim',
        body: 'Certification content sits next to the practices it refers to, which makes the claim credible instead of decorative.',
      },
    ],
    outcome: [
      { value: '3', label: 'Locations on one system' },
      { value: 'Responsive', label: 'Mobile-first layouts' },
      { value: '1', label: 'Continuous brand experience' },
    ],
  },

  {
    slug: 'attendance-dashboard',
    title: 'Attendance Dashboard',
    subtitle: 'Time tracking, to-dos and focus in one screen',
    client: 'Finoit Technologies',
    year: 'Finoit',
    category: 'Enterprise SaaS',
    tags: ['Dashboard', 'Productivity', 'Web app'],
    accent: '#4338ca',
    status: 'Shipped',
    featured: false,
    cover: null,
    role: 'UI Designer',
    timeline: 'Finoit Technologies',
    platform: 'Responsive web',
    team: 'Design lead, developers',
    deliverables: 'Dashboard UI, states, chart treatment',
    summary:
      'A dashboard for time tracking, to-do lists, distraction blocking and getting things done — the app you keep open all day, so the surface had to stay readable for hours.',
    problem: {
      text: 'Productivity tools compete for attention with the work itself. The dashboard had to show enough to be useful without becoming another distraction.',
      points: [
        'Dense data had to stay legible at a glance.',
        'Time tracking needed to be one action, not a form.',
        'Empty and partial states are the normal case, not the exception.',
      ],
    },
    audience: [
      { role: 'Individual contributor', desc: 'Tracks time and works through a daily list.' },
      { role: 'Team lead', desc: 'Reviews attendance and completion.' },
    ],
    scope: [
      {
        group: 'Tracking',
        items: ['Check-in / check-out', 'Time log', 'Attendance history'],
      },
      {
        group: 'Work',
        items: ['To-do list', 'Focus mode', 'Completion stats'],
      },
    ],
    screens: [
      { title: 'Today', caption: 'Current timer, remaining tasks and day progress.' },
      { title: 'Time log', caption: 'Entries grouped by project with editing.' },
      { title: 'To-do list', caption: 'Priorities that stay visible while tracking time.' },
      { title: 'Focus mode', caption: 'Minimal surface that hides everything else.' },
      { title: 'Stats', caption: 'Weekly view with readable chart treatment.' },
      { title: 'Empty state', caption: 'First-run guidance instead of a blank grid.' },
    ],
    decisions: [
      {
        title: 'One primary action per state',
        body: 'Depending on whether a timer is running, the dashboard leads with start, pause or stop — everything else is secondary.',
      },
      {
        title: 'Charts that survive small columns',
        body: 'Bar and sparkline styles were chosen for narrow layouts, so the dashboard holds up at laptop widths instead of needing a bigger screen.',
      },
    ],
    outcome: [
      { value: '1', label: 'Primary action per state' },
      { value: 'All day', label: 'Readable surface' },
      { value: 'Responsive', label: 'Down to mobile widths' },
    ],
  },

  {
    slug: 'leaderboard-app',
    title: 'Leaderboard App',
    subtitle: 'Scores, ranks and progress in a simple board',
    client: 'Finoit Technologies',
    year: 'Finoit',
    category: 'Mobile Apps',
    tags: ['Mobile UI', 'Gamification'],
    accent: '#b45309',
    status: 'Shipped',
    featured: false,
    cover: null,
    role: 'UI Designer',
    timeline: 'Finoit Technologies',
    platform: 'Mobile app',
    team: 'Design lead, developers',
    deliverables: 'Screen design, ranking UI, motion spec',
    summary:
      'A leaderboard that shows who is doing best in a game — ranks, scores and movement, designed to be read in two seconds on a phone.',
    problem: {
      text: 'A leaderboard is a single dense list competing with everything else on the screen. If rank and movement are not instantly clear, it stops motivating anyone.',
      points: [
        'Long lists needed to stay scannable.',
        'Movement (up, down, new) had to be visible without colour alone.',
        'Top performers and the current user both needed to be findable.',
      ],
    },
    audience: [
      { role: 'Player', desc: 'Checks their rank and how far they moved.' },
      { role: 'Organiser', desc: 'Reviews standings for a contest.' },
    ],
    scope: [
      {
        group: 'Board',
        items: ['Ranked list', 'Top three treatment', 'Current user pin'],
      },
      {
        group: 'Detail',
        items: ['Player profile', 'Score breakdown', 'Filters'],
      },
    ],
    screens: [
      { title: 'Leaderboard', caption: 'Rank, name and score with movement indicators.' },
      { title: 'Top three', caption: 'Highlighted without breaking list scanning.' },
      { title: 'My rank', caption: 'Always reachable, even far down the list.' },
      { title: 'Profile', caption: 'Score breakdown by category.' },
      { title: 'Filters', caption: 'Time range and category switching.' },
      { title: 'Empty state', caption: 'Before scores exist.' },
    ],
    decisions: [
      {
        title: 'Movement without colour alone',
        body: 'Up and down use an arrow plus a value, so the meaning survives colour-blindness and small screens.',
      },
      {
        title: 'Pin the current user',
        body: 'The list keeps the user\u2019s own row visible, which is the only thing most people open the screen for.',
      },
    ],
    outcome: [
      { value: '2 sec', label: 'To read a rank' },
      { value: 'Accessible', label: 'Movement not colour-only' },
      { value: '1', label: 'List pattern reused in-app' },
    ],
  },

  {
    slug: 'social-media-design',
    title: 'Social Media & Marketing Design',
    subtitle: 'Festival campaigns, LinkedIn posts and thumbnails',
    client: 'Finoit Technologies',
    year: '2019 — 2023',
    category: 'Brand & Marketing',
    tags: ['Social media', 'Thumbnails', 'Marketing'],
    accent: '#be185d',
    status: 'Shipped',
    featured: false,
    cover: null,
    role: 'Graphic & UI Designer',
    timeline: 'Finoit Technologies',
    platform: 'Social platforms & blog',
    team: 'Marketing team',
    deliverables: 'Festival creatives, LinkedIn posts, YouTube thumbnails, blog covers',
    summary:
      'Four years of marketing design for Finoit — festival creatives, LinkedIn posts, YouTube thumbnails and blog covers, built as a repeatable template system rather than one-off artwork.',
    problem: {
      text: 'The marketing team needed a steady stream of creatives with a consistent look, produced fast and without a briefing cycle for every post.',
      points: [
        'Each campaign started from a blank canvas.',
        'Brand consistency broke between designers and formats.',
        'Thumbnails had to work at 200px wide.',
      ],
    },
    audience: [
      { role: 'Marketing team', desc: 'Publishes daily across platforms.' },
      { role: 'Audience', desc: 'Sees the brand in a crowded feed.' },
    ],
    scope: [
      {
        group: 'Social',
        items: ['Festival creatives', 'LinkedIn posts', 'Banners'],
      },
      {
        group: 'Content',
        items: ['YouTube thumbnails', 'Blog covers', 'Image editing'],
      },
    ],
    screens: [
      { title: 'Festival set', caption: 'Recurring festive format with interchangeable type.' },
      { title: 'LinkedIn post', caption: 'Text-first layout built for the feed.' },
      { title: 'Thumbnail', caption: 'Readable at small sizes with one focal point.' },
      { title: 'Blog cover', caption: 'Consistent header system across articles.' },
      { title: 'Banner set', caption: 'One layout system across sizes.' },
      { title: 'Template kit', caption: 'Editable source files handed to marketing.' },
    ],
    decisions: [
      {
        title: 'Templates over artwork',
        body: 'Each recurring format was built as an editable template, so the team could publish without waiting for design.',
      },
      {
        title: 'Design for the smallest size first',
        body: 'Thumbnails were checked at feed size before approval — if the headline was not readable at 200px, it was redesigned.',
      },
    ],
    outcome: [
      { value: '4', label: 'Years of marketing output' },
      { value: 'Multiple', label: 'Recurring formats templated' },
      { value: '1', label: 'Consistent brand system' },
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const featuredProjects = projects.filter((p) => p.featured)

export const nextProject = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug)
  return projects[(index + 1) % projects.length]
}
