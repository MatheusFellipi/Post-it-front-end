import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  fonts: {
    heading: "Playfair Display, serif",
    text: "Raleway, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#FFFFFF",
      },
    },
  },

  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "1440px",
  },
});
