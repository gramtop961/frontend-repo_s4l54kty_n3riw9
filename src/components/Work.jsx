import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fitness Coach',
    stack: ['Flutter', 'Firebase', 'Stripe'],
    description:
      'Personalized workouts, real-time tracking, and subscriptions with a stunning, smooth UI.',
    link: '#',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    title: 'FinTrack',
    stack: ['React Native', 'Reanimated', 'Expo'],
    description:
      'A personal finance app with charts, budget goals, and playful micro-interactions.',
    link: '#',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'FoodieGo',
    stack: ['Flutter', 'Supabase', 'Maps'],
    description:
      'Food delivery with live-driver tracking, saved favorites, and intuitive onboarding.',
    link: '#',
    gradient: 'from-orange-500 via-rose-500 to-fuchsia-500',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-2 text-gray-700">A few projects that showcase my craft and attention to detail.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`h-28 bg-gradient-to-r ${p.gradient}`} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{p.stack.join(' • ')}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <p className="mt-3 text-sm text-gray-700">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
