<script>
  import Link from "$lib/components/Link.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SocialIcon from "$lib/components/SocialIcon.svelte";

  const socialMedia = [
    {
      name: "Facebook",
      icon: "/icons/facebook-icon.png",
      url: "https://facebook.com/profile.php?id=100006609016880",
    },
    {
      name: "Twitter",
      icon: "/icons/twitter-icon.png",
      url: "https://twitter.com/mikkelsvartveit",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram-icon.png",
      url: "https://instagram.com/mikkelsvartveit",
    },
    {
      name: "VSCO",
      icon: "/icons/vsco-icon.png",
      url: "https://vsco.co/mikkelsvartveit",
    },
    {
      name: "GitHub",
      icon: "/icons/github-icon.png",
      url: "https://github.com/mikkelsvartveit",
    },
  ];
</script>

<svelte:head>
  <title>Mikkel Svartveit</title>
</svelte:head>

<div
  class="mx-auto flex max-w-4xl flex-col-reverse px-3 pb-8 pt-12 sm:px-6 md:flex-row"
>
  <section class="w-full md:w-1/2">
    <h1
      class="mb-8 font-serif text-3xl font-light tracking-wide text-gray-600 sm:text-4xl"
    >
      Hi, I'm Mikkel 👋
    </h1>

    <Paragraph>
      I am a Computer Science student from Norway and this is my playground.
      Thanks for stopping by!
    </Paragraph>

    <Paragraph>
      Here you will find some
      <Link href="/programming">programming projects</Link>, and a small
      <Link href="/photography">collection of photos</Link>
      I'm proud of.
    </Paragraph>

    <Paragraph>
      Want to get in touch?
      <Link href="mailto:mail@mikkelsvartveit.com">Contact me.</Link>
    </Paragraph>

    <div class="mt-8 space-x-3">
      {#each socialMedia as { name, icon, url }}
        <SocialIcon {name} {icon} {url} />
      {/each}
    </div>
  </section>

  <figure class="w-fyll md:w-1/2">
    <img
      class="mx-auto mb-12 block w-full max-w-xs rounded-full border-4 border-white bg-gray-100 text-transparent shadow-lg shadow-gray-400 md:mx-0 md:ml-auto md:w-5/6"
      src="/images/portrait.jpg"
      alt="Portrait of Mikkel"
      width={900}
      height={900}
    />
  </figure>
</div>

<footer class="my-4 flex justify-center">
  <p class="text-xs text-gray-400">
    Made in a breeze thanks to
    <Link href="https://kit.svelte.dev/" target="_blank">SvelteKit</Link>
    and
    <Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link>.
  </p>
</footer>
