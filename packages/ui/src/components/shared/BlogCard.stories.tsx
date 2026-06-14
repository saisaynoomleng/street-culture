import type { Meta, StoryObj } from '@storybook/react-vite';
import BlogCard from './BlogCard';
import { BlogMockDataEn, BlogMockDataKo } from '#lib/mockData.ts';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Components/Shared/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'A Blog card displayed on the webpage',
    },
  },

  args: {
    as: 'div',
    name: BlogMockDataEn.name,
    publishedAt: BlogMockDataEn.publishedAt,
    excerpt: BlogMockDataEn.excerpt,
    media: {
      imageAlt: BlogMockDataEn.imageAlt,
      imageUrl: BlogMockDataEn.imageUrl,
    },
  },
  argTypes: {
    as: {
      control: 'text',
      description:
        'Can choose different tag to render a component, default to <div />',
    },

    name: {
      control: 'text',
      description: 'Blog Card title',
    },

    publishedAt: {
      control: 'text',
      description: 'Date in string type',
    },

    excerpt: {
      control: 'text',
      description: 'A short summary text for the blog card',
    },

    media: {
      control: 'object',
      table: {
        type: {
          summary: 'Full URL to the image and alternative text',
          detail: `
                    imageUrl: string;
                    imageAlt: string;
                `,
        },
      },
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  render: (args) => <BlogCard {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByText(
      /Forget Euro Summer—European Brands Say It’s New York or Nowhere/i,
    );
    const image = canvas.getByRole('img');

    await expect(title).toBeInTheDocument();
    await expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('cdn.sanity.io'),
    );
    await expect(image).toHaveAttribute('alt', 'Craig McDean');
  },
};

export const ExcerptInKorean: Story = {
  render: (args) => <BlogCard {...args} excerpt={BlogMockDataKo.excerpt} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByText(
      /Forget Euro Summer—European Brands Say It’s New York or Nowhere/i,
    );
    const image = canvas.getByRole('img');

    await expect(title).toBeInTheDocument();
    await expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('cdn.sanity.io'),
    );
    await expect(image).toHaveAttribute('alt', 'Craig McDean');
  },
};
