import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReviewCard } from './ReviewCard';
import { mockReviewCard } from '@/lib/mockData';
import { ReviewCardSkeleton } from './ReviewCardSkeleton';

const meta: Meta<typeof ReviewCard> = {
  title: 'Components/Shared/ReviewCard',
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
};

export const Loading = {
  render: () => <ReviewCardSkeleton />,
};
