<script lang="ts">
  import Paragraph from "$lib/components/Paragraph.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { projects } = data;
</script>

<svelte:head>
  <title>Programming – Mikkel Svartveit</title>
</svelte:head>

<h1
  class="mb-8 text-center font-serif text-3xl font-light tracking-wide text-gray-600 sm:text-4xl"
>
  Programming projects
</h1>

<Paragraph>
  I'm quite into programming and web development. When I have time on my hands I
  like to dabble with personal projects. Here are some of them.
</Paragraph>

<section class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
  {#each projects as { slug, title, description, image }}
    <a
      href="/programming/{slug}"
      class="mx-auto max-w-md overflow-hidden rounded-lg bg-white pb-8 shadow-lg duration-100 hover:-translate-y-1 hover:shadow-xl"
    >
      <img src={image} alt={title} width={1000} height={500} />

      <h2 class="mx-4 mt-6 text-center text-2xl text-gray-700">
        {title}
      </h2>

      <p class="mx-4 mt-4 text-center text-lg text-gray-600">{description}</p>
    </a>
  {/each}
</section>
