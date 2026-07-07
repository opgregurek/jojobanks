import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
          "ClaudeBot",
          "Bytespider",
          "PerplexityBot",
          "Diffbot",
          "ImagesiftBot",
          "omgili",
        ],
        disallow: "/",
      },
    ],
  };
}
