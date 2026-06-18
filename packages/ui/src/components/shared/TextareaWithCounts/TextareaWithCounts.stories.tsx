import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextareaWithCounts } from './TextareaWithCounts';

const meta: Meta<typeof TextareaWithCounts> = {
  title: 'Components/Shared/TextareaWithCounts',
  component: TextareaWithCounts,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Used in forms as a textarea that shows input counts',
      },
    },
  },

  args: {},
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    name: {
      control: 'text',
      description: 'Name of the textarea for form actions',
    },

    maxLength: {
      control: 'number',
      description: 'Setting the maximum length that the text-area can take',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <TextareaWithCounts {...args} />,
};
