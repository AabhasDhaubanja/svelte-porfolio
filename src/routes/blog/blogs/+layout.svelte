<script>
  import Canvas from "$lib/Canvas.svelte";
  import Back from "$svgs/Back.svelte";
</script>

<Canvas position="fixed" noGradient />

<section class="flex justify-center items-center">
  <div class="max-w-[1024px]">
    <a href="/blog" class="font-semibold">
      <div class="flex items-center gap-2 py-4">
        <span class="w-6 h-6">
          <Back />
        </span>
        Back
      </div>
    </a>
    <slot />
  </div>
</section>

<style>
  div {
    backdrop-filter: blur(4px);
  }
</style>
