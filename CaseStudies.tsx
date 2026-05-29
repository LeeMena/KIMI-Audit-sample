import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import CTABanner from '@/components/CTABanner';
import TestimonialCard from '@/components/TestimonialCard';
import { caseStudies } from '@/data/caseStudies';
import { testimonials } from '@/data/testimonials';

export default function CaseStudies() {
  return (
    <Layout seo={{
      title: 'Case Studies | Proven Hospitality Results | Leander Mena',
      description: 'Real results from real engagements. See how fractional leadership and operational consulting has transformed Miami hospitality operations.',
    }}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.1)_0%,_transparent_60%)]" />
        <div className="container-luxury relative z-10 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="eyebrow">Results</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-luxury-text mb-6">
              Case Studies
            </h1>
            <div className="divider-gold mb-6 ml-0" />
            <p className="font-serif text-lg text-luxury-muted/80 italic max-w-2xl leading-relaxed">
              Real engagements, real results. See how fractional leadership and operational consulting 
              has transformed Miami hospitality operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-0 border border-luxury-border overflow-hidden ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Side */}
                  <div className={`relative aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-dark ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(184,160,128,0.2)_0%,_transparent_60%)]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-luxury-muted mb-4">{study.industry}</p>
                      <h3 className="font-serif text-3xl md:text-4xl text-luxury-text mb-4">{study.client}</h3>
                      <div className="divider-gold my-4" />
                      <p className="text-sm text-luxury-muted italic max-w-md">{study.testimonial}</p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-8 md:p-12 bg-luxury-card ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="inline-block px-3 py-1 border border-gold/30 text-gold text-[10px] tracking-wider uppercase mb-6">
                      {study.duration} engagement
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl text-luxury-text mb-4">
                      {study.title}
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">The Challenge</h4>
                      <p className="text-sm text-luxury-muted leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">Our Approach</h4>
                      <p className="text-sm text-luxury-muted leading-relaxed">{study.approach}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-[11px] tracking-[0.15em] uppercase text-gold mb-4">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, j) => (
                          <div key={j} className="p-4 bg-luxury-dark border border-luxury-border">
                            <p className="font-serif text-2xl text-gold mb-1">{result.metric}</p>
                            <p className="text-[10px] text-luxury-muted uppercase tracking-wider">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {study.services.map((service, j) => (
                        <span key={j} className="px-3 py-1 bg-luxury-dark border border-luxury-border text-xs text-luxury-muted">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { icon: <TrendingUp className="w-6 h-6" />, value: '94%', label: 'Client satisfaction rate' },
              { icon: <Clock className="w-6 h-6" />, value: '60 days', label: 'Average time to first results' },
              { icon: <Users className="w-6 h-6" />, value: '3.8x', label: 'Average ROI on engagements' },
              { icon: <TrendingUp className="w-6 h-6" />, value: '85%', label: 'Clients re-engage within 12 months' },
            ].map((stat, i) => (
              <div key={i} className="p-6 border border-luxury-border bg-luxury-card">
                <div className="text-gold mb-3 flex justify-center">{stat.icon}</div>
                <p className="font-serif text-3xl text-luxury-text mb-2">{stat.value}</p>
                <p className="text-xs text-luxury-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Ready to Be the Next Success Story?"
        subtitle="Let's discuss how fractional leadership or operational consulting can transform your hospitality business."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />
    </Layout>
  );
}
