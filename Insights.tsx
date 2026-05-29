import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Users, Star } from 'lucide-react';
import Layout from '@/components/Layout';
import CTABanner from '@/components/CTABanner';
import { blogPosts, getFeaturedPosts } from '@/data/blogPosts';

const categories = ['All', 'Operations', 'Pre-Opening', 'Leadership', 'Financial Management', 'Menu Development', 'Banquets', 'Team Development'];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featuredPosts = getFeaturedPosts();

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <Layout seo={{
      title: 'Insights | Hospitality Operations Blog | Leander Mena',
      description: 'Weekly strategies on labor optimization, cost control, team development, and hospitality leadership from 18+ years in Miami F&B operations.',
    }}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.1)_0%,_transparent_60%)]" />
        <div className="container-luxury relative z-10 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="eyebrow">Blog & Insights</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-luxury-text mb-6">
              Insights
            </h1>
            <div className="divider-gold mb-6 ml-0" />
            <p className="font-serif text-lg text-luxury-muted/80 italic max-w-2xl leading-relaxed">
              Weekly operations intelligence for hospitality leaders. Actionable strategies on labor, 
              cost control, and team development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Bar */}
      <section className="border-y border-luxury-border/30 bg-luxury-dark/50">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center text-gold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-luxury-text">Join 2,400+ hospitality leaders</p>
                <p className="text-xs text-luxury-muted">Get weekly insights delivered every Tuesday</p>
              </div>
            </div>
            <Link to="/book" className="btn-primary text-[10px] py-3 px-6">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="eyebrow">Featured</span>
            <h2 className="font-serif text-3xl text-luxury-text">Editor's Picks</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-luxury-card border border-luxury-border card-hover"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,160,128,0.15)_0%,_transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-gold/60" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-gold">{post.category}</span>
                    <span className="text-luxury-border">·</span>
                    <span className="text-[10px] text-luxury-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-luxury-text mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-luxury-muted leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-luxury-dark text-[10px] text-luxury-muted uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="eyebrow">All Articles</span>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-gold text-luxury-black'
                    : 'border border-luxury-border text-luxury-muted hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col md:flex-row gap-6 p-6 bg-luxury-card border border-luxury-border card-hover"
              >
                <div className="w-full md:w-48 h-32 bg-gradient-to-br from-luxury-dark to-luxury-card flex-shrink-0 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-gold/30" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-gold">{post.category}</span>
                    <span className="text-luxury-border">·</span>
                    <span className="text-[10px] text-luxury-muted">{post.date}</span>
                    <span className="text-luxury-border">·</span>
                    <span className="text-[10px] text-luxury-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-luxury-text mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-luxury-muted leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-luxury-dark text-[10px] text-luxury-muted uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              { icon: <Users className="w-6 h-6" />, value: '2,400+', label: 'Weekly subscribers' },
              { icon: <BookOpen className="w-6 h-6" />, value: '50+', label: 'Articles published' },
              { icon: <Star className="w-6 h-6" />, value: '4.9★', label: 'Reader satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-gold mb-3 flex justify-center">{stat.icon}</div>
                <p className="font-serif text-3xl text-luxury-text mb-2">{stat.value}</p>
                <p className="text-xs text-luxury-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Get Weekly Operations Intelligence"
        subtitle="Join 2,400+ hospitality leaders receiving actionable strategies every Tuesday. No fluff, just proven tactics."
        primaryCta={{ label: 'Subscribe Now', href: '/book' }}
        secondaryCta={{ label: 'Browse Products', href: '/products' }}
      />
    </Layout>
  );
}
