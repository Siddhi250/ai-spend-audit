export function runAudit(data: any) {
  let savings = 0;
  let recommendation = "Your plan looks fine.";

  if (data.tool === "ChatGPT") {
    if (data.plan.toLowerCase() === "team" && data.seats <= 2) {
      savings = 10 * data.seats;
      recommendation = "Switch to Plus plan. Team plan is overkill for small teams.";
    }

    if (data.plan.toLowerCase() === "plus" && data.seats > 5) {
      savings = 5 * data.seats;
      recommendation = "Consider Team plan for better collaboration.";
    }
  }

  if (data.tool === "Copilot") {
    if (data.plan.toLowerCase() === "business" && data.seats < 3) {
      savings = 9 * data.seats;
      recommendation = "Switch to Individual plan.";
    }
  }

  return {
    monthlySavings: savings,
    annualSavings: savings * 12,
    recommendation
  };
}