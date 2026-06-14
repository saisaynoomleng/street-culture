import type { Meta, StoryObj } from '@storybook/react-vite';
import SectionTitle from './SectionTitle';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Components/Shared/SectionTitle',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: SectionTitle,

  args: {
    as: 'h2',
  },

  argTypes: {
    as: {
      control: 'radio',
      description: 'Different Heading Tags for the components except H1',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        type: {
          summary:
            'Has default tag of "h2" with capitalization every word, font weight of 600 and font size of 24px.',
          detail: `h2 | h3 | h4 | h5 | h6`,
        },
      },
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes.',
    },

    children: {
      control: 'object',
      table: {
        type: {
          summary: 'Represents anything React can render',
          detail: `
            <div>Heading</div>
            <>
              <h1>Title</h1>
              <p>Text</p>
            </>
            'string'
            123
            null
          `,
        },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  render: (args) => <SectionTitle {...args}>Elevate Your Style</SectionTitle>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const heading = canvas.getByRole('heading');

    await expect(heading).toBeInTheDocument();
    await expect(heading?.tagName).toBe('H2');
  },
};

export const DifferentHeading: Story = {
  render: (args) => (
    <SectionTitle {...args} as="h5">
      Heading Tag H5
    </SectionTitle>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const heading = canvas.getByRole('heading');

    await expect(heading).toBeInTheDocument();
    await expect(heading?.tagName).toBe('H5');
    await expect(heading).toHaveTextContent(/heading tag h5/i);
  },
};
