<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { page } from "$app/stores";

  let scrollPosition = 0;
  $: isScrolled = scrollPosition > 0;

  const navbarContent = [
    { name: "👨‍💻 Programming", href: "/programming" },
    { name: "📷 Photography", href: "/photography" },
    // { name: "📝 Articles", href: "/articles" },
  ];

  let collapsed = true;
</script>

<svelte:window bind:scrollY={scrollPosition} />

<header
  class="sticky top-0 z-10 bg-gray-50 transition-shadow ease-in"
  class:shadow={isScrolled}
>
  <nav
    class="mx-auto flex h-16 max-w-4xl flex-wrap items-center justify-between px-6"
  >
    <a
      href="/"
      data-sveltekit-preload-code="eager"
      class="text-lg tracking-wide text-gray-600 decoration-yellow-400 decoration-2 underline-offset-8 duration-100 hover:text-gray-400"
      class:underline={"/" === $page.url.pathname}
    >
      Mikkel Svartveit
    </a>

    <ul class="hidden space-x-8 md:flex">
      {#each navbarContent as { name, href }}
        <li>
          <a
            {href}
            data-sveltekit-preload-code="eager"
            class="text-lg tracking-wide text-gray-600 decoration-yellow-400 decoration-2 underline-offset-8 duration-100 hover:text-gray-400"
            class:underline={href === $page.url.pathname}
          >
            {name}
          </a>
        </li>
      {/each}
    </ul>

    <button
      aria-label="Open menu"
      class="md:hidden"
      on:click={() => (collapsed = !collapsed)}
    >
      <svg
        class="h-10 w-10 stroke-yellow-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Menu / Hamburger_MD">
          <path
            id="Vector"
            d="M5 17H19M5 12H19M5 7H19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </button>
  </nav>
</header>

{#if !collapsed}
  <div
    transition:fade={{ duration: 100 }}
    class="fixed left-0 top-0 h-full w-full bg-black opacity-50"
  />
  <ul
    transition:slide={{ duration: 300, axis: "x" }}
    class="fixed right-0 top-0 z-10 block h-full bg-white p-4"
  >
    <button
      aria-label="Close menu"
      on:click={() => (collapsed = true)}
      class="ml-auto block h-10 w-10"
    >
      <svg
        class="stroke-gray-400"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8L8 16M8.00001 8L16 16"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    {#each navbarContent as { name, href }}
      <li class="my-6 ml-2 mr-16">
        <a
          {href}
          on:click={() => (collapsed = true)}
          class="whitespace-nowrap text-lg tracking-wide text-gray-600 decoration-yellow-400 decoration-2 underline-offset-8"
          class:underline={href === $page.url.pathname}
        >
          {name}
        </a>
      </li>
    {/each}
  </ul>
{/if}
