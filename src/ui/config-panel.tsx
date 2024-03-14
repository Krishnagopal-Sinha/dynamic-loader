import DOMPurify from "dompurify";
import { ImmerHook } from "use-immer";

export default function ConfigPanel({
  svgOption,
  setSvgOptions,
}: {
  svgOption: svgConfig;
  setSvgOptions: any;
}) {
  return (
    <div className="mx-6 mt-3 mb-6">
      <form className="space-y-6" action="#">
        {/* max-w-sm mx-auto */}
        <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Customize Loader
        </h5>
        {/* ============================= Custom SVG Path ============================= */}

        <div>
          <label
            htmlFor="path"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
          >
            Custom SVG Path
          </label>
          <textarea
            id="path"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="<path>...</path>"
            value={svgOption.svgHtml}
            onChange={(e) => {
              const sanitizedPath = DOMPurify.sanitize(e.target.value);
              setSvgOptions((draft: svgConfig) => {
                draft.svgHtml = e.target.value;
              });
            }}
          />
        </div>

        {/* ============================= Animation Curve ============================= */}

        <div>
          <label
            htmlFor="animation-curve"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Animation Timing Curve
          </label>
          <select
            id="animation-curve"
            value={svgOption.animationCurve}
            onChange={(e) => {
              setSvgOptions((draft: svgConfig) => {
                draft["animationCurve"] = e.target.value;
              });
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="linear">Linear</option>
            <option value="ease">Ease</option>
            <option value="ease-in">Ease In</option>
            <option value="ease-out">Ease Out</option>
            <option value="ease-in-out">Ease In & Out</option>
            <option value="step-end">None</option>
          </select>
        </div>
        {/* ============================= Loader height and width ============================= */}

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <label
              htmlFor="height"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Loader Height
            </label>
            <input
              type="number"
              min="0"
              id="height"
              value={svgOption.height}
              onChange={(e) => {
                setSvgOptions((draft: svgConfig) => {
                  draft.height = parseInt(e.target.value);
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="150"
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Loader Width
            </label>
            <input
              type="number"
              min="0"
              value={svgOption.width}
              onChange={(e) => {
                setSvgOptions((draft: svgConfig) => {
                  draft.width = parseInt(e.target.value);
                });
              }}
              id="width"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="150"
              required
            />
          </div>
        </div>

        {/* ============================= Fill Color ============================= */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <label
              htmlFor="fillColor"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fill Color
            </label>
            <input
              type="color"
              id="fillColor"
              value={svgOption.fillColor}
              onChange={(e) => {
                setSvgOptions((draft: svgConfig) => {
                  draft.fillColor = e.target.value;
                });
                console.log(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10  cursor-pointer disabled:opacity-50 disabled:pointer-events-none sm:w-44 w-full"
              placeholder="150"
              required
            />
          </div>
          <div className="w-full sm:w-auto">
            <label
              htmlFor="strokeColor"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Outline Color
            </label>
            <input
              type="color"
              id="strokeColor"
              value={svgOption.strokeColor}
              onChange={(e) => {
                setSvgOptions((draft: svgConfig) => {
                  draft["strokeColor"] = e.target.value;
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10  cursor-pointer disabled:opacity-50 disabled:pointer-events-none sm:w-44 w-full "
              placeholder="150"
              required
            />
          </div>
        </div>

        {/* ============================= Stroke width and animation duration ============================= */}

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <label
              htmlFor="animDuration"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Duration (in secs)
            </label>
            <input
              type="number"
              min="0"
              id="animDuration"
              value={svgOption.animationDuration}
              onChange={(e) => {
                setSvgOptions((draft: svgConfig) => {
                  draft.animationDuration = parseInt(e.target.value);
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="30"
              required
            />
          </div>
          <div>
            <label
              htmlFor="strokeWidth"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Outline Width
            </label>
            <input
              type="number"
              min="0"
              value={svgOption.strokeWidth}
              onChange={(e) => {
                setSvgOptions((draft: svgConfig) => {
                  draft.strokeWidth = parseInt(e.target.value);
                });
              }}
              id="strokeWidth"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="150"
              required
            />
          </div>
        </div>

        {/* ============================= Stroke width and animation duration ============================= */}

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <label
              htmlFor="startOffset"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Start Offset
            </label>
            <input
              type="number"
              min="0"
              id="startOffset"
              value={svgOption.startOffset}
              onChange={(e) => {
                setSvgOptions((draft: svgConfig) => {
                  draft.startOffset = parseInt(e.target.value);
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="30"
              required
            />
          </div>
          <div>
            <label
              htmlFor="endOffset"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              End Offset
            </label>
            <input
              type="number"
              min="0"
              value={svgOption.endOffset}
              onChange={(e) => {
                setSvgOptions((draft: svgConfig) => {
                  draft.endOffset = parseInt(e.target.value);
                });
              }}
              id="endOffset"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="150"
              required
            />
          </div>
        </div>

        {/* ============================= Gap stroke dasharray ============================= */}

        <div>
          <label
            htmlFor="dasharray"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Gap
          </label>
          <input
            type="number"
            min="0"
            id="dasharray"
            value={svgOption.strokeDasharray}
            onChange={(e) => {
              setSvgOptions((draft: svgConfig) => {
                draft.strokeDasharray = parseInt(e.target.value);
              });
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="150"
            required
          />
        </div>

        {/* ============================= Caution alert ============================= */}

        <div
          className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            Caution: ensure end offset is ~100x or more the value of start
            offset
          </div>
        </div>

        {/* ======= END ========= */}
      </form>
    </div>
  );
}
