export type Product = {
  name: string
  url: string
  domain: string
  category: string
  audience: string
  description: string
  coreFeature: string
  features: string[]
}

export const PRODUCTS: Product[] = [
  {
    name: 'MarginIQ',
    url: 'https://marginiq.shop',
    domain: 'marginiq.shop',
    category: 'Marketplace Profit Intelligence',
    audience: 'For marketplace sellers',
    description:
      'AI profit intelligence for Shopee, Lazada, and TikTok Shop sellers. MarginIQ shows real SKU profit after fees, refunds, ad spend, product costs, and packaging so sellers know what to scale.',
    coreFeature: 'Know which products actually make money.',
    features: [
      'Calculates SKU-level net profit across marketplace channels.',
      'Finds margin leaks from fees, refunds, ads, and creator payouts.',
      'Turns daily profit signals into clear actions to fix, pause, or scale.'
    ]
  },
  {
    name: 'VisiPilot',
    url: 'https://visipilot.dev',
    domain: 'visipilot.dev',
    category: 'AI Search Visibility',
    audience: 'For brands and agencies',
    description:
      'AI search visibility software that checks whether AI search can understand, trust, and recommend a business. VisiPilot finds missing proof and creates copy-ready website fixes.',
    coreFeature: 'See if AI search is likely to pick your business.',
    features: [
      'Runs AI Pick tests for real buyer questions.',
      'Shows proof gaps, competitor risk, and unclear website evidence.',
      'Creates Ship Packs with metadata, FAQs, schema, links, and page copy.'
    ]
  },
  {
    name: 'AgentGuard Cloud',
    url: 'https://agentgurad.cloud',
    domain: 'agentgurad.cloud',
    category: 'AI Agent Security',
    audience: 'For AI engineering teams',
    description:
      'AI agent security for teams shipping production workflows. AgentGuard Cloud checks prompts, responses, and tool calls before risky content reaches models, users, APIs, or databases.',
    coreFeature: 'Secure every AI agent before it acts.',
    features: [
      'Blocks prompt injection, jailbreaks, credentials, and PII exposure.',
      'Validates tool-call payloads against policy before backend actions.',
      'Tracks remediation, red-team checks, audit logs, and reports.'
    ]
  }
]
