<script>
  import TextButton from "./TextButton.svelte";
</script>

<footer class="flex flex-col items-center gap-8 py-12">
  <div class="logo text-9xl text-theme-white">AD.</div>
  <div class="flex flex-col text-center gap-2 uppercase text-xs">
    <span>© 2023 Aabhas Dhaubanja</span>

    <div class="flex gap-2">
      <a href="https://github.com/AabhasDhaubanja">GITHUB</a>
      <a href="https://twitter.com/AabhasDhaubanja">TWITTER</a>
      <a href="https://www.linkedin.com/in/aabhas-dhaubanja-94413a1b7/"
        >LINKEDIN</a
      >
      <a href="/blog">BLOGS</a>
    </div>
  </div>
</footer>

<style>
  .logo {
    font-family: "Abril Fatface", Inter !important;
  }
</style>
