import React from "react";
import clsx from "clsx";
import { getSectionColors } from "../../utils/colorHelpers";

const paddingTopMap: Record<string, string> = {
  none: "pt-0",
  min: "pt-8 md:pt-20",
  tiny: "pt-8 md:pt-24",
  xSmall: "pt-10 md:pt-[104px]",
  small: "pt-10 md:pt-28",
  medium: "pt-12 md:pt-[120px]",
  large: "pt-12 md:pt-36",
  xLarge: "pt-16 md:pt-40",
  huge: "pt-16 md:pt-40 lg:pt-44",
  max: "pt-20 md:pt-[190px]",
};

const paddingBottomMap: Record<string, string> = {
  none: "pb-0",
  min: "pb-8 md:pb-20",
  tiny: "pb-8 md:pb-24",
  xSmall: "pb-10 md:pb-[104px]",
  small: "pb-10 md:pb-28",
  medium: "pb-12 md:pb-[120px]",
  large: "pb-12 md:pb-36",
  xLarge: "pb-16 md:pb-40",
  huge: "pb-16 md:pb-40 lg:pb-44",
  max: "pb-20 md:pb-[190px]",
};

const innerSpacingMap: Record<string, string> = {
  none: "space-y-0",
  min: "space-y-8 md:space-y-8",
  tiny: "space-y-8 md:space-y-[72px]",
  xSmall: "space-y-10 md:space-y-20",
  small: "space-y-12 md:space-y-[88px]",
  medium: "space-y-12 md:space-y-24",
  large: "space-y-12 md:space-y-[104px]",
  xLarge: "space-y-12 md:space-y-[120px]",
  huge: "space-y-16 md:space-y-32",
  max: "space-y-20 md:space-y-44",
};

export type SectionProps = {
  id?: string;
  classnames?: string;
  inner_spacing?: string;
  has_container?: boolean;
  overflow?: boolean;
  background?: {
    background_color?: string;
  };
  padding_top?: string;
  padding_bottom?: string;
  is_rounded?: boolean;
  rounded_options?: {
    has_inner_container?: boolean;
    inner_background_color?: string;
    inner_padding_top?: string;
    inner_padding_bottom?: string;
  };
  children?: React.ReactNode;
};

function Section({
  id = "",
  classnames = "",
  inner_spacing = "max",
  has_container = false,
  overflow = false,
  background,
  padding_top = "huge",
  padding_bottom = "huge",
  is_rounded = false,
  rounded_options = {},
  children,
}: SectionProps) {
  const outerClasses = clsx(classnames, [
    "scroll-mt-10 sm:scroll-mt-24",
    overflow ? "overflow-visible" : "overflow-hidden",
    getSectionColors(background?.background_color),
    paddingTopMap[padding_top],
    paddingBottomMap[padding_bottom],
    is_rounded && has_container ? "container" : "",
  ]);

  const innerClasses = clsx([
    (!is_rounded && has_container) || (is_rounded && rounded_options?.has_inner_container) ? "container" : "",
    innerSpacingMap[inner_spacing],
    is_rounded ? "sm:rounded-2xl" : "",
    is_rounded ? getSectionColors(rounded_options?.inner_background_color) : "",
    is_rounded
      ? `${paddingBottomMap[rounded_options?.inner_padding_bottom || ""] || ""} ${paddingTopMap[rounded_options?.inner_padding_top || ""] || ""}`
      : "",
  ]);

  return (
    <section id={id} className={clsx("section__outer", outerClasses)}>
      <div className={clsx("section__inner", innerClasses)}>
        {children}
      </div>
    </section>
  );
}

export default Section;
