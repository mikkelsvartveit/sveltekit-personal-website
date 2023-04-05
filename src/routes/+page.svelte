<script>
  import portraitImage from "$lib/images/portrait.jpg";
  import SocialIcon from "$lib/components/SocialIcon.svelte";
  import facebookIcon from "$lib/icons/facebook-icon.png";
  import twitterIcon from "$lib/icons/twitter-icon.png";
  import instagramIcon from "$lib/icons/instagram-icon.png";
  import vscoIcon from "$lib/icons/vsco-icon.png";
  import githubIcon from "$lib/icons/github-icon.png";
  import Link from "$lib/components/Link.svelte";

  const socialMedia = [
    {
      name: "Facebook",
      icon: facebookIcon,
      url: "https://facebook.com/profile.php?id=100006609016880",
    },
    {
      name: "Twitter",
      icon: twitterIcon,
      url: "https://twitter.com/mikkelsvartveit",
    },
    {
      name: "Instagram",
      icon: instagramIcon,
      url: "https://instagram.com/mikkelsvartveit",
    },
    {
      name: "VSCO",
      icon: vscoIcon,
      url: "https://vsco.co/mikkelsvartveit",
    },
    {
      name: "GitHub",
      icon: githubIcon,
      url: "https://github.com/mikkelsvartveit",
    },
  ];
</script>

<div class="max-w-4xl mx-auto px-6 py-12 flex">
  <div class="w-1/2">
    <h1 class="font-mono font-thin text-4xl text-gray-600 mb-8">
      Hi, I'm Mikkel 👋
    </h1>

    <p class="my-4">
      I am a Computer Science student from Norway and this is my playground.
      Thanks for stopping by!
    </p>

    <p class="my-4">
      Here you will find some
      <Link href="/programming">programming projects</Link>, a small
      <Link href="/photography">collection of photos</Link>
      I'm proud of, as well as a few
      <Link href="/articles">articles</Link>
      about stuff that interests me.
    </p>

    <p class="my-4">
      Want to get in touch?
      <Link href="mailto:hi@mikkelsvartveit.com">Contact me.</Link>
    </p>

    <div class="mt-8 -mx-2">
      {#each socialMedia as { name, icon, url }}
        <SocialIcon {name} {icon} {url} />
      {/each}
    </div>
  </div>

  <div class="w-1/2">
    <img
      class="block w-5/6 ml-auto rounded-full border-4 border-white shadow-lg shadow-gray-400"
      src={portraitImage}
      alt="Portrait of Mikkel"
    />
  </div>
</div>

<div class="flex justify-center">
  <p class="text-xs text-slate-400">
    Made in a breeze thanks to
    <Link href="https://kit.svelte.dev/" target="_blank">SvelteKit</Link>
    and
    <Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link>.
  </p>
</div>
