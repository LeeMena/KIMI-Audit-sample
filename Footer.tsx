import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const footerLinks = {
  services: [
    { label: 'Fractional Leadership', path: '/services' },
    { label: 'Pre-Opening Consulting', path: '/services' },
    { label: 'Operations Recovery', path: '/services' },
    { label: 'Speaking & Training', path: '/services' },
  ],
  products: [
    { label: 'SOP Master Collection', path: '/products' },
    { label: 'Pre-Opening Playbook', path: '/products' },
    { label: 'Labor Optimization Toolkit', path: '/products' },
    { label: 'Menu Engineering Course', path: '/products' },
  ],
  company: [
    { label: 'About Leander', path: '/about' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Insights & Blog', path: '/insights' },
    { label: 'Book a Call', path: '/book' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to the inner circle. Check your inbox.');
      setEmail('');
    }
  };

  return (
    <footer className="bg-luxury-dark border-t border-luxury-border/30">
      {/* Newsletter Section */}
      <div className="container-luxury py-16 md:py-20 border-b border-luxury-border/30">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Insider Insights</span>
            <h3 className="font-serif text-3xl md:text-4xl text-luxury-text mb-4">
              Get Weekly Operations Intelligence
            </h3>
            <p className="text-luxury-muted leading-relaxed">
              Join 2,400+ hospitality leaders receiving actionable strategies on labor optimization, 
              cost control, and team development — delivered every Tuesday.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-luxury-card border border-luxury-border text-luxury-text text-sm placeholder:text-luxury-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button type="submit" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-display text-xl text-luxury-text tracking-[0.1em]">
                Leander Mena
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-gold-muted mt-1">
                Hospitality & F&B Operations
              </span>
            </Link>
            <p className="text-sm text-luxury-muted leading-relaxed mb-6">
              Fractional F&B leadership and operational consulting for Miami's most ambitious 
              restaurants, hotels, and hospitality groups.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/leandermena"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-luxury-border text-luxury-muted hover:text-gold hover:border-gold/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:leander@leandermena.com"
                className="w-10 h-10 flex items-center justify-center border border-luxury-border text-luxury-muted hover:text-gold hover:border-gold/50 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-luxury-muted hover:text-luxury-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-luxury-muted hover:text-luxury-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-luxury-muted hover:text-luxury-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-border/30">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-luxury-muted">
            © {new Date().getFullYear()} Leander Mena. Miami, Florida. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs text-luxury-muted hover:text-luxury-text transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs text-luxury-muted hover:text-luxury-text transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
