<script>
  import Logo from "../Logo.svelte";
  import Joystick from "$svgs/Joystick.svelte";
  import PersonAdd from "$svgs/PersonAdd.svelte";
  import Phone from "$svgs/Phone.svelte";
  import Menu from "$svgs/Menu.svelte";
  import { fade } from "svelte/transition";
  import Close from "$svgs/Close.svelte";
  import { trapFocus } from "./actions";

  let open = false;

  const handleOpen = () => {
    open = true;
  };
  const handleClose = () => {
    open = false;
  };
</script>

<nav
  class="w-full flex justify-between items-center rounded-full px-4 py-2 border border-gray-700"
>
  <a href="/">
    <Logo />
  </a>

  <div
    class="hidden md:flex gap-8 text-theme-gray-one uppercase text-xs font-medium"
  >
    <a class="hover:text-theme-white flex gap-2 items-center" href="/projects">
      <Joystick />
      <span>Projects</span>
    </a>
    <a
      class="hover:text-theme-white flex gap-2 items-center"
      href="https://bento.me/dhaubanja"
    >
      <PersonAdd />
      <span>Socials</span>
    </a>
    <a class="hover:text-theme-white flex gap-2 items-center" href="/contact">
      <Phone />
      <span>Contact</span>
    </a>
  </div>

  <div
    role="button"
    tabindex="0"
    on:keypress={handleOpen}
    on:click={handleOpen}
    class="flex md:hidden w-6"
  >
    <Menu />
  </div>
</nav>

{#if open}
  <div
    class="drawer"
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
    use:trapFocus
  >
    <div class="relative flex justify-center items-center w-full h-full">
      <div
        role="button"
        tabindex="0"
        on:keypress={handleClose}
        on:click={handleClose}
        class="absolute right-12 top-12 pr-1"
        id="navbar-close"
      >
        <Close />
      </div>
      <div class="flex flex-col gap-12 text-theme-white">
        <a
          class="flex gap-4 items-center"
          href="/projects"
          on:click={handleClose}
        >
          <Joystick height={32} width={32} />
          <span class="font-medium">Projects</span>
        </a>
        <a class="flex gap-4 items-center" href="https://bento.me/dhaubanja">
          <PersonAdd height={32} width={32} />
          <span class="font-medium">Socials</span>
        </a>
        <a
          class="flex gap-4 items-center"
          href="/contact"
          on:click={handleClose}
        >
          <Phone height={32} width={32} />
          <span class="font-medium">Contact</span>
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  nav {
    max-width: 1024px;
    backdrop-filter: blur(2px);
  }

  a:focus-visible,
  a:active {
    background: transparent;
    outline: none;
    color: theme("colors.theme-white");
    text-shadow: 4px 4px 4px rgba(94, 234, 212, 0.4);
  }

  .drawer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100dvh;
    backdrop-filter: blur(50px);
    background: rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  @media screen and (min-width: 1024px) {
    .drawer {
      display: none;
    }
  }
</style>
