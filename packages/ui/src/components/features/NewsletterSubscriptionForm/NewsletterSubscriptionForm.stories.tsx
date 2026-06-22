import type { Meta, StoryObj } from '@storybook/react-vite';
import { NewsletterSubscriptionForm } from './NewsletterSubscriptionForm';
import { expect, fn, waitFor } from 'storybook/test';
import {
  ActionResponse,
  NewsletterSubscriptionFormValues,
} from '@street-culture/utils';

const mockAction = fn(
  async (): Promise<ActionResponse<NewsletterSubscriptionFormValues>> => {
    return {
      success: true,
      message: 'Thank you for your subscription',
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
          'Newsletter Subscription Form for users to subscribe to updates',
      },
    },
  },

  args: {
    action: mockAction,
  },
  argTypes: {
    action: {
      control: false,
      description: 'Action to be handle by Next.js Server Action',
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
    const submit = canvas.getByRole('button');

    await userEvent.type(email, 'johndoe@mail.com');
    await userEvent.click(submit);

    await waitFor(() => {
      expect(mockAction).toBeCalledWith({
        email: 'johndoe@mail.com',
      });
    });
  },
};
