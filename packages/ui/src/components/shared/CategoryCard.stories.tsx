import type { Meta, StoryObj } from '@storybook/react-vite';
import CategoryCard from './CategoryCard';
import { expect, within } from 'storybook/test';

const meta: Meta<typeof CategoryCard> = {
  title: 'Components/Shared/CategoryCard',
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
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <CategoryCard {...args} />,
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
