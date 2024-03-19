"use client";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
export function ThemeProviders({ children }) {
  return (
    <ThemeProvider attribute={`class`} defaultTheme={`system`}>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
