export interface StatboxData {
  title?: string;
  value: string | number;
  subtitle?: string;
  change?: {
    value: number;
    trend: "up" | "down" | "neutral";
    label?: string;
    percentage?: boolean;
  };
}

export interface StatboxTheme {
  base: string;
  boxed: string;
  wrapper: string;
  icon: string;
  content: {
    base: string;
    title: string;
    value: string;
    subtitle: string;
    valueOnly: string;
  };
  colors: {
    [key: string]: string;
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
  };
  sizes?: {
    sm: string;
    md: string;
    lg: string;
  };
  change?: {
    base: string;
    up: string;
    down: string;
    neutral: string;
    arrow: string;
    value: string;
    label: string;
  };
}
