export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  featured?: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The 90-Day Restaurant Turnaround: A Proven Framework',
    excerpt: 'After turning around dozens of underperforming restaurants across Miami, I have refined a diagnostic framework that identifies root causes in the first week and delivers measurable results within 90 days.',
    content: 'Full article content...',
    category: 'Operations',
    author: 'Leander Mena',
    date: '2026-05-15',
    readTime: '8 min read',
    image: '/blog/90-day-turnaround.jpg',
    slug: '90-day-restaurant-turnaround-framework',
    featured: true,
    tags: ['turnaround', 'operations', 'p&l', 'leadership']
  },
  {
    id: '2',
    title: 'Pre-Opening Countdown: What to Do at 120, 90, 60, and 30 Days',
    excerpt: 'Opening a restaurant successfully requires precise timing. Here is the week-by-week countdown I use to ensure nothing falls through the cracks before opening night.',
    content: 'Full article content...',
    category: 'Pre-Opening',
    author: 'Leander Mena',
    date: '2026-05-08',
    readTime: '12 min read',
    image: '/blog/pre-opening-countdown.jpg',
    slug: 'pre-opening-countdown-timeline',
    featured: true,
    tags: ['pre-opening', 'timeline', 'checklist', 'new concepts']
  },
  {
    id: '3',
    title: 'Labor Cost Optimization: The 15% Reduction Playbook',
    excerpt: 'Labor is typically a restaurant\'s largest controllable expense. Here are the exact strategies I have used to reduce labor costs by 15-22% without cutting service quality.',
    content: 'Full article content...',
    category: 'Financial Management',
    author: 'Leander Mena',
    date: '2026-04-28',
    readTime: '10 min read',
    image: '/blog/labor-optimization.jpg',
    slug: 'labor-cost-optimization-playbook',
    tags: ['labor', 'cost-control', 'scheduling', 'p&l']
  },
  {
    id: '4',
    title: 'Building SOPs That Actually Get Followed',
    excerpt: 'Most restaurant SOPs sit in a binder collecting dust. The difference between paper procedures and lived standards comes down to how you build, train, and reinforce them.',
    content: 'Full article content...',
    category: 'Leadership',
    author: 'Leander Mena',
    date: '2026-04-20',
    readTime: '7 min read',
    image: '/blog/sop-development.jpg',
    slug: 'building-sops-that-work',
    tags: ['sops', 'training', 'culture', 'standards']
  },
  {
    id: '5',
    title: 'The Real Cost of Employee Turnover in Restaurants',
    excerpt: 'With industry turnover hovering near 75%, the true cost goes far beyond recruitment. Here is how to calculate your real turnover cost and build a retention strategy that works.',
    content: 'Full article content...',
    category: 'Team Development',
    author: 'Leander Mena',
    date: '2026-04-12',
    readTime: '9 min read',
    image: '/blog/turnover-cost.jpg',
    slug: 'real-cost-of-employee-turnover',
    tags: ['turnover', 'retention', 'team', 'culture']
  },
  {
    id: '6',
    title: 'Banquet Operations: Scaling from 20 to 500 Guests',
    excerpt: 'The systems that work for intimate dinners fail at scale. Here is how to build banquet operations that maintain consistency whether you are serving 20 guests or 500.',
    content: 'Full article content...',
    category: 'Banquets',
    author: 'Leander Mena',
    date: '2026-04-05',
    readTime: '11 min read',
    image: '/blog/banquet-scaling.jpg',
    slug: 'banquet-operations-scaling',
    tags: ['banquets', 'events', 'catering', 'operations']
  },
  {
    id: '7',
    title: 'Menu Engineering: The Data Behind Profitable Design',
    excerpt: 'Your menu is your most powerful sales tool. Here is how to use menu engineering matrix analysis to drive profitability while improving guest satisfaction.',
    content: 'Full article content...',
    category: 'Menu Development',
    author: 'Leander Mena',
    date: '2026-03-28',
    readTime: '8 min read',
    image: '/blog/menu-engineering.jpg',
    slug: 'menu-engineering-data-driven',
    tags: ['menu', 'profitability', 'pricing', 'engineering']
  },
  {
    id: '8',
    title: 'What I Learned Opening a Restaurant with a Michelin-Starred Chef',
    excerpt: 'The Maska project taught me lessons about precision, creativity under pressure, and what happens when you combine operational rigor with culinary artistry.',
    content: 'Full article content...',
    category: 'Leadership',
    author: 'Leander Mena',
    date: '2026-03-20',
    readTime: '6 min read',
    image: '/blog/maska-lessons.jpg',
    slug: 'michelin-chef-opening-lessons',
    featured: true,
    tags: ['michelin', 'fine-dining', 'leadership', 'pre-opening']
  }
];

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};
