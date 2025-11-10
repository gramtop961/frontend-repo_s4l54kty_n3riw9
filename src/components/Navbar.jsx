import { useState } from 'react';
import { Menu, X, Rocket, Download } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-gray-900 font-semibold">
          <Rocket className="w-5 h-5 text-indigo-600" />
          <span>Vamsi • Mobile Dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm shadow-sm hover:bg-gray-800 transition-colors"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-800 hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="mt-2 block text-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm shadow-sm hover:bg-gray-800"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Resume
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
