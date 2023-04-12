<script>
  import { page } from "$app/stores";
  import Paragraph from "$lib/components/Paragraph.svelte";

  const { error, status } = $page;
</script>

<section class="max-w-4xl mx-auto px-3 sm:px-6 pt-12 pb-8">
  <h1
    class="font-serif font-light text-3xl sm:text-4xl text-gray-600 tracking-wide mb-8 text-center"
  >
    {status}
    {error?.message}
  </h1>

  <Paragraph class="text-center">That's an error.</Paragraph>
</section>
