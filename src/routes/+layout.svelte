<script>
  import Footer from "$lib/Footer.svelte";
</script>

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
</style>
