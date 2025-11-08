import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0b021f] to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            New • Interactive 3D Console
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Play beyond the screen.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            A playful, immersive gaming hub that blends 3D interaction with instant game discovery.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center rounded-md bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 font-medium transition-colors">
              Start Playing
            </a>
            <a href="#features" className="inline-flex justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-medium transition-colors">
              Explore Features
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent"></div>
    </section>
  );
}
