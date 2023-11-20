<div class="relative flex justify-center items-center flex-1 bg-white">
  <div class="blue-box blue-box-left" />
  <div class="blue-box blue-box-right" />

  <div class="green-box green-box-left" />
  <div class="green-box green-box-right" />

  <div class="flex flex-col font-medium text-[#0070b1] items-center">
    <span>Emerald</span>
  </div>
</div>

<style>
  .blue-box {
    position: absolute;
    height: 72px;
    width: 72px;
    background: #0070b1;
    border-radius: 8px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  .blue-box-left {
    left: -36px;
  }

  .blue-box-right {
    right: -36px;
  }

  .green-box {
    position: absolute;
    height: 36px;
    width: 36px;
    background: #00c64b;
    border-radius: 4px;
    top: 50%;
    transform: rotate(45deg);
  }

  .green-box-left {
    left: 45px;
  }

  .green-box-right {
    right: 45px;
  }
</style>
