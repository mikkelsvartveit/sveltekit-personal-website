<script lang="ts">
  let className = "";
  export { className as class };
</script>

<p class="my-4 font-serif text-lg text-gray-700 {className}" {...$$restProps}>
  <slot />
</p>
