import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, MapPin, Linkedin, Mail } from 'lucide-react';
import Layout from '@/components/Layout';
import CTABanner from '@/components/CTABanner';

const experience = [
  {
    role: 'General Manager',
    company: 'Marabu Restaurant / V&E Hospitality',
    location: 'Miami, FL',
    period: 'Recent',
    description: 'Led full restaurant general management including P&L oversight, labor management, vendor relationships, guest experience strategy, revenue growth, and front-of-house team development for a high-volume Miami concept.',
    highlight: 'La Cerveceria de Barrio concept',
  },
  {
    role: 'Miami Market Operations',
    company: 'Butler Hospitality',
    location: 'Miami, FL',
    period: 'Recent',
    description: 'Managed Miami market hotel partner operations for Butler Hospitality, overseeing multi-property F&B delivery, brand standards, staffing, and guest satisfaction across hotel accounts in the Miami market.',
    highlight: null,
  },
  {
    role: 'Opening General Manager',
    company: 'Maska Indian Kitchen + Bar',
    location: 'Miami, FL',
    period: 'Recent',
    description: 'Led full pre-opening build of an upscale Indian restaurant with a Michelin Star Chef. Recruited and trained the complete opening team across all FOH and BOH positions, established SOPs, coordinated vendor onboarding, and managed the restaurant\'s launch.',
    highlight: 'Michelin Star Chef concept',
  },
  {
    role: 'Director of Banquets — Pre-Opening',
    company: 'SLS Hotels / SLS Brickell',
    location: 'Miami, FL',
    period: 'Recent',
    description: 'Provided pre-opening banquet operations leadership for SLS Brickell, building event execution systems, staffing models, catering menus, and service standards for a luxury urban hotel property.',
    highlight: null,
  },
  {
    role: 'Banquet Manager',
    company: 'Accor / Sofitel Miami to Pullman Miami Airport',
    location: 'Miami, FL',
    period: '',
    description: 'Managed banquet operations across Accor properties, overseeing event execution, team coordination, and guest satisfaction for corporate and social events.',
    highlight: null,
  },
];

const certifications = [
  'ServSafe Food Protection Manager',
  'HACCP Certified',
  'TIPS Certified Trainer',
  'CPR/AED Certified',
];

const expertise = [
  { icon: <Briefcase className="w-5 h-5" />, title: 'P&L Management', desc: 'Full financial oversight, budgeting, and cost optimization' },
  { icon: <Award className="w-5 h-5" />, title: 'Pre-Opening Builds', desc: 'Construction to opening night project management' },
  { icon: <GraduationCap className="w-5 h-5" />, title: 'Team Development', desc: 'Training programs, SOPs, and culture building' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Miami Market Expert', desc: 'Deep knowledge of South Florida hospitality landscape' },
];

export default function About() {
  return (
    <Layout seo={{
      title: 'About Leander Mena | 18+ Years Miami Hospitality Leadership',
      description: 'Leander Mena is a Miami-based hospitality and F&B operations leader with 18+ years of experience across restaurants, hotels, banquets, and catering.',
    }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.1)_0%,_transparent_60%)]" />
        <div className="container-luxury relative z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">Miami, Florida</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-luxury-text mb-6">
              About Leander
            </h1>
            <div className="divider-gold mb-6 ml-0" />
            <p className="text-sm tracking-[0.2em] uppercase text-luxury-muted mb-4">
              Hospitality & F&B Operations Leader
            </p>
            <p className="font-serif text-lg text-luxury-muted/80 italic max-w-2xl leading-relaxed">
              Blending hands-on floor leadership with strategic operations, financial discipline, and a guest-first mindset.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio + Photo Grid */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-luxury-text mb-6">
                From the Floor to the Boardroom
              </h2>
              <div className="space-y-4 text-luxury-muted leading-relaxed">
                <p>
                  I started in hospitality the way most great operators do — on the floor, learning every station, 
                  understanding the rhythm of service from the inside out. Over 18 years in Miami's most demanding 
                  dining and hotel environments, I've led teams through every phase of the operational lifecycle: 
                  pre-opening builds, high-growth scaling, turnaround recoveries, and steady-state optimization.
                </p>
                <p>
                  My approach combines the discipline of P&L management with the human side of leadership. I believe 
                  that great operations are built on clear standards, consistent training, and a culture where every 
                  team member understands how their work connects to the guest experience and the bottom line.
                </p>
                <p>
                  Today, I work with independent restaurant owners, hotel management companies, and investor groups 
                  who need senior operational expertise without the overhead of a full-time executive. Whether it's 
                  a 120-day pre-opening sprint or a 6-month operational turnaround, I bring the systems, experience, 
                  and hands-on execution to deliver measurable results.
                </p>
                <p>
                  I'm also passionate about democratizing operational knowledge. Through my digital products — SOP 
                  collections, playbooks, and courses — I make Fortune 500-level operational tools accessible to 
                  operators at every scale.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://linkedin.com/in/leandermena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:leander@leandermena.com"
                  className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  leander@leandermena.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Stats Card */}
              <div className="bg-luxury-card border border-luxury-border p-8">
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6">At a Glance</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-serif text-3xl text-luxury-text">18+</p>
                    <p className="text-xs text-luxury-muted">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-luxury-text">40+</p>
                    <p className="text-xs text-luxury-muted">Properties</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-luxury-text">500+</p>
                    <p className="text-xs text-luxury-muted">Team Members Trained</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-luxury-text">$12M+</p>
                    <p className="text-xs text-luxury-muted">Revenue Optimized</p>
                  </div>
                </div>
              </div>

              {/* Expertise */}
              <div className="bg-luxury-card border border-luxury-border p-8">
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6">Core Expertise</h3>
                <div className="space-y-4">
                  {expertise.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-luxury-text">{item.title}</p>
                        <p className="text-xs text-luxury-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-luxury-card border border-luxury-border p-8">
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Certifications</h3>
                <ul className="space-y-2">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-luxury-muted">
                      <Award className="w-4 h-4 text-gold/50" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">Career</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text">
              Professional Experience
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-12 border-l border-luxury-border hover:border-gold/30 transition-colors"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 bg-gold/50 rounded-full" />
                <div className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="font-serif text-xl text-luxury-text">{exp.role}</h3>
                    <span className="text-xs text-gold">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gold mb-1">{exp.company}</p>
                  <p className="text-xs text-luxury-muted mb-3">{exp.location}</p>
                  {exp.highlight && (
                    <span className="inline-block px-3 py-1 border border-gold/30 text-gold text-[10px] tracking-wider uppercase mb-3">
                      {exp.highlight}
                    </span>
                  )}
                  <p className="text-sm text-luxury-muted leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Work Together?"
        subtitle="Let's discuss how fractional leadership or digital products can help you achieve your operational goals."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
        secondaryCta={{ label: 'Browse Products', href: '/products' }}
      />
    </Layout>
  );
}
