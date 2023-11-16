<script>
	import Logo from './Logo.svelte'
</script>

<nav class="w-full flex justify-between items-center rounded-full px-4 py-2 border border-theme-gray-two">
	<a href="/">
		<Logo />
	</a>
	<div>
	<div class="flex gap-4 text-theme-gray-one uppercase text-sm">
		<a class="hover:text-theme-white" href="/">Projects</a>
		<a class="hover:text-theme-white" href="/">Socials</a>
		<a class="hover:text-theme-white" href="/">Contact</a>
	</div>
	</div>
</nav>

<style>
	nav {
		max-width: 1024px;
		}
</style>
