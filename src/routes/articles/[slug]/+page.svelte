<script lang="ts">
  import TextContent from "$lib/components/TextContent.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { title, date, Content } = data;
</script>

<svelte:head>
  <title>{title} – Mikkel Svartveit</title>
</svelte:head>

<TextContent>
  <p class="mx-auto mb-4 text-gray-500">
    {new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}
  </p>

  <div
    class="prose prose-lg max-w-none font-serif prose-headings:text-gray-600 prose-h1:font-light prose-h1:leading-snug prose-h1:underline prose-h1:decoration-yellow-400 prose-h1:decoration-2 prose-h1:underline-offset-8 prose-h2:font-light prose-p:text-gray-700 prose-a:text-teal-600 prose-a:no-underline prose-a:duration-100 hover:prose-a:text-teal-500 hover:prose-a:underline prose-strong:text-gray-700 before:prose-code:content-[''] after:prose-code:content-['']"
  >
    <Content />
  </div>
</TextContent>
