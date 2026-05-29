import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Clock, Award, Star, Zap, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import CTABanner from '@/components/CTABanner';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';
import { products } from '@/data/products';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

const stats = [
  { icon: <Clock className="w-5 h-5" />, value: '18+', label: 'Years Experience' },
  { icon: <TrendingUp className="w-5 h-5" />, value: '$12M+', label: 'Revenue Optimized' },
  { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Team Members Trained' },
  { icon: <Award className="w-5 h-5" />, value: '40+', label: 'Properties Operated' },
];

const trustBadges = [
  'Michelin-Star Concepts',
  'Luxury Hotels',
  'SLS Hotels',
  'Accor Properties',
  'Independent Restaurants',
  'Multi-Unit Groups',
];

export default function Home() {
  return (
    <Layout seo={{
      title: 'Leander Mena | Fractional F&B Leadership & Hospitality Consulting | Miami',
      description: 'Fractional F&B operations leadership for Miami restaurants, hotels & new openings. 18+ years opening, stabilizing, and scaling hospitality operations.',
    }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-luxury-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.12)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 via-transparent to-luxury-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-luxury relative z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow inline-block">Miami, Florida</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-luxury-text mb-8 leading-[0.95] tracking-wide"
            >
              Leander Mena
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="divider-gold mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-luxury-muted mb-8"
            >
              Hospitality & Food-and-Beverage Operations
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-serif text-lg md:text-xl text-luxury-muted/80 italic max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              18+ years opening, leading, and growing restaurants, hotels, banquets, and catering operations across Miami — now available as fractional leadership and digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/book" className="btn-primary flex items-center gap-2">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/products" className="btn-secondary">
                Explore Digital Products
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 border border-luxury-border/50 bg-luxury-card/30">
                <div className="text-gold mb-3 flex justify-center">{stat.icon}</div>
                <p className="font-serif text-3xl md:text-4xl text-luxury-text mb-1">{stat.value}</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-luxury-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-luxury-border/30 bg-luxury-dark/50">
        <div className="container-luxury py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustBadges.map((badge, i) => (
              <span key={i} className="text-xs tracking-[0.15em] uppercase text-luxury-muted/60">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">Consulting Services</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
              Operational Leadership, On Demand
            </h2>
            <p className="text-luxury-muted max-w-2xl mx-auto">
              Four engagement models designed to meet you where you are — from pre-opening builds to operational turnarounds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services & Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">Digital Products</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
              Tools Built from Real Experience
            </h2>
            <p className="text-luxury-muted max-w-2xl mx-auto">
              SOPs, playbooks, and courses distilled from 18+ years operating Miami's top hospitality venues.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} detailed />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
              Browse All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">Client Results</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
              Measurable Impact, Real Words
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {testimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} featured />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(2, 5).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary inline-flex items-center gap-2">
              Read Full Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Leander */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">The Difference</span>
              <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-6">
                Why Operators Choose Fractional Leadership
              </h2>
              <p className="text-luxury-muted leading-relaxed mb-8">
                Most hospitality groups don't need another full-time executive. They need a seasoned operator 
                who can diagnose issues fast, implement systems that stick, and transfer knowledge to your 
                existing team — without the overhead of a permanent C-suite hire.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { icon: <Zap className="w-5 h-5" />, title: 'Rapid Diagnosis', desc: 'Identify root causes within the first week, not months' },
                  { icon: <CheckCircle className="w-5 h-5" />, title: 'Systems That Stick', desc: 'SOPs and training programs your team will actually follow' },
                  { icon: <Star className="w-5 h-5" />, title: 'Proven Track Record', desc: '18+ years across Michelin concepts, luxury hotels, and independents' },
                  { icon: <TrendingUp className="w-5 h-5" />, title: 'Measurable ROI', desc: 'Average 3-5x return on consulting investment within 6 months' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-luxury-text">{item.title}</h4>
                      <p className="text-sm text-luxury-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Leander
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-luxury-card to-luxury-dark border border-luxury-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(184,160,128,0.2)_0%,_transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
                      <Award className="w-12 h-12 text-gold/60" />
                    </div>
                    <p className="font-serif text-3xl text-luxury-text mb-4">18+ Years</p>
                    <p className="text-luxury-muted text-sm">Of hands-on hospitality leadership across Miami's most demanding venues</p>
                    <div className="divider-gold my-8" />
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="font-serif text-2xl text-gold">$12M+</p>
                        <p className="text-[10px] text-luxury-muted uppercase tracking-wider">Revenue Optimized</p>
                      </div>
                      <div>
                        <p className="font-serif text-2xl text-gold">500+</p>
                        <p className="text-[10px] text-luxury-muted uppercase tracking-wider">Team Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">How It Works</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
              From First Call to Measurable Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery Call', desc: '30-minute conversation to understand your challenges, timeline, and goals.' },
              { step: '02', title: 'On-Site Diagnostic', desc: 'Deep-dive assessment of your operations, typically 3-5 days on location.' },
              { step: '03', title: 'Implementation', desc: 'Execute the action plan with weekly check-ins and real-time adjustments.' },
              { step: '04', title: 'Sustainable Results', desc: 'Handover systems, train your team, and ensure improvements stick long-term.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="font-serif text-6xl text-gold/20 mb-4 block">{item.step}</span>
                <h3 className="font-serif text-xl text-luxury-text mb-3">{item.title}</h3>
                <p className="text-sm text-luxury-muted leading-relaxed">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-luxury-border to-transparent translate-x-1/2" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Let's Build Something That Runs Well"
        subtitle="Whether you're 90 days from opening or trying to fix a difficult quarter, the next move is simple: start the conversation."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
        secondaryCta={{ label: 'Explore Products', href: '/products' }}
      />
    </Layout>
  );
}
