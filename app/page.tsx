import Link from "next/link";
import BackgroundEffects from "./components/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <BackgroundEffects />

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          AI Audit
        </h1>

        <div className="flex gap-10 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/audit">Audit</Link>
          <Link href="/result">Results</Link>
        </div>

        <button className="px-6 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl">
          Dashboard
        </button>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 pt-24">

        {/* LEFT */}
        <div className="max-w-2xl">
          <p className="uppercase tracking-[6px] text-pink-400 mb-6">
            AI COST INTELLIGENCE
          </p>

          <h1 className="text-7xl font-black leading-[0.95]">
            Stop
            <span className="block bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
              Overpaying
            </span>
            for AI Tools
          </h1>

          <p className="mt-8 text-gray-300 text-xl leading-relaxed">
            Analyze subscriptions, reduce unnecessary AI spending,
            and get smart optimization recommendations powered by AI.
          </p>

          <div className="flex gap-6 mt-10">
            <Link
              href="/audit"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 font-bold shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-105 transition"
            >
              Start Audit
            </Link>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="mt-20 lg:mt-0 relative">

          <div className="absolute inset-0 bg-pink-500/20 blur-[100px]" />

          <div className="relative backdrop-blur-2xl bg-white/10 border border-white/10 rounded-[40px] p-8 w-[420px] shadow-[0_0_80px_rgba(236,72,153,0.25)]">

            <p className="text-gray-300 mb-2">
              Monthly AI Spend
            </p>

            <h2 className="text-6xl font-black mb-10">
              $1,280
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between bg-white/10 rounded-2xl p-5">
                <span>ChatGPT Team</span>
                <span>$250</span>
              </div>

              <div className="flex justify-between bg-white/10 rounded-2xl p-5">
                <span>Claude Pro</span>
                <span>$120</span>
              </div>

              <div className="flex justify-between bg-white/10 rounded-2xl p-5">
                <span>Copilot</span>
                <span>$90</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}