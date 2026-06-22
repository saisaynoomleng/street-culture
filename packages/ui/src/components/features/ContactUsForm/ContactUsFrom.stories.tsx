import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactUsForm } from './ContactUsForm';
import { expect, fn, waitFor } from 'storybook/test';
import { ActionResponse, ContactUsFormValues } from '@street-culture/utils';

const mockAction = fn(
  async (
    values: ContactUsFormValues,
  ): Promise<ActionResponse<ContactUsFormValues>> => {
    return {
      success: true,
      message: 'Thank you for contacting us!',
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
        component: `Contact Form for users to contact directly on the website`,
      },
    },
  },

  args: {
    action: mockAction,
  },
  argTypes: {
    action: {
      control: false,
      description: `Action that will be handled by Next.js Server Action`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledForm: Story = {
  render: (args) => <ContactUsForm {...args} />,
  play: async ({ canvas, userEvent }) => {
    const fullname = canvas.getByLabelText(/full name/i);
    const email = canvas.getByLabelText(/email/i);
    const subject = canvas.getByLabelText(/subject/i);
    const message = canvas.getByLabelText(/textarea/i);
    const submit = canvas.getByRole('button');

    await userEvent.type(fullname, 'Haru');
    await userEvent.type(email, 'haru@mail.com');
    await userEvent.type(subject, 'testing subject');
    await userEvent.type(message, 'testing message for the contact us form');

    await userEvent.click(submit);

    await waitFor(() => {
      expect(mockAction).toBeCalledTimes(1);
    });

    await waitFor(() => {
      expect(mockAction).toBeCalledWith({
        fullName: 'Haru',
        email: 'haru@mail.com',
        subject: 'testing subject',
        message: 'testing message for the contact us form',
      });
    });
  },
};
