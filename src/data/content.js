export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  badge: 'New · Pulseboard AI Copilot is here',
  headlineA: 'Analytics your',
  headlineGradient: 'whole team',
  headlineB: 'will actually use.',
  subcopy:
    'Pulseboard turns raw product data into live dashboards, anomaly alerts, and answers — without SQL, without waiting on the data team, and without the 47th chart nobody opens.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Watch 2-min demo',
  note: 'Free 14-day trial · No credit card required · Cancel anytime',
};

export const trustedBy = [
  'Northwind',
  'Acme Co',
  'Loomly',
  'Datawise',
  'Brightline',
  'Kitework',
  'Vantage',
  'Solstice',
];

export const features = [
  {
    title: 'Real-time dashboards',
    description:
      'Every chart streams live. Watch signups, revenue, and activation tick in as they happen — latency under a second, from event to eyeball.',
    tag: 'Live',
    span: 'lg:col-span-2',
    visual: 'realtime',
  },
  {
    title: 'Anomaly alerts',
    description:
      'Pulseboard learns your baselines and pings you in Slack the moment something breaks — before the standup, not after.',
    tag: 'AI-powered',
    span: '',
    visual: 'alerts',
  },
  {
    title: 'SQL-free exploration',
    description:
      'Ask questions in plain English. “Churn by plan, last 90 days” becomes a chart in one click — no queries, no queue.',
    tag: 'No code',
    span: '',
    visual: 'nlq',
  },
  {
    title: '60+ integrations',
    description:
      'Segment, Stripe, Salesforce, Postgres, Snowflake, BigQuery — connect your stack in minutes, not sprints.',
    tag: 'One-click',
    span: '',
    visual: 'integrations',
  },
  {
    title: 'SSO & SOC 2 Type II',
    description:
      'Enterprise-grade security out of the box. SSO/SAML, role-based access, audit logs, and GDPR compliance included on every plan.',
    tag: 'Secure',
    span: '',
    visual: 'security',
  },
  {
    title: 'API & webhooks',
    description:
      'Pipe clean metrics anywhere. REST + GraphQL APIs, event webhooks, and a reverse ETL for your warehouse.',
    tag: 'Developer-first',
    span: 'lg:col-span-2',
    visual: 'api',
  },
];

export const stats = [
  { value: 12000, suffix: '+', label: 'data teams run on Pulseboard', decimals: 0 },
  { value: 99.99, suffix: '%', label: 'uptime over the last 12 months', decimals: 2 },
  { value: 4.9, suffix: '/5', label: 'average rating across 2,300+ reviews', decimals: 1 },
  { value: 2.4, suffix: 'B', prefix: '$', label: 'in customer revenue tracked monthly', decimals: 1 },
];

