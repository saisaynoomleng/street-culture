import type { Meta, StoryObj } from '@storybook/react-vite';
import { DocumentStatus } from './DocumentStatus';
import { expect } from 'storybook/test';

const meta: Meta<typeof DocumentStatus> = {
  title: 'Components/Apps/Admin/DocumentStatus',
  component: DocumentStatus,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display the status of the Sanity Document',
      },
    },
  },

  args: {
    isDraft: true,
  },

  argTypes: {
    isDraft: {
      control: 'boolean',
      description:
        'Boolean value to determine if the document is in draft mode or published',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <DocumentStatus {...args} />,
  play: async ({ canvas }) => {
    const text = canvas.getByRole('paragraph');

    await expect(text).toBeInTheDocument();
    await expect(text).toHaveTextContent('Draft');
  },
};

export const Published: Story = {
  render: (args) => <DocumentStatus {...args} isDraft={false} />,
};
