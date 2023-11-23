<script>
  import Canvas from "$lib/Canvas.svelte";
  import CoolButton from "$lib/CoolButton.svelte";
  import Phone from "$svgs/Phone.svelte";
</script>

<section
  class="relative h-[100svh] flex flex-col gap-12 justify-center items-center"
>
  <Canvas />
  <h2 class="text-theme-white text-3xl md:text-4xl xl:text-6xl font-semibold">
    Lets Connect
  </h2>

  <div class="flex flex-col items-center gap-8">
    <p>
      I&sbquo;m always looking to make new connections, so drop me an email or
      shoot me a DM on Twitter. Who knows where the conversation could lead?
    </p>
    <p>Let&sbquo;s explore the possibilities and see where it takes us!</p>
  </div>

  <CoolButton href="/contact">
    <div class="flex items-center gap-4">
      <Phone />
      <span>Contact Me</span>
    </div>
  </CoolButton>
</section>

<style>
  p {
    max-width: 720px;
    text-align: center;
  }
</style>
