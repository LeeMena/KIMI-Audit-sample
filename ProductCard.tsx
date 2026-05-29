import { ShoppingCart, Star, Check, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index?: number;
  detailed?: boolean;
}

export default function ProductCard({ product, index = 0, detailed = false }: ProductCardProps) {
  const handleAddToCart = () => {
    toast.success(`${product.title} added to cart`);
  };

  if (detailed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-luxury-card border border-luxury-border card-hover overflow-hidden"
      >
        {/* Image Area */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-dark overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,160,128,0.15)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
              <Download className="w-8 h-8 text-gold/60" />
            </div>
          </div>
          {product.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-luxury-black text-[10px] font-medium tracking-wider uppercase">
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-red-900/80 text-red-200 text-[10px] font-medium tracking-wider uppercase">
              Save ${product.originalPrice - product.price}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2 block">
            {product.category === 'template' ? 'Templates' : product.category === 'playbook' ? 'Playbook' : product.category === 'course' ? 'Course' : 'Toolkit'}
          </span>
          <h3 className="font-serif text-xl text-luxury-text mb-1">{product.title}</h3>
          <p className="text-sm text-luxury-muted mb-4">{product.subtitle}</p>
          <p className="text-sm text-luxury-muted leading-relaxed mb-6">{product.description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 4).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-luxury-muted">
                <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-luxury-border'}`} />
              ))}
            </div>
            <span className="text-xs text-luxury-muted">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-luxury-border">
            <div>
              <span className="font-serif text-2xl text-gold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-luxury-muted line-through ml-2">${product.originalPrice}</span>
              )}
            </div>
            <button onClick={handleAddToCart} className="btn-primary flex items-center gap-2 text-[10px] py-3 px-5">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
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
      className="group bg-luxury-card border border-luxury-border card-hover"
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,160,128,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Download className="w-6 h-6 text-gold/60" />
          </div>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-gold text-luxury-black text-[9px] font-medium tracking-wider uppercase">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-6">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2 block">
          {product.category === 'template' ? 'Templates' : product.category === 'playbook' ? 'Playbook' : product.category === 'course' ? 'Course' : 'Toolkit'}
        </span>
        <h3 className="font-serif text-lg text-luxury-text mb-1">{product.title}</h3>
        <p className="text-sm text-luxury-muted mb-4">{product.subtitle}</p>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-luxury-border'}`} />
            ))}
          </div>
          <span className="text-[10px] text-luxury-muted">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-luxury-border">
          <div>
            <span className="font-serif text-xl text-gold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-luxury-muted line-through ml-2">${product.originalPrice}</span>
            )}
          </div>
          <button onClick={handleAddToCart} className="text-gold hover:text-gold-light transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
