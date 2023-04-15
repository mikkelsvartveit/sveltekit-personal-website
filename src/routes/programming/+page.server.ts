import type { IProject } from "$lib/types/projects";
import type { ServerLoad } from "@sveltejs/kit";

export const load = (async () => {
  const projectFiles = Object.entries(
    import.meta.glob(`../../content/dev-projects/*.md`)
  );

  const projects = (
    await Promise.all(
      projectFiles.map(async ([path, importFn]) => {
        const slug = path?.split("/")?.pop()?.split(".").shift();

        const project = (await importFn()) as { metadata: IProject };
        const {
          title,
          description,
          image,
          technologies,
          website,
          repository,
          date,
        } = project.metadata;

        return {
          slug,
          title,
          description,
          image,
          technologies,
          website,
          repository,
          date,
        };
      })
    )
  ).sort((a, b) => ((a.date ?? 0) > (b.date ?? 0) ? -1 : 1));

  return { projects };
}) satisfies ServerLoad;
