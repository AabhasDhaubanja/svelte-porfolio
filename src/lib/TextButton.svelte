<button class="hover:text-theme-white transition-colors"><slot /></button>

<style>
  button {
    color: theme("colors.theme-gray-one");
    background: none;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif, system-ui;
  }
  button:focus-visible,
  button:active {
    outline: none;
    color: theme("colors.theme-white");
    text-shadow: 4px 4px 4px rgba(94, 234, 212, 0.4);
  }
</style>
