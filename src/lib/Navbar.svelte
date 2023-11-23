<script>
  import Logo from "./Logo.svelte";
  import Joystick from "$svgs/Joystick.svelte";
  import PersonAdd from "$svgs/PersonAdd.svelte";
  import Phone from "$svgs/Phone.svelte";
</script>

<nav
  class="w-full flex justify-between items-center rounded-full px-4 py-2 border border-gray-700"
>
  <a href="/">
    <Logo />
  </a>
  <div>
    <div class="flex gap-8 text-theme-gray-one uppercase text-xs font-medium">
      <a
        class="hover:text-theme-white flex gap-2 items-center"
        href="/projects"
      >
        <Joystick />
        <span>Projects</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
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
  </div>
</nav>

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
</style>
