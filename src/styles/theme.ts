export interface ITheme {
  [key: string]: string | { [key: string]: string };
}

export const theme = {
  background: "#f0f6ff",
  primary: "#6d6afe",
  Red: "#ff5b56",
  black: "#111322",
  white: "#fff",

  gray900: "#3e3e43",
  gray600: "#9fa6b2",
  gray300: "#ccd5e3",
  gray100: "#e7effb",
  gray50: "#f0f6ff",

  textGray: "#676767",
  textContentGray: "#666666",
  textContentBlack: "#333333",

  deviceSizes: {
    mobile: "767px",
    tablet: "1199px",
    desktop: "1200px",
  },
};
