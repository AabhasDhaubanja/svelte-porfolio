<script lang="ts">
  import Sparkle from "$svgs/Sparkle.svelte";
  import BlogCard from "./BlogCard.svelte";
  import { blogs } from "./store";
</script>

<svelte:head>
  <title>Blog - Aabhas Dhaubanja</title>
</svelte:head>
<section class="flex flex-col item-center text-center">
  <div
    class="flex items-center justify-center text-theme-gray-one text-xl font-medium py-12"
  >
    <div class="flex gap-4 items-center">
      <Sparkle />
      <span class="whitespace-nowrap">By Aabhas Dhaubanja</span>
    </div>
  </div>

  <div class="flex flex-col items-center gap-4">
    {#each blogs as { id, title, thumbnail, url, excerpt, date } (id)}
      <BlogCard {title} {thumbnail} {url} {excerpt} {date} />
    {/each}
  </div>
</section>
