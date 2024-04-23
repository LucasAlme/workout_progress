export type ThemeType = {
  [K in keyof typeof themeConfig]: (typeof themeConfig)[K];
};

const themeConfig = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent",
    red: "#bb0e0e",
  },
};

export const theme: ThemeType = { ...themeConfig };
