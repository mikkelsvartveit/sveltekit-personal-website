<script lang="ts">
  import Paragraph from "$lib/components/Paragraph.svelte";
  import type { IProject } from "$lib/types/projects";

  export let data: { projects: IProject[] };

  const { projects } = data;
</script>

<h1
  class="font-serif font-light text-3xl sm:text-4xl text-gray-600 tracking-wide mb-8 text-center"
>
  Projects
</h1>

<Paragraph>
  I'm quite into programming, and web development in particular. When I have
  time I like to dabble with personal projects. Here are some of them.
</Paragraph>

<section class="max-w-xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-2 gap-8">
  {#each projects as { slug, title, description, image }}
    <a
      href="/programming/{slug}"
      class="rounded-lg shadow-lg overflow-hidden pb-2"
    >
      <img src={image} alt={title} />

      <h3 class="font-serif text-lg text-gray-600 text-center m-4">
        {title}
      </h3>

      <p class="text-slate-600 text-center m-4">{description}</p>
    </a>
  {/each}
</section>
