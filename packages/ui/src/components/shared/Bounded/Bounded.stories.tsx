import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import { Bounded } from './Bounded';

const meta: Meta<typeof Bounded> = {
  title: 'Components/Shared/Bounded',
  tags: ['autodocs'],
  component: Bounded,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A wrapper for the contents on the webpage',
      },
    },
  },

  args: {
    as: 'section',
    className: 'border',
    padding: 'md',
    size: 'wide',
    isCentered: true,
    spacing: 'md',
  },
  argTypes: {
    as: {
      control: false,
      description:
        'Choose different HTML component wrapper such as section, div, main. Default to section.',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    padding: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg'],
      table: {
        type: {
          summary: 'Set different horizontal padding to the component',
          detail: `
            none: '',
            sm: 'px-4 md:px-6 lg:px-8',
            md: 'px-6 md:px-8 lg:px-10',
            lg: 'px-8 md:px-10 lg:px-12',
          `,
        },
      },
    },

    isCentered: {
      control: 'boolean',
      description:
        'Control the component position in larger screen, whether it needs to be centered or not',
    },

    children: {
      as: false,
      description: 'Represents anything React can render',
    },

    size: {
      control: 'radio',
      options: ['content', 'wide', 'full'],
      table: {
        type: {
          summary: 'Set the maximum width of the component',
          detail: `
            content: 'max-w-4xl',
            wide: 'max-w-7xl',
            full: 'max-w-none',
            `,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Bounded {...args}>
      <h1 className="text-fs-800">Title</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem
        qui mollitia error atque maxime repudiandae quia. Odio, molestiae
        repellendus.
      </p>
    </Bounded>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole('heading');
    const para = canvas.getByRole('paragraph');
    const parent = canvasElement.querySelector('section');

    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent('Title');
    await expect(para).toBeInTheDocument();
    await expect(parent?.tagName).toBe('SECTION');
  },
};
