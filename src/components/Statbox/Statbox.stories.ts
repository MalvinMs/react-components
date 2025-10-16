import type { Meta, StoryObj } from "@storybook/react-vite";
import { Statbox } from "./Statbox";
import { Cash, Users, ChartPie } from "flowbite-react-icons/solid";

const meta = {
  title: "Components/Statbox",
  component: Statbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Statbox is a flexible component for displaying statistical data with optional icons, borders, and change indicators.",
      },
    },
  },
  // tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
      description: "Color scheme for the statbox",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size variant for the statbox",
    },
    boxed: {
      control: { type: "boolean" },
      description: "Whether to show border around the statbox",
    },
    showChange: {
      control: { type: "boolean" },
      description: "Whether to show change indicator",
    },
    data: {
      description:
        "Data object containing title, value, subtitle, and change information",
    },
    icon: {
      description: "Optional icon component to display",
    },
  },
  args: {
    color: "secondary",
    size: "md",
    boxed: false,
    showChange: true,
  },
} satisfies Meta<typeof Statbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: "Total Revenue",
      value: "Rp 275.450.000",
    },
    color: "secondary",
    boxed: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic statbox without border or icon, showing just title and value.",
      },
    },
  },
};

export const WithBorder: Story = {
  args: {
    data: {
      title: "Active Users",
      value: "12,847",
      subtitle: "Daily active users",
    },
    color: "primary",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Statbox with border styling (boxed variant) including subtitle.",
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    data: {
      title: "Monthly Growth",
      value: "+5.8%",
    },
    icon: ChartPie,
    color: "success",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Statbox with icon and change indicator showing trend information.",
      },
    },
  },
};

export const ValueOnly: Story = {
  args: {
    data: {
      value: "20.5k",
    },
    color: "danger",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal statbox with only value, centered layout.",
      },
    },
  },
};

export const CompleteData: Story = {
  args: {
    data: {
      title: "Total Sales",
      value: "Rp 1.2M",
      subtitle: "This month performance",
      change: {
        value: 12,
        trend: "up",
        label: "vs last month",
        percentage: true,
      },
    },
    icon: Cash,
    color: "success",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete statbox showing all available features: icon, title, value, subtitle, and change indicator.",
      },
    },
  },
};

export const NegativeTrend: Story = {
  args: {
    data: {
      title: "Error Rate",
      value: "2.1%",
      change: {
        value: 0.5,
        trend: "down",
        label: "vs last week",
        percentage: true,
      },
    },
    icon: Users,
    color: "danger",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Statbox showing negative trend with down arrow indicator.",
      },
    },
  },
};

export const AllColors: Story = {
  args: {
    data: {
      title: "Color Variants",
      value: "1,234",
    },
    color: "primary",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing color variant - try changing the color control to see different colors.",
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    data: {
      title: "Small Card",
      value: "42",
    },
    size: "sm",
    color: "primary",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Small size variant (192px width, 80px min-height, smaller padding).",
      },
    },
  },
};

export const MediumSize: Story = {
  args: {
    data: {
      title: "Medium Card",
      value: "1,234",
    },
    size: "md",
    color: "success",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Medium size variant (256px width, 100px min-height) - default size.",
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    data: {
      title: "Large Card",
      value: "98.5k",
      subtitle: "With more space",
    },
    size: "lg",
    color: "danger",
    boxed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Large size variant (320px width, 120px min-height, larger padding).",
      },
    },
  },
};
