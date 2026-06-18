import type { Meta, StoryObj } from '@storybook/react-vite';
import { NewsletterSubscriptionForm } from './NewsletterSubscriptionForm';
import { expect, fn, screen, userEvent, waitFor } from 'storybook/test';
import { PrevFormStateProps } from '@/lib/types';

const mockAction = fn(
  async (
    prevState: PrevFormStateProps,
    formData: FormData,
  ): Promise<PrevFormStateProps> => {
    return {
      success: true,
      message: 'Thank you for your Subscription!',
    };
  },
);

const meta: Meta<typeof NewsletterSubscriptionForm> = {
  title: 'Components/Features/NewsletterSubscriptionForm',
  component: NewsletterSubscriptionForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Newsletter subscription form for user to subscribe with email',
      },
    },
  },

  args: {
    action: mockAction,
  },
  argTypes: {
    action: {
      control: false,
      description: 'Action to be handled by Server Action',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledForm: Story = {
  render: (args) => <NewsletterSubscriptionForm {...args} />,
  play: async ({ canvas, userEvent }) => {
    const email = canvas.getByLabelText('email');
    const button = canvas.getByRole('button');

    await userEvent.type(email, 'johndoe@example.com');
    await userEvent.click(button);

    await waitFor(() => {
      expect(mockAction).toBeCalled();
    });
    await waitFor(() => {
      expect(
        screen.getByText('Thank you for your Subscription!'),
      ).toBeInTheDocument();
    });
  },
};
