import type { IArticle } from "$lib/types";
import type { ServerLoad } from "@sveltejs/kit";

export const load = (async () => {
  const articleFiles = Object.entries(
    import.meta.glob("../../content/articles/*.md")
  );

  const articles = (
    await Promise.all(
      articleFiles.map(async ([path, importFn]) => {
        const slug = path?.split("/")?.pop()?.split(".").shift();

        const article = (await importFn()) as { metadata: IArticle };

        return { ...article.metadata, slug };
      })
    )
  ).sort((a, b) => ((a.date ?? 0) > (b.date ?? 0) ? -1 : 1));

  return { articles };
}) satisfies ServerLoad;
