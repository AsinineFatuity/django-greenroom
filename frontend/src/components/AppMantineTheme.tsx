import React from "react";
import { MantineThemeOverride } from "@mantine/core";

export const AppMantineTheme: MantineThemeOverride = {
  /* Use this tool https://lawlesscreation.github.io/hex-color-visualiser/ to visualize the shades */
  primaryColor: "brand",
  primaryShade: { light: 6, dark: 5 },
  defaultRadius: "12px",
  fontFamily: "Bricolage Grotesque",
  colors: {
    // 10-shade blue scale (light → dark) centered around #1C3D7A
    brand: [
      "#edf2fb",
      "#d7e3fc",
      "#c1d3fe",
      "#a8c1fb",
      "#7ea0ee",
      "#5d83e0",
      "#3f63c6", // primaryShade (light)
      "#2f4ea0",
      "#233e86",
      "#1C3D7A", // darkest (royal blue)
    ],
    goldAccent: [
      "#fffceb", // Shade 0 (lightest)
      "#fbebb5",
      "#f8e29a",
      "#f5d97f",
      "#f2d064",
      "#f0c749",
      "#edbe2e",
      "#d4af37", // Shade 7 (our official gold accent color)
      "#a8862c",
      "#7d6320", // Shade 9 (darkest)
    ],
  },
  components: {
    Button: {
      styles: {
        root: {
          borderRadius: "24px",
          fontWeight: 500,
          minWidth: "200px",
          fontSize: "14px",
        },
      },
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: "#f9fbfc",
          minHeight: "2.625rem",
        },
        label: {
          fontWeight: 500,
          fontSize: "13px",
          color: "#333",
        },
      },
    },
    Select: {
      styles: {
        input: {
          backgroundColor: "#f9fbfc",
          minHeight: "2.625rem",
        },
        label: {
          fontWeight: 500,
          fontSize: "13px",
          color: "#333",
        },
      },
    },
    NumberInput: {
      styles: {
        input: {
          backgroundColor: "#f9fbfc",
          minHeight: "2.625rem",
        },
        label: {
          fontWeight: 500,
          fontSize: "13px",
          color: "#333",
        },
      },
    },
  },
};
