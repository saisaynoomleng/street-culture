import type { Meta, StoryObj } from '@storybook/react-vite';
import { YouTubeEmbedded } from './YouTubeEmbedded';
import { YouTubeEmbeddedSkeleton } from './YouTubeEmbeddedSkeleton';
import { expect } from 'storybook/test';

const meta: Meta<typeof YouTubeEmbedded> = {
  title: 'Components/Shared/YouTubeEmbedded',
  component: YouTubeEmbedded,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Render YouTube video as a video component',
      },
    },
  },

  args: {
    videoId: 'Yb1UUnOz7l4',
    title: 'Skateboarding',
  },
  argTypes: {
    videoId: {
      control: 'text',
      description: 'YouTube video id to render',
    },

    title: {
      control: 'text',
      description: 'Alternative text for the video',
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
  render: (args) => <YouTubeEmbedded {...args} />,
  play: async ({ canvas, userEvent }) => {
    const iframe = canvas.getByTestId('iframe');

    await expect(iframe).toHaveAttribute(
      'src',
      expect.stringContaining('Yb1UUnOz7l4'),
    );
  },
};

export const Loading = {
  render: () => <YouTubeEmbeddedSkeleton />,
};
