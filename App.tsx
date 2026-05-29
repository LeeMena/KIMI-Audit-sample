import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import Book from './pages/Book';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/book" element={<Book />} />
    </Routes>
  );
}
