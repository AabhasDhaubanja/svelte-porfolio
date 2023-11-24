<script lang="ts">
  import Draw from "$svgs/Draw.svelte";
  import Extension from "$svgs/Extension.svelte";
  import Raven from "$svgs/Raven.svelte";
  import Work from "$svgs/Work.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import type { SvelteComponent } from "svelte";

  type Project = {
    id: number;
    title: string;
    description: string;
    url: string;
    Component: typeof SvelteComponent<any>;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Proprietary",
      description: "Some of the work I have done as an employee",
      url: "/projects/category/proprietary",
      Component: Work,
    },
    {
      id: 2,
      title: "Hobby",
      description: "Some of the work I have done in my &ldquo;free-time&rdquo;",
      url: "/projects/category/hobby",
      Component: Extension,
    },
    {
      id: 3,
      title: "Design",
      description: "Some of the work I have designed",
      url: "/projects/category/design",
      Component: Draw,
    },
    {
      id: 4,
      title: "Freelance",
      description: "Some of the work I have done as a freelancer",
      url: "/projects/category/freelance",
      Component: Raven,
    },
  ];

  let currentProject: number | null = null;

  const handleMouseEnter = (id: number) => {
    currentProject = id;
  };

  const handleMouseLeave = () => {
    currentProject = null;
  };
</script>

<section class="text-center mb-48">
  <div class="flex flex-col items-center gap-4">
    <h2 class="text-theme-white text-3xl md:text-4xl xl:text-6xl font-semibold">
      Projects
    </h2>
    <span class="description">
      Some of the notable projects I have worked on
    </span>
  </div>

  <div
    role="button"
    tabindex="-1"
    on:mouseleave={handleMouseLeave}
    class="grid grid-cols-2 lg:grid-cols-4 py-4 md:py-12 lg:p-24 gap-12 md:gap-0"
  >
    {#each projects as { id, title, description, url, Component } (id)}
      {#if currentProject === null}
        <ProjectCard
          on:mouseenter={() => handleMouseEnter(id)}
          {title}
          {description}
          {url}
          {Component}
        />
      {:else if currentProject === id}
        <ProjectCard
          on:mouseenter={() => handleMouseEnter(id)}
          {title}
          {description}
          {url}
          {Component}
        />
      {:else}
        <ProjectCard
          on:mouseenter={() => handleMouseEnter(id)}
          blurred={true}
          {title}
          {description}
          {url}
          {Component}
        />
      {/if}
    {/each}
  </div>
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
