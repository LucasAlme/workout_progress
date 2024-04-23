import { theme } from "./baseStyles";

type ThemeInterface = typeof theme;

declare module "styled-components/native" {
  interface DefaultTheme extends ThemeInterface {}
}
