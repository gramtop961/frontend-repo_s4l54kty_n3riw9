import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
                <p className="mt-3 text-gray-700">
                  I’m Vamsi, a mobile app developer focused on building beautiful, reliable products. I care about
                  motion, typography, and the tiny details that make apps feel alive. I’ve shipped apps used by
                  thousands and enjoy collaborating with designers and founders to bring ideas to life.
                </p>
                <p className="mt-3 text-gray-700">
                  My toolbox includes Flutter and React Native, with a strong foundation in clean architecture and
                  performance. I love crafting custom animations and building design systems that scale.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Highlights</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• 5+ years building cross-platform apps</li>
                  <li>• End-to-end: concept → design → build → ship</li>
                  <li>• Strong focus on performance and DX</li>
                  <li>• Team player who communicates clearly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
