import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const posts = await getCollection("blog");

	return rss({
		title: `${SITE_TITLE} — Public System Log`,
		description:
			SITE_DESCRIPTION ||
			"A transparent, human-readable log of Bridge AI OS decisions, governance, engineering, and impact.",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description ?? post.data.excerpt,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
			categories: post.data.tags ?? ["Bridge AI OS"],
		})),
	});
}
