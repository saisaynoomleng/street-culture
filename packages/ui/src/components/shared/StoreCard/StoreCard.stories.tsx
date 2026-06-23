import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoreCard } from './StoreCard';
import { StoreCardSkeleton } from './StoreCardSkeleton';
import { mockStoreCard, mockStoreCardKo } from '../../../lib/mockData';
import { expect, within } from 'storybook/test';

const meta: Meta<typeof StoreCard> = {
  title: 'Components/Shared/StoreCard',
  component: StoreCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display Stores with photo and location on the website',
      },
    },
  },

  args: {
    name: mockStoreCard.name,
    media: mockStoreCard.media,
    city: mockStoreCard.city,
    country: mockStoreCard.country,
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Store Name',
    },

    media: {
      control: false,
      description: 'Store photo and image alternative text',
    },

    city: {
      control: 'text',
      description: 'Store Location(city) ',
    },

    country: {
      control: 'text',
      description: 'Store Location(country)',
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
  render: (args) => (
    <StoreCard
      {...args}
      renderImage={(props) => <img src={props.src} alt={props.alt} />}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const storeName = canvas.getByText(/street culture seoul/i);
    const city = canvas.getByTestId('city');
    const country = canvas.getByTestId('country');
    const img = canvas.getByRole('img');

    await expect(storeName).toBeInTheDocument();
    await expect(city).toBeInTheDocument();
    await expect(country).toBeInTheDocument();
    await expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('cdn.sanity.io'),
    );
  },
};

export const LocaleKo: Story = {
  render: (args) => (
    <StoreCard
      {...args}
      name={mockStoreCardKo.name}
      renderImage={(props) => <img src={props.src} alt={props.alt} />}
    />
  ),
};

export const Loading = {
  render: () => <StoreCardSkeleton />,
};
