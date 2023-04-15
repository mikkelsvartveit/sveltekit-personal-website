<script>
  import { page } from "$app/stores";
  import Paragraph from "$lib/components/Paragraph.svelte";

  const { error, status } = $page;
</script>

<svelte:head>
  <title>Error – Mikkel Svartveit</title>
</svelte:head>

<section class="mx-auto max-w-4xl px-3 pb-8 pt-12 sm:px-6">
  <h1
    class="mb-8 text-center font-serif text-3xl font-light tracking-wide text-gray-600 sm:text-4xl"
  >
    {status}
    {error?.message}
  </h1>

  <Paragraph class="text-center">That's an error.</Paragraph>
</section>
