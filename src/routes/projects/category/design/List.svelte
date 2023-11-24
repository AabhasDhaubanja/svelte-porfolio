<script>
  import Project from "../Project.svelte";
  import Gjp from "./GJP.svelte";
  import MomoKarma from "./MomoKarma.svelte";
  import NandaChem from "./NandaChem.svelte";

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
</script>

{#each design as { id, title, url, Component } (id)}
  <Project {title} {url}>
    <Component />
  </Project>
{/each}
