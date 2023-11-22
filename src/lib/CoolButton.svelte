<script lang="ts">
  export let size: "sm" | "md" = "md";
  export let href: string = "";

  const baseClass = "border-gray-100 rounded-full hover:text-theme-white";

  $: buttonClass =
    size === "md" ? `${baseClass} py-1 px-3` : `${baseClass} px-2 py-0`;
</script>

{#if !!href}
  <a role="button" tabindex="0" {href} class={buttonClass}>
    <slot />
  </a>
{:else}
  <button class={buttonClass}>
    <slot />
  </button>
{/if}

<style>
  button,
  a {
    color: theme("colors.theme-gray-one");
    border: 1px solid theme("colors.theme-cyan");
    box-shadow: inset 0px 2px 4px rgba(94, 234, 212, 0.8);
    transition: box-shadow 0.3s ease;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
  }
  button:hover,
  a:hover {
    box-shadow: inset 0px 4px 8px rgba(94, 234, 212, 1);
  }
</style>
