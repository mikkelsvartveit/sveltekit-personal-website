<script lang="ts">
  import Paragraph from "$lib/components/Paragraph.svelte";
  import TextContent from "$lib/components/TextContent.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { articles } = data;
</script>

<svelte:head>
  <title>Articles – Mikkel Svartveit</title>
</svelte:head>

<TextContent>
  <h1
    class="mb-8 text-center font-serif text-3xl font-light tracking-wide text-gray-600 sm:text-4xl"
  >
    Latest articles
  </h1>

  <Paragraph
    >Sometimes I write about technology, software, productivity or other things
    that interests me.</Paragraph
  >

  <section class="sm:max-w-2xl">
    {#each articles as { slug, title, introduction, image }}
      <a
        href="/articles/{slug}"
        class="my-8 grid grid-cols-3 overflow-hidden rounded-lg bg-white shadow-md duration-100 hover:translate-x-1 hover:shadow-lg"
      >
        <img src={image} alt={title} class="col-span-1 h-full object-cover" />

        <div class="col-span-2 p-4">
          <h2 class="mb-2 text-xl font-semibold text-gray-700">{title}</h2>

          <p class="line-clamp-3 text-gray-600">{introduction}</p>
        </div>
      </a>
    {/each}
  </section>
</TextContent>
