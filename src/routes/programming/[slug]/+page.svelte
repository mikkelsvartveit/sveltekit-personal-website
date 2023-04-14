<script lang="ts">
  export let data;
  const { title, date, website, repository, Content } = data;
</script>

<article class="max-w-2xl mx-auto">
  <h1
    class="font-serif font-light text-4xl text-gray-600 text-center tracking-wide mb-4 underline decoration-2 underline-offset-8 decoration-yellow-400"
  >
    {title}
  </h1>

  <p class="text-gray-500 text-sm text-center mx-auto mb-8">
    {new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })}
  </p>

  <div class="flex justify-center items-center mb-6 flex-col sm:flex-row">
    {#if website}
      <a
        href={website}
        target="_blank"
        class="bg-white font-semibold text-gray-600 tracking-wide block border border-gray-200 rounded-lg shadow mx-2 mb-2 px-4 py-3 hover:bg-gray-50 duration-100"
      >
        🖥️ Visit website
      </a>
    {/if}

    {#if repository}
      <a
        href={repository}
        target="_blank"
        class="bg-white font-semibold text-gray-600 tracking-wide block border border-gray-200 rounded-lg shadow mx-2 mb-2 px-4 py-3 hover:bg-gray-50 duration-100"
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
