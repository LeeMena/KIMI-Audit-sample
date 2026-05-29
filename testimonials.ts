export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  metric?: string;
  metricLabel?: string;
  image: string;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Chef Hemant Mathur',
    title: 'Executive Chef & Founder',
    company: 'Maska Indian Kitchen + Bar',
    quote: 'Leander took our vision from blueprint to bustling restaurant. His pre-opening system was meticulous — every vendor relationship, every team member, every SOP was in place before we unlocked the doors. Opening night felt like we had been running for months.',
    metric: '0',
    metricLabel: 'Day-one operational issues',
    image: '/testimonials/chef-hemant.jpg',
    projectType: 'Pre-Opening Consulting'
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    title: 'General Manager',
    company: 'SLS Brickell',
    quote: 'When we brought Leander in for pre-opening banquet operations, he built systems that are still the standard we use today. His staffing models and event workflows gave us a foundation that scaled from 50-person dinners to 500-person galas seamlessly.',
    metric: '94%',
    metricLabel: 'Guest satisfaction score at launch',
    image: '/testimonials/maria-rodriguez.jpg',
    projectType: 'Banquet Operations'
  },
  {
    id: '3',
    name: 'David Chen',
    title: 'Managing Partner',
    company: 'V&E Hospitality Group',
    quote: 'Leander does not just consult — he executes. Within 60 days of bringing him in, we reduced labor costs by 18% while actually improving our service scores. His fractional leadership model gave us executive expertise without the full-time overhead.',
    metric: '18%',
    metricLabel: 'Labor cost reduction in 60 days',
    image: '/testimonials/david-chen.jpg',
    projectType: 'Fractional Leadership'
  },
  {
    id: '4',
    name: 'Sarah Williams',
    title: 'Director of Operations',
    company: 'Butler Hospitality',
    quote: 'Managing multi-property F&B delivery across Miami required someone who could build systems that work at scale. Leander created the operational backbone that allowed us to grow from 12 to 28 hotel partners without missing a beat on quality.',
    metric: '28',
    metricLabel: 'Hotel partners managed seamlessly',
    image: '/testimonials/sarah-williams.jpg',
    projectType: 'Operations Recovery'
  },
  {
    id: '5',
    name: 'Antonio Reyes',
    title: 'Owner',
    company: 'Marabu Restaurant',
    quote: 'We were bleeding money and close to shutting down. Leander came in, diagnosed the issues within a week, and had actionable fixes implemented immediately. Six months later, we were profitable for the first time in two years.',
    metric: '6',
    metricLabel: 'Months to profitability turnaround',
    image: '/testimonials/antonio-reyes.jpg',
    projectType: 'Operations Recovery'
  },
  {
    id: '6',
    name: 'Jennifer Park',
    title: 'VP of Asset Management',
    company: 'Accor Miami',
    quote: 'Leander\'s banquet leadership during our property transition was exceptional. He created training programs that elevated our entire service culture. The standards he established became the benchmark for our South Florida properties.',
    metric: '23%',
    metricLabel: 'Increase in banquet revenue',
    image: '/testimonials/jennifer-park.jpg',
    projectType: 'Speaking & Training'
  }
];
