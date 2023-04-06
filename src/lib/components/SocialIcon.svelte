<script lang="ts">
  export let name: string;
  export let icon: string;
  export let url: string;
</script>

<a href={url}>
  <img src={icon} alt={name} class="inline-block w-8 h-8" />
</a>
