export const colors = {
  navy: "#0D1226",
  blue: "#0000DC",
  lightBlue: "#95ECFD",
  brightGreen: "#E1FF67",
  lightGreen: "#18C971",
  green: "#047C40",
  lightPurple: "#C2D1FF",
  purple: "#4337A8",
  lightOrange: "#FFEBAF",
  orange: "#FA5D00",
  lightRed: "#F76B6A",
  red: "#C20000",
  black: "#000000",
  lightGrey: "#F6F7F9",
  lavenderGrey: "#E7E7E9",
  white: "#ffffff",
  snow: "#FAFAFA",
} as const;

export const fontFamily = {
  heading: "KlarheitKurrent",
  body: "RedHatText",
} as const;

export const screens = {
  xxs: "400px",
  xs: "480px",
  sm: "640px",
  md: "768px",
  "960": "960px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1420px",
  "3xl": "1536px",
} as const;

export const spacing = {
  "4.25": "1.063rem",
  "7.5": "1.875rem",
  "13": "3.25rem",
  "15": "3.75rem",
  "18": "4.5rem",
  "18.875": "4.719rem",
  "51": "12.75rem",
  "272": "68rem",
} as const;

export type ColorName = keyof typeof colors;
export type ScreenName = keyof typeof screens;
