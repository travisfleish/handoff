import clsx from "clsx";
import { Link, type LinkProps } from "./Link";

export type LinkGroupProps = {
  links: LinkProps[];
  className?: string;
  noFullWidthOnMobile?: boolean;
  centered?: boolean;
};

function LinkGroup({ links, className = "", noFullWidthOnMobile, centered = false }: LinkGroupProps) {
  return (
    <div
      className={clsx(
        "link-group",
        noFullWidthOnMobile ? "relative mx-auto block w-fit md:w-auto" : "w-full md:w-auto",
        className
      )}
    >
      <div className={clsx("-mb-4 flex flex-col md:flex-row md:space-x-5", centered ? "items-center justify-center" : "")}>
        {links?.length > 0 &&
          links.map((item, i) => (
            <div key={`linkgroupitem${i}`} className={clsx(links.length > 1 && "pb-4", centered && "mx-auto w-fit")}>
              <Link {...item} className={links.length > 1 ? "w-full md:w-auto" : ""} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default LinkGroup;
