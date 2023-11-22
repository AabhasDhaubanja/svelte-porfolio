<script lang="ts">
  import Canvas from "$lib/Canvas.svelte";
  import CoolButton from "$lib/CoolButton.svelte";
  import TextInput from "$lib/inputs/TextInput.svelte";
  import Send from "$svgs/Send.svelte";

  let name: string = "";
  let email: string = "";
  let subject: string = "";

  const handleSubmit = () => {
    console.log(name, email, subject);
  };
</script>

<div class="flex flex-col items-center gap-12 my-12">
  <Canvas position="fixed" />

  <div class="flex flex-col gap-4 text-center">
    <h2 class="text-theme-white text-6xl font-semibold">Contact Me</h2>
    <span class="description"> Love to hear from you, Get in touch! </span>
  </div>

  <form class="flex flex-col gap-8" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col gap-4 w-[500px]">
      <TextInput bind:value={name} name="name" title="Name" required />
      <TextInput
        bind:value={email}
        name="email"
        title="Email"
        type="email"
        required
      />
      <TextInput bind:value={subject} name="subject" title="Subject" required />
    </div>
    <CoolButton type="submit">
      <div class="flex items-center gap-2">
        <Send />
        Submit
      </div>
    </CoolButton>
  </form>
</div>

<style>
  .description {
    background-image: linear-gradient(
      90deg,
      theme("colors.theme-gray-two"),
      theme("colors.theme-white") 30%,
      theme("colors.theme-white") 70%,
      theme("colors.theme-gray-two")
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
  }
</style>
