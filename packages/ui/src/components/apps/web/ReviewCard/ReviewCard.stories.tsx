import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReviewCard } from './ReviewCard';
import { mockReviewCard } from '../../../../lib/mockData';
import { ReviewCardSkeleton } from './ReviewCardSkeleton';
import { expect, within } from 'storybook/test';

const meta: Meta<typeof ReviewCard> = {
  title: 'Components/Apps/Web/ReviewCard',
  component: ReviewCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display Page reviews from the customer on the website',
      },
    },
  },

  args: {
    text: mockReviewCard.text,
    fullName: mockReviewCard.fullName,
    role: mockReviewCard.role,
    media: mockReviewCard.media,
  },
  argTypes: {
    fullName: {
      control: 'text',
      description: "Reviewer's full name",
    },

    role: {
      control: 'text',
      description: "Reviewer's professional role",
    },

    text: {
      control: 'text',
      description: 'Review text content',
    },

    media: {
      control: false,
      description: "Reviewer's photo and image alternative text",
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
    <ReviewCard
      {...args}
      renderImage={(props) => <img src={props.src} alt={props.alt} />}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fullName = canvas.getByText(/saya misaki/i);
    const role = canvas.getByText(/blogger/i);
    const img = canvas.getByRole('img');
    const text = canvas.getByText(/engineered for the heavy/i);

    await expect(fullName).toBeInTheDocument();
    await expect(role).toBeInTheDocument();
    await expect(text).toBeInTheDocument();
    await expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('i.pinimg.com'),
    );
  },
};

export const Loading = {
  render: () => <ReviewCardSkeleton />,
};
