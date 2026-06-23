import type { Meta, StoryObj } from '@storybook/react-vite';
import { SizeChart } from './SizeChart';
import {
  mockSizeChartHoodieEn,
  mockSizeChartShirtKo,
} from '../../../lib/mockData';
import { expect, within } from 'storybook/test';
import { SizeChartSkeleton } from './SizeChartSkeleton';

const meta: Meta<typeof SizeChart> = {
  title: 'Components/Shared/SizeChart',
  component: SizeChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Size Chart to display in the product page',
      },
    },
  },

  args: {
    name: mockSizeChartHoodieEn.name,
    media: mockSizeChartHoodieEn.media,
    measurementDesc: mockSizeChartHoodieEn.measurementDesc,
    sizes: mockSizeChartHoodieEn.sizes,
  },
  argTypes: {
    name: {
      control: 'text',
      table: {
        type: {
          summary: 'Product type Size Chart',
          detail: `Shirts, Hoodies, Bottoms, Skateboards, etc.`,
        },
      },
    },

    media: {
      control: false,
      table: {
        type: {
          summary: `Full image URL of the size guide and alternative text`,
          detail: `
            imageUrl: string;
            imageAtl: string;
          `,
        },
      },
    },

    measurementDesc: {
      control: false,
      table: {
        type: {
          summary: `Measurement Instructions of a particular product`,
          detail: `
            label: string;
            body: string;
          `,
        },
      },
    },

    sizes: {
      control: false,
      table: {
        type: {
          summary: `Different sizes of a particular product`,
          detail: `
            label: string;
            measurement: Record<string, string>[];
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
      description: 'Render image component in Next.js',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <SizeChart
      {...args}
      renderImage={(props) => <img src={props.src} alt={props.alt} />}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const img = canvas.getByRole('img');

    await expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('cdn.sanity.io'),
    );
  },
};

export const LocaleKo: Story = {
  render: (args) => (
    <SizeChart
      {...args}
      renderImage={(props) => <img src={props.src} alt={props.alt} />}
      name={mockSizeChartShirtKo.name}
      media={mockSizeChartShirtKo.media}
      measurementDesc={mockSizeChartShirtKo.measurementDesc}
      sizes={mockSizeChartShirtKo.sizes}
    />
  ),
};

export const Loading = {
  render: () => <SizeChartSkeleton />,
};
