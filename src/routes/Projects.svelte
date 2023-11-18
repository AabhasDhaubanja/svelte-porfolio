<script lang="ts">
  import Draw from "$lib/svgs/Draw.svelte";
  import Extension from "$lib/svgs/Extension.svelte";
  import Raven from "$lib/svgs/Raven.svelte";
  import Work from "$lib/svgs/Work.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import type { SvelteComponent } from "svelte";

  type Project = {
    id: number;
    title: string;
    description: string;
    Component: typeof SvelteComponent<any>;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Proprietary",
      description: "Some of the work I have done as an employee",
      Component: Work,
    },
    {
      id: 2,
      title: "Hobby",
      description: "Some of the work I have done in my &ldquo;free-time&rdquo;",
      Component: Extension,
    },
    {
      id: 3,
      title: "Design",
      description: "Some of the work I have designed",
      Component: Draw,
    },
    {
      id: 4,
      title: "Freelance",
      description: "Some of the work I have done as a freelancer",
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
    <h2 class="text-theme-white text-6xl font-semibold">Projects</h2>
    <span class="description">
      Some of the notable projects I have worked on
    </span>
  </div>

  <div
    role="button"
    tabindex="-1"
    on:mouseleave={handleMouseLeave}
    class="flex justify-center pt-24 px-24"
  >
    {#each projects as project (project.id)}
      {#if currentProject === null}
        <ProjectCard
          on:mouseenter={() => handleMouseEnter(project.id)}
          title={project.title}
          description={project.description}
          Component={project.Component}
        />
      {:else if currentProject === project.id}
        <ProjectCard
          on:mouseenter={() => handleMouseEnter(project.id)}
          title={project.title}
          description={project.description}
          Component={project.Component}
        />
      {:else}
        <ProjectCard
          on:mouseenter={() => handleMouseEnter(project.id)}
          blurred={true}
          title={project.title}
          description={project.description}
          Component={project.Component}
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
