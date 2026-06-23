import type { Meta, StoryObj } from '@storybook/react-vite';
import { LookbookCard } from './LookbookCard';
import { mockPhoto } from '@/lib/mockData';
import { Button } from '@/components/ui';
import { LookbookCardSkeleton } from './LookbookCardSkeleton';
import { expect, waitFor } from 'storybook/test';

const meta: Meta<typeof LookbookCard> = {
  title: 'Components/Shared/LookbookCard',
  component: LookbookCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Lookbook Card that display campaign products',
      },
    },
  },

  args: {
    media: {
      imageAlt: 'model posing',
      imageUrl: mockPhoto,
    },
    callToAction: {
      href: '/',
      label: 'Checkout the Lookbook',
    },
    title: '2026 Fall/Winter Collection',
    text: 'Our commitment goes beyond fashion - we aim to seamlessly blend style and sustainability, ensuring every product reflects our commitment to environmental care, ethical labor practices and timeless design.',
  },
  argTypes: {
    media: {
      control: false,
      table: {
        type: {
          summary: 'Full path to the image URL and image alternative text',
          detail: `
            imageUrl: string;
            imageAlt: string;
          `,
        },
      },
    },

    callToAction: {
      control: false,
      table: {
        type: {
          summary: 'Path to collection product and link label button',
          detail: `
            href: string;
            label: string;
          `,
        },
      },
    },

    renderAction: {
      control: false,
      description: 'Link component to render in Next.js',
    },

    renderImage: {
      control: false,
      description: 'Image component to render in Next.js',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    title: {
      control: 'text',
      description: 'Lookbook title',
    },

    text: {
      control: 'text',
      description: 'Lookbook collection summary text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <LookbookCard
      {...args}
      renderAction={(props) => (
        <Button asChild>
          <a href={props.href}>{props.label}</a>
        </Button>
      )}
      renderImage={(props) => <img src={props.src} />}
    />
  ),
  play: async ({ canvas }) => {
    const title = canvas.getByText(/2026/i);
    const text = canvas.getByText(/our commitment goes beyond fashion/i);
    const img = canvas.getByRole('img');
    const link = canvas.getByRole('link');

    await expect(title).toBeInTheDocument();
    await expect(text).toBeInTheDocument();
    await expect(title).toHaveTextContent('2026 Fall/Winter Collection');
    await expect(text).toHaveTextContent(
      'Our commitment goes beyond fashion - we aim to seamlessly blend style and sustainability, ensuring every product reflects our commitment to environmental care, ethical labor practices and timeless design.',
    );
    await expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('i.pinimg.com'),
    );
    await expect(link).toHaveAttribute('href', '/');
  },
};

export const Loading = {
  render: () => <LookbookCardSkeleton />,
};
