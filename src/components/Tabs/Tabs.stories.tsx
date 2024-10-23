import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";
import Tab from "../Tab/Tab";
import Badge from "../Badge/Badge";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  argTypes: {
    variant: { control: 'select' }
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="Emails">Test content</Tab>
      <Tab label="Files" badge={<Badge variant="neutral">Warning</Badge>}>
        Test content 1
      </Tab>
      <Tab label="Edits">Test content 2</Tab>
      <Tab label="Dashboard">Test content 3</Tab>
      <Tab label="Messages">Test content 4</Tab>
      <Tab label="Test 2">Test content 5</Tab>
    </Tabs>
  ),
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const WithContent: Story = {
  args: {
    variant: 'pill',
  },
};
