<script>
  import Project from "../Project.svelte";
  import AgencyHeight from "./AgencyHeight.svelte";
  import Hobnob from "./Hobnob.svelte";

  const proprietary = [
    {
      id: 1,
      Component: AgencyHeight,
      title: "Agency Height",
      url: "https://agencyheight.com",
    },
    {
      id: 2,
      Component: Hobnob,
      title: "Hobnob",
      url: "https://joinhobnob.com",
    },
  ];
</script>

<div class="flex flex-col gap-4 w-full px-36">
  <div class="flex flex-col gap-4 items-center">
    <h2 class="text-theme-white text-6xl font-semibold">
      Proprietary Projects
    </h2>
    <span class="description">
      A list of projects i have worked on or currently working on.
    </span>
  </div>

  <div class="grid grid-cols-4 gap-4 w-full my-16">
    {#each proprietary as { id, title, url, Component } (id)}
      <Project {title} {url}>
        <Component />
      </Project>
    {/each}
  </div>
</div>

<style>
  .description {
    background-image: linear-gradient(
      90deg,
      theme("colors.theme-gray-two"),
      theme("colors.theme-white") 20%,
      theme("colors.theme-white") 80%,
      theme("colors.theme-gray-two")
    );

    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
  }
</style>
