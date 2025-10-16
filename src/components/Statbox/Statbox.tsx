import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import { forwardRef, type ComponentProps, type FC } from "react";
import { StatboxData, StatboxTheme } from "./types";
import { statboxTheme } from "./theme";

const ArrowUpIcon: FC<ComponentProps<"svg">> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 17l5-5 5 5M7 7l5-5 5 5"
    />
  </svg>
);
const ArrowDownIcon: FC<ComponentProps<"svg">> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 17l-5 5-5-5M17 7l-5 5-5-5"
    />
  </svg>
);

const MinusIcon: FC<ComponentProps<"svg">> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

export interface StatboxProps
  extends Omit<ComponentProps<"div">, "title" | "color"> {
  data: StatboxData;
  icon?: FC<ComponentProps<"svg">>;
  boxed?: boolean;
  color?: keyof StatboxTheme["colors"];
  theme?: Partial<StatboxTheme>;
  showChange?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Statbox = forwardRef<HTMLDivElement, StatboxProps>(
  (props, ref) => {
    const {
      data,
      icon: Icon,
      boxed,
      color = "secondary",
      className,
      theme: customTheme,
      showChange = true,
      size = "md",
      ...rest
    } = props;

    const mergedTheme = {
      ...statboxTheme,
      ...customTheme,
      content: {
        ...statboxTheme.content,
        ...customTheme?.content,
        valueSizes: {
          ...statboxTheme.content.valueSizes,
          ...customTheme?.content?.valueSizes,
        },
        titleSizes: {
          ...statboxTheme.content.titleSizes,
          ...customTheme?.content?.titleSizes,
        },
        subtitleSizes: {
          ...statboxTheme.content.subtitleSizes,
          ...customTheme?.content?.subtitleSizes,
        },
      },
      colors: {
        ...statboxTheme.colors,
        ...customTheme?.colors,
      },
      change: {
        ...statboxTheme.change,
        ...customTheme?.change,
      },
    };

    const renderTrendIcon = (trend: "up" | "down" | "neutral") => {
      const iconProps = {
        className: twMerge(mergedTheme.change?.arrow),
      };

      switch (trend) {
        case "up":
          return <ArrowUpIcon {...iconProps} />;
        case "down":
          return <ArrowDownIcon {...iconProps} />;
        case "neutral":
        default:
          return <MinusIcon {...iconProps} />;
      }
    };

    const formatChangeValue = (value: number, percentage: boolean = true) => {
      const formattedValue = Math.abs(value);
      return percentage ? `${formattedValue}%` : formattedValue.toString();
    };

    const isValueOnly = !data.title && !data.subtitle && !data.change;

    return (
      <div
        ref={ref}
        className={twMerge(
          mergedTheme.base,
          "min-h-[100px] p-4",
          isValueOnly && "relative",
          boxed && mergedTheme.boxed,
          className,
        )}
        {...rest}
      >
        {isValueOnly ? (
          <div className={twMerge(mergedTheme.content.valueOnly)}>
            <h3
              className={twMerge(
                mergedTheme.content.value,
                mergedTheme.content.valueSizes[size],
                mergedTheme.colors[color],
              )}
            >
              {data.value}
            </h3>
          </div>
        ) : (
          <div className={twMerge(mergedTheme.wrapper)}>
            {Icon && (
              <Icon
                className={twMerge(mergedTheme.icon, mergedTheme.colors[color])}
              />
            )}
            <div className={twMerge(mergedTheme.content.base)}>
              {data.title && (
                <p
                  className={twMerge(
                    mergedTheme.content.title,
                    mergedTheme.content.titleSizes[size],
                  )}
                >
                  {data.title}
                </p>
              )}
              <h3
                className={twMerge(
                  mergedTheme.content.value,
                  mergedTheme.content.valueSizes[size],
                  mergedTheme.colors[color],
                )}
              >
                {data.value}
              </h3>
              {data.subtitle && (
                <p
                  className={twMerge(
                    mergedTheme.content.subtitle,
                    mergedTheme.content.subtitleSizes[size],
                  )}
                >
                  {data.subtitle}
                </p>
              )}
              {showChange && data.change && (
                <div
                  className={twMerge(
                    mergedTheme.change?.base,
                    mergedTheme.change?.[data.change.trend],
                  )}
                >
                  {renderTrendIcon(data.change.trend)}
                  <span className={twMerge(mergedTheme.change?.value)}>
                    {formatChangeValue(
                      data.change.value,
                      data.change.percentage ?? true,
                    )}
                  </span>
                  {data.change.label && (
                    <span className={twMerge(mergedTheme.change?.label)}>
                      {data.change.label}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
);

Statbox.displayName = "Statbox";
