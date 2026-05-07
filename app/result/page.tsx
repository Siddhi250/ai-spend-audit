"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { runAudit } from "@/lib/auditEngine";
import AnalyticsChart from "../components/AnalyticsChart";
import BackgroundEffects from "../components/BackgroundEffects";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);
  const [summary, setSummary] = useState("Generating AI insights...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("auditData");

    if (stored) {
      const parsed = JSON.parse(stored);

      setData(parsed);

      const audit = runAudit(parsed);

      async function generateSummary() {
        try {
          const response = await fetch("/api/summary", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tool: parsed.tool,
              plan: parsed.plan,
              seats: parsed.seats,
              recommendation: audit.recommendation,
              savings: audit.monthlySavings,
            }),
          });

          const result = await response.json();

          setSummary(result.summary);
        } catch {
          setSummary(
            "You can reduce costs by optimizing your subscriptions."
          );
        } finally {
          setLoading(false);
        }
      }

      generateSummary();
    }
  }, []);

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        No audit data found
      </main>
    );
  }

  const audit = runAudit(data);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white px-6 py-10">

      <BackgroundEffects />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Audit Results
          </h1>

          <Link
            href="/audit"
            className="px-6 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition"
          >
            Run Another Audit
          </Link>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="rounded-[35px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(236,72,153,0.15)]">

            <h2 className="text-2xl font-bold mb-8">
              Subscription Analysis
            </h2>

            <div className="space-y-5 text-lg">

              <div className="flex justify-between">
                <span className="text-gray-300">Tool</span>
                <span>{data.tool}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-300">Plan</span>
                <span>{data.plan}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-300">Monthly Cost</span>
                <span>${data.cost}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-300">Seats</span>
                <span>{data.seats}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-300">Team Size</span>
                <span>{data.teamSize}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-300">Use Case</span>
                <span>{data.useCase}</span>
              </div>

            </div>

            <div className="mt-10 border-t border-white/10 pt-8">

              <h3 className="text-2xl font-bold mb-6">
                Optimization Insight
              </h3>

              <div className="space-y-4">

                <div className="rounded-2xl bg-pink-500/10 border border-pink-500/20 p-5">
                  <p className="text-pink-300 font-semibold">
                    Recommendation
                  </p>

                  <p className="mt-2 text-lg">
                    {audit.recommendation}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5">
                    <p className="text-emerald-300">
                      Monthly Savings
                    </p>

                    <h4 className="text-3xl font-black mt-2">
                      ${audit.monthlySavings}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 p-5">
                    <p className="text-blue-300">
                      Annual Savings
                    </p>

                    <h4 className="text-3xl font-black mt-2">
                      ${audit.annualSavings}
                    </h4>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* CHART */}
            <div className="rounded-[35px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(59,130,246,0.15)]">

              <h2 className="text-2xl font-bold mb-8">
                Spend Analytics
              </h2>

              <AnalyticsChart />
            </div>

            {/* AI SUMMARY */}
            <div className="rounded-[35px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(168,85,247,0.15)]">

              <h2 className="text-2xl font-bold mb-6">
                AI Summary
              </h2>

              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6"></div>
                  <div className="h-4 bg-white/10 rounded w-4/6"></div>
                </div>
              ) : (
                <p className="text-lg leading-relaxed text-gray-200">
                  {summary}
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}