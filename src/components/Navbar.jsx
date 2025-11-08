import { Rocket, Gamepad2, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-violet-400" />
          <span className="font-semibold text-white tracking-tight">PlayForge</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
          <a href="#cta" className="hover:text-white transition-colors">Get Started</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition-colors">
            <Star className="h-4 w-4" />
            Wishlist
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 text-sm transition-colors">
            <Rocket className="h-4 w-4" />
            Launch
          </button>
        </div>
      </div>
    </header>
  );
}
