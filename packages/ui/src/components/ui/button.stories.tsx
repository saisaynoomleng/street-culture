import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { SubmitButton } from '../shared';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Different Button Components',
      },
    },
  },

  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Button {...args} variant="default">
      Default
    </Button>
  ),
};

export const Submit: Story = {
  render: () => <SubmitButton>Submit</SubmitButton>,
};

export const Success: Story = {
  render: (args) => (
    <Button variant="success" {...args}>
      Success
    </Button>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Button variant="warning" {...args}>
      Warning
    </Button>
  ),
};

export const Error: Story = {
  render: (args) => (
    <Button variant="error" {...args}>
      Error
    </Button>
  ),
};
