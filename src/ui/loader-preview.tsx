import { useEffect, useState } from "react";
import "./loader.css";

export default function LoaderPreview({ svgOption }: { svgOption: svgConfig }) {
  const [lightMode, setLightMode] = useState(false);
  const [codePageActive, setCodePageActive] = useState(false);
  //TODO: add line cap to config panel

  //==  Remove fill  ===
  function cleanFillFromStyleAttribute(svgString: string) {
    return svgString.replace(/style="([^"]*)"/g, (match, styleContent) => {
      const cleanedStyleContent = styleContent
        .split(";")
        .filter((style: string) => !style.trim().startsWith("fill:"))
        .join(";");
      return `style="${cleanedStyleContent}"`;
    });
  }

  let cleanFill = cleanFillFromStyleAttribute(svgOption.svgHtml);
  cleanFill = cleanFill
    .replace(/\sfill="[^"]+"/gi, "")
    .replace(/\sfill='[^']+'/gi, "");
  cleanFill = cleanFill.replace(
    /<style>([\s\S]*?)<\/style>/gi,
    function (match, p1) {
      const cleanedStyleContent = p1.replace(/fill:[^;}]+;?/gi, "");
      return `<style>${cleanedStyleContent}</style>`;
    }
  );

  //add styles dynamically
  const finalSvgHtml = cleanFill.replace(
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
  );

  return (
    <div className=" m-6 mb-6 md:w-2/5 md:h-screen overflow-scroll pr-6 ">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex  -mb-px mx-4">
          <li className="me-2">
            <a
              className={`inline-block p-4 ${
                !codePageActive
                  ? " text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              onClick={(e) => {
                e.stopPropagation;
                setCodePageActive(false);
              }}
            >
              Loader
            </a>
          </li>
          <li>
            <a
              className={`inline-block p-4 ${
                codePageActive
                  ? " text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              aria-current="page"
              onClick={(e) => {
                e.stopPropagation;
                setCodePageActive(true);
              }}
            >
              Code
            </a>
          </li>
        </ul>
      </div>
      {codePageActive ? (
        <div>
          <div>
            <label
              htmlFor="htmlCode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
            >
              SVG (Background Removed):
            </label>
            <textarea
              id="htmlCode"
              rows={16}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="//svg file"
              value={cleanFill.replace(
                "<svg",
                `<svg stroke="${svgOption.strokeColor}" fill="none"
            "`
              )}
            />
          </div>

          <div>
            <label
              htmlFor="htmlCode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
            >
              HTML:
            </label>
            <textarea
              id="htmlCode"
              rows={16}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="//svg file"
              value={finalSvgHtml}
            />
          </div>

          <div>
            <label
              htmlFor="cssCode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
            >
              CSS:
            </label>
            <textarea
              id="cssCode"
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="//style.css"
              value={`@keyframes loader {
                0% {
                  stroke-dashoffset: ${svgOption.startOffset};
                }
              
                100% {
                  stroke-dashoffset: ${svgOption.endOffset};
                }
              }
              `}
            />
          </div>
        </div>
      ) : (
        <div className="my-4">
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
      )}
    </div>
  );
}
