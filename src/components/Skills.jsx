import { Code2, Smartphone, Palette, Cpu } from 'lucide-react';

const skills = [
  {
    icon: Smartphone,
    title: 'Mobile Frameworks',
    items: ['Flutter', 'React Native', 'Expo', 'Swift (basics)'],
  },
  {
    icon: Code2,
    title: 'Architecture',
    items: ['Clean Architecture', 'BLoC / Provider', 'Redux Toolkit', 'MVVM'],
  },
  {
    icon: Palette,
    title: 'UI/UX',
    items: ['Animations', 'Design Systems', 'Accessibility', 'Prototyping'],
  },
  {
    icon: Cpu,
    title: 'Backend & Tools',
    items: ['Firebase', 'Supabase', 'REST / GraphQL', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Skills</h2>
          <p className="mt-2 text-gray-700">A balanced mix of engineering, design, and product sense.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <s.icon className="w-6 h-6 text-indigo-600" />
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                {s.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
