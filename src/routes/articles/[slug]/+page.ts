import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
  try {
    const article = await import(`../../../content/articles/${params.slug}.md`);

    const Content = article.default;

    return {
      ...article.metadata,
      Content,
    };
  } catch (e) {
    throw error(404, "Project not found");
  }
}) satisfies PageLoad;
