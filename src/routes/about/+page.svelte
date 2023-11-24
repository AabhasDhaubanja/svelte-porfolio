<script>
  import Canvas from "$lib/Canvas.svelte";
</script>

<svelte:head>
  <title>About Me - Aabhas Dhaubanja</title>
</svelte:head>
<section class="flex flex-col items-center gap-12 my-12">
  <Canvas position="fixed" noGradient />
  <div class="flex flex-col gap-12 items-center text-center">
    <img src="/profile.jpg" alt="profile" />

    <div class="flex flex-col gap-4">
      <h2
        class="text-theme-white text-3xl md:text-4xl xl:text-6xl font-semibold"
      >
        About Me
      </h2>
      <span class="description">
        I'm Aabhas Dhaubanja, an Engineer & Designer passionate about crafting
        visually striking products. Starting as a teen with HTML & CSS, my
        toolkit now includes React, Next JS, Svelte, SvelteKit, Chakra UI,
        Tailwind CSS, and more.
      </span>
    </div>
  </div>
</section>

<style>
  :root {
    --desktop-size: 200px;
  }
  img {
    height: var(--desktop-size);
    width: var(--desktop-size);
    object-fit: cover;
    border-radius: var(--desktop-size);
    overflow: hidden;
  }

  .description {
    max-width: 720px;
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
