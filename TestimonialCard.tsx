import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
  featured?: boolean;
}

export default function TestimonialCard({ testimonial, index = 0, featured = false }: TestimonialCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-luxury-card border border-luxury-border p-8 md:p-10 card-hover"
      >
        <Quote className="w-8 h-8 text-gold/40 mb-6" />
        <blockquote className="font-serif text-xl md:text-2xl text-luxury-text leading-relaxed mb-8">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-luxury-text">{testimonial.name}</p>
            <p className="text-xs text-luxury-muted">{testimonial.title}, {testimonial.company}</p>
          </div>
          {testimonial.metric && (
            <div className="text-right">
              <p className="text-2xl font-serif text-gold">{testimonial.metric}</p>
              <p className="text-[10px] text-luxury-muted uppercase tracking-wider">{testimonial.metricLabel}</p>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-luxury-card border border-luxury-border p-6 card-hover"
    >
      <Quote className="w-6 h-6 text-gold/30 mb-4" />
      <p className="text-sm text-luxury-muted leading-relaxed mb-6 line-clamp-4">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-luxury-text">{testimonial.name}</p>
          <p className="text-xs text-luxury-muted">{testimonial.company}</p>
        </div>
        {testimonial.metric && (
          <div className="text-right">
            <p className="text-lg font-serif text-gold">{testimonial.metric}</p>
            <p className="text-[10px] text-luxury-muted uppercase tracking-wider">{testimonial.metricLabel}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
