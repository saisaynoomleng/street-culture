import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

import { expect } from 'storybook/test';
import { FooterSkeleton } from './FooterSkeleton';
import { CallToActionProps } from '../../../../lib/types';
import { mockFooterEn, mockFooterKo } from '../../../../lib/mockData';

const mockRenderAction = (props: CallToActionProps) => (
  <a href={props.href}>{props.label}</a>
);

const meta: Meta<typeof Footer> = {
  title: 'Components/Apps/Web/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    footerDescription: mockFooterEn.footerDescription,
    footerColumns: mockFooterEn.footerColumns,
    media: mockFooterEn.media,
  },
  argTypes: {
    footerDescription: {
      control: 'text',
      description: 'A summary text display near page logo',
    },

    footerColumns: {
      control: false,
      table: {
        type: {
          summary: `Different columns to display different categorized links`,
          detail: `
                    title: string;
                    columnLinks: {
                        href: string;
                        label: string;
                    }[]
                `,
        },
      },
    },

    media: {
      control: false,
      description: 'Full URL to logo image path and image alternative text',
    },

    renderActions: {
      control: false,
      description: 'Link Component to be rendered in Next.js',
    },

    renderImage: {
      control: false,
      description: 'Image component to be rendered in Next.js',
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
    <Footer
      {...args}
      renderActions={mockRenderAction}
      renderImage={(props) => (
        <img
          src={props.src}
          alt={props.alt}
          className="w-full h-full object-cover"
        />
      )}
    />
  ),
  play: async ({ canvas }) => {
    const img = canvas.getByRole('img');
    const desc = canvas.getByText(/street culture by haru commerce/i);

    await expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('cdn.sanity.io'),
    );
    await expect(img).toHaveAttribute('alt', expect.stringContaining('logo'));
    await expect(desc).toBeInTheDocument();
  },
};

export const LocaleKo: Story = {
  render: () => (
    <Footer
      footerColumns={mockFooterKo.footerColumns}
      footerDescription={mockFooterKo.footerDescription}
      media={mockFooterKo.media}
      renderActions={mockRenderAction}
      renderImage={(props) => (
        <img
          src={props.src}
          alt={props.alt}
          className="w-full h-full object-cover"
        />
      )}
    />
  ),
};

export const Loading = {
  render: () => <FooterSkeleton />,
};
