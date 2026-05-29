import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({ title, subtitle, primaryCta, secondaryCta }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-luxury-dark border-y border-luxury-border/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.08)_0%,_transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-luxury relative z-10 py-20 md:py-28 text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-text mb-6 max-w-4xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-luxury-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryCta.href} className="btn-primary flex items-center gap-2">
            {primaryCta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryCta && (
            <Link to={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
