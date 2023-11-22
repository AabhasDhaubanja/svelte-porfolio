<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let name: string;
  export let title: string;
  export let value: string;
  export let type: HTMLInputTypeAttribute = "text";
  export let required: boolean = false;

  const handleInput = (
    event: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    },
  ) => {
    value = event.currentTarget.value;
  };
</script>

<div>
  <label class="flex flex-col gap-2 w-full">
    <span class="uppercase text-xs">{title}</span>
    <input {value} {type} on:input={handleInput} {required} />
  </label>
</div>

<style>
  input {
    outline: none;
    border: 1px solid rgba(94, 234, 212, 0.5);
    border-radius: 8px;
    background: transparent;
    transition: border 0.3s;
    padding: 6px 12px;
    box-shadow: inset 0px 2px 4px rgba(94, 234, 212, 0.4);
  }

  input:focus {
    border: 1px solid theme("colors.theme-cyan");
  }

  input:focus-visible,
  input:active {
    outline: none;
    border: 1px solid theme("colors.theme-cyan");
  }
</style>
