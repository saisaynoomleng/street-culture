import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdminAuthorCard } from './AdminAuthorCard';
import { mockPhoto } from '#lib/mockData';
import { expect } from 'storybook/test';
import { AdminAuthorCardSkeleton } from './AdminAuthorCardSkeleton';

const meta: Meta<typeof AdminAuthorCard> = {
  title: 'Components/Apps/Admin/AdminAuthorCard',
  component: AdminAuthorCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Author Card to display on Admin Authors List Page',
      },
    },
  },

  args: {
    name: 'Test Author',
    media: {
      imageAlt: 'author',
      imageUrl: mockPhoto,
    },
    slug: '123',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Author name',
    },

    media: {
      control: false,
      table: {
        type: {
          summary: 'Full URL path to the author image and alternative text',
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

    renderImage: {
      control: false,
      description: 'Image component to render in Next.js',
    },

    selectedAuthor: {
      control: 'text',
      description:
        'A state to track whether the current author component is tracked',
    },

    setSelectedAuthor: {
      control: false,
      description:
        'React state action to select the current author as selected author',
    },

    slug: {
      control: 'text',
      description: "Current Author's Sanity slug",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AdminAuthorCard
      {...args}
      renderImage={(props) => (
        <img src={props.src} alt={props.alt} loading="lazy" />
      )}
    />
  ),
  play: async ({ canvas }) => {
    const name = canvas.getByRole('paragraph');
    const img = canvas.getByRole('img');

    await expect(name).toBeInTheDocument();
    await expect(img).toHaveAttribute('src', expect.stringContaining('pinimg'));
    await expect(img).toHaveAttribute('alt', 'author');
  },
};

export const Selected: Story = {
  render: (args) => (
    <AdminAuthorCard
      {...args}
      renderImage={(props) => (
        <img src={props.src} alt={props.alt} loading="lazy" />
      )}
      selectedAuthor="123"
      slug="123"
    />
  ),
};

export const Loading = {
  render: () => <AdminAuthorCardSkeleton />,
};
