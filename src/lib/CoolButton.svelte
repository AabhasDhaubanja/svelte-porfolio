<script>
</script>

<button class="border-gray-100 rounded-full py-1 px-3">
  <slot />
</button>

<style>
  button {
    color: theme("colors.theme-gray-one");
    border: 1px solid theme("colors.theme-cyan");
    box-shadow: inset 0px 2px 4px rgba(94, 234, 212, 0.8);
    transition: 0.3s;
  }
  button:hover {
    box-shadow: inset 0px 4px 8px rgba(94, 234, 212, 1);
  }
</style>
