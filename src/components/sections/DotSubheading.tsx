import { getClassValue } from "../../utils/colorHelpers";

function DotSubheading({ subheading, colour }: { subheading: string; colour?: string }) {
  const bars = Array.from({ length: 25 }, (_, i) => i + 1);
  return (
    <div className="mb-6">
      <div className="relative inline-flex items-center space-x-2 rounded-l-full bg-lightGrey py-[.3rem] pl-2 pr-3 md:py-2 md:pl-3 md:pr-6">
        <div className={`h-2 w-2 shrink-0 rounded-full ${getClassValue(colour || "blue")}`} />
        <span className="text-[15px] text-navy" dangerouslySetInnerHTML={{ __html: subheading }} />
        {/* spring edge decoration */}
        <div className="absolute inset-y-0 left-[100%] !ml-0 flex w-[1.375rem] items-stretch justify-between pl-[.15rem]">
          {bars.slice(0, 5).map((index) => (
            <div key={index} className="h-full bg-lightGrey" style={{ width: 3.5 - 0.5 * index }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DotSubheading;
