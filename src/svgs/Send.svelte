<script>
  export let height = 20;
  export let fill = "currentColor";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {height}
  viewBox="0 -960 960 960"
  {fill}
>
  <path
    d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
  />
</svg>

<style>
  svg {
    transform: rotate(-40deg) translateY(-10%);
  }
</style>
