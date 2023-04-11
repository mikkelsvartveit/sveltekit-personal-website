<script lang="ts">
  import Paragraph from "$lib/components/Paragraph.svelte";
  import type { IProject } from "$lib/types/projects";

  export let data: { projects: IProject[] };

  const { projects } = data;
</script>

<h1
  class="font-serif font-light text-3xl sm:text-4xl text-gray-600 tracking-wide mb-8 text-center"
>
  Programming projects
</h1>

<Paragraph>
  I'm quite into programming and web development. When I have time on my hands I
  like to dabble with personal projects. Here are some of them.
</Paragraph>

<section class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
  {#each projects as { slug, title, description, image }}
    <a
      href="/programming/{slug}"
      class="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden pb-8 hover:shadow-xl hover:-translate-y-1 duration-100"
    >
      <img src={image} alt={title} width={1000} height={500} />

      <h3 class="text-2xl text-gray-700 text-center mx-4 mt-6">
        {title}
      </h3>

      <p class="text-gray-600 text-lg text-center mx-4 mt-4">{description}</p>
    </a>
  {/each}
</section>
