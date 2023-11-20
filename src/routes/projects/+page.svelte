<script lang="ts">
  import Project from "./Project.svelte";
  import Gjp from "./design/GJP.svelte";
  import MomoKarma from "./design/MomoKarma.svelte";
  import NandaChem from "./design/NandaChem.svelte";
  import Emerald from "./freelance/Emerald.svelte";
  import Gnx from "./freelance/GNX.svelte";
  import HackerNews from "./hobby/HackerNews.svelte";
  import Mantine from "./hobby/Mantine.svelte";
  import AgencyHeight from "./proprietary/AgencyHeight.svelte";
  import Hobnob from "./proprietary/Hobnob.svelte";

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
  const hobby = [
    {
      id: 1,
      Component: Mantine,
      title: "Mantine",
      url: "https://github.com/mantinedev/mantine/pull/2893",
    },
    {
      id: 2,
      Component: HackerNews,
      title: "Hacker News",
      url: "https://aabhas-dhaubanja.github.io/web-point-assignment/",
    },
  ];
  const design = [
    {
      id: 1,
      Component: NandaChem,
      title: "Vaccine Management System",
      url: "https://www.figma.com/proto/tVV0EamdBUfraEqHIpDwg7/Vaccine?type=design&node-id=1-2&t=ZrWYUrX1ab7LyA4U-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=69%3A295&mode=design",
    },
    {
      id: 2,
      Component: Gjp,
      title: "Poultry App",
      url: "https://www.figma.com/proto/KZqSbaSvKhOjjbcvQNEPJJ/GJP?type=design&node-id=11-1&t=7Zv55uXe74qk3x6r-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=11%3A1&mode=design",
    },
    {
      id: 3,
      Component: MomoKarma,
      title: "Momo Karma",
      url: "https://www.figma.com/proto/TUcx5OhvCtXCVO3YlIi8Pt/momokarma?type=design&node-id=502-90&t=7S31EQ8FMY21oxRF-1&scaling=min-zoom&page-id=0%3A1&mode=design",
    },
  ];
  const freelance = [
    {
      id: 1,
      Component: Emerald,
      title: "Emerald",
      url: "https://emerald.com.np",
    },
    {
      id: 2,
      Component: Gnx,
      title: "GNX Studio",
      url: "https://gnxstudio.com",
    },
  ];
</script>

<div class="flex flex-col items-center gap-12">
  <div class="flex flex-col gap-4 text-center">
    <h2 class="text-theme-white text-6xl font-semibold">Projects</h2>
    <span class="description">
      A list of projects I have worked on or currently working on.
    </span>
  </div>

  <div class="flex flex-col gap-4 w-full px-36">
    <h3 class="text-theme-white text-2xl font-semibold">Proprietary</h3>

    <div class="grid grid-cols-4 gap-4 w-full">
      {#each proprietary as { id, title, url, Component } (id)}
        <Project {title} {url}>
          <Component />
        </Project>
      {/each}
    </div>
  </div>

  <div class="flex flex-col gap-4 w-full px-36">
    <h3 class="text-theme-white text-2xl font-semibold">Hobby</h3>

    <div class="grid grid-cols-4 gap-4 w-full">
      {#each hobby as { id, title, url, Component } (id)}
        <Project {title} {url}>
          <Component />
        </Project>
      {/each}
    </div>
  </div>

  <div class="flex flex-col gap-4 w-full px-36">
    <h3 class="text-theme-white text-2xl font-semibold">Design</h3>

    <div class="grid grid-cols-4 gap-4 w-full">
      {#each design as { id, title, url, Component } (id)}
        <Project {title} {url}>
          <Component />
        </Project>
      {/each}
    </div>
  </div>

  <div class="flex flex-col gap-4 w-full px-36">
    <h3 class="text-theme-white text-2xl font-semibold">Freelance</h3>

    <div class="grid grid-cols-4 gap-4 w-full">
      {#each freelance as { id, title, url, Component } (id)}
        <Project {title} {url}>
          <Component />
        </Project>
      {/each}
    </div>
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
