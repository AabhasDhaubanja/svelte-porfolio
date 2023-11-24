<script lang="ts">
  import Canvas from "$lib/Canvas.svelte";
  import CoolButton from "$lib/CoolButton.svelte";
  import TextInput from "$lib/inputs/TextInput.svelte";
  import Send from "$svgs/Send.svelte";
  import Progress from "$svgs/Progress.svelte";
  import { toast } from "$lib/toast/store";
  import Toast from "$lib/toast/Toast.svelte";

  let name: string = "";
  let email: string = "";
  let subject: string = "";

  let loading = false;

  const handleSubmit = () => {
    loading = true;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ name, email, subject }).toString(),
    })
      .then((res) => {
        if (res.status.toString().startsWith("2")) {
          toast("Message sent successfully");
          name = "";
          email = "";
          subject = "";
        } else {
          toast("Something went wrong", "ERROR");
        }
      })
      .catch(() => toast("Something went wrong", "ERROR"))
      .finally(() => (loading = false));
  };
</script>

<section class="flex flex-col items-center gap-12 my-12">
  <Canvas position="fixed" noGradient />

  <div class="flex flex-col gap-4 text-center">
    <h2 class="text-theme-white text-3xl md:text-4xl xl:text-6xl font-semibold">
      Contact Me
    </h2>
    <span class="description"> Love to hear from you, Get in touch! </span>
  </div>

  <form
    data-netlify="true"
    class="flex flex-col items-center gap-8 w-full"
    on:submit|preventDefault={handleSubmit}
  >
    <div class="flex flex-col gap-4 w-full sm:w-[500px]">
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
    <CoolButton type="submit" {loading}>
      <div class="flex items-center gap-2">
        {#if loading}
          <Progress />
        {:else}
          <Send />
        {/if}
        Submit
      </div>
    </CoolButton>
  </form>
  <Toast />
</section>

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
