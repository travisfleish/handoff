import { getTextColor } from "./colorHelpers";

interface SplitBreakTextProps {
  text: string;
  breakAtAll?: boolean;
  disable?: boolean;
}

export const getSplitBreakText = ({ text, breakAtAll, disable = false }: SplitBreakTextProps): string => {
  if (!text) return "";
  if (disable) return text.replace(/<>/g, "");
  return text.replace(/<>/g, `<span class="br${breakAtAll ? " br--break-at-all" : ""}"></span>`);
};

export const getHighlightedText = ({
  content,
  disable = false,
  color,
}: {
  content: string;
  disable?: boolean;
  color: string;
}): string => {
  const highlightColor = getTextColor(color);
  return content?.replace(/\|([^*]+?)\|/g, disable ? "" : `<span class="${highlightColor}">$1</span>`);
};

export const getCapitalisedString = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
