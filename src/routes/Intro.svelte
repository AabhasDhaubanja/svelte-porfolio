<script lang="ts">
  import CoolButton from "$lib/CoolButton.svelte";
  import TextButton from "$lib/TextButton.svelte";
  import Arrow from "$svgs/Arrow.svelte";
  import Pen from "$svgs/Pen.svelte";
  import Sparkle from "$svgs/Sparkle.svelte";
  import Canvas from "$lib/Canvas.svelte";
</script>

<section class="flex flex-col">
  <Canvas />

  <div class="flex-1 flex flex-col justify-center items-center">
    <div class="main-intro flex flex-col gap-4 items-center text-center">
      <div class="text-theme-gray-one text-xl font-semibold">
        <div class="flex items-center gap-4">
          <Sparkle />
          <span class="whitespace-nowrap"> Hi I'm Aabhas Dhaubanja </span>
        </div>
      </div>
      <h2 class="title text-3xl md:text-4xl xl:text-6xl font-bold">
        I build user-friendly and visually appealing web applications
      </h2>
      <div class="flex justify-center gap-4">
        <CoolButton>
          <div class="flex gap-2 items-center">
            <Pen />
            Blog
          </div>
        </CoolButton>
        <TextButton>About Me</TextButton>
      </div>
      <div class="bounce py-12">
        <TextButton>
          <Arrow />
        </TextButton>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .bounce {
    animation: bounce infinite 1s;
  }

  section {
    min-height: 100svh;
  }

  .main-intro {
    transform: translateY(calc(-50px));
  }

  .title {
    max-width: 1024px;
    height: auto;
    background-image: linear-gradient(
      180deg,
      theme("colors.theme-white") 50%,
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
