export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { tool, plan, seats, recommendation, savings } = body;

    const prompt = `
You are an expert AI cost advisor.

User is using:
- Tool: ${tool}
- Plan: ${plan}
- Seats: ${seats}

Recommendation: ${recommendation}
Monthly Savings: $${savings}

Write a short, clear 80–100 word summary explaining:
- if they are overspending
- what they should change
- why it matters
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // ✅ more reliable
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    console.log("OPENAI RESPONSE:", data);

    // ❌ If OpenAI returns error
    if (data.error) {
      return Response.json({
        summary: `You are using ${tool} (${plan} plan). Based on your setup, you may be overspending. Consider optimizing your plan to reduce unnecessary costs and improve efficiency.`,
      });
    }

    return Response.json({
      summary:
        data.choices?.[0]?.message?.content ||
        `You are using ${tool} (${plan} plan). Based on your setup, you may be overspending. Consider optimizing your plan to reduce unnecessary costs and improve efficiency.`,
    });

  } catch (error) {
    console.log("SERVER ERROR:", error);

    return Response.json({
      summary:
        "We couldn't generate an AI summary right now, but you can reduce costs by optimizing your plan and usage.",
    });
  }
}