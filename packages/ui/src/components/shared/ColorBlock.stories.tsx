import type { Meta, StoryObj } from '@storybook/react-vite';
import ColorBlock from './ColorBlock';
import { expect, within } from 'storybook/test';

const meta: Meta<typeof ColorBlock> = {
  title: 'Components/Shared/ColorBlock',
  component: ColorBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A color circle displayed on the product card for available colors',
      },
    },
  },

  args: {
    color: '#7db882',
  },
  argTypes: {
    color: {
      control: 'text',
      description: 'Accept color codes in hex, rgb, and rgba',
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
  render: (args) => <ColorBlock {...args} />,
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector('div');

    await expect(el).toBeInTheDocument();
    await expect(el).toHaveStyle('background-color: rgb(125, 184, 130)');
    await expect(el).toHaveStyle('width: 20px');
    await expect(el).toHaveStyle('height: 20px');
  },
};

export const RGBValue: Story = {
  render: (args) => <ColorBlock {...args} color="rgb(117 81 204)" />,
};
