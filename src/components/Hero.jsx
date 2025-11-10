import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 sm:p-8 border border-white/40 shadow-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-600/20">
              <span>Mobile App Developer</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              I craft delightful mobile experiences
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              I design and build high-performance iOS and Android apps using Flutter and React Native,
              blending polished UI, robust architecture, and smooth animations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-gray-800"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-black/10 hover:bg-gray-50"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />
    </section>
  );
}
