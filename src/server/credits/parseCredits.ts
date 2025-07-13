import { Credits } from "./Credits";

export function parseCredits(credits: Credits): string {
  let parsedCredits: string[] = [
    "CREDITS of Hidden Years²: Governor at the Skyline\n",
  ];
  credits.forEach((credit) => {
    if (typeof credit === "string") {
      parsedCredits.push(credit);
      return;
    }
    parsedCredits.push("============");
    parsedCredits.push(credit.discipline);
    parsedCredits.push("============");
    credit.contributors.forEach((contributor) => {
      parsedCredits.push(`${contributor.name} - ${contributor.role}`);
    });
    parsedCredits.push("\n");
  });
  return parsedCredits.join("\n");
}
