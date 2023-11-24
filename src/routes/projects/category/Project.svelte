<script>
  import NorthEast from "$svgs/NorthEast.svelte";

  export let title = "";
  export let url = "";
</script>

<div class="flex flex-col">
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={url}
    class="flex flex-col gap-2"
  >
    <div class="ar flex rounded-md overflow-hidden">
      <slot />
    </div>
    <div class="flex justify-between">
      <h4>{title}</h4>
      <NorthEast />
    </div>
  </a>
</div>

<style>
  .ar {
    aspect-ratio: 16 / 9;
  }
</style>
