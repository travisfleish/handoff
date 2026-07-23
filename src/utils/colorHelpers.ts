export function getHexValue(color: string): string {
  const hexMap: Record<string, string> = {
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
    black: "#000",
    lightGrey: "#F6F7F9",
    white: "#ffffff",
  };
  return hexMap[color] || "#ffffff";
}

export function getClassValue(color: string): string {
  const classMap: Record<string, string> = {
    navy: "bg-navy",
    blue: "bg-blue",
    lightBlue: "bg-lightBlue",
    brightGreen: "bg-brightGreen",
    lightGreen: "bg-lightGreen",
    green: "bg-green",
    lightPurple: "bg-lightPurple",
    purple: "bg-purple",
    lightOrange: "bg-lightOrange",
    orange: "bg-orange",
    lightRed: "bg-lightRed",
    red: "bg-red",
    black: "bg-black",
    lightGrey: "bg-lightGrey",
    white: "bg-white",
  };
  return classMap[color] || "bg-white";
}

export function getTextColor(color: string): string {
  const map: Record<string, string> = {
    blue: "text-blue",
    "bright-green": "text-brightGreen",
    purple: "text-purple",
    lightPurple: "text-lightPurple",
    lightGrey: "text-lightGrey",
    lightBlue: "text-lightBlue",
    navy: "text-navy",
    black: "text-black",
    green: "text-green",
    lightGreen: "text-lightGreen",
    lightOrange: "text-lightOrange",
    orange: "text-orange",
    brightGreen: "text-brightGreen",
    red: "text-red",
    lightRed: "text-lightRed",
    white: "text-white",
    lavenderGrey: "text-lavenderGrey",
  };
  return map[color] || "text-blue";
}

export function getBackgroundAndTextColor(color: string): string {
  const map: Record<string, string> = {
    white: "bg-white text-navy",
    navy: "bg-navy text-white",
    brightGreen: "bg-brightGreen text-navy",
    lightGreen: "bg-lightGreen text-navy",
    lightBlue: "bg-lightBlue text-navy",
    lightOrange: "bg-lightOrange text-navy",
    lightPurple: "bg-lightPurple text-navy",
    purple: "bg-purple text-white",
    blue: "bg-blue text-white",
    orange: "bg-orange text-navy",
    red: "bg-red text-white",
  };
  return map[color] || "bg-navy text-white";
}

export function getSectionColors(background = ""): string {
  switch (background) {
    case "black": return "bg-black text-white";
    case "navy": return "bg-navy text-white";
    case "white": return "bg-white text-black";
    case "blue": return "bg-blue text-white";
    case "lightBlue": return "bg-lightBlue text-navy";
    case "lightPurple": return "bg-lightPurple text-navy";
    case "purple": return "bg-purple text-white";
    case "lightGrey": return "bg-lightGrey text-navy";
    case "brightGreen": return "bg-brightGreen text-navy";
    default: return background ? `bg-${background}` : "";
  }
}
