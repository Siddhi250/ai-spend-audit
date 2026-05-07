export default function BackgroundEffects() {
  return (
    <>
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* PINK GLOW */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[150px]" />

      {/* BLUE GLOW */}
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[150px]" />

      {/* CENTER LIGHT */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[120px]" />
    </>
  );
}