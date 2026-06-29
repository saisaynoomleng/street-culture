'use client';

import {
  ActionResponse,
  JobApplicationsFormSchema,
  JobApplicationsFormValues,
} from '@street-culture/utils';
import React, { JSX, useState } from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { RiFileUploadFill } from 'react-icons/ri';
import { Button, Checkbox, Input } from '../../ui';
import { TextareaWithCounts } from '../../shared/TextareaWithCounts';
import { SubmitButton } from '../../shared/SubmitButton';

type ApplyJobFromProps = {
  action: (
    values: JobApplicationsFormValues,
  ) => Promise<ActionResponse<JobApplicationsFormValues>>;
  className?: string;
};

export const ApplyJobForm = ({
  action,
  className,
}: ApplyJobFromProps): JSX.Element => {
  const [isEmployedBefore, setIsEmployedBefore] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    control,
    setValue,
    watch,
  } = useForm<JobApplicationsFormValues>({
    resolver: zodResolver(JobApplicationsFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      body: '',

      resumeUrl: '',

      address1: '',
      address2: null,
      city: '',
      state: '',
      zip: '',
      country: '',

      isAuthorizedToWorkInUS: false,

      previousEmployers: [
        {
          name: '',
          email: '',
          phone: '',
          reasonForLeaving: '',
          previousRole: '',
          startedDate: new Date(),
          endedDate: null,
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<JobApplicationsFormValues> = async (values) => {
    const result = await action(values);

    if (!result.success && result.field) {
      setError(result.field as keyof JobApplicationsFormValues, {
        message: result.message,
      });

      toast.error(result.message);
      return;
    }

    toast.success(result.message);
  };

  const isAuthorizedToWork = watch('isAuthorizedToWorkInUS');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'previousEmployers',
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setError('resumeUrl', {
        message: 'Selected file exceeds 2MB',
      });
      return;
    }

    setValue('resumeUrl', file as File, {
      shouldValidate: true,
    });
  };

  const handleAddEmployer = () => {
    append({
      name: '',
      email: '',
      phone: '',
      reasonForLeaving: '',
      previousRole: '',
      startedDate: new Date(),
      endedDate: null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge(
        clsx('grid md:grid-cols-2 md:gap-x-6 p-4 md:p-6 gap-y-4', className),
      )}
    >
      {/* Basic Info */}
      <h3 className="font-heading text-fs-500 md:text-fs-600 col-span-full">
        Basic Information
      </h3>

      <div className="space-y-1 col-span-full relative border flex flex-col gap-y-2 justify-center items-center p-2">
        <div>
          <RiFileUploadFill className="size-10 md:size-20 text-brand-neutral-500" />
        </div>

        <label htmlFor="resumeUrl" className="form-label self-start">
          Upload Your Resume
        </label>
        <Input
          type="file"
          id="resumeUrl"
          accept=".pdf,.doc,docx"
          onChange={handleFileUpload}
          className="border-none"
          aria-label="resume file"
        />
        {errors.resumeUrl && (
          <p className="form-error-message">
            {errors.resumeUrl.message as string}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <Input
          type="text"
          {...register('firstName')}
          aria-label="first name"
          autoComplete="given-name"
          id="firstName"
          placeholder="John"
        />
        {errors.firstName && (
          <p className="form-error-message">{errors.firstName.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <Input
          type="text"
          {...register('lastName')}
          aria-label="last name"
          autoComplete="family-name"
          id="lastName"
          placeholder="Doe"
        />
        {errors.lastName && (
          <p className="form-error-message">{errors.lastName.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <Input
          type="email"
          {...register('email')}
          id="email"
          placeholder="johndoe@mail.com"
          aria-label="email"
          autoComplete="email"
        />
        {errors.email && (
          <p className="form-error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <Input
          type="text"
          {...register('phone')}
          id="phone"
          aria-label="phone"
          autoComplete="tel"
          placeholder="+1 234 567 8901"
        />
        {errors.phone && (
          <p className="form-error-message">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-1 col-span-full">
        <label htmlFor="body" className="form-label">
          Short Intro
        </label>
        <TextareaWithCounts {...register('body')} id="body" maxLength={2000} />
        {errors.body && (
          <p className="form-error-message">{errors.body.message}</p>
        )}
      </div>

      <div className="divider col-span-full"></div>

      {/* Addresses */}
      <h3 className="font-heading text-fs-500 md:text-fs-600 col-span-full">
        Contact Information
      </h3>

      <div className="space-y-1">
        <label htmlFor="address1" className="form-label">
          Address 1
        </label>
        <Input
          type="text"
          {...register('address1')}
          id="address1"
          aria-label="address 1"
          autoComplete="address-line1"
        />
        {errors.address1 && (
          <p className="form-error-message">{errors.address1.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="address2" className="form-label">
          Address 2
        </label>
        <Input
          type="text"
          {...register('address2')}
          id="address2"
          aria-label="address 2"
          autoComplete="address-line2"
        />
        {errors.address2 && (
          <p className="form-error-message">{errors.address2.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <Input
          type="text"
          {...register('city')}
          id="city"
          aria-label="city"
          autoComplete="address-level2"
        />
        {errors.city && (
          <p className="form-error-message">{errors.city.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <Input
          type="text"
          {...register('state')}
          id="state"
          autoComplete="address-level1"
          aria-label="state"
        />

        {errors.state && (
          <p className="form-error-message">{errors.state.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="zip" className="form-label">
          Zip/Postal Code
        </label>
        <Input
          type="text"
          {...register('zip')}
          id="zip"
          aria-label="postal code"
          autoComplete="postal-code"
        />
        {errors.zip && (
          <p className="form-error-message">{errors.zip.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <Input
          type="text"
          {...register('country')}
          id="country"
          aria-label="country"
          autoComplete="country-name"
        />
        {errors.country && (
          <p className="form-error-message">{errors.country.message}</p>
        )}
      </div>

      {/* Previous Employers */}
      <label htmlFor="isEmployedBefore" className="flex gap-x-2 items-center">
        <Checkbox
          checked={isEmployedBefore}
          onCheckedChange={(checked) => setIsEmployedBefore(!!checked)}
          id="isEmployedBefore"
          aria-label="Is employed before?"
        />
        I&apos;m employed Before
      </label>

      {isEmployedBefore && (
        <div className="col-span-full">
          {fields.map((field, index) => (
            <div
              className="grid md:grid-cols-2 gap-y-4 md:gap-x-6 py-4 md:py-6"
              key={field.id}
            >
              <h3 className="font-semibold text-fs-500 md:text-fs-600 col-span-full">
                Employer {index + 1}
              </h3>

              <div className="space-y-1">
                <label
                  htmlFor={`previousEmployer.${index}.name`}
                  className="form-label"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id={`previousEmployer.${index}.name`}
                  {...register(`previousEmployers.${index}.name` as const)}
                  aria-label={`previous employer name ${index + 1}`}
                />
                {errors.previousEmployers?.[index]?.name && (
                  <p className="form-error-message">
                    {errors.previousEmployers[index].name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor={`previousEmployer.${index}.email`}
                  className="form-label"
                >
                  Email
                </label>
                <Input
                  type="email"
                  {...register(`previousEmployers.${index}.email` as const)}
                  aria-label={`previous employer email ${index + 1}`}
                  id={`previousEmployer.${index}.email`}
                />
                {errors.previousEmployers?.[index]?.email && (
                  <p className="form-error-message">
                    {errors.previousEmployers[index].email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor={`previousEmployer.${index}.phone`}
                  className="form-label"
                >
                  Phone
                </label>
                <Input
                  type="text"
                  {...register(`previousEmployers.${index}.phone` as const)}
                  aria-label={`previous employer phone ${index + 1}`}
                  id={`previousEmployers.${index}.phone`}
                />
                {errors.previousEmployers?.[index]?.phone && (
                  <p className="form-error-message">
                    {errors.previousEmployers[index].phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor={`previousEmployer.${index}.previousRole`}
                  className="form-label"
                >
                  Previous Role
                </label>
                <Input
                  type="text"
                  {...register(
                    `previousEmployers.${index}.previousRole` as const,
                  )}
                  aria-label={`previous employer previous role ${index + 1}`}
                  id={`previousEmployer.${index}.previousRole`}
                />
                {errors.previousEmployers?.[index]?.previousRole && (
                  <p className="form-error-message">
                    {errors.previousEmployers[index].previousRole.message}
                  </p>
                )}
              </div>

              <div className="space-y-1 col-span-full">
                <label
                  htmlFor={`previousEmployer.${index}.reasonForLeaving`}
                  className="form-label"
                >
                  Reason For Leaving
                </label>
                <TextareaWithCounts
                  id={`previousEmployer.${index}.reasonForLeaving`}
                  aria-label={`previous employer reason for leaving ${index + 1}`}
                  {...register(
                    `previousEmployers.${index}.reasonForLeaving` as const,
                  )}
                  data-testid={`previous employer reason for leaving ${index + 1}`}
                />
                {errors.previousEmployers?.[index]?.reasonForLeaving && (
                  <p className="form-error-message">
                    {errors.previousEmployers[index].reasonForLeaving.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor={`previousEmployer.${index}.startedDate`}
                  className="form-label"
                >
                  Started Date
                </label>
                <Input
                  type="date"
                  {...register(
                    `previousEmployers.${index}.startedDate` as const,
                    { valueAsDate: true },
                  )}
                  aria-label={`previous employer started date ${index + 1}`}
                  id={`previousEmployer.${index}.startedDate`}
                />
                {errors.previousEmployers?.[index]?.startedDate && (
                  <p className="form-error-message">
                    {errors.previousEmployers[index].startedDate.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor={`previousEmployer.${index}.endedDate`}
                  className="form-label"
                >
                  Left Date
                </label>
                <Input
                  type="date"
                  {...register(
                    `previousEmployers.${index}.endedDate` as const,
                    { valueAsDate: true },
                  )}
                  aria-label={`previous employer left date ${index + 1}`}
                  id={`previousEmployer.${index}.endedDate`}
                />
                {errors.previousEmployers?.[index]?.endedDate && (
                  <p className="form-error-message">
                    {errors.previousEmployers[index].endedDate.message}
                  </p>
                )}
              </div>

              <Button
                type="button"
                variant="error"
                aria-label="remove current employer"
                onClick={() => remove(index)}
              >
                Remove Current Employer
              </Button>
            </div>
          ))}

          <Button
            type="button"
            onClick={handleAddEmployer}
            aria-label="add another employer"
          >
            Add Another Employer
          </Button>
        </div>
      )}

      <div className="space-y-1 col-span-full">
        <label
          htmlFor="isAuthorizedToWorkInUS"
          className="flex gap-x-2 items-center"
        >
          <Checkbox
            id="isAuthorizedToWorkInUS"
            aria-label="is authorized to work in us"
            checked={isAuthorizedToWork}
            onCheckedChange={(checked) =>
              setValue('isAuthorizedToWorkInUS', !!checked, {
                shouldValidate: true,
              })
            }
          />
          I&apos;m authorized to work in the U.S without sponsoring visa.
        </label>
        {errors.isAuthorizedToWorkInUS && (
          <p className="form-error-message">
            {errors.isAuthorizedToWorkInUS.message}
          </p>
        )}
      </div>

      {isAuthorizedToWork && <SubmitButton>Submit</SubmitButton>}
    </form>
  );
};
