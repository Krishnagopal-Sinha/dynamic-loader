import { useEffect, useState } from "react";
import "./loader.css";

export default function LoaderPreview({ svgOption }: { svgOption: svgConfig }) {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document
      .getElementById("loader")
      ?.style.setProperty("--startingOffset", svgOption.startOffset.toString());
    document
      .getElementById("loader")
      ?.style.setProperty("--endingOffset", svgOption.endOffset.toString());
  }, [svgOption.startOffset, svgOption.endOffset]);

  return (

      <div className="m-6 mb-0">
        <label className="inline-flex items-center cursor-pointer ml-4">
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
          }  p-6 m-2`}
        >
          <svg
            id="loader"
            xmlns="http://www.w3.org/2000/svg"
            width={svgOption.width}
            height={svgOption.height}
            viewBox="0 0 1406 1372"
            style={{
              animationName: "load",
              animationIterationCount: "infinite",
              animationTimingFunction: `${svgOption.animationCurve}`,
              animationDuration: `${svgOption.animationDuration}s`,
              fill: `${svgOption.fillColor}`,
              strokeDasharray: `${svgOption.strokeDasharray}`,
              strokeWidth: `${svgOption.strokeWidth}`,
              stroke: `${svgOption.strokeColor}`,
            }}
            dangerouslySetInnerHTML={{ __html: svgOption.pathHtml }}
          ></svg>
        </div>
      </div>
     

  );
}
