import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),

	// Type-check frontmatter using a schema
	schema: z.object({
		// Core identity
		title: z.string(),
		description: z.string(),

		// Dates (human + system)
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),

		// Media
		heroImage: z.string().optional(),

		// Classification & transparency
		tags: z.array(z.string()).optional(),
		category: z.string().optional(),

		// Governance / system metadata (optional, future-proof)
		status: z
			.enum(["draft", "active", "deprecated", "archived"])
			.optional(),
		systemLayer: z
			.enum([
				"genesis",
				"governance",
				"human-agent",
				"treasury",
				"engineering",
				"impact",
				"changelog",
			])
			.optional(),

		// Audit & authorship (non-sensitive)
		author: z.string().optional(),
	}),
});

export const collections = { blog };
