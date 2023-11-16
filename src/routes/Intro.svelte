<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import Navbar from "$lib/Navbar.svelte";
  import CoolButton from "$lib/CoolButton.svelte";
  import TextButton from "$lib/TextButton.svelte";
  import Arrow from "$lib/svgs/Arrow.svelte";
  import Pen from "$lib/svgs/Pen.svelte";
  import Sparkle from "$lib/svgs/Sparkle.svelte";
  import { min } from "$utils/min";

  let circles = [];

  const applyInitialCanvasStyles = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const fw = window.innerWidth;
    const fh = window.innerHeight;
    // styling the canvas
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.width = fw;
    canvas.height = fh;

    // getting context
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // center
    const x = Math.floor(fw / 2);
    const y = Math.floor(fh / 2);

    // rendering
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, min([fw, fh]));

    gradient.addColorStop(0, "#003c26");
    gradient.addColorStop(0.3, "transparent");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, fw, fh);
  };

  onMount(() => {
    applyInitialCanvasStyles();
  });

  const handleWindowResize = () => {
    applyInitialCanvasStyles();
  };
</script>

<svelte:window on:resize={handleWindowResize} />

<section class="flex flex-col">
  <canvas id="canvas"></canvas>

  <div class="flex justify-center py-8">
    <Navbar />
  </div>

  <div class="flex-1 flex flex-col justify-center items-center">
    <div class="flex flex-col gap-4 items-center text-center">
      <div class="text-theme-gray-one text-xl font-semibold">
        <div class="flex items-center gap-4">
          <Sparkle />
          <span class="whitespace-nowrap"> Hi I'm Aabhas Dhaubanja </span>
        </div>
      </div>
      <h2 class="title text-6xl font-bold">
        I build user-friendly and visually appealing web applications
      </h2>
      <div class="flex justify-center gap-4">
        <CoolButton>
          <div class="flex text-theme-gray-one gap-2 items-center">
            <Pen fill="#94A3B8" />
            Blog
          </div>
        </CoolButton>
        <TextButton>About Me</TextButton>
      </div>
      <div class="py-12">
        <TextButton>
          <Arrow />
        </TextButton>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    min-height: 100vh;
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
