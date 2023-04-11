<script lang="ts">
  import Paragraph from "$lib/components/Paragraph.svelte";

  export let data: { photos: { src: string; width: number; height: number }[] };
  const { photos } = data;
</script>

<div class="max-w-4xl mx-auto px-3 sm:px-6 pt-12">
  <h1
    class="font-serif font-light text-3xl sm:text-4xl text-gray-600 tracking-wide mb-8 text-center"
  >
    Photography
  </h1>

  <Paragraph>
    I enjoy taking photos and I always bring my camera with me when I travel. I
    used to shoot with a Nikon DSLR, but recently switched to a Fujifilm X-T20,
    which I find a lot more enjoyable to bring around. These are some of my
    favorite shots from over the years.
  </Paragraph>
</div>

<div class="mx-auto px-4">
  <section class="columns-2 md:columns-3 lg:columns-4 gap-4 mt-12 mb-2">
    {#each photos as photo}
      <a
        href="/photos-optimized/{photo.src}/full.jpg"
        class="w-full flex py-2 hover:-translate-y-1 duration-100"
      >
        <img
          src="/photos-optimized/{photo.src}/thumbnail.jpg"
          alt="Photograph by Mikkel Svartveit"
          class="w-full rounded text-transparent bg-slate-100"
          width={photo.width}
          height={photo.height}
        />
      </a>
    {/each}
  </section>
</div>
