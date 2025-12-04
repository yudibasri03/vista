import Header from './components/Header';
import Hero from './components/Hero';
import WhyVista from './components/WhyVista';
import Products from './components/Products';
import ComparisonTable from './components/ComparisonTable';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <WhyVista />
        <div id="products">
          <Products />
        </div>
        <div id="comparison">
          <ComparisonTable />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
