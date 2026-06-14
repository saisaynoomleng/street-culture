import type { Meta, StoryObj } from '@storybook/react-vite';
import SubmitButton from './SubmitButton';

const meta = {
  title: 'Components/Shared/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

  args: {
    disabled: false,
  },
  argTypes: {
    children: {
      control: false,
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    disabled: {
      control: 'boolean',
      description:
        'Button will be disabled while submitting the form and the loading spinner will be shown',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  render: (args) => <SubmitButton {...args}>Submit</SubmitButton>,
};

export const Submitting: Story = {
  render: (args) => (
    <SubmitButton {...args} disabled>
      Submit
    </SubmitButton>
  ),
};
