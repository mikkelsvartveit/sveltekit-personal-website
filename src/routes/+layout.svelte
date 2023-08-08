<script lang="ts">
  import { fade } from "svelte/transition";
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import type { LayoutData } from "./$types";
  import { cubicIn } from "svelte/easing";

  export let data: LayoutData;
  const TRANSITION_DURATION = 250;
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
    out:fade={{ duration: TRANSITION_DURATION * (1 / 2), easing: cubicIn }}
    in:fade={{
      duration: TRANSITION_DURATION * (1 / 2),
      delay: TRANSITION_DURATION * (1 / 2),
      easing: cubicIn,
    }}
  >
    <slot />
  </main>
{/key}
