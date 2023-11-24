<script lang="ts">
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { toasts } from "./store";
  import Tick from "$svgs/Tick.svelte";
  import Close from "$svgs/Close.svelte";
</script>

<div class="toast-wrapper">
  {#each $toasts as { id, message, type } (id)}
    <div
      class="toast"
      in:fade
      out:fade={{ duration: 200 }}
      animate:flip={{ duration: 800 }}
    >
      {#if type === "DEFAULT"}
        <div class="bg-green-500 text-xs text-theme-white rounded-full p-0.5">
          <Tick height={14} width={14} />
        </div>
      {:else}
        <div class="bg-red-500 text-xs text-theme-white rounded-full p-0.5">
          <Close height={14} width={14} />
        </div>
      {/if}
      {message}
    </div>
  {/each}
</div>

<style>
  .toast-wrapper {
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .toast {
    display: flex;
    align-items: center;
    gap: 12px;
    background: theme("colors.theme-white");
    color: theme("colors.theme-black");
    border-radius: 8px;
    padding: 2px 8px;
  }

  .default {
  }

  .error {
  }
</style>
