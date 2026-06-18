import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactUsForm } from './ContactUsForm';
import { expect, waitFor, fn, screen } from 'storybook/test';
import { PrevFormStateProps } from '@/lib/types';
import { ContactUsFormSkeleton } from './ContactUsFromSkeleton';

const mockAction = fn(
  async (
    prevState: PrevFormStateProps,
    formData: FormData,
  ): Promise<PrevFormStateProps> => {
    return {
      success: true,
      message: 'Form submitted successfully',
      field: '',
    };
  },
);

const meta: Meta<typeof ContactUsForm> = {
  title: 'Components/Features/ContactUsForm',
  component: ContactUsForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Contact Us form',
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
  render: (args) => <ContactUsForm {...args} />,
  play: async ({ canvas, userEvent }) => {
    const fullName = canvas.getByLabelText('fullname');
    const email = canvas.getByLabelText('email');
    const subject = canvas.getByLabelText('subject');
    const message = canvas.getByTestId('textarea');
    const submit = canvas.getByRole('button');

    await userEvent.type(fullName, 'John Doe');
    await userEvent.type(email, 'johndoe@mail.com');
    await userEvent.type(subject, 'This is testing subject...');
    await userEvent.type(message, 'This is testing message...');

    await userEvent.click(submit);

    await waitFor(() => {
      expect(mockAction).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(
        screen.getByText('Form submitted successfully'),
      ).toBeInTheDocument();
    });
  },
};

export const Loading = {
  render: () => <ContactUsFormSkeleton />,
};
