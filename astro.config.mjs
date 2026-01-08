// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// 🌉 Bridge AI OS — Astro Configuration
export default defineConfig({
	// Canonical site URL (used for SEO, RSS, sitemap, OpenGraph)
	site: "https://ai-os.co.za",

	// Human-readable output (important for public logs & audits)
	output: "static",

	// Integrations
	integrations: [
		mdx(), // Markdown + MDX for transparent system logs
		sitemap({
			changefreq: "daily",
			priority: 0.7,
		}),
	],

	// Cloudflare Workers adapter
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),

	// Build behavior aligned with Bridge AI OS principles
	build: {
		format: "directory",
	},

	// Markdown philosophy: readable first, safe second
	markdown: {
		shikiConfig: {
			theme: "github-dark",
		},
	},

	// Experimental features intentionally disabled unless justified
	experimental: {
		assets: true,
	},
});
