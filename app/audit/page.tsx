"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundEffects from "../components/BackgroundEffects";

export default function AuditPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    tool: "",
    plan: "",
    cost: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    localStorage.setItem("auditData", JSON.stringify(form));

    router.push("/result");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090f] flex items-center justify-center px-6">

      <BackgroundEffects />

      <div className="relative z-10 w-full max-w-lg backdrop-blur-2xl bg-white/10 border border-white/10 rounded-[35px] p-8 shadow-[0_0_80px_rgba(168,85,247,0.2)]">

        <h1 className="text-5xl font-black text-white text-center mb-3">
          AI Spend Audit
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Discover where you're overspending on AI tools
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <select
            name="tool"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white border border-white/10 outline-none backdrop-blur-xl"
          >
            <option className="text-black">Select Tool</option>
            <option className="text-black">ChatGPT</option>
            <option className="text-black">Claude</option>
            <option className="text-black">Copilot</option>
            <option className="text-black">Gemini</option>
          </select>

          <input
            type="text"
            name="plan"
            placeholder="Plan (Plus, Team, Business)"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white placeholder-gray-300 border border-white/10 outline-none backdrop-blur-xl"
          />

          <input
            type="number"
            name="cost"
            placeholder="Monthly Cost ($)"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white placeholder-gray-300 border border-white/10 outline-none backdrop-blur-xl"
          />

          <input
            type="number"
            name="seats"
            placeholder="Number of Seats"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white placeholder-gray-300 border border-white/10 outline-none backdrop-blur-xl"
          />

          <input
            type="number"
            name="teamSize"
            placeholder="Team Size"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white placeholder-gray-300 border border-white/10 outline-none backdrop-blur-xl"
          />

          <select
            name="useCase"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white border border-white/10 outline-none backdrop-blur-xl"
          >
            <option className="text-black">Use Case</option>
            <option className="text-black">Coding</option>
            <option className="text-black">Writing</option>
            <option className="text-black">Research</option>
            <option className="text-black">Mixed</option>
          </select>

          <button
            className="w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-600 shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.8)] transition duration-300"
          >
            Generate Audit
          </button>

        </form>

      </div>

    </main>
  );
}