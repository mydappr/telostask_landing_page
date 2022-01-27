import { ThemeContext } from "../../lib/context";
import { useContext } from "react";
import { darkTheme } from "../../containers/theme";

export function CheckerHBg(pic) {
  const { theme } = useContext(ThemeContext);
  return theme === "dark" ? "" : `url(./icons/${pic}.png);`;
}

export function CheckColor(lightColor, darkColor) {
  const { theme } = useContext(ThemeContext);
  return theme === "light" ? `${lightColor}` : `${darkColor}`;
}

export function CheckerButton(color) {
  return color;
}
