import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Mail, MessageSquare, Phone, Check, User, Building } from 'lucide-react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const inquiryTypes = [
  { value: 'fractional', label: 'Fractional F&B Leadership' },
  { value: 'preopening', label: 'Pre-Opening Consulting' },
  { value: 'recovery', label: 'Operations Recovery' },
  { value: 'speaking', label: 'Speaking & Training' },
  { value: 'products', label: 'Digital Products Question' },
  { value: 'other', label: 'Other Inquiry' },
];

const timeframes = [
  'Immediately',
  'Within 30 days',
  '1-3 months',
  '3-6 months',
  'Just exploring',
];

export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    timeframe: '',
    message: '',
    newsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your inquiry. I will personally respond within 48 hours.');
    setFormData({
      name: '', email: '', company: '', phone: '',
      inquiryType: '', timeframe: '', message: '', newsletter: false,
    });
  };

  return (
    <Layout seo={{
      title: 'Book a Call | Fractional F&B Leadership | Leander Mena',
      description: 'Book a 30-minute discovery call to discuss your hospitality operations needs. Fractional leadership, pre-opening consulting, and operations recovery.',
    }}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.1)_0%,_transparent_60%)]" />
        <div className="container-luxury relative z-10 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="eyebrow">Contact</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-luxury-text mb-6">
              Let's Talk
            </h1>
            <div className="divider-gold mb-6 ml-0" />
            <p className="font-serif text-lg text-luxury-muted/80 italic max-w-2xl leading-relaxed">
              Whether you are 90 days from opening or trying to fix a difficult quarter, 
              the next move is simple: start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-muted" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-luxury-card border border-luxury-border text-luxury-text text-sm placeholder:text-luxury-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-muted" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-luxury-card border border-luxury-border text-luxury-text text-sm placeholder:text-luxury-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">
                      Company / Property
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-muted" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-luxury-card border border-luxury-border text-luxury-text text-sm placeholder:text-luxury-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Your company or property name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-muted" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-luxury-card border border-luxury-border text-luxury-text text-sm placeholder:text-luxury-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="(305) 555-0000"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">
                      What are you interested in? *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-muted" />
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-luxury-card border border-luxury-border text-luxury-text text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">
                      Timeline
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-muted" />
                      <select
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-luxury-card border border-luxury-border text-luxury-text text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                      >
                        <option value="">When do you need help?</option>
                        {timeframes.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-2">
                    Tell me about your project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-luxury-card border border-luxury-border text-luxury-text text-sm placeholder:text-luxury-muted/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Describe your situation, goals, and any specific challenges you're facing..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 border border-luxury-border bg-luxury-card text-gold focus:ring-gold"
                  />
                  <label className="text-sm text-luxury-muted">
                    Subscribe to the weekly operations newsletter
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto flex items-center justify-center gap-2">
                  Send Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-luxury-card border border-luxury-border p-8">
                <h3 className="font-serif text-xl text-luxury-text mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:leander@leandermena.com" className="flex items-center gap-4 text-sm text-luxury-muted hover:text-gold transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                    leander@leandermena.com
                  </a>
                  <div className="flex items-center gap-4 text-sm text-luxury-muted">
                    <Phone className="w-5 h-5 text-gold" />
                    Available upon request
                  </div>
                  <div className="flex items-center gap-4 text-sm text-luxury-muted">
                    <Calendar className="w-5 h-5 text-gold" />
                    Typically respond within 48 hours
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-luxury-card border border-luxury-border p-8">
                <h3 className="font-serif text-xl text-luxury-text mb-6">What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'Submit your inquiry through this form' },
                    { step: '2', text: 'I personally review every submission within 48 hours' },
                    { step: '3', text: 'If it seems like a fit, I will send a scheduling link' },
                    { step: '4', text: 'We have a 30-minute discovery call (no obligation)' },
                    { step: '5', text: 'If we both agree it is a good fit, I send a proposal' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 flex items-center justify-center bg-gold/10 text-gold text-xs font-medium flex-shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <p className="text-sm text-luxury-muted">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Note */}
              <div className="bg-gold/5 border border-gold/20 p-8">
                <h3 className="font-serif text-lg text-gold mb-3">Current Availability</h3>
                <p className="text-sm text-luxury-muted leading-relaxed mb-4">
                  I am currently accepting new fractional leadership and pre-opening engagements 
                  for Q3 2026. Operations recovery engagements can typically begin within 2 weeks.
                </p>
                <div className="flex items-center gap-2 text-sm text-gold">
                  <Check className="w-4 h-4" />
                  <span>Accepting new clients</span>
                </div>
              </div>

              {/* Speaking */}
              <div className="bg-luxury-card border border-luxury-border p-8">
                <h3 className="font-serif text-xl text-luxury-text mb-4">Speaking Inquiries</h3>
                <p className="text-sm text-luxury-muted leading-relaxed mb-4">
                  Available for keynotes, workshops, and panel discussions at hospitality industry 
                  conferences and corporate leadership events.
                </p>
                <div className="space-y-2">
                  {[
                    'National Restaurant Association Show',
                    'Florida Restaurant & Lodging Association',
                    'Hotel Operations Conference',
                    'Private corporate events',
                  ].map((event, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-luxury-muted">
                      <Check className="w-3 h-3 text-gold" />
                      {event}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
