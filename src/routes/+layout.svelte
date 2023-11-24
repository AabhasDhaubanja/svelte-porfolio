<script>
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/navbar/Navbar.svelte";
</script>

<div class="p-8 flex justify-center">
  <Navbar />
</div>
<slot />
<Footer />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    body {
      color: theme("colors.theme-black");
    }
    div,
    p,
    span,
    ul,
    ol {
      color: theme("colors.theme-black");
    }
  }

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    background: theme("colors.theme-black");
    color: theme("colors.theme-gray-one");
  }

  :global(section) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (max-width: 640px) {
    :global(section) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    :global(section) {
      padding-left: 36px;
      padding-right: 36px;
    }
  }
</style>
