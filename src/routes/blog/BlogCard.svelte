<script>
  import Canvas from "$lib/Canvas.svelte";

  export let title = "";
  export let thumbnail = "";
  export let url = "";
  export let excerpt = "";
  export let date = "";
</script>

<Canvas position="fixed" noGradient />
<a
  href={url}
  class="flex flex-col lg:flex-row gap-8 p-6 max-w-[1024px] roundex-xl border border-gray-700 rounded-2xl"
>
  <div class="flex-1">
    <img
      class="w-full object-cover object-center aspect-video rounded-2xl"
      src={thumbnail}
      alt={title}
    />
  </div>
  <div class="flex-1 flex flex-col gap-4 justify-center items-start text-left">
    <div
      class="bg-theme-cyan text-theme-black px-4 rounded-lg font-semibold py-2"
    >
      {date}
    </div>
    <h3 class="title text-2xl font-semibold">{title}</h3>
    <p class="text-sm">
      {excerpt}
    </p>
  </div>
</a>

<style>
  a {
    backdrop-filter: blur(4px);
  }
  a:focus-visible,
  a:active {
    text-shadow: none;
    border: 1px solid theme("colors.theme-cyan");
  }

  .title {
    height: auto;
    background-image: linear-gradient(
      180deg,
      theme("colors.theme-white") 70%,
      theme("colors.theme-gray-two")
    );
    line-height: 1.2;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
  }
</style>
