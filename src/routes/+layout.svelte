<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import "../app.css";
  import Link from "$lib/components/Link.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  export let data: {
    currentRoute: string;
  };

  const TRANSITION_DURATION = 400;
</script>

<Navbar />

{#key data.currentRoute}
  <main
    in:fly={{
      y: 10,
      duration: TRANSITION_DURATION * (3 / 4),
      delay: TRANSITION_DURATION * (1 / 4),
    }}
    out:fade={{ duration: TRANSITION_DURATION * (1 / 4) }}
  >
    <slot />

    <footer class="flex justify-center my-4">
      <p class="text-xs text-slate-400">
        Made in a breeze thanks to
        <Link href="https://kit.svelte.dev/" target="_blank">SvelteKit</Link>
        and
        <Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link
        >.
      </p>
    </footer>
  </main>
{/key}
