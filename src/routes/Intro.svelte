<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "$lib/Navbar.svelte";
  import CoolButton from "$lib/CoolButton.svelte";
  import TextButton from "$lib/TextButton.svelte";
  import Arrow from "$lib/svgs/Arrow.svelte";
  import Pen from "$lib/svgs/Pen.svelte";
  import Sparkle from "$lib/svgs/Sparkle.svelte";
  import { min } from "$utils/min";
  import { expo } from "$utils/expo";
  import type { Circle } from "$types/Circle";

  const circles: Circle[] = [];
  const OPACITY_SPEED = 0.005;
  // -1 < state < 1
  // -ve --> fadingIn
  // +ve --> fadingOut
  let state = 1;

  const getCanvas = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const fw = window.innerWidth * window.devicePixelRatio;
    const fh = window.innerHeight * window.devicePixelRatio;

    // getting context
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // center
    const x = Math.floor(fw / 2);
    const y = Math.floor(fh / 2);

    return { canvas, ctx, fw, fh, x, y };
  };

  const renderCircles = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const { ctx, fw, fh } = canvas;
    ctx.clearRect(0, 0, fw, fh);
    renderGradient();

    let i;
    if (state >= 1) {
      circles.splice(0, circles.length);
      for (i = 0; i < 20; i++) {
        const x = Math.floor(Math.random() * fw);
        const y = Math.floor(Math.random() * fh);
        const r = Math.floor(Math.random() * 4) + 2;
        circles.push({ x, y, r });
      }
      state = -1;
    }

    state += OPACITY_SPEED;
    const opacity = expo(state);

    ctx.fillStyle = `rgba(100, 116, 139, ${opacity})`;

    for (i = 0; i < circles.length; i++) {
      const circle = circles[i];
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI * circle.r);
      ctx.fill();
    }

    requestAnimationFrame(renderCircles);
  };

  const renderGradient = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const { ctx, fw, fh, x, y } = canvas;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, min([fw, fh]));

    gradient.addColorStop(0, "#002c16");
    gradient.addColorStop(0.3, "#0f172a");

    ctx.fillStyle = gradient;
    ctx.save();
    /*
    	ctx.transform(a,b,c,d,e,f);
	transforms the co-ordinates using the matrix
	
	|a, c, e|   |x|
	|b, d, f| * |y|
	|0, 0, 1|   |1|

	so, the new co-ordinate would be 
	(ax + cy + e, bx + dy + f)

	in our example, the co-ordinates are:
	(x, 0.5y + f)  i.e we are skewing the y co-ordinates 
	to align the y co-ordinates to the center we need to add an offset
	fh / 4, by 4 because the co-ordinates are skewed? I works, thats the point

    */
    ctx.transform(1, 0, 0, 0.5, 0, Math.floor(fh / 4));
    ctx.fillRect(0, 0, fw, fh);
    ctx.restore();
  };

  const applyInitialCanvasStyles = () => {
    const c = getCanvas();

    if (!c) return;
    const { canvas, ctx, fw, fh } = c;

    // styling the canvas
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.width = fw;
    canvas.height = fh;

    renderGradient();
  };

  onMount(() => {
    const frame = requestAnimationFrame(renderCircles);

    applyInitialCanvasStyles();

    return () => {
      cancelAnimationFrame(frame);
    };
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
          <div
            class="flex text-theme-gray-one hover:text-theme-white transition-colors gap-2 items-center"
          >
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
  canvas {
    object-fit: contain;
  }

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
