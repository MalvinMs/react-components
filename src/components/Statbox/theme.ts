import type { StatboxTheme } from "./types";

export const statboxTheme: StatboxTheme = {
  base: "w-64 min-w-[256px]", // Ensure minimum width
  boxed: "rounded-lg border border-gray-300",
  wrapper: "flex items-center space-x-4",
  icon: "h-8 w-8 shrink-0",
  content: {
    base: "",
    title: "text-gray-600 font-medium",
    value: "font-medium",
    subtitle: "text-sm text-gray-500 mt-1",
    valueOnly: "absolute inset-0 flex items-center justify-center text-center",
    valueSizes: {
      sm: "text-lg",
      md: "text-2xl",
      lg: "text-4xl",
    },
  },
  colors: {
    primary: "text-blue-600",
    secondary: "text-gray-900",
    success: "text-green-600",
    danger: "text-red-600",
    warning: "text-yellow-500",
    info: "text-sky-500",
  },
  change: {
    base: "flex items-center mt-2 text-sm",
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-gray-500",
    arrow: "h-4 w-4 mr-1",
    value: "font-medium",
    label: "ml-1 text-gray-500",
  },
};
