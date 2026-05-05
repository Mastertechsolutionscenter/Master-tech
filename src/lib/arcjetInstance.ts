// lib/arcjetInstance.ts

import arcjet, { shield, detectBot, fixedWindow, slidingWindow } from "@arcjet/next";

export const getArcjet = (options?: { isForm: boolean }) => {
  return arcjet({
    key: process.env.ARCJET_KEY!,
    rules: [
      shield({ mode: "LIVE" }),
      detectBot({
        mode: "LIVE",
        allow: ["CATEGORY:SEARCH_ENGINE"],
      }),
      // Apply stricter rate limiting if it's a form
      fixedWindow({
        mode: "LIVE",
        window: "1m",
        max: options?.isForm ? 5 : 30, // 5 per min for forms, 30 for others
      }),
      slidingWindow({
        mode: "LIVE",
        interval: "1h",
        max: options?.isForm ? 20 : 500, // 20 per hour for forms, 500 for others
      }),
    ],
  });
};
