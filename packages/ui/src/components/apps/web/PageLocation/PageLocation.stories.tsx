import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLocation } from './PageLocation';
import { expect, within } from 'storybook/test';
import { PageLocationSkeleton } from './PageLocationSkeleton';

const meta: Meta<typeof PageLocation> = {
  title: 'Components/Shared/PageLocation',
  component: PageLocation,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display the location on top of the page',
      },
    },
  },

  args: {
    label: 'Home/Shop',
  },

  argTypes: {
    label: {
      control: 'text',
      description: 'Current location of the page',
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
  render: (args) => <PageLocation {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const p = canvas.getByRole('paragraph');

    await expect(p).toBeInTheDocument();
    await expect(p).toHaveTextContent('Home/Shop');
  },
};

export const Loading = {
  render: () => <PageLocationSkeleton />,
};
