import Header from './components/Header';
import Hero from './components/Hero';
import WhyVista from './components/WhyVista';
import Products from './components/Products';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="pt-16">
        <Hero />
        <WhyVista />

        <div id="products">
          <Products />
        </div>

        {/* Section perbandingan diganti menjadi Journey Roadmap */}
        <div id="comparison">
          <Roadmap />
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
