export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  approach: string;
  results: {
    metric: string;
    label: string;
  }[];
  services: string[];
  duration: string;
  testimonial: string;
  image: string;
  slug: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    client: 'Maska Indian Kitchen + Bar',
    industry: 'Fine Dining / Michelin Concept',
    title: 'Building a Michelin-Starred Restaurant from Ground Zero',
    challenge: 'Open an upscale Indian restaurant concept led by a Michelin-starred chef in Miami\'s competitive dining market. The project required building an entirely new team, establishing vendor relationships, creating service standards, and executing a flawless opening — all within a compressed timeline.',
    approach: 'Implemented a comprehensive 120-day pre-opening system: recruited and trained 35+ team members across FOH and BOH, established 22 vendor partnerships, developed 50+ SOPs, and executed a phased soft opening leading to the grand opening. Created custom training modules for Indian cuisine service standards.',
    results: [
      { metric: '35+', label: 'Team members hired & trained' },
      { metric: '50+', label: 'SOPs implemented' },
      { metric: '0', label: 'Critical issues on opening night' },
      { metric: '4.8★', label: 'Average review rating at 90 days' }
    ],
    services: ['Pre-Opening Consulting', 'Team Training', 'SOP Development'],
    duration: '4 months',
    testimonial: 'Leander built our entire operational foundation. From a construction site to a fully functioning fine dining restaurant — his system left nothing to chance.',
    image: '/case-studies/maska.jpg',
    slug: 'maska-indian-kitchen'
  },
  {
    id: '2',
    client: 'V&E Hospitality Group',
    industry: 'Multi-Concept Restaurant Group',
    title: '18% Labor Cost Reduction While Improving Service Scores',
    challenge: 'A high-volume Miami restaurant was experiencing labor cost overruns exceeding budget by 24%, declining guest satisfaction scores, and 40% annual staff turnover. The ownership group needed immediate intervention without disrupting daily operations.',
    approach: 'Conducted a 5-day operations diagnostic across all shifts, identifying scheduling inefficiencies, overtime patterns, and training gaps. Restructured the labor model with smart scheduling templates, implemented cross-training programs, and reset service standards with a 3-week intensive training sprint.',
    results: [
      { metric: '18%', label: 'Labor cost reduction' },
      { metric: '22%', label: 'Improvement in guest satisfaction' },
      { metric: '40%→15%', label: 'Turner reduction' },
      { metric: '3.2x', label: 'ROI on consulting investment' }
    ],
    services: ['Fractional Leadership', 'Operations Recovery', 'Labor Optimization'],
    duration: '6 months',
    testimonial: 'Within 60 days we saw measurable improvement. By month four, we were a completely different operation. Leander changed how we think about labor.',
    image: '/case-studies/ve-hospitality.jpg',
    slug: 've-hospitality-turnaround'
  },
  {
    id: '3',
    client: 'SLS Brickell',
    industry: 'Luxury Urban Hotel',
    title: 'Pre-Opening Banquet Operations for 500-Person Events',
    challenge: 'A luxury hotel needed comprehensive banquet and catering operations built from scratch before the first guest arrival. The event space needed to handle intimate 20-person dinners to 500-person galas with consistent five-star service.',
    approach: 'Developed complete banquet operations infrastructure: created BEO templates and workflows, built staffing models for different event types, designed catering menus with costing analysis, and trained a dedicated banquet team. Implemented event execution systems with detailed run-of-shows.',
    results: [
      { metric: '94%', label: 'Guest satisfaction at launch' },
      { metric: '500', label: 'Max guest capacity executed flawlessly' },
      { metric: '12', label: 'Event types systematized' },
      { metric: '23%', label: 'Above-target banquet revenue' }
    ],
    services: ['Pre-Opening Consulting', 'Banquet Operations', 'Team Training'],
    duration: '3 months',
    testimonial: 'The banquet systems Leander created are still our gold standard. He set us up to scale from day one.',
    image: '/case-studies/sls-brickell.jpg',
    slug: 'sls-brickell-banquets'
  },
  {
    id: '4',
    client: 'Butler Hospitality',
    industry: 'Hotel F&B Technology',
    title: 'Scaling Multi-Property F&B Operations Across 28 Hotels',
    challenge: 'A rapidly growing hospitality technology company needed to manage F&B delivery and brand standards across an expanding portfolio of hotel partners, scaling from 12 to 28 properties while maintaining consistent quality and compliance.',
    approach: 'Created a multi-property operations framework with standardized brand compliance checklists, unified training programs delivered via digital platform, vendor consolidation strategies, and a performance scorecard system. Implemented weekly quality audits and feedback loops.',
    results: [
      { metric: '28', label: 'Properties managed seamlessly' },
      { metric: '99.2%', label: 'Brand compliance score' },
      { metric: '34%', label: 'Reduction in operational complaints' },
      { metric: '2.3x', label: 'Portfolio growth supported' }
    ],
    services: ['Fractional Leadership', 'SOP Development', 'Quality Systems'],
    duration: '12 months',
    testimonial: 'Leander built the operational infrastructure that made our growth possible. We scaled without sacrificing quality.',
    image: '/case-studies/butler-hospitality.jpg',
    slug: 'butler-hospitality-scale'
  }
];
