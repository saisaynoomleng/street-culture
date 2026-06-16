import type { Meta, StoryObj } from '@storybook/react-vite';
import ProductCard from './ProductCard';
import { expect, within } from 'storybook/test';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/Shared/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Product Display Card',
      },
    },
  },

  args: {
    media: {
      imageAlt: 'Womean wearing shirt',
      imageUrl:
        'https://cdn.sanity.io/images/g8wycn5o/production/4db15b093fb0ee15ed1aa7b7aec7f99d68f77c49-768x1344.jpg',
    },
    discountInPercent: 20,
    title: 'Euphoric Black limited edition T-Shirt for women',
    colors: ['#000000', 'rgb(255 255 255)', '#7db882', 'rgb(117 81 204)'],
    currency: 'usd',
    price: 200,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ProductCard {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByText(/black/i);
    const colors = canvas.getAllByTestId('color');
    const img = canvas.getByRole('img');
    const price = canvas.getByText(/200/i);

    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent(
      'Euphoric Black limited edition T-Shirt for women',
    );
    await expect(colors.length).toBe(4);
    await expect(img).toBeInTheDocument();
    await expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('cdn.sanity.io'),
    );
    await expect(price).toBeInTheDocument();
    await expect(price).toHaveTextContent('200');
  },
};

export const LocaleKo: Story = {
  render: (args) => (
    <ProductCard
      {...args}
      title="여성을 위한 유포릭 블랙 한정판 티셔츠"
      currency="krw"
      price={200000}
      discountInPercent={22}
    />
  ),
};
