import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 pt-6 relative z-50">

      <div className="flex items-center justify-between rounded-full border border-pink-400/20 bg-white/5 backdrop-blur-2xl px-8 py-4 shadow-[0_0_50px_rgba(236,72,153,0.15)]">

        <div className="text-3xl font-black bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
          AI Audit
        </div>

        <div className="hidden md:flex gap-10 text-gray-300 text-lg">
          <Link href="/">Home</Link>
          <Link href="/audit">Audit</Link>
          <Link href="/result">Results</Link>
        </div>

        <button className="px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
          Dashboard
        </button>

      </div>
    </nav>
  );
}