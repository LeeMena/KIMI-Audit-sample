import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Clock, Shield, MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';

const guarantees = [
  { icon: <Clock className="w-6 h-6" />, title: '48-Hour Response', desc: 'All inquiries receive a personal response within 48 hours.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Satisfaction Guarantee', desc: 'If you don\'t see measurable improvement in 60 days, we\'ll adjust the engagement at no additional cost.' },
  { icon: <MessageSquare className="w-6 h-6" />, title: 'Ongoing Support', desc: 'All engagements include 30 days of post-project email support.' },
];

export default function Services() {
  return (
    <Layout seo={{
      title: 'Services | Fractional F&B Leadership & Consulting | Leander Mena',
      description: 'Fractional F&B leadership, pre-opening consulting, operations recovery, and speaking engagements for Miami hospitality groups.',
    }}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.1)_0%,_transparent_60%)]" />
        <div className="container-luxury relative z-10 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="eyebrow">Services</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-luxury-text mb-6">
              Consulting Services
            </h1>
            <div className="divider-gold mb-6 ml-0" />
            <p className="font-serif text-lg text-luxury-muted/80 italic max-w-2xl leading-relaxed">
              Four engagement models designed to meet you where you are — from pre-opening builds to operational turnarounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">Process</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
              How Every Engagement Works
            </h2>
            <p className="text-luxury-muted max-w-2xl mx-auto">
              A proven four-phase process that ensures measurable results and sustainable improvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { step: '01', title: 'Discovery', desc: '30-minute call to understand your situation, timeline, and objectives. We determine if there is a mutual fit.' },
              { step: '02', title: 'Diagnostic', desc: 'On-site assessment (3-5 days) to identify root causes, benchmark current performance, and build a detailed action plan.' },
              { step: '03', title: 'Implementation', desc: 'Execute the action plan with weekly progress reviews, real-time adjustments, and transparent communication.' },
              { step: '04', title: 'Sustainability', desc: 'Handover documentation, train your team, and establish monitoring systems so improvements stick long after I leave.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="font-serif text-5xl text-gold/20 mb-4 block">{item.step}</span>
                <h3 className="font-serif text-xl text-luxury-text mb-3">{item.title}</h3>
                <p className="text-sm text-luxury-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* What You Can Expect */}
          <div className="bg-luxury-card border border-luxury-border p-8 md:p-12">
            <h3 className="font-serif text-2xl text-luxury-text mb-8 text-center">What You Can Expect</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Detailed diagnostic report with findings and recommendations',
                'Custom operations manual and SOP documentation',
                'Weekly progress reports with measurable KPIs',
                'Team training completion certificates',
                '30-day post-engagement email support',
                'Monthly board-ready reporting (fractional engagements)',
                'Vendor contract templates and negotiation strategies',
                'Cost reduction analysis with ROI tracking',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-luxury-muted">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">Our Promise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
              The Leander Mena Guarantee
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 border border-luxury-border bg-luxury-card"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gold/10 text-gold mx-auto mb-6">
                  {g.icon}
                </div>
                <h3 className="font-serif text-xl text-luxury-text mb-3">{g.title}</h3>
                <p className="text-sm text-luxury-muted">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl text-luxury-text mb-6">
              Customized Pricing for Your Specific Needs
            </h2>
            <p className="text-luxury-muted leading-relaxed mb-8">
              Every hospitality operation is unique. While the prices above reflect typical engagements, 
              I customize each proposal based on property size, scope of work, and timeline. 
              Let's discuss your specific situation and find the right approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book" className="btn-primary flex items-center gap-2">
                Request a Custom Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/products" className="btn-secondary">
                Explore Digital Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Let's Discuss Your Project"
        subtitle="Every great operation starts with a conversation. Book a 30-minute discovery call to explore how we can work together."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
      />
    </Layout>
  );
}
