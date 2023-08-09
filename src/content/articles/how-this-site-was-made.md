---
title: How This Site Was Made – a Deep-Dive
introduction: Welcome to my brand new portfolio website! In this write-up, I’ll walk through the purpose of this website, explain the frameworks and tools I used to build and deploy it, as well as some challenges I discovered along the way.
image: ./images/svelte-tailwind.jpeg
tags: Web development
date: 2023-08-08
---

# How This Site Was Made – a Deep-Dive

Welcome to my brand new portfolio website! In this write-up, I’ll walk through the purpose of this website, explain the frameworks and tools I used to build and deploy it, as well as some challenges I discovered along the way. Let’s get started!

## Why I built this site

I’ve wanted to build a new website for a while, and finally found the time and motivation to do so. When developing this site I had a few goals in mind:

1. Having an online portfolio where I can showcase my stuff, namely programming projects and photos I’ve taken.
2. Being able to share ideas and knowlegde through the occacional blog post (like this one).
3. Improving my online presence on a platform that I fully control.
4. Having a platform where I can play with and experiment with new web technologies that I find interesting.

With that out of the way, let’s run through the technologies that power [mikkelsvartveit.com](http://mikkelsvartveit.com)

## Svelte(Kit)

The JavaScript framework Svelte and its official metaframework SvelteKit are the most important tools that this site was built with. Svelte is a component-based framework allowing you to tightly couple logic and state to the rendered HTML, akin to React. SvelteKit provides a full toolkit around it with stuff like routing, granular control over rendering paradigms, and build tools powered by Vite.

The main reason I went with Svelte is frankly that I just love the developer experience. It feels a lot more primitive and intuitive to me than something like React or Vue. Bootstrapping it with SvelteKit was also extremely easy. After skimming through the essentials in the official documentation (which is not that long) I was good to go and ready to build.

The headlining feature of SvelteKit is **server-side rendering** (SSR). While this feature is in no way unique to SvelteKit – you can achieve the same with Next.js for React or Nuxt for Vue – it does provide advantages that suits this site very well. In short, what server-side rendering does is to run some JavaScript code **on the server**that generate your HTML, and then ship prerendered HTML code to the browser. Then, only after the initial HTML has been provided, a JavaScript bundle is sent to the browser to enable interactivity and client-side routing in a process called **hydration**. This is sort of a best-of-both-worlds approach – it maintains the advantages of classic websites built with PHP, Ruby on Rails or even static HTML, while enabling the instant navigation and interactive feel we now expect from modern web apps.

Since the content on this website is quite static and doesn’t change all that often, we can take this a step further and enable **static site generation** (SSG). This is similar to SSR, except that the HTML rendering is now done at _build time_ instead of when a page is requested. This means that the output of the build step is just static HTML, CSS and JavaScript, which can really be served by any simple web server.

In addition to faster load times, SSR and SSG helps a lot with **search engine optimalization** (SEO) and social media preview support, because the bots over at Google, Twitter and Reddit won’t have to run slow JavaScript code to figure out the contents of each page. I want the website and its content to be discoverable, so this is a huge plus for me.

Another cool (although admittedly not that useful) trick of server-side rendered websites is that it actually functions without running JavaScript at all. Try it yourself – if you disable JS in your browser, SvelteKit will just skip the entire hydration process, and the site will still function quite well as a pure HTML + CSS site.
