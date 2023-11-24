<script lang="ts">
  import Work from "$svgs/Work.svelte";
  import { createEventDispatcher } from "svelte";
  export let blurred = false;
  export let id = 0;
  export let title = "";
  export let description = "";
  export let Component = Work;
  export let url = "";

  const dispatch = createEventDispatcher();

  const handleMouseEnter = () => {
    dispatch("mouseenter", {
      id: id,
    });
  };
</script>

<a
  href={url}
  on:mouseenter={handleMouseEnter}
  class:blurred
  class="flex flex-col gap-6 items-center cursor-pointer hover:scale-110 transition-all"
>
  <div class="cyan-shadow">
    <Component fill="#e5e7eb" />
  </div>
  <div class="flex flex-col gap-1 px-8">
    <h3 class="title text-lg text-theme-white font-bold">{title}</h3>
    <span class="text-xs">{@html description}</span>
  </div>
</a>

<style>
  .blurred {
    filter: blur(5px);
  }

  .cyan-shadow {
    height: 128px;
    width: 128px;
    filter: drop-shadow(4px 2px 0px theme("colors.theme-cyan"));
  }

  .title {
    background-image: linear-gradient(
      180deg,
      theme("colors.theme-white") 30%,
      theme("colors.theme-gray-two")
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
  }

  @media screen and (max-width: 768px) {
    .cyan-shadow {
      height: 64px;
      width: 64px;
    }
  }
</style>
