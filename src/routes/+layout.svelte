<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  const TRANSITION_DURATION = 400;
</script>

<svelte:head>
  <meta
    name="description"
    content="Hi, I'm Mikkel 👋. I am a Computer Science student from Norway and this is my playground. Here you will find some programming projects, and a small collection of photos I'm proud of."
  />
</svelte:head>

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
  </main>
{/key}
