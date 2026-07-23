type IconMode = "light" | "dark";

// Maps a friendly camelCase name to the PNG filename (without extension)
export const brandIcons = {
  basketball:   { light: "Basketball",      dark: "BasketballWhite" },
  cloud:        { light: "Cloud",           dark: "CloudWhite" },
  data:         { light: "Data",            dark: "DataWhite" },
  distribute:   { light: "Distribute",      dark: "DistributeWhite" },
  engage:       { light: "Engage",          dark: "EngageWhite" },
  euros:        { light: "Euros",           dark: "EurosWhite" },
  fans:         { light: "Fans",            dark: "FansWhite" },
  field:        { light: "Field",           dark: "FieldWhite" },
  football:     { light: "Football",        dark: "FootballWhite" },
  liveData:     { light: "Live Data",       dark: "Live DataWhite" },
  livePricing:  { light: "Live Pricing",    dark: "Live PricingWhite" },
  majorSports:  { light: "Major Sports",    dark: "Major SportsWhite" },
  monetise:     { light: "Monetise",        dark: "MonetiseWhite" },
  personalise:  { light: "Personalise",     dark: "PersonaliseWhite" },
  platform:     { light: "Platform",        dark: "PlatformWhite" },
  pounds:       { light: "Pounds",          dark: "PoundsWhite" },
  pricing:      { light: "Pricing",         dark: "PricingWhite" },
  reach:        { light: "Reach",           dark: "ReachWhite" },
  soccer:       { light: "Soccer",          dark: "SoccerWhite" },
  social:       { light: "Social",          dark: "SocialWhite" },
  stadium:      { light: "Stadium",         dark: "StadiumWhite" },
  statistics:   { light: "Statistics",      dark: "StatisticsWhite" },
  tier1Support: { light: "Tier 1-Support",  dark: "Tier 1-SupportWhite" },
  video:        { light: "Video",           dark: "VideoWhite" },
  vr3d:         { light: "VR-3D",           dark: "VR-3DWhite" },
} as const;

export type BrandIconName = keyof typeof brandIcons;

interface BrandIconProps {
  name: BrandIconName;
  mode?: IconMode;
  size?: number | string;
  className?: string;
  alt?: string;
}

function BrandIcon({ name, mode = "light", size = 48, className = "", alt }: BrandIconProps) {
  const folder = mode === "dark" ? "dark" : "light";
  const filename = brandIcons[name][mode];
  const src = `/icons/${folder}/${filename}.png`;
  const label = alt ?? String(name);

  return (
    <img
      src={src}
      alt={label}
      width={size}
      height={size}
      className={className}
    />
  );
}

export default BrandIcon;
