import type { Meta, StoryObj } from '@storybook/react-vite';
import Bounded from './Bounded';
import { within, expect } from 'storybook/test';

const meta: Meta<typeof Bounded> = {
  component: Bounded,
  title: 'Components/Shared/Bounded',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Layout primitive that constrains content width and applies horizontal spacing.',
      },
    },
  },
  tags: ['autodocs'],

  args: {
    as: 'section',
    padding: 'sm',
    size: 'wide',
    centered: true,
  },
  argTypes: {
    as: {
      control: 'text',
      description: 'HTML semantic tag defining the component',
    },

    centered: {
      control: 'boolean',
      description:
        'Decided whether the components should be in the centered in larger screens when screen witdth is over 1280px',
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
      control: false,
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    size: {
      control: 'radio',
      description: 'Represents the maximum width of the container',
      table: {
        type: {
          summary: 'Define the maximum width depending on the usecase',
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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero corporis
        incidunt dolor similique consectetur ullam sequi repellendus enim cumque
        autem.
      </p>
    </Bounded>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const paragraph = canvas.getByRole('paragraph');
    const section = canvasElement.querySelector('section');

    await expect(paragraph).toBeInTheDocument();
    await expect(section).toBeInTheDocument();
  },
};

export const Main: Story = {
  render: (args) => (
    <Bounded {...args} as="main" centered>
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
