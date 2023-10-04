// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  notiom: {
    "dark-gray": "#545454",
    "light-gray": "#A3A3A3",
    "bg-white": "#FBFBFA",
    "dark-blue": "#2F80ED",
    "document-white": "#F8F8F8",
  },
};

const fonts = {
  heading: `'DM Sans', sans-serif`,
  body: `'DM Sans', sans-serif`,
};

export const theme = extendTheme({ colors, fonts });
