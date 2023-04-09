<script>
  import Link from "$lib/components/Link.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SocialIcon from "$lib/components/SocialIcon.svelte";

  import portraitImage from "$lib/images/portrait.jpg";
  import facebookIcon from "$lib/icons/facebook-icon.png";
  import twitterIcon from "$lib/icons/twitter-icon.png";
  import instagramIcon from "$lib/icons/instagram-icon.png";
  import vscoIcon from "$lib/icons/vsco-icon.png";
  import githubIcon from "$lib/icons/github-icon.png";

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

<div class="flex flex-col-reverse md:flex-row">
  <section class="w-full md:w-1/2">
    <h1
      class="font-serif font-light text-3xl sm:text-4xl text-gray-600 tracking-wide mb-8"
    >
      Hi, I'm Mikkel 👋
    </h1>

    <Paragraph>
      I am a Computer Science student from Norway and this is my playground.
      Thanks for stopping by!
    </Paragraph>

    <Paragraph>
      Here you will find some
      <Link href="/programming">programming projects</Link>, a small
      <Link href="/photography">collection of photos</Link>
      I'm proud of, as well as a few
      <Link href="/articles">articles</Link>
      about stuff that interests me.
    </Paragraph>

    <Paragraph>
      Want to get in touch?
      <Link href="mailto:hi@mikkelsvartveit.com">Contact me.</Link>
    </Paragraph>

    <div class="mt-8 space-x-3">
      {#each socialMedia as { name, icon, url }}
        <SocialIcon {name} {icon} {url} />
      {/each}
    </div>
  </section>

  <figure class="w-fyll md:w-1/2">
    <img
      class="block w-full max-w-xs md:w-5/6 mb-12 mx-auto md:mx-0 md:ml-auto rounded-full border-4 border-white shadow-lg shadow-gray-400"
      src={portraitImage}
      alt="Portrait of Mikkel"
    />
  </figure>
</div>

<footer class="flex justify-center my-4">
  <p class="text-xs text-slate-400 mt-8">
    Made in a breeze thanks to
    <Link href="https://kit.svelte.dev/" target="_blank">SvelteKit</Link>
    and
    <Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link>.
  </p>
</footer>
