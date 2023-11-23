<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let size: "sm" | "md" = "md";
  export let href: string = "";
  export let type: "button" | "submit" = "button";
  export let loading: boolean = false;

  const baseClass = "border-gray-100 rounded-full hover:text-theme-white";

  $: buttonClass =
    size === "md" ? `${baseClass} py-1 px-3` : `${baseClass} px-2 py-0`;

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch("click");
  };
</script>

{#if !!href}
  <a role="button" tabindex="0" {href} class={buttonClass}>
    <slot />
  </a>
{:else}
  <button on:click={handleClick} {type} class={buttonClass} disabled={loading}>
    <slot />
  </button>
{/if}

<style>
  button,
  a {
    color: theme("colors.theme-gray-one");
    border: 1px solid rgba(94, 234, 212, 0.5);
    box-shadow: inset 0px 2px 4px rgba(94, 234, 212, 0.8);
    transition: box-shadow 0.3s ease;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
  }
  button:hover,
  a:hover {
    box-shadow: inset 0px 4px 8px rgba(94, 234, 212, 1);
    border: 1px solid theme("colors.theme-cyan");
  }
  button:focus-visible,
  a:focus-visible,
  button:active,
  a:active {
    outline: none;
    border: 1px solid theme("colors.theme-cyan");
  }

  button:disabled {
    box-shadow: none;
    color: theme("colors.theme-gray-two");
    border: 1px solid rgba(94, 234, 212, 0.2);
  }
</style>
