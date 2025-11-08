export default function CTA() {
  return (
    <section id="cta" className="relative py-20 bg-gradient-to-b from-black to-[#0b021f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to press start?</h2>
        <p className="mt-3 text-white/70">Jump into a new kind of gaming experience—interactive, immersive, unforgettable.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex justify-center rounded-md bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 font-medium transition-colors">Create Account</a>
          <a href="#" className="inline-flex justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-medium transition-colors">Learn More</a>
        </div>
      </div>
    </section>
  );
}
