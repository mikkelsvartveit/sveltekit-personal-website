<script lang="ts">
  export let data: { photos: string[] };
  const photoPaths = data.photos;

  const photos = Promise.all(
    photoPaths.map((photo) => {
      return import(`../../content/photos/${photo}.jpg`);
    })
  );
</script>

<h1
  class="font-serif font-light text-3xl sm:text-4xl text-gray-600 tracking-wide mb-8 text-center"
>
  Photography
</h1>

{#await photos then photos}
  {#each photos as photo}
    <img src={photo.default} alt="" />
  {/each}
{/await}
