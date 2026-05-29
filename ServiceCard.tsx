import { Link } from 'react-router-dom';
import { Crown, Rocket, TrendingUp, Mic, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Service } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  crown: <Crown className="w-6 h-6" />,
  rocket: <Rocket className="w-6 h-6" />,
  'trending-up': <TrendingUp className="w-6 h-6" />,
  mic: <Mic className="w-6 h-6" />,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  detailed?: boolean;
}

export default function ServiceCard({ service, index = 0, detailed = false }: ServiceCardProps) {
  if (detailed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className={`relative bg-luxury-card border ${service.popular ? 'border-gold' : 'border-luxury-border'} p-8 md:p-10 card-hover`}
      >
        {service.popular && (
          <span className="absolute -top-3 left-8 px-4 py-1 bg-gold text-luxury-black text-[10px] font-medium tracking-wider uppercase">
            Most Popular
          </span>
        )}

        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 flex items-center justify-center ${service.popular ? 'text-gold' : 'text-luxury-muted'}`}>
            {iconMap[service.icon]}
          </div>
          <div>
            <h3 className="font-serif text-2xl text-luxury-text">{service.title}</h3>
            <p className="text-sm text-luxury-muted">{service.subtitle}</p>
          </div>
        </div>

        <p className="text-luxury-muted leading-relaxed mb-6">{service.description}</p>

        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-serif text-3xl text-gold">{service.price}</span>
            <span className="text-sm text-luxury-muted">{service.priceNote}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-4">What's Included</h4>
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-luxury-text">
                <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-4">Deliverables</h4>
          <ul className="space-y-2">
            {service.deliverables.map((del, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-luxury-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0 mt-1.5" />
                {del}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 pt-6 border-t border-luxury-border">
          <h4 className="text-[11px] tracking-[0.15em] uppercase text-luxury-muted mb-3">Ideal For</h4>
          <div className="flex flex-wrap gap-2">
            {service.idealFor.map((ideal, i) => (
              <span key={i} className="px-3 py-1 border border-luxury-border text-xs text-luxury-muted">
                {ideal}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/book"
          className={`w-full inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.15em] uppercase py-4 transition-all ${
            service.popular
              ? 'bg-gold text-luxury-black hover:bg-gold-light'
              : 'border border-luxury-border text-luxury-text hover:border-gold hover:text-gold'
          }`}
        >
          {service.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-luxury-card border border-luxury-border p-8 card-hover"
    >
      <div className="text-gold mb-6">{iconMap[service.icon]}</div>
      <h3 className="font-serif text-xl text-luxury-text mb-2">{service.title}</h3>
      <p className="text-sm text-luxury-muted mb-4">{service.subtitle}</p>
      <p className="text-sm text-luxury-muted leading-relaxed mb-6 line-clamp-3">{service.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-luxury-border">
        <span className="font-serif text-lg text-gold">{service.price}<span className="text-xs text-luxury-muted font-sans">/week</span></span>
        <Link to="/book" className="text-[11px] tracking-[0.1em] uppercase text-gold hover:text-gold-light transition-colors flex items-center gap-1">
          Learn More <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
}
