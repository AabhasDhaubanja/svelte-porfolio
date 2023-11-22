<script>
  import Project from "../Project.svelte";
  import Emerald from "./Emerald.svelte";
  import Gnx from "./GNX.svelte";

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

{#each freelance as { id, title, url, Component } (id)}
  <Project {title} {url}>
    <Component />
  </Project>
{/each}
