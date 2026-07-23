import LinkGroup, { type LinkGroupProps } from "../elements/LinkGroup";
import { getClassValue } from "../../utils/colorHelpers";
import { getSplitBreakText } from "../../utils/text";
import DotSubheading from "./DotSubheading";

interface TextMastheadProps {
  content?: {
    subheading?: string;
    heading?: string;
    content?: string;
    links?: LinkGroupProps["links"];
  };
  options?: {
    max_width?: number;
    content_max_width?: number;
    text_size?: "large" | "default";
    alignment?: "center" | "left";
    simple_subheading?: boolean;
    subheading_colour?: {
      colours?: string;
    };
    add_springs?: boolean;
    spring_colour?: {
      colours?: string;
    };
  };
}

function TextMasthead({ content, options }: TextMastheadProps) {
  const widthRems = options?.max_width ? Number(options.max_width) / 16 : false;
  const contentWidthRems = options?.content_max_width ? Number(options.content_max_width) / 16 : false;
  const subheadingColour = options?.subheading_colour?.colours;
  const springColour = options?.spring_colour?.colours;
  const leftAlign = options?.alignment === "left";
  const bars = Array.from({ length: 25 }, (_, i) => i + 1);

  const headingSize = options?.text_size === "large" ? "is-large" : "";
  const contentSize = options?.text_size === "large" ? "text-[22px]" : "text-[18px]";

  return (
    <div
      className={`relative ${leftAlign ? "" : "mx-auto"} ${widthRems ? "" : "max-w-[57.5rem]"}`}
      style={widthRems ? { maxWidth: `${widthRems}rem` } : {}}
    >
      <div className={`relative z-10 flex flex-col ${leftAlign ? "" : "items-center text-center"}`}>
        {/* Subheading */}
        {content?.subheading &&
          (options?.simple_subheading ? (
            <span
              className="text-[15px] mb-3 inline-block opacity-80 md:mb-4"
              dangerouslySetInnerHTML={{ __html: content.subheading }}
            />
          ) : (
            <DotSubheading subheading={content.subheading} colour={subheadingColour} />
          ))}

        {/* Heading */}
        {content?.heading && (
          <h1
            className={`mb-5 ${headingSize}`}
            dangerouslySetInnerHTML={{
              __html: getSplitBreakText({ text: content.heading }),
            }}
          />
        )}

        {/* Body */}
        {content?.content && (
          <p
            className={`mb-8 font-body opacity-80 md:mb-12 ${contentSize}`}
            dangerouslySetInnerHTML={{ __html: content.content }}
            style={contentWidthRems ? { maxWidth: `${contentWidthRems}rem` } : {}}
          />
        )}

        {/* Links / CTAs */}
        {(content?.links?.length ?? 0) > 0 && (
          <div className="w-fit">
            <LinkGroup links={content!.links!} centered={!leftAlign} />
          </div>
        )}
      </div>

      {/* Decorative springs */}
      {options?.add_springs && (
        <>
          <div className="absolute inset-y-0 right-[90%] flex w-[80%] items-stretch justify-between md:right-[105%] lg:right-[110%]">
            {bars.map((index) => (
              <div key={index} className={`h-full ${getClassValue(springColour || "lightGrey")}`} style={{ width: 12 - index * 0.5 }} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-[90%] flex w-[80%] flex-row-reverse items-stretch justify-between md:left-[105%] lg:left-[110%]">
            {bars.map((index) => (
              <div key={index} className={`h-full ${getClassValue(springColour || "lightGrey")}`} style={{ width: 12 - index * 0.5 }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TextMasthead;
