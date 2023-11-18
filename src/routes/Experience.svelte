<script lang="ts">
  type Company = { position: string; company: string };

  const companies: Company[] = [
    {
      position: "Software Engineer / Developer",
      company: "Renegade Insurance",
    },
    {
      position: "FullStack Developer",
      company: "GNX Studio",
    },
  ];
</script>

<section class="text-center px-24">
  <div class="wrapper py-24 flex flex-col gap-24 items-center">
    <div class="flex flex-col items-center gap-4">
      <h2 class="text-theme-white text-6xl font-semibold">Experience</h2>
      <span class="description"> Companies I have worked with </span>
    </div>

    <div class="flex flex-col gap-6">
      {#each companies as company (company.company)}
        <div class="flex flex-col gap-1">
          <h3 class="font-bold text-theme-white text-lg">
            {company.position}
          </h3>
          <span class="text-sm text-white">
            {company.company}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .wrapper {
    background: radial-gradient(
      circle at 50% -168%,
      theme("colors.theme-black") 73%,
      theme("colors.theme-cyan"),
      theme("colors.theme-white") 118%
    );
    border-radius: 24px;
  }

  .description {
    background-image: linear-gradient(
      90deg,
      theme("colors.theme-gray-two"),
      theme("colors.theme-white") 20%,
      theme("colors.theme-white") 80%,
      theme("colors.theme-gray-two")
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
  }
</style>
