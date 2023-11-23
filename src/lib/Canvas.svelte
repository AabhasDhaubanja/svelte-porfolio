<script lang="ts">
  import { onMount } from "svelte";
  import { min } from "$utils/min";
  import { expo } from "$utils/expo";
  import type { Circle } from "$types/Circle";

  export let position = "absolute";
  export let noGradient = false;

  const circles: Circle[] = [];
  const OPACITY_SPEED = 0.005;
  // -1 < state < 1
  // -ve --> fadingIn
  // +ve --> fadingOut
  let state = 1;

  let canvas: HTMLCanvasElement;

  const getCanvas = () => {
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
    if (!noGradient) renderGradient();

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
    const { canvas, fw, fh } = c;

    // styling the canvas
    canvas.style.position = position;
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.width = "100vw";
    canvas.style.height = "100svh";
    canvas.width = fw;
    canvas.height = fh;

    if (!noGradient) renderGradient();
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

<canvas bind:this={canvas}></canvas>
