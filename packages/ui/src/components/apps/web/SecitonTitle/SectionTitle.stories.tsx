import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { SectionTitle } from './SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/Apps/Web/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: "Section title such as 'Featured Products', 'Blogs', etc ",
      },
    },
  },

  args: {
    as: 'h2',
    label: 'Featured Products',
    className: 'text-center',
  },
  argTypes: {
    as: {
      control: 'radio',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Set the different headings for the section title',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    label: {
      control: 'text',
      description: 'Text for the Section Title',
    },

    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      table: {
        type: {
          summary: `Set the different font sizes of the title`,
          detail: `
            sm: 'text-fs-400 md:text-fs-500 lg:text-fs-600',
            md: 'text-fs-500 md:text-fs-600 lg:text-fs-700',
            lg: 'text-fs-600 md:text-fs-800 lg:text-fs-900',
            `,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SectionTitle {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByText(/featured products/i);

    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent('Featured Products');
    await expect(title?.tagName).toBe('H2');
  },
};
