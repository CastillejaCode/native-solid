import { Component, createEffect } from "solid-js";
import { gsap } from "gsap";

const App: Component = () => {
  createEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "back", stagger: 0.3, duration: 0.7 },
    });
    tl.from(".leftText", { x: "100vw" });
    tl.from(".rightText", { x: "-100vw" }, "<25%");
    tl.from(".title", { opacity: 0, duration: 0.5, ease: "back" }, ">");
  });

  return (
    <div class="relative h-screen w-screen overflow-x-hidden bg-white">
      <h1 class="title pl-4 pt-2 font-[Kalam] text-3xl">native.</h1>
      <div class="flex flex-col gap-6 p-4">
        <h2 class="leftText text-6xl">
          SAVE <br /> THE <br /> WORLD.
        </h2>
        <h2 class="rightText text-end text-6xl">PLANT NATIVE.</h2>
        <h2 class="leftText text-6xl">
          SAVE <br /> THE <br /> WORLD.
        </h2>
        <h2 class="rightText  text-end text-6xl">PLANT NATIVE.</h2>
      </div>
    </div>
  );
};

export default App;
