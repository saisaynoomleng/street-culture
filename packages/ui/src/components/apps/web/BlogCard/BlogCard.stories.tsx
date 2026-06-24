import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { BlogCardSkeleton } from './BlogCardSkeleton';
import { BlogCard } from './BlogCard';
import { BlogMockDataEn, BlogMockDataKo } from '../../../../lib/mockData';

const meta: Meta<typeof BlogCard> = {
  title: 'Components/Apps/Web/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Blog post card to display on the webpage',
      },
    },
  },

  args: {
    media: {
      imageAlt: BlogMockDataEn.imageAlt,
      imageUrl: BlogMockDataEn.imageUrl,
    },
    publishedAt: BlogMockDataEn.publishedAt,
    title: BlogMockDataEn.name,
    excerpt: BlogMockDataEn.excerpt,
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    media: {
      control: false,
      description: 'Blog Card Photo URL and alternative text',
      table: {
        type: {
          summary: `imageUrl: string; imageAlt: string;`,
        },
      },
    },

    publishedAt: {
      control: 'text',
      description: 'Blog Published Date in string type or Date type',
    },

    title: {
      control: 'text',
      description: 'Blog title to display on a blog card',
    },

    excerpt: {
      control: 'text',
      description: 'A short summary of the blog',
    },

    renderImage: {
      control: false,
      description: 'Image component to render in Next.js',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <BlogCard
      {...args}
      renderImage={(props) => (
        <img
          src={props.src}
          alt={props.alt}
          className="w-full h-full object-cover"
        />
      )}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByText(/forget/i);
    const date = canvas.getByText(/jun/i);
    const text = canvas.getByText(/most/i);
    const img = canvas.getByRole('img');

    await expect(title).toBeInTheDocument();
    await expect(date).toBeInTheDocument();
    await expect(text).toBeInTheDocument();
    await expect(img).toBeInTheDocument();
    await expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('cdn.sanity.io'),
    );
    await expect(img).toHaveAttribute(
      'alt',
      expect.stringContaining('Craig McDean'),
    );
  },
};

export const LocaleKo: Story = {
  render: (args) => (
    <BlogCard
      {...args}
      title={BlogMockDataKo.name}
      excerpt={BlogMockDataKo.excerpt}
      renderImage={(props) => (
        <img
          src={props.src}
          alt={props.alt}
          className="w-full h-full object-cover"
        />
      )}
    />
  ),
};

export const Loading = {
  render: () => <BlogCardSkeleton />,
};
