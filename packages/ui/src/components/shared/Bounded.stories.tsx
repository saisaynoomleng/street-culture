import type { Meta, StoryObj } from '@storybook/react-vite';
import Bounded from './Bounded';
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
      control: 'object',
      table: {
        type: {
          summary: 'Represents anything React can render',
          detail: `
            <div>Hello</div>
            <>
              <h1>title</h1>
              <p>text</p>
            </>
            'string'
            123
            null
          `,
        },
      },
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

    const paragrah = canvas.getByRole('paragraph');
    const section = paragrah.parentElement;

    await expect(paragrah).toBeInTheDocument();
    await expect(section).toBeInTheDocument();
    await expect(section?.tagName).toBe('SECTION');
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
