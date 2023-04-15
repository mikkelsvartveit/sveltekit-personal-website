<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { title, date, website, repository, Content } = data;
</script>

<svelte:head>
  <title>{title} – Mikkel Svartveit</title>
</svelte:head>

<article class="mx-auto max-w-2xl">
  <h1
    class="mb-4 text-center font-serif text-4xl font-light tracking-wide text-gray-600 underline decoration-yellow-400 decoration-2 underline-offset-8"
  >
    {title}
  </h1>

  <p class="mx-auto mb-8 text-center text-sm text-gray-500">
    {new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })}
  </p>

  <div class="mb-6 flex flex-col items-center justify-center sm:flex-row">
    {#if website}
      <a
        href={website}
        target="_blank"
        class="mx-2 mb-2 block rounded-lg border border-gray-200 bg-white px-4 py-3 font-semibold tracking-wide text-gray-600 shadow duration-100 hover:bg-gray-50"
      >
        🖥️ Visit website
      </a>
    {/if}

    {#if repository}
      <a
        href={repository}
        target="_blank"
        class="mx-2 mb-2 block rounded-lg border border-gray-200 bg-white px-4 py-3 font-semibold tracking-wide text-gray-600 shadow duration-100 hover:bg-gray-50"
      >
        📦 Code on GitHub
      </a>
    {/if}
  </div>

  <div
    class="prose prose-lg max-w-none font-serif prose-headings:text-gray-600 prose-h2:font-light prose-a:text-teal-600 prose-a:no-underline prose-a:duration-100 hover:prose-a:text-teal-500 hover:prose-a:underline before:prose-code:content-[''] after:prose-code:content-['']"
  >
    <Content />
  </div>
</article>