export const pricingTiers = [
  {
    name: 'Starter',
    tagline: 'For small teams getting their first real dashboard.',
    monthly: 24,
    yearly: 240,
    cta: 'Start free trial',
    featured: false,
    features: [
      'Up to 5 seats',
      '10 live dashboards',
      '1M events / month',
      '20+ core integrations',
      'Slack & email alerts',
      'Community support',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For companies where data drives every decision.',
    monthly: 79,
    yearly: 790,
    cta: 'Start free trial',
    featured: true,
    features: [
      'Up to 50 seats',
      'Unlimited dashboards',
      '25M events / month',
      'All 60+ integrations',
      'AI anomaly alerts',
      'SQL-free exploration',
      'API & webhooks',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For organizations with serious scale and compliance needs.',
    monthly: null,
    yearly: null,
    cta: 'Talk to sales',
    featured: false,
    features: [
      'Unlimited seats & events',
      'SSO/SAML & SCIM',
      'SOC 2 Type II & audit logs',
      'Dedicated CSM & onboarding',
      'Custom data residency',
      '99.99% SLA guarantee',
    ],
  },
];

export const testimonials = [
  {
    quote:
      'We killed our weekly metrics meeting. The dashboard is just… alive, and everyone checks it before standup. Our data team finally works on things that matter.',
    name: 'Maya Chen',
    title: 'Head of Data',
    company: 'Loomly',
    rating: 5,
  },
  {
    quote:
      'Anomaly alerts caught a broken checkout flow at 2am and paged us before a single customer complained. That one alert paid for a year of Pulseboard.',
    name: 'Marcus Webb',
    title: 'VP Engineering',
    company: 'Brightline',
    rating: 5,
  },
  {
    quote:
      'I shipped our first board in an afternoon with zero SQL. Our CEO now asks me for the Pulseboard link instead of a slide deck. Wild.',
    name: 'Priya Nair',
    title: 'Product Manager',
    company: 'Kitework',
    rating: 5,
  },
  {
    quote:
      'Migration from our old BI tool took a weekend. Sixty integrations means we plugged in Stripe, Postgres, and Segment without touching a pipeline.',
    name: 'Daniel Okafor',
    title: 'CTO',
    company: 'Datawise',
    rating: 5,
  },
  {
    quote:
      'The natural-language explorer is the first analytics feature our support team uses without training. They just… ask it things.',
    name: 'Sofia Ramirez',
    title: 'Head of Customer Success',
    company: 'Vantage',
    rating: 5,
  },
  {
    quote:
      'SOC 2, SSO, audit logs — security signed off in a day. Finance signed off when they saw the price. I have never had a vendor review go this fast.',
    name: 'James Park',
    title: 'CIO',
    company: 'Solstice',
    rating: 5,
  },
];

export const faqs = [
  {
    q: 'Do I need SQL or a data team to use Pulseboard?',
    a: 'No. You can ask questions in plain English and build dashboards with drag-and-drop. If you do know SQL, there is a full query editor too — but it is optional, not required.',
  },
  {
    q: 'How long does it take to get set up?',
    a: 'Most teams connect their first source and see a live dashboard within 30 minutes. One-click integrations for tools like Stripe, Segment, Salesforce, Postgres, Snowflake, and BigQuery do the heavy lifting — no pipelines to build.',
  },
  {
    q: 'Can Pulseboard replace our existing BI tool?',
    a: 'For most teams, yes. Pulseboard covers dashboards, exploration, alerting, and embedded analytics. If you have deeply custom LookML or dbt models, you can keep them — Pulseboard connects to your warehouse and reads them directly.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We are SOC 2 Type II certified and GDPR compliant, with encryption in transit and at rest. Enterprise plans add SSO/SAML, SCIM provisioning, audit logs, and custom data residency. We never sell your data.',
  },
  {
    q: 'What happens when my trial ends?',
    a: 'You get a friendly reminder — not a paywall ambush. Your dashboards stay read-only for 30 days, and you can export everything. Pick a plan whenever you are ready; your data and setup carry over untouched.',
  },
  {
    q: 'Do you offer discounts for startups or nonprofits?',
    a: 'Yes. Early-stage startups (under $5M raised) get 50% off Growth for the first year, and registered nonprofits get 30% off any plan, forever. Just ask our team when you sign up.',
  },
];

export const cta = {
  headline: 'Stop guessing. Start knowing.',
  subcopy:
    'Join 12,000+ teams making faster decisions with live data. Set up your first dashboard in 30 minutes — free for 14 days.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Talk to sales',
};

export const footerColumns = [
  {
    title: 'Product',
    links: ['Dashboards', 'Anomaly alerts', 'AI Copilot', 'Integrations', 'API docs', 'Changelog'],
  },
  {
    title: 'Solutions',
    links: ['Product teams', 'Marketing analytics', 'Revenue operations', 'Customer success', 'Startups', 'Enterprise'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Help center', 'Dashboard templates', 'Webinars', 'Community', 'Status page'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press kit', 'Contact', 'Security', 'Privacy'],
  },
];

export const footerBottom = ['© 2026 Pulseboard, Inc.', 'Privacy Policy', 'Terms of Service', 'Cookie Settings'];
