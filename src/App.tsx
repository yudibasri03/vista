// src/App.tsx
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

// lazy-load section di bawah fold
const WhyVista = lazy(() => import('./components/WhyVista'));
const Products = lazy(() => import('./components/Products'));
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));

function SectionSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="h-7 w-40 bg-slate-800/50 rounded mb-4" />
      <div className="h-4 w-full bg-slate-800/30 rounded mb-2" />
      <div className="h-4 w-3/4 bg-slate-800/30 rounded" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="pt-16">
        <Hero />

        <Suspense fallback={<SectionSkeleton />}>
          <WhyVista />
        </Suspense>

        <section id="products">
          <Suspense fallback={<SectionSkeleton />}>
            <Products />
          </Suspense>
        </section>

        <section id="comparison">
          <Suspense fallback={<SectionSkeleton />}>
            <ComparisonTable />
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<SectionSkeleton />}>
            <Testimonials />
          </Suspense>
        </section>

        <section id="faq">
          <Suspense fallback={<SectionSkeleton />}>
            <FAQ />
          </Suspense>
        </section>

        <Suspense fallback={<SectionSkeleton />}>
          <FinalCTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
