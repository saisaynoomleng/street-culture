import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthorDisplay } from './AuthorDisplay';
import { mockPhoto } from '../../../../lib/mockData';
import { MdFacebook } from 'react-icons/md';
import { AuthorDisplaySkeleton } from './AuthorDisplaySkeleton';
import { expect } from 'storybook/test';

const meta: Meta<typeof AuthorDisplay> = {
  title: 'Components/Apps/Web/AuthorDisplay',
  component: AuthorDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Render Author detail`,
      },
    },
  },

  args: {
    media: {
      imageUrl: mockPhoto,
      imageAlt: 'author',
    },
    socialLink: 'testlink',
    name: 'John',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus beatae sint, ipsam cum nisi dolore consectetur nemo cupiditate facere, possimus dicta quam. Modi aut ad pariatur quidem in debitis dolorum natus rem quas ea incidunt, ullam molestias illo hic fugit sint similique eius iusto repudiandae repellat dicta tempore quaerat. Et?',
  },
  argTypes: {
    media: {
      control: false,
      table: {
        type: {
          summary: 'Full URL path to the image and image alternative text',
          detail: `
            imageUrl: string;
            imageAlt: string;
          `,
        },
      },
    },

    socialLink: {
      control: false,
      table: {
        type: {
          summary: "Full URL to the author's social media",
          detail: `
            socialLink: string
          `,
        },
      },
    },

    name: {
      control: 'text',
      description: `Author's name`,
    },

    bio: {
      control: 'text',
      description: `Author's Bio Summary`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AuthorDisplay
      {...args}
      renderAction={(props) => (
        <a href={props}>
          <MdFacebook />
        </a>
      )}
      renderImage={(props) => <img src={props.src} alt={props.alt} />}
    />
  ),
  play: async ({ canvas }) => {
    const name = canvas.getByText(/john/i);
    const bio = canvas.getByText(/lorem ipsum dolor sit amet consectetur/i);
    const img = canvas.getByRole('img');
    const link = canvas.getByRole('link');

    await expect(name).toBeInTheDocument();
    await expect(bio).toBeInTheDocument();
    await expect(img).toHaveAttribute('src', expect.stringContaining('pinimg'));
    await expect(img).toHaveAttribute('alt', 'author');
    await expect(link).toHaveAttribute('href', 'testlink');
  },
};

export const Loading = {
  render: () => <AuthorDisplaySkeleton />,
};
