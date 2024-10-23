import type { Meta, StoryObj } from "@storybook/react";

import TabButton from "./TabButton";
import Badge from "../Badge/Badge";
import Text from "../Text/Text";

const meta: Meta<typeof TabButton> = {
  component: TabButton,
  argTypes: {
    variant: { control: "select", options: ["pill", "underline"] },
    children: { control: "text", name: "label" },
  },
  render: (args) => (
    <TabButton {...args}>
      <Text>{args.children}</Text>
    </TabButton>
  ),
};

export default meta;
type Story = StoryObj<typeof TabButton>;

export const Pill: Story = {
  args: {
    variant: "pill",
    children: "Label",
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
    children: "Label",
  },
};

export const TabWithBadge: Story = {
  render: (args) => (
    <TabButton {...args}>
      Label <Badge variant="negative">Warning</Badge>
    </TabButton>
  ),
};
