import type { StatboxTheme } from "./types";

export const statboxTheme: StatboxTheme = {
  base: "",
  boxed: "rounded-lg border border-gray-300",
  wrapper: "flex items-center space-x-4",
  icon: "h-8 w-8 shrink-0",
  content: {
    base: "",
    title: "text-gray-600 font-medium",
    value: "text-2xl font-bold",
    subtitle: "text-sm text-gray-500 mt-1",
    valueOnly: "absolute inset-0 flex items-center justify-center text-center",
  },
  sizes: {
    sm: "w-48 min-h-[80px] p-3",
    md: "w-64 min-h-[100px] p-4",
    lg: "w-80 min-h-[120px] p-6",
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
