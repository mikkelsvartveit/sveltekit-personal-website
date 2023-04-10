<script lang="ts">
  export let data: { photos: string[] };
  const { photos } = data;
</script>

<div class="mx-auto px-4 py-12">
  <h1
    class="font-serif font-light text-3xl sm:text-4xl text-gray-600 tracking-wide mb-8 text-center"
  >
    Photography
  </h1>

  <section class="columns-2 md:columns-3 lg:columns-4 gap-4 mt-12">
    {#each photos as photo}
      <div class="flex pb-4">
        <img
          src="/photos-optimized/thumbs/{photo}"
          alt="Photograph by Mikkel Svartveit"
          class="w-full rounded"
        />
      </div>
    {/each}
  </section>
</div>
