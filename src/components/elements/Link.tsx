import React from "react";
import Button from "./Button";
import TextLink from "./TextLink";

export type LinkProps = {
  link?: {
    title?: string;
    url?: string;
    target?: string;
  };
  type?: string;
  href?: string;
  to?: string;
  target?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function Link(props: LinkProps) {
  const { link, type, href, to, target, children, className, onClick, ...other } = props;
  const url = link?.url || href || to || "#";
  const isPlainLink = !type && !children;
  const defaultLinkClasses = `inline-flex items-center ${className || ""} ${
    isPlainLink && (!url || url === "#") ? "pointer-events-none cursor-default" : ""
  }`;

  return (
    <a
      href={url}
      target={link?.target || target || ""}
      className={defaultLinkClasses}
      onClick={onClick}
      {...other}
    >
      <LinkTypeRenderer {...props} />
    </a>
  );
}

export function LinkTypeRenderer(props: LinkProps) {
  const { type, link, children } = props;
  return (
    <>
      {!type && !children && (link?.title?.length ?? 0) > 0 && (
        <span dangerouslySetInnerHTML={{ __html: link!.title! }} />
      )}
      {type === "button" && <Button {...(props as any)} />}
      {type === "text" && <TextLink {...(props as any)} />}
      {children}
    </>
  );
}
