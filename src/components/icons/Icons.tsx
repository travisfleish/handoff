import clsx from "clsx";

export function RightArrowCircle({
  circleClassName = "text-navy",
  arrowClassName = "text-white",
  width = 27,
  height = 26,
}: {
  circleClassName?: string;
  arrowClassName?: string;
  disableTransitions?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1817_13290)">
        <rect x="0.802734" width="26" height="26" rx="13" fill="currentColor"
          className={clsx("transition-colors duration-300 ease-in-out", circleClassName)} />
        <path
          className={clsx("transition-colors duration-300 ease-in-out", arrowClassName)}
          d="M13.4081 9.41211L16.9952 12.9993M16.9952 12.9993L13.4081 16.5864M16.9952 12.9993H9.39893"
          stroke="currentColor" strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1817_13290">
          <rect x="0.802734" width="26" height="26" rx="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function RightArrow() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.58819 1L10.5882 6M10.5882 6L5.58819 11M10.5882 6L0 6" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}

export function CircleArrow() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.82912 7.55857L12.4409 7.55857M12.4409 7.55857L12.4409 12.1704M12.4409 7.55857L7.55786 12.4417"
        stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}

export function CTASpring() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 292 257" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="285.46" height="255.885" transform="matrix(1 0 0 -1 0.664062 256.337)" fill="white" />
      <path d="M0.664062 256.337V0.45165" stroke="#0000DC" strokeWidth="0.32387" />
      <path d="M9.87305 256.337V0.45165" stroke="#0000DC" strokeWidth="0.647741" />
      <path d="M19.0801 256.337V0.45165" stroke="#0000DC" strokeWidth="0.971611" />
      <path d="M28.2891 256.337V0.45165" stroke="#0000DC" strokeWidth="1.29548" />
      <path d="M37.498 256.337V0.45165" stroke="#0000DC" strokeWidth="1.61935" />
      <path d="M46.7051 256.337V0.45165" stroke="#0000DC" strokeWidth="1.94322" />
      <path d="M55.9141 256.337V0.45165" stroke="#0000DC" strokeWidth="2.26709" />
      <path d="M65.123 256.337V0.45165" stroke="#0000DC" strokeWidth="2.59096" />
      <path d="M74.3301 256.337V0.45165" stroke="#0000DC" strokeWidth="2.91483" />
      <path d="M83.5391 256.337V0.45165" stroke="#0000DC" strokeWidth="3.2387" />
      <path d="M92.748 256.337V0.45165" stroke="#0000DC" strokeWidth="3.56257" />
      <path d="M101.957 256.337V0.45165" stroke="#0000DC" strokeWidth="3.88644" />
      <path d="M111.164 256.337V0.45165" stroke="#0000DC" strokeWidth="4.21031" />
      <path d="M120.373 256.337V0.45165" stroke="#0000DC" strokeWidth="4.53418" />
      <path d="M129.582 256.337V0.45165" stroke="#0000DC" strokeWidth="4.85806" />
      <path d="M138.789 256.337V0.45165" stroke="#0000DC" strokeWidth="5.18193" />
      <path d="M147.998 256.337V0.45165" stroke="#0000DC" strokeWidth="5.5058" />
      <path d="M157.207 256.337V0.45165" stroke="#0000DC" strokeWidth="5.82967" />
      <path d="M166.414 256.337V0.45165" stroke="#0000DC" strokeWidth="6.15354" />
      <path d="M175.623 256.337V0.45165" stroke="#0000DC" strokeWidth="6.47741" />
      <path d="M184.832 256.337V0.45165" stroke="#0000DC" strokeWidth="6.80128" />
      <path d="M194.039 256.337V0.45165" stroke="#0000DC" strokeWidth="7.12515" />
      <path d="M203.248 256.337V0.45165" stroke="#0000DC" strokeWidth="7.44902" />
      <path d="M212.457 256.337V0.45165" stroke="#0000DC" strokeWidth="7.77289" />
      <path d="M221.664 256.337V0.45165" stroke="#0000DC" strokeWidth="8.09676" />
      <path d="M230.873 256.337V0.45165" stroke="#0000DC" strokeWidth="8.42063" />
      <path d="M240.082 256.337V0.45165" stroke="#0000DC" strokeWidth="8.7445" />
      <path d="M249.291 256.337V0.45165" stroke="#0000DC" strokeWidth="9.06837" />
      <path d="M258.498 256.337V0.451649" stroke="#0000DC" strokeWidth="9.39224" />
      <path d="M267.707 256.337V0.45165" stroke="#0000DC" strokeWidth="9.71611" />
      <path d="M276.916 256.337V0.451649" stroke="#0000DC" strokeWidth="10.04" />
      <path d="M286.123 256.337V0.45165" stroke="#0000DC" strokeWidth="10.3639" />
    </svg>
  );
}

export function FooterFeaturedLinksArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M3.95144 4.19309L11.0225 4.19309M11.0225 4.19309L11.0225 11.2642M11.0225 4.19309L3.53553 11.6801"
        stroke="#0D1226" strokeLinejoin="round" />
    </svg>
  );
}
