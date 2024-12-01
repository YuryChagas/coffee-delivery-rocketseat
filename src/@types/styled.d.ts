import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module 'styled-component'{
  export interface defaultTheme extends ThemeType {}
}