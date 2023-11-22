<script>
  import Mantine from "./Mantine.svelte";
  import Project from "../Project.svelte";
  import HackerNews from "./HackerNews.svelte";

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
</script>

{#each hobby as { id, title, url, Component } (id)}
  <Project {title} {url}>
    <Component />
  </Project>
{/each}
