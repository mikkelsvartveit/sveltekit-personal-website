import type { IProject } from "$lib/types/projects";
import type { Load } from "@sveltejs/kit";

export const load: Load = async (): Promise<{ projects: IProject[] }> => {
  const projectFiles = Object.entries(
    import.meta.glob(`../../content/dev-projects/*.md`)
  );

  const projects = await Promise.all(
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
  );

  return { projects };
};
