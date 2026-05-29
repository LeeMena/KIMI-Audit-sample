import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from '@/components/ui/sonner';

interface LayoutProps {
  children: React.ReactNode;
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
  };
}

export default function Layout({ children, seo }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (seo?.title) {
      document.title = seo.title;
    }
    if (seo?.description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seo.description);
      }
    }
  }, [seo]);

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-text">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#141414',
            border: '1px solid #2a2a2a',
            color: '#e8e8e8',
          },
        }}
      />
    </div>
  );
}
