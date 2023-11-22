<script lang="ts">
  import Canvas from "$lib/Canvas.svelte";
  import CoolButton from "$lib/CoolButton.svelte";
  import Project from "./Project.svelte";
  import ProprietaryList from "./proprietary/List.svelte";
  import HobbyList from "./hobby/List.svelte";
  import DesignList from "./design/List.svelte";
  import FreelanceList from "./freelance/List.svelte";
</script>

<div class="flex flex-col items-center gap-12 my-12">
  <Canvas position="fixed" noGradient />
  <div class="flex flex-col gap-4 text-center">
    <h2 class="text-theme-white text-6xl font-semibold">Projects</h2>
    <span class="description">
      A list of projects I have worked on or currently working on.
    </span>
  </div>

  <div class="flex flex-col gap-4 w-full px-36">
    <div class="flex gap-4">
      <h3 class="text-theme-white text-2xl font-semibold">Proprietary</h3>
      <CoolButton href="/projects/proprietary" size="sm">
        <span class="text-xs hover:text-theme-white transition-colors">
          See All
        </span>
      </CoolButton>
    </div>

    <div class="grid grid-cols-4 gap-4 w-full">
      <ProprietaryList />
    </div>
  </div>

  <div class="flex flex-col gap-4 w-full px-36">
    <div class="flex gap-4">
      <div class="flex gap-4">
        <h3 class="text-theme-white text-2xl font-semibold">Hobby</h3>
        <CoolButton href="/projects/hobby" size="sm">
          <span class="text-xs"> See All </span>
        </CoolButton>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-4 w-full">
      <HobbyList />
    </div>
  </div>

  <div class="flex flex-col gap-4 w-full px-36">
    <div class="flex gap-4">
      <h3 class="text-theme-white text-2xl font-semibold">Design</h3>
      <CoolButton href="/projects/design" size="sm">
        <span class="text-xs"> See All </span>
      </CoolButton>
    </div>

    <div class="grid grid-cols-4 gap-4 w-full">
      <DesignList />
    </div>
  </div>

  <div class="flex flex-col gap-4 w-full px-36">
    <div class="flex gap-4">
      <h3 class="text-theme-white text-2xl font-semibold">Freelance</h3>
      <CoolButton href="/projects/freelance" size="sm">
        <span class="text-xs"> See All </span>
      </CoolButton>
    </div>

    <div class="grid grid-cols-4 gap-4 w-full"><FreelanceList /></div>
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
