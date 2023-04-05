<script lang="ts">
  export let href: string;
  let className = "";
  export { className as class };
</script>

<a
  class="text-teal-600 duration-100 hover:text-teal-500 hover:underline {className}"
  {href}
  {...$$restProps}
>
  <slot />
</a>
