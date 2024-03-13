"use client";

import ConfigPanel from "@/ui/config-panel";
import LoaderPreview from "@/ui/loader-preview";
import Image from "next/image";
import { useImmer } from "use-immer";

export default function Home() {
  const [svgOptions, setSvgOptions] = useImmer({
    height: 150,
    width: 150,
    strokeColor: "#ff2600",
    fillColor: "none",
    strokeWidth: 20,
    animationDuration: 20,
    animationCurve: "linear",
    startOffset: 0,
    endOffset: 6000,
    strokeDasharray: 500,
  });

  return (
    <main className="p-4 md:p-12 ">
       <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </section>
      <div className="flex flex-col md:flex-row justify-center min-h-screen items-center h-full w-full bg-sky-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 md:gap-20 ">
        <LoaderPreview svgOption={svgOptions} />
        <ConfigPanel svgOption={svgOptions} setSvgOptions={setSvgOptions} />
      </div>
    </main>
  );
}
