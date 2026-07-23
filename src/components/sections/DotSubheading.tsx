import { getClassValue } from "../../utils/colorHelpers";

const pillBackground: Record<string, string> = {
  lightGrey: "bg-lightGrey",
  white: "bg-white",
  white15: "bg-white/15",
};

function DotSubheading({
  subheading,
  colour,
  background = "lightGrey",
}: {
  subheading: string;
  colour?: string;
  background?: keyof typeof pillBackground;
}) {
  const bars = Array.from({ length: 25 }, (_, i) => i + 1);
  const bgClass = pillBackground[background] ?? "bg-lightGrey";
  const isDark = background === "white15";
  const textClass = isDark ? "text-white" : "text-navy";

  return (
    <div className="mb-6">
      <div
        className={`relative inline-flex items-center space-x-2 rounded-l-full ${bgClass} py-[.3rem] pl-2 pr-3 md:py-2 md:pl-3 md:pr-6`}
      >
        <div className={`h-2 w-2 shrink-0 rounded-full ${getClassValue(colour || "blue")}`} />
        <span
          className={`text-[15px] ${textClass}`}
          dangerouslySetInnerHTML={{ __html: subheading }}
        />
        {/* spring edge decoration */}
        <div className="absolute inset-y-0 left-[100%] !ml-0 flex w-[1.375rem] items-stretch justify-between pl-[.15rem]">
          {bars.slice(0, 5).map((index) => (
            <div key={index} className={`h-full ${bgClass}`} style={{ width: 3.5 - 0.5 * index }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DotSubheading;
