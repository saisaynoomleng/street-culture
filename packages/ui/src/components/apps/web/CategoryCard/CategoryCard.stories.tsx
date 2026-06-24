import type { Meta, StoryObj } from '@storybook/react-vite';
import CategoryCard from './CategoryCard';
import { expect, within } from 'storybook/test';
import { CategoryCardSkeleton } from './CategoryCardSkeleton';

const meta: Meta<typeof CategoryCard> = {
  title: 'Components/Apps/Web/CategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Category card to display the product category and stock number',
      },
    },
  },

  args: {
    media: {
      imageUrl:
        'https://cdn.sanity.io/images/g8wycn5o/production/12269fcdd6c3d1aab06dda6e2e18ce7396f6a60b-980x639.avif',
      imageAlt: 'a group of model',
    },
    title: 'Tops',
    numberInStocks: 50,
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    media: {
      control: false,
      table: {
        type: {
          summary: `Image URL and Image Alternative Text to render in image component`,
          detail: `
            imageUrl: string;
            imageAlt: string;
          `,
        },
      },
    },

    title: {
      control: 'text',
      description: 'Product Category Title',
    },

    numberInStocks: {
      control: 'number',
      description: 'Available Products in the category',
    },

    renderImage: {
      control: false,
      description: `Image component to render in Next.js`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <CategoryCard
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

    const title = canvas.getByText(/tops/i);
    const number = canvas.getByText(/50/i);

    await expect(title).toBeInTheDocument();
    await expect(number).toBeInTheDocument();
    await expect(title).toHaveTextContent('Tops');
    await expect(number).toHaveTextContent('50');
  },
};

export const Loading = {
  render: () => <CategoryCardSkeleton />,
};
