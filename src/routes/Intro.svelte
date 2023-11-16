<script>
	import Navbar from "$lib/Navbar.svelte"
	import CoolButton from "$lib/CoolButton.svelte"
	import TextButton from "$lib/TextButton.svelte"
    import Arrow from "$lib/Arrow.svelte";
</script>

<section class="flex flex-col">

	<div class="flex justify-center py-8">
        <Navbar />
	</div>

	<div class="flex-1 flex flex-col justify-center items-center">
	<div class="flex flex-col gap-4 items-center text-center ">
		<div class="text-theme-gray-one text-xl font-semibold">
			Hi I'm Aabhas Dhaubanja
		</div>
		<h2 class="title text-6xl font-bold">
			I build user-friendly and visually appealing web applications
		</h2> 
		<div class="flex justify-center gap-4">
		<CoolButton>
			Blog
		</CoolButton>
		<TextButton>	
			About Me
		</TextButton>	
		</div>
		<div class="py-12">
			<Arrow />
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
	background-image: linear-gradient(180deg, theme('colors.theme-white') 50%, theme('colors.theme-gray-two'));
	line-height: 1.2;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-moz-text-fill-color: transparent;
	-moz-background-clip: text;
	}
</style>
