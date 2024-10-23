import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "positive", "negative"],
    },
    children: { control: "text" },
  },
  render: (args, { args: { variant, children } }) => (
    <Badge {...args} variant={variant}>
      {children}
    </Badge>
  ),
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: {
    variant: "neutral",
  },
};

export const Positive: Story = {
  args: {
    variant: "positive",
  },
};

export const Negative: Story = {
  args: {
    variant: "negative",
  },
};
