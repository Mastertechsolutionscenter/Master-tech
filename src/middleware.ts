import { createMiddleware } from "@arcjet/next";
import { detectBot, shield, fixedWindow } from "@arcjet/next";

export const config = {
  // matcher tells Next.js which paths this middleware should run for.
  // We want to protect all pages except for the admin panel and static assets.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|admin|next).*)"],
};

export default createMiddleware(
  {
    key: process.env.ARCJET_KEY!,
    rules: [
      // 1. Shield protects against common attacks like SQL injection and cross-site scripting
      shield({ mode: "LIVE" }),
      
      // 2. Detect Bot identifies and blocks scrapers and automated bots
      detectBot({
        mode: "LIVE",
        // Allow search engines and social media crawlers
        allow: [
          "CATEGORY:SEARCH_ENGINE",
          "CATEGORY:SOCIAL",
          "CATEGORY:MONITOR", // Allows uptime monitors
        ],
      }),

      // 3. Global Rate Limiting to prevent DDoS and brute force attempts
      fixedWindow({
        mode: "LIVE",
        window: "1m",
        max: 60, // 60 requests per minute per IP for general browsing
      }),
    ],
  }
);
