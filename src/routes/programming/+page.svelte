<script lang="ts">
  import Paragraph from "$lib/components/Paragraph.svelte";
  import TextContent from "$lib/components/TextContent.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { projects } = data;
</script>

<svelte:head>
  <title>Programming – Mikkel Svartveit</title>
</svelte:head>

<TextContent>
  <h1
    class="mb-8 text-center font-serif text-3xl font-light tracking-wide text-gray-600 sm:text-4xl"
  >
    Programming projects
  </h1>

  <Paragraph>
    I'm quite into programming and web development. When I have time on my hands
    I like to dabble with personal projects. Here are some of them.
  </Paragraph>
</TextContent>

<section
  class="mx-auto mt-12 grid max-w-xs grid-cols-1 justify-center gap-8 sm:max-w-2xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
>
  {#each projects as { slug, title, description, image }}
    <a
      href="/programming/{slug}"
      class="mx-auto overflow-hidden rounded-lg bg-white pb-8 shadow-md duration-100 hover:-translate-y-1 hover:shadow-lg"
    >
      <img src={image} alt={title} width={1000} height={500} />

      <h2 class="mx-4 mt-6 text-center text-2xl text-gray-700">
        {title}
      </h2>

      <p class="mx-4 mt-4 text-center text-lg text-gray-600">{description}</p>
    </a>
  {/each}
</section>
