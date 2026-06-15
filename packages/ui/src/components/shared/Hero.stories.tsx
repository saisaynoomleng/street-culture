import type { Meta, StoryObj } from '@storybook/react-vite';
import Hero from './Hero';
import { HeroMockDataEn, HeroMockDataKo } from '#lib/mockData.ts';
import { expect, within } from 'storybook/test';

const meta: Meta<typeof Hero> = {
  title: 'Components/Shared/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Hero Carousel Banner displayed on the Home Page',
      },
    },
  },

  args: {
    banners: HeroMockDataEn.banners,
  },
  argTypes: {
    banners: {
      control: false,
      description: 'An array that includes information for each carousel',
      table: {
        type: {
          summary: `Includes Title, Text, Media to display image, Call to Action to go to the page and _key for id.`,
          detail: `
                title: string;
                text: string;
                media: {
                    imageUrl: string;
                    imageAlt: string;
                };
                callToAction: {
                    label: string;
                    href: string;
                };
                _key: string;
            `,
        },
      },
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
  render: (args) => <Hero {...args} />,
};

export const WithLocaleKo: Story = {
  render: (args) => <Hero {...args} banners={HeroMockDataKo.banners} />,
};
