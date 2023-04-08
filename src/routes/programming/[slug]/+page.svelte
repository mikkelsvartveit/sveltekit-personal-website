<script lang="ts">
  export let data;
  const { title, date, Content } = data;
</script>

<article
  class="prose prose-lg prose-slate prose-headings:text-slate-600 prose-h2:font-light max-w-none font-serif"
>
  <h1
    class="font-serif font-light text-3xl sm:text-4xl text-gray-600 tracking-wide mb-4"
  >
    {title}
  </h1>

  <time class="text-slate-500 font-sans text-sm mb-8">
    {new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })}
  </time>

  <Content />
</article>
