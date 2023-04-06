<script>
  import "../app.css";
  import Link from "$lib/components/Link.svelte";
  import { page } from "$app/stores";

  const navbarContent = [
    { name: "👨‍💻 Programming", href: "/programming" },
    { name: "📷 Photography", href: "/photography" },
    { name: "📝 Articles", href: "/articles" },
  ];
</script>

<header class="shadow">
  <nav class="flex max-w-4xl mx-auto justify-between items-center px-6 py-4">
    <a
      href="/"
      class="text-slate-600 hover:text-slate-400 font-medium tracking-wide"
    >
      Mikkel Svartveit
    </a>
    <ul class="flex space-x-8">
      {#each navbarContent as { name, href }}
        <li>
          <a
            {href}
            class="text-slate-600 hover:text-slate-400 duration-100 tracking-wide underline-offset-8 decoration-2 decoration-slate-400"
            class:underline={href === $page.url.pathname}
          >
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<slot />

<footer class="flex justify-center my-4">
  <p class="text-xs text-slate-400">
    Made in a breeze thanks to
    <Link href="https://kit.svelte.dev/" target="_blank">SvelteKit</Link>
    and
    <Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link>.
  </p>
</footer>
