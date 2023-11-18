<script>
  import Logo from "./Logo.svelte";
  import Joystick from "./svgs/Joystick.svelte";
  import PersonAdd from "./svgs/PersonAdd.svelte";
  import Phone from "./svgs/Phone.svelte";
</script>

<nav
  class="w-full flex justify-between items-center rounded-full px-4 py-2 border border-gray-700"
>
  <a href="/">
    <Logo />
  </a>
  <div>
    <div class="flex gap-8 text-theme-gray-one uppercase text-xs font-medium">
      <a class="hover:text-theme-white flex gap-2 items-center" href="/">
        <Joystick />
        <span>Projects</span>
      </a>
      <a class="hover:text-theme-white flex gap-2 items-center" href="/">
        <PersonAdd />
        <span>Socials</span>
      </a>
      <a class="hover:text-theme-white flex gap-2 items-center" href="/">
        <Phone />
        <span>Contact</span>
      </a>
    </div>
  </div>
</nav>

<style>
  nav {
    max-width: 1024px;
  }
</style>
