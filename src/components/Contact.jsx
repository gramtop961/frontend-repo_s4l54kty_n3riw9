import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-pink-500/10" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s build something great</h2>
            <p className="mt-2 text-gray-700 max-w-2xl">
              I’m open for freelance projects, collaborations, and full-time roles. Tell me about your idea and
              timeline, and I’ll get back within 24 hours.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@vamsi.dev"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-gray-800"
              >
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 text-sm shadow-sm ring-1 ring-black/10 hover:bg-gray-50"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 text-sm shadow-sm ring-1 ring-black/10 hover:bg-gray-50"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Vamsi. Built with love and motion.</p>
      </div>
    </section>
  );
}
