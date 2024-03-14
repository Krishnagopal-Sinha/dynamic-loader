import { useEffect, useState } from "react";
import "./loader.css";

export default function LoaderPreview({ svgOption }: { svgOption: svgConfig }) {
  const [lightMode, setLightMode] = useState(false);
  //TODO: add line cap to config panel
  //add styles dynamically
  const finalSvgHtml = svgOption.svgHtml
    .replace(
      "<svg",
      `<svg style="
  
      animation-name: loader;
      animation-iteration-count: infinite;
      animation-timing-function: ${svgOption.animationCurve};
      animation-duration: ${svgOption.animationDuration}s;
      fill: ${svgOption.fillColor};
      stroke-dasharray: ${svgOption.strokeDasharray};
      stroke-width: ${svgOption.strokeWidth};
      stroke: ${svgOption.strokeColor};
      --startingOffset: ${svgOption.startOffset};
      --endingOffset: ${svgOption.endOffset};
      zoom: ${svgOption.scale};
      stroke-linecap: round;
      overflow:visible;
      display:block;
      margin:auto;
"`
    )
    .replace(/\sfill=[^>\s]+/gi, ""); //remove fill

  return (
    <div className="m-6 mb-0">
      <label className="inline-flex items-center cursor-pointer ml-2 mb-4">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => {
            setLightMode((v) => !v);
          }}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
        <p className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Light Background
        </p>
      </label>

      <div
        className={`rounded-lg ${
          lightMode ? "bg-white" : "bg-black"
        } max-h-fit  `}
        style={{
          padding: `${svgOption.innerPadding}px`,
        }}
        dangerouslySetInnerHTML={{
          __html: finalSvgHtml,
        }}
      ></div>
      {/* <h5>{finalSvgHtml}</h5> */}
    </div>
  );
}
