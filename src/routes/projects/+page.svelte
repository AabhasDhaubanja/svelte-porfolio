<script lang="ts">
  import Canvas from "$lib/Canvas.svelte";
  import CoolButton from "$lib/CoolButton.svelte";
  import ProprietaryList from "./category/proprietary/List.svelte";
  import HobbyList from "./category/hobby/List.svelte";
  import DesignList from "./category/design/List.svelte";
  import FreelanceList from "./category/freelance/List.svelte";

  const projectCategories = [
    {
      id: 1,
      name: "Proprietary",
      url: "/projects/category/proprietary",
      Component: ProprietaryList,
    },
    {
      id: 2,
      name: "Hobby",
      url: "/projects/category/hobby",
      Component: HobbyList,
    },
    {
      id: 3,
      name: "Design",
      url: "/projects/category/design",
      Component: DesignList,
    },
    {
      id: 4,
      name: "Freelance",
      url: "/projects/category/freelance",
      Component: FreelanceList,
    },
  ];
</script>

<svelte:head>
  <title>Projects - Aabhas Dhaubanja</title>
</svelte:head>
<section class="flex flex-col items-center gap-12 my-12">
  <Canvas position="fixed" noGradient />
  <div class="flex flex-col gap-4 text-center">
    <h2 class="text-theme-white text-3xl md:text-4xl xl:text-6xl font-semibold">
      Projects
    </h2>
    <span class="description">
      A list of projects I have worked on or currently working on.
    </span>
  </div>

  {#each projectCategories as { id, name, url, Component } (id)}
    <div class="flex flex-col gap-4 w-full px-0 md:px-36 xl:px-48 2xl:px-64">
      <div class="flex gap-4">
        <h3 class="text-theme-white text-2xl font-semibold">{name}</h3>
        <CoolButton href={url} size="sm">
          <span class="text-xs hover:text-theme-white transition-colors">
            See All
          </span>
        </CoolButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <Component />
      </div>
    </div>
  {/each}
</section>

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
