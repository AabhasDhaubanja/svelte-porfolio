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

{#each proprietary as { id, title, url, Component } (id)}
  <Project {title} {url}>
    <Component />
  </Project>
{/each}
