export default function GlowCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:scale-[1.02] hover:-translate-y-1 transition duration-300">

      <p className="text-gray-400 text-sm">{title}</p>

      <h3 className="text-4xl font-black mt-2">{value}</h3>
    </div>
  );
}