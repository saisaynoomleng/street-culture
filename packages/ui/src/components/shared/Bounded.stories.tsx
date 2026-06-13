import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bounded } from './Bounded';
import { within, expect } from 'storybook/test';

const meta: Meta<typeof Bounded> = {
  component: Bounded,
  title: 'Components/Shared/Bounded',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

  args: {
    as: 'section',
    isCentered: true,
    padding: 'md',
  },
  argTypes: {
    as: {
      control: 'radio',
      description: 'HTML semantic tag <main></main> and <section></section>',
    },

    isCentered: {
      control: 'boolean',
      description:
        'Decided whether the components should be in the centered in larger screens',
    },

    padding: {
      control: 'radio',
      description: 'Add default horizontal padding to the component',
      table: {
        type: {
          summary: `none | sm | md | lg`,
        },
      },
    },

    children: {
      control: 'object',
      table: {
        type: {
          summary: 'Any React Node to render in the component',
        },
      },
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
  render: (args) => (
    <Bounded {...args}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero corporis
        incidunt dolor similique consectetur ullam sequi repellendus enim cumque
        autem.
      </p>
    </Bounded>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const paragrah = canvas.getByRole('paragraph');
    const section = paragrah.parentElement;

    await expect(paragrah).toBeInTheDocument();
    await expect(section).toBeInTheDocument();
    await expect(section?.tagName).toBe('SECTION');
  },
};

export const Main: Story = {
  render: (args) => (
    <Bounded {...args} as="main">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        eos.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        eos.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        eos.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        eos.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        eos.
      </p>
    </Bounded>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const children = canvas.getAllByRole('paragraph');
    const section = canvas.getByRole('main');

    await expect(children).toHaveLength(5);
    await expect(section).toBeInTheDocument();
  },
};
