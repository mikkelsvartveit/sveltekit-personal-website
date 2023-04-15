<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { page } from "$app/stores";

  const navbarContent = [
    { name: "👨‍💻 Programming", href: "/programming" },
    { name: "📷 Photography", href: "/photography" },
    // { name: "📝 Articles", href: "/articles" },
  ];

  let collapsed = true;
</script>

<header class="shadow bg-white">
  <nav
    class="flex flex-wrap max-w-4xl h-16 mx-auto justify-between items-center px-6"
  >
    <a
      href="/"
      data-sveltekit-preload-code="eager"
      class="text-gray-600 text-lg hover:text-gray-400 duration-100 tracking-wide underline-offset-8 decoration-2 decoration-yellow-400"
      class:underline={"/" === $page.url.pathname}
    >
      Mikkel Svartveit
    </a>

    <ul class="hidden md:flex space-x-8">
      {#each navbarContent as { name, href }}
        <li>
          <a
            {href}
            data-sveltekit-preload-code="eager"
            class="text-gray-600 text-lg hover:text-gray-400 duration-100 tracking-wide underline-offset-8 decoration-2 decoration-yellow-400"
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
        class="w-10 h-10 stroke-yellow-500"
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
    class="w-full h-full top-0 left-0 fixed bg-black opacity-50"
  />
  <ul
    transition:slide={{ duration: 300, axis: "x" }}
    class="block bg-white fixed top-0 right-0 h-full p-4 z-10"
  >
    <button
      aria-label="Close menu"
      on:click={() => (collapsed = true)}
      class="block w-10 h-10 ml-auto"
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
      <li class="ml-2 mr-16 my-6">
        <a
          {href}
          on:click={() => (collapsed = true)}
          class="text-gray-600 text-lg tracking-wide underline-offset-8 decoration-2 decoration-yellow-400 whitespace-nowrap"
          class:underline={href === $page.url.pathname}
        >
          {name}
        </a>
      </li>
    {/each}
  </ul>
{/if}
