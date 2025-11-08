import { Sparkles, Joystick, Cpu, Users } from 'lucide-react';

const features = [
  {
    icon: Joystick,
    title: 'Playful Interaction',
    desc: 'Engage with an interactive 3D console that responds to your moves.',
  },
  {
    icon: Cpu,
    title: 'Optimized Performance',
    desc: 'Smooth animations and snappy navigation powered by modern tech.',
  },
  {
    icon: Users,
    title: 'Community Ready',
    desc: 'Build squads, share scores, and compete on leaderboards.',
  },
  {
    icon: Sparkles,
    title: 'Beautiful Visuals',
    desc: 'Aesthetic gradients and lighting that feel truly next‑gen.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why you’ll love it</h2>
          <p className="mt-3 text-white/70">Crafted for gamers, creators, and anyone who loves interactive entertainment.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <Icon className="h-6 w-6 text-violet-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
