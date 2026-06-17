import type { Meta, StoryObj } from '@storybook/react-vite';
import { SubmitButton } from './SubmitButton';

const meta: Meta<typeof SubmitButton> = {
  title: 'Components/Shared/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Submit button used in Forms',
      },
    },
  },

  args: {
    children: 'submit',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SubmitButton {...args} />,
};
