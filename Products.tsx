import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Star, Shield, Clock, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import CTABanner from '@/components/CTABanner';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'template', label: 'Templates' },
  { key: 'playbook', label: 'Playbooks' },
  { key: 'course', label: 'Courses' },
  { key: 'toolkit', label: 'Toolkits' },
];

const trustSignals = [
  { icon: <Download className="w-5 h-5" />, title: 'Instant Download', desc: 'Access immediately after purchase' },
  { icon: <Shield className="w-5 h-5" />, title: '30-Day Guarantee', desc: 'Full refund if not satisfied' },
  { icon: <Clock className="w-5 h-5" />, title: 'Lifetime Updates', desc: 'Free updates to all products' },
  { icon: <Star className="w-5 h-5" />, title: '4.8+ Average Rating', desc: 'From verified purchasers' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout seo={{
      title: 'Digital Products | SOPs, Playbooks & Courses | Leander Mena',
      description: 'Hospitality operations templates, pre-opening playbooks, labor optimization toolkits, and online courses from 18+ years of Miami F&B leadership.',
    }}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.1)_0%,_transparent_60%)]" />
        <div className="container-luxury relative z-10 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="eyebrow">Digital Products</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-luxury-text mb-6">
              Tools Built from Real Experience
            </h1>
            <div className="divider-gold mb-6 ml-0" />
            <p className="font-serif text-lg text-luxury-muted/80 italic max-w-2xl leading-relaxed">
              SOPs, playbooks, and courses distilled from 18+ years operating Miami's top hospitality venues. 
              Download, customize, and implement immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-luxury-border/30 bg-luxury-dark/50">
        <div className="container-luxury py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((signal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0">
                  {signal.icon}
                </div>
                <div>
                  <p className="text-xs font-medium text-luxury-text">{signal.title}</p>
                  <p className="text-[10px] text-luxury-muted">{signal.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 text-[11px] tracking-[0.15em] uppercase transition-all ${
                  activeCategory === cat.key
                    ? 'bg-gold text-luxury-black'
                    : 'border border-luxury-border text-luxury-muted hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden border border-gold/30 bg-luxury-card p-8 md:p-12 lg:p-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="eyebrow">Limited Time</span>
                <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
                  The Complete Operations Bundle
                </h2>
                <p className="text-luxury-muted leading-relaxed mb-6">
                  Get all six digital products at a significant discount. The Complete Operations Bundle 
                  includes every SOP, playbook, toolkit, and course — the full resource library I wish 
                  I had when I started managing operations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'All 6 digital products',
                    'Priority email support',
                    'Quarterly group Q&A calls',
                    'Private community access',
                    'Early access to new releases',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-luxury-muted">
                      <Check className="w-4 h-4 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button className="btn-primary flex items-center gap-2">
                    Get the Bundle
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link to="/book" className="btn-secondary">
                    Have Questions? Book a Call
                  </Link>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block">
                  <p className="text-sm text-luxury-muted line-through mb-1">${products.reduce((a, p) => a + (p.originalPrice || p.price), 0)}</p>
                  <p className="font-serif text-6xl text-gold mb-2">$997</p>
                  <p className="text-sm text-luxury-muted mb-4">One-time payment</p>
                  <p className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm">
                    Save ${products.reduce((a, p) => a + (p.originalPrice || p.price), 0) - 997}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Product is Right for You?"
        subtitle="Book a free 15-minute consultation and I'll help you identify the best resources for your specific situation."
        primaryCta={{ label: 'Book a Free Consultation', href: '/book' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />
    </Layout>
  );
}
