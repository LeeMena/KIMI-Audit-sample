export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'template' | 'playbook' | 'course' | 'toolkit';
  image: string;
  features: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
  includes: string[];
}

export const products: Product[] = [
  {
    id: 'sop-master-collection',
    title: 'F&B SOP Master Collection',
    subtitle: '50+ Standard Operating Procedures',
    description: 'The complete SOP library I have built and refined across 18+ years in Miami hospitality. Covering opening/closing procedures, service standards, food safety protocols, and team training modules.',
    price: 297,
    originalPrice: 497,
    category: 'template',
    image: '/products/sop-collection.jpg',
    features: [
      '50+ customizable SOP templates',
      'Opening & closing checklists',
      'Food safety & HACCP protocols',
      'Service standard scripts',
      'Training module frameworks',
      'Digital download + updates'
    ],
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 127,
    includes: ['PDF + Word formats', 'Digital download', 'Lifetime updates', 'Private community access']
  },
  {
    id: 'pre-opening-playbook',
    title: 'Pre-Opening Playbook',
    subtitle: 'From Construction to Opening Night',
    description: 'The exact system I used to open Maska Indian Kitchen + Bar with a Michelin-starred chef and multiple hotel properties. A 120-day roadmap with week-by-week checklists.',
    price: 197,
    originalPrice: 297,
    category: 'playbook',
    image: '/products/pre-opening-playbook.jpg',
    features: [
      '120-day pre-opening timeline',
      'Vendor negotiation scripts',
      'Team hiring & training framework',
      'Menu development workflow',
      'Inspection readiness checklist',
      'Marketing launch sequence'
    ],
    badge: 'Most Popular',
    rating: 4.9,
    reviewCount: 89,
    includes: ['120-day roadmap PDF', 'Editable checklists', 'Vendor contact templates', 'Video walkthroughs']
  },
  {
    id: 'labor-optimization-toolkit',
    title: 'Labor Optimization Toolkit',
    subtitle: 'Scheduling, Cost Control & Compliance',
    description: 'Advanced labor management tools including scheduling templates, labor cost calculators, and compliance trackers that helped reduce labor costs by 15-22% at multiple properties.',
    price: 147,
    category: 'toolkit',
    image: '/products/labor-toolkit.jpg',
    features: [
      'Smart scheduling templates',
      'Labor cost calculator',
      'Overtime tracking system',
      'Break compliance checklists',
      'Performance scorecards',
      'Budget variance analysis'
    ],
    badge: 'New',
    rating: 4.8,
    reviewCount: 64,
    includes: ['Excel + Google Sheets', 'Video tutorials', 'ROI calculator', 'Email support']
  },
  {
    id: 'banquet-operations-blueprint',
    title: 'Banquet Operations Blueprint',
    subtitle: 'Events, Catering & Large-Scale Service',
    description: 'Complete banquet and catering operations system developed at SLS Brickell and other luxury properties. Event planning templates, BEO workflows, and service execution guides.',
    price: 247,
    category: 'playbook',
    image: '/products/banquet-blueprint.jpg',
    features: [
      'BEO template library',
      'Event setup guides',
      'Catering menu engineering',
      'Staff deployment charts',
      'Client communication scripts',
      'Post-event analysis framework'
    ],
    badge: 'Premium',
    rating: 4.9,
    reviewCount: 52,
    includes: ['PDF + Canva templates', 'Event calculators', 'Client proposal templates', 'Video training']
  },
  {
    id: 'revenue-recovery-system',
    title: 'Revenue Recovery System',
    subtitle: 'Turn Around Underperforming Operations',
    description: 'A diagnostic and action framework for operations that are missing targets. Includes P&L analysis templates, cost reduction playbooks, and revenue optimization strategies.',
    price: 347,
    originalPrice: 497,
    category: 'course',
    image: '/products/revenue-recovery.jpg',
    features: [
      'Operations diagnostic framework',
      'P&L analysis templates',
      'Cost reduction playbook',
      'Revenue optimization guide',
      '30-60-90 day action plan',
      'Stakeholder presentation templates'
    ],
    badge: 'High Value',
    rating: 4.8,
    reviewCount: 43,
    includes: ['6 video modules', 'Workbook PDF', 'Analysis templates', '1:1 consultation discount']
  },
  {
    id: 'menu-engineering-masterclass',
    title: 'Menu Engineering Masterclass',
    subtitle: 'Data-Driven Menu Design & Pricing',
    description: 'Learn the science behind profitable menu design. From matrix analysis to psychological pricing, this course teaches you to engineer menus that drive both revenue and guest satisfaction.',
    price: 127,
    category: 'course',
    image: '/products/menu-masterclass.jpg',
    features: [
      'Menu matrix analysis method',
      'Psychological pricing strategies',
      'Category management system',
      'Seasonal menu planning',
      'Costing & margin optimization',
      'Digital menu best practices'
    ],
    badge: 'Course',
    rating: 4.7,
    reviewCount: 78,
    includes: ['4 video modules', 'Menu analysis toolkit', 'Pricing calculator', 'Certificate of completion']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category);
};
