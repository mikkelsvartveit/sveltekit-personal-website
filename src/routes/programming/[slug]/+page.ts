import { error } from "@sveltejs/kit";
import type { Load } from "@sveltejs/kit";
import type { IProject } from "$lib/types/projects";

export const load: Load = async ({ params }): Promise<IProject> => {
  try {
    const project = await import(
      `../../../content/dev-projects/${params.slug}.md`
    );

    const { title, description, technologies, website, repository, date } =
      project.metadata;

    const Content = project.default;

    return {
      title,
      description,
      technologies,
      website,
      repository,
      date,
      Content,
    };
  } catch (e) {
    throw error(404, "Project not found");
  }
};
