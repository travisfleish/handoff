import { useState } from "react";
import { Link } from "../elements/Link";
import { CTASpring } from "../icons/Icons";
import { getButtonLinkProps } from "../../utils/links";
import Button from "../elements/Button";

interface GetStartedCTAProps {
  heading: string;
  content: string;
  link: {
    title: string;
    url: string;
    target?: "_blank" | "";
  };
}

function GetStartedCTA({ heading, content, link }: GetStartedCTAProps) {
  const [hovered, setHovered] = useState(false);

  const buttonProps = getButtonLinkProps({
    title: link?.title,
    button: {
      background_color: "white",
      type: "default",
    },
  });

  return (
    <div className="flex flex-col items-center overflow-hidden rounded-lg bg-blue pt-[1.75rem] text-white md:pt-12 lg:flex-row lg:pl-12 lg:pr-10 lg:pt-0">
      {/* Content */}
      <div className="relative z-10 mb-6 space-y-4 px-5 text-center lg:mb-0 lg:px-0 lg:text-left">
        {heading && (
          <span
            className="text-[40px] leading-[1.1] tracking-[-0.05em] font-heading mx-auto max-w-[13.8rem] lg:mx-0 lg:max-w-none block"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        {content && (
          <p
            className="text-[18px] max-w-[18rem] font-body lg:max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>

      {/* Decorative spring */}
      <div className="order-last mb-[-50%] mr-[-75%] mt-[-10%] w-4/5 rotate-[55deg] lg:order-[2] lg:my-[-13%] lg:ml-auto lg:mr-0 lg:w-[17.8125rem] lg:rotate-45">
        <div className={`hidden translate-x-8 translate-y-[.2rem] transition-transform duration-500 lg:block ${hovered ? "translate-x-[15%]" : ""}`}>
          <CTASpring />
        </div>
        <div className={`rotate-180 transition-transform duration-500 ${hovered ? "lg:translate-x-[-15%]" : ""}`}>
          <CTASpring />
        </div>
      </div>

      {/* CTA Button */}
      {link?.title && (
        <div
          className="relative z-10 w-auto px-6 text-center md:mx-auto lg:order-last lg:ml-auto lg:mr-0 lg:w-auto lg:shrink-0 lg:px-0 lg:text-left"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link href={link.url} target={link.target}>
            <Button {...(buttonProps as any)} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default GetStartedCTA;
