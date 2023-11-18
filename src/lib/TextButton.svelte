<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface $$props extends HTMLButtonAttributes {}
</script>

<button {...$$props}><slot /></button>

<style>
  button {
    color: theme("colors.theme-gray-one");
    background: none;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif, system-ui;
  }
</style>
