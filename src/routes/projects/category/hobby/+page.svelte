<script>
  import List from "./List.svelte";
</script>

<svelte:head>
  <title>Hobby Projects - Aabhas Dhaubanja</title>
</svelte:head>
<section class="flex flex-col my-12 w-full md:px-36 xl:px-48 2xl:px-64">
  <div class="flex flex-col gap-4 items-center">
    <h2 class="text-theme-white text-3xl md:text-4xl xl:text-6xl font-semibold">
      Hobby Projects
    </h2>
    <span class="description">
      A list of hobby projects i have worked on or currently working on.
    </span>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full mt-12"
  >
    <List />
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
