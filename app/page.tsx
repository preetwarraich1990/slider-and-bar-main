"use client";

import ScaleBar from "./__components/bar.component";
import { SliderComponent } from "./__components/slider.component";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center p-24 gap-8">
      <SliderComponent />
      <ScaleBar />
    </main>
  );
}
