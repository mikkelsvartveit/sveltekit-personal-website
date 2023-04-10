<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import "../app.css";
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
  </main>
{/key}
