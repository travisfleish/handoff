import type { JSX } from "react";
import clsx from "clsx";
import LinkGroup, { type LinkGroupProps } from "./LinkGroup";
import HighlightedText from "./HighlightedText";

interface ImageProps {
  url: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
}

export type TextCardProps = {
  text_card: {
    icon?: ImageProps;
    subheading?: string;
    heading?: string;
    content?: string;
    links?: LinkGroupProps["links"];
    options?: {
      section_max_width?: string;
      custom_max_width?: number;
      text_alignment?: "left" | "center" | "right";
      has_mobile_text_alignment?: boolean;
      mobile_text_alignment?: "left" | "center" | "right";
      section_alignment?: "left" | "center" | "right";
      add_icon?: boolean;
      subheading_tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      subheading_classes?: string;
      heading_tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      heading_font_size?: string;
      heading_classes?: string;
      heading_max_width?: string;
      heading_highlighted_color?: string;
      content_max_width?: string;
      content_classes?: string;
      content_font_size?: string;
      custom_y_spacing?: string;
      mobile_section_alignment?: string;
    };
  };
};

const ySpacings: Record<string, string> = {
  h1: "space-y-6",
  h2: "space-y-4 md:space-y-5",
  h3: "space-y-4 md:space-y-5",
};

function TextCard({
  text_card: {
    icon,
    subheading = "",
    heading = "",
    content = "",
    links = [],
    options: {
      section_max_width = "",
      custom_max_width,
      text_alignment = "left",
      has_mobile_text_alignment = false,
      mobile_text_alignment = "left",
      add_icon = false,
      section_alignment = "left",
      subheading_tag = "h6",
      subheading_classes = "",
      heading_tag = "h2",
      heading_font_size = "default",
      heading_classes = "",
      heading_max_width = "",
      heading_highlighted_color = "",
      content_max_width = "",
      content_font_size,
      content_classes = "",
      custom_y_spacing = "",
      mobile_section_alignment = "",
    } = {},
  },
}: TextCardProps) {
  const HeadingTag = (heading_tag as keyof JSX.IntrinsicElements) || "h2";
  const headingFontSize = heading_font_size === "default" ? HeadingTag : heading_font_size;
  const SubheadingTag = (subheading_tag as keyof JSX.IntrinsicElements) || "h6";

  const ySpacing = custom_y_spacing || ySpacings[headingFontSize as string] || "space-y-2";
  const flexItemAlignmentClasses = clsx(
    text_alignment === "center" ? "items-center" : text_alignment === "right" ? "items-end" : "items-start"
  );
  const sectionAlignmentClasses = clsx(
    section_alignment === "center" ? "md:items-center" : section_alignment === "right" ? "items-end" : "items-start"
  );

  return (
    <div className={clsx("flex w-full flex-col", mobile_section_alignment, sectionAlignmentClasses)}>
      <div
        className={clsx(
          "text-card flex flex-col",
          flexItemAlignmentClasses,
          ySpacing,
          `text-${has_mobile_text_alignment ? mobile_text_alignment : text_alignment}`,
          `md:text-${text_alignment} md:${section_max_width}`
        )}
        style={custom_max_width ? { maxWidth: `${custom_max_width}rem` } : {}}
      >
        {/* Icon */}
        {add_icon && icon?.url && (
          <div className="relative !mb-2 flex h-8 w-8 items-center justify-center md:!mb-3">
            <img src={icon.url} alt={icon.alt || icon.title || ""} className="h-full w-full object-contain" />
          </div>
        )}

        {/* Subheading */}
        {subheading && (
          <SubheadingTag
            className={clsx("text-[15px] w-full font-heading tracking-[0.011em] opacity-80", subheading_classes)}
            dangerouslySetInnerHTML={{ __html: subheading }}
          />
        )}

        {/* Heading */}
        {heading && (
          <HighlightedText
            tag={HeadingTag as string}
            content={heading}
            className={clsx("w-full", `text-${headingFontSize} ${heading_classes} md:${heading_max_width}`)}
            color={heading_highlighted_color}
          />
        )}

        {/* Content */}
        {content && (
          <div
            className={clsx(
              "w-full font-body opacity-80",
              content_font_size ? `text-${content_font_size}` : "text-[18px]",
              content_classes,
              `md:${content_max_width}`
            )}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {/* Links */}
        {(links?.length ?? 0) > 0 && (
          <div className="!md:mt-8 !mt-6 lg:!mt-[3.4375rem]">
            <LinkGroup centered links={links!} className={headingFontSize === "h1" ? "md:pt-4" : "pt-2"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TextCard;
