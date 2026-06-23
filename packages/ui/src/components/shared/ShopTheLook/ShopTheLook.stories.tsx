import type { Meta, StoryObj } from '@storybook/react-vite';
import { mockShopTheLookEn, mockShopTheLookKo } from '../../../lib/mockData.ts';
import { expect, within } from 'storybook/test';
import { ShopTheLook } from './ShopTheLook';
import { ShopTheLookSkeleton } from './ShopTheLookSkeleton';

const meta: Meta<typeof ShopTheLook> = {
  title: 'Components/Shared/ShopTheLook',
  component: ShopTheLook,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Shop the look component that renders a photo and different products on the website',
      },
    },
  },

  args: {
    title: mockShopTheLookEn.title,
    media: mockShopTheLookEn.media,
    hotspots: mockShopTheLookEn.hotspots,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ShopTheLook {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttons = canvas.getAllByTestId('button');

    await expect(buttons[0]).toBeInTheDocument();
  },
};

export const LocaleKo: Story = {
  render: (args) => (
    <ShopTheLook
      {...args}
      title={mockShopTheLookKo.title}
      hotspots={mockShopTheLookKo.hotspots}
    />
  ),
};

export const Loading = {
  render: () => <ShopTheLookSkeleton />,
};
