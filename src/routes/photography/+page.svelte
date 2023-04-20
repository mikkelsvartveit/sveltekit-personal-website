<script lang="ts">
  import Paragraph from "$lib/components/Paragraph.svelte";
  import TextContent from "$lib/components/TextContent.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
  const { photos } = data;
</script>

<svelte:head>
  <title>Photography – Mikkel Svartveit</title>
</svelte:head>

<div class="px-4 pt-12">
  <TextContent>
    <h1
      class="mb-8 text-center font-serif text-3xl font-light tracking-wide text-gray-600 sm:text-4xl"
    >
      Photography
    </h1>

    <Paragraph>
      I enjoy taking photos and I always bring my camera with me when I travel.
      I used to shoot with a Nikon DSLR, but recently switched to a Fujifilm
      X-T20, which I find a lot more enjoyable to bring around. These are some
      of my favorite shots from over the years.
    </Paragraph>
  </TextContent>

  <div class="mx-auto">
    <section class="mb-2 mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
      {#each photos as photo}
        <a
          href="/photos-optimized/{photo.src}/full.jpg"
          class="flex w-full py-2 duration-100 hover:-translate-y-1"
        >
          <img
            src="/photos-optimized/{photo.src}/thumbnail.jpg"
            alt="Photograph by Mikkel Svartveit"
            class="w-full rounded bg-gray-100 text-transparent"
            width={photo.width}
            height={photo.height}
          />
        </a>
      {/each}
    </section>
  </div>
</div>
