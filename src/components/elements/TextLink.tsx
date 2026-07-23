import { type ReactNode } from "react";
import { RightArrowCircle } from "../icons/Icons";

type TextLinkProps = {
  link?: {
    title: string;
    url: string;
  };
  text_link: {
    background_color: "navy" | "white";
  };
  className?: string;
  children?: ReactNode;
};

function TextLink({ className = "", link, children, text_link }: TextLinkProps) {
  const circleClassMap: Record<string, string> = {
    navy: "text-navy group-hover:text-blue",
    white: "text-white group-hover:text-lightBlue",
  };

  const arrowClassMap: Record<string, string> = {
    navy: "text-white",
    white: "text-navy",
  };

  return (
    <div className={`text-16 group inline-flex cursor-pointer select-none items-center leading-tight ${className}`}>
      {(link?.title || children) && (
        <div className="flex items-center gap-[14px] font-bold text-inherit">
          <RightArrowCircle
            circleClassName={circleClassMap[text_link?.background_color]}
            arrowClassName={arrowClassMap[text_link?.background_color]}
          />
          {link?.title && (
            <span style={{ maxWidth: "calc(100% - 40px)" }} dangerouslySetInnerHTML={{ __html: link.title }} />
          )}
          {!link?.title && children && children}
        </div>
      )}
    </div>
  );
}

export default TextLink;
