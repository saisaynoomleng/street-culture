import type { Meta, StoryObj } from '@storybook/react-vite';
import { ApplyJobForm } from './ApplyJobForm';
import { expect, fn, waitFor } from 'storybook/test';
import {
  ActionResponse,
  JobApplicationsFormValues,
} from '@street-culture/utils';

const mockAction = fn(
  async (
    values: JobApplicationsFormValues,
  ): Promise<ActionResponse<JobApplicationsFormValues>> => {
    return {
      success: true,
      message: 'Application Submitted!',
    };
  },
);

const mockFile = new File(['resume content'], 'johndoe.docs', {
  type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
});

const meta: Meta<typeof ApplyJobForm> = {
  title: 'Components/Features/ApplyJobForm',
  component: ApplyJobForm,
  tags: ['autodocts'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Job Application Form for user to apply opening positions',
      },
    },
  },

  args: {
    action: mockAction,
  },
  argTypes: {
    action: {
      control: false,
      description: 'Action to be handled by Next.js Server Action',
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
  render: (args) => <ApplyJobForm {...args} />,
  play: async ({ canvas, userEvent }) => {
    const firstName = canvas.getByLabelText('first name');
    const lastName = canvas.getByLabelText('last name');
    const email = canvas.getByLabelText('email');
    const phone = canvas.getByLabelText('phone');
    const shortIntro = canvas.getByLabelText('textarea');
    const address1 = canvas.getByLabelText('address 1');
    const address2 = canvas.getByLabelText('address 2');
    const city = canvas.getByLabelText('city');
    const resume = canvas.getByLabelText('resume file');
    const state = canvas.getByLabelText('state');
    const zip = canvas.getByLabelText('postal code');
    const isEmployedCheckbox = canvas.getByLabelText('Is employed before?');
    const country = canvas.getByLabelText('country');
    const isAuthorizedToWork = canvas.getByLabelText(
      'is authorized to work in us',
    );

    await userEvent.click(isAuthorizedToWork);
    await userEvent.click(isEmployedCheckbox);
    const addAnotherEmployer = canvas.getByLabelText('add another employer');
    const submit = canvas.getByLabelText('submit');

    await userEvent.click(addAnotherEmployer);

    const previousEmployerName1 = canvas.getByLabelText(
      'previous employer name 1',
    );
    const previousEmployerEmail1 = canvas.getByLabelText(
      'previous employer email 1',
    );
    const previousEmployerPhone1 = canvas.getByLabelText(
      'previous employer phone 1',
    );
    const previousEmployerPreviousRole1 = canvas.getByLabelText(
      'previous employer previous role 1',
    );
    const previousEmployerStartedDate1 = canvas.getByLabelText(
      'previous employer started date 1',
    );
    const previousEmployerEndedDate1 = canvas.getByLabelText(
      'previous employer left date 1',
    );

    const previousEmployerName2 = canvas.getByLabelText(
      'previous employer name 2',
    );
    const previousEmployerEmail2 = canvas.getByLabelText(
      'previous employer email 2',
    );
    const previousEmployerPhone2 = canvas.getByLabelText(
      'previous employer phone 2',
    );
    const previousEmployerPreviousRole2 = canvas.getByLabelText(
      'previous employer previous role 2',
    );
    const previousEmployerStartedDate2 = canvas.getByLabelText(
      'previous employer started date 2',
    );
    const previousEmployerEndedDate2 = canvas.getByLabelText(
      'previous employer left date 2',
    );
    const previousEmployerReasonForLeaving1 = canvas.getByTestId(
      'previous employer reason for leaving 1',
    );
    const previousEmployerReasonForLeaving2 = canvas.getByTestId(
      'previous employer reason for leaving 2',
    );

    await userEvent.type(firstName, 'John');
    await userEvent.type(lastName, 'Doe');
    await userEvent.type(email, 'johndoe@mail.com');
    await userEvent.type(phone, '+1 234 567 8901');
    await userEvent.type(shortIntro, 'Testing short intro text...');
    await userEvent.upload(resume, mockFile);
    await userEvent.type(address1, 'Johndoe street 1');
    await userEvent.type(address2, 'Johndoe street 2');
    await userEvent.type(city, 'John City');
    await userEvent.type(state, 'John State');
    await userEvent.type(zip, '99999');
    await userEvent.type(country, 'John country');

    await userEvent.type(previousEmployerName1, 'name 1');
    await userEvent.type(previousEmployerEmail1, 'email1@mail.com');
    await userEvent.type(previousEmployerPhone1, 'phone 1');
    await userEvent.type(previousEmployerPreviousRole1, 'previous role 1');
    await userEvent.type(previousEmployerStartedDate1, '2024-12-25');
    await userEvent.type(previousEmployerEndedDate1, '2025-12-25');
    await userEvent.type(
      previousEmployerReasonForLeaving1,
      'Reason for leaving 1...',
    );

    await userEvent.type(previousEmployerName2, 'name 2');
    await userEvent.type(previousEmployerEmail2, 'email2@mail.com');
    await userEvent.type(previousEmployerPhone2, 'phone 2');
    await userEvent.type(previousEmployerPreviousRole2, 'previous role 2');
    await userEvent.type(previousEmployerStartedDate2, '2022-12-25');
    await userEvent.type(previousEmployerEndedDate2, '2023-12-25');
    await userEvent.type(
      previousEmployerReasonForLeaving2,
      'Reason for leaving 2...',
    );

    await userEvent.click(submit);

    await waitFor(() => expect(mockAction).toHaveBeenCalled());
    await waitFor(() =>
      expect(mockAction).toBeCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@mail.com',
        phone: '+1 234 567 8901',
        body: 'Testing short intro text...',
        address1: 'Johndoe street 1',
        address2: 'Johndoe street 2',
        city: 'John City',
        state: 'John State',
        zip: '99999',
        country: 'John country',
        isAuthorizedToWorkInUS: true,
        resumeUrl: '',
        previousEmployers: [
          {
            name: 'name 1',
            email: 'email1@mail.com',
            phone: 'phone 1',
            reasonForLeaving: 'Reason for leaving 1...',
            previousRole: 'previous role 1',
            startedDate: new Date('2024-12-25'),
            endedDate: new Date('2025-12-25'),
          },
          {
            name: 'name 2',
            email: 'email2@mail.com',
            phone: 'phone 2',
            reasonForLeaving: 'Reason for leaving 2...',
            previousRole: 'previous role 2',
            startedDate: new Date('2022-12-25'),
            endedDate: new Date('2023-12-25'),
          },
        ],
      }),
    );
  },
};
