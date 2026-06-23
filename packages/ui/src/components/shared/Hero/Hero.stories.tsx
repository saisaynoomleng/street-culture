import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, expect } from 'storybook/test';
import { HeroSkeleton } from './HeroSkeleton';
import { Hero } from './Hero';
import { HeroMockDataEn, HeroMockDataKo } from '../../../lib/mockData';

const meta: Meta<typeof Hero> = {
  title: 'Components/Shared/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Hero Section of the homepage',
      },
    },
  },

  args: {
    banners: HeroMockDataEn.banners,
  },
  argTypes: {
    banners: {
      control: false,
      description: 'Array of Banners object coming from the CMS',
      table: {
        type: {
          summary: 'Each banner include title, text, position, media',
          detail: `
            title: string;
            text: string;
            position: 'left' | 'right';
            media: {
                imageUrl: string;
                imageAlt: string;
            }
          `,
        },
      },
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS class',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Hero {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole('heading');
    const text = canvas.getByTestId('text');
    const nextButton = canvas.getByLabelText(/next hero banner/i);
    const prevButton = canvas.getByLabelText(/prev hero banner/i);

    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent('2026');
    await expect(text).toBeInTheDocument();
    await expect(text).toHaveTextContent('Engineered');

    await userEvent.click(nextButton);

    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent('Welcome to');
    await expect(text).toBeInTheDocument();
    await expect(text).toHaveTextContent('Bypass');

    await userEvent.click(prevButton);

    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent('2026');
    await expect(text).toBeInTheDocument();
    await expect(text).toHaveTextContent('Engineered');
  },
};

export const LocaleKo: Story = {
  render: (args) => <Hero {...args} banners={HeroMockDataKo.banners} />,
};

export const Loading = {
  render: () => <HeroSkeleton />,
};
