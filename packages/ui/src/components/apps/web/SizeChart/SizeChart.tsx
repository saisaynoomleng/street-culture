import type { JSX } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../ui/table';
import { ImageProps, Media } from '../../../../lib/types';
import { Bounded } from '../../../shared';

type SizeChartProps = {
  name: string;
  media: Media;
  measurementDesc: MeasurementDesc[];
  sizes: Sizes[];
  className?: string;
  renderImage: (props: ImageProps) => React.ReactNode;
};

type MeasurementDesc = {
  label: string;
  body: string;
};

type Sizes = {
  label: string;
  measurements: {
    label: string;
    value: string;
  }[];
};

export const SizeChart = ({
  name,
  media,
  measurementDesc,
  sizes,
  className,
  renderImage,
}: SizeChartProps): JSX.Element | null => {
  if (!sizes.length) return null;

  const measurementColumns = Array.from(
    new Set(
      sizes.flatMap((row) =>
        row.measurements.map((measurement) => measurement.label),
      ),
    ),
  );

  return (
    <Bounded
      as="div"
      className={twMerge(clsx('flex flex-col gap-y-4', className))}
    >
      <p className="font-semibold text-fs-500 md:text-fs-600 capitalize text-center">
        How to choose the right {name} guide
      </p>
      <div className="grid md:grid-cols-2 md:gap-x-6 gap-y-4">
        <div className="flex flex-col gap-y-2">
          {measurementDesc.map((m) => (
            <div className="space-y-2" key={m.label}>
              <p className="font-semibold">{m.label}</p>
              <p>{m.body}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden relative aspect-square">
          {renderImage({
            src: media.imageUrl,
            alt: media.imageAlt,
            className: 'w-full h-full object-cover',
          })}
        </div>
      </div>

      <Table>
        <TableCaption>{name} Unisex Size Guide</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Sizes</TableHead>
            {measurementColumns.map((m) => (
              <TableHead key={m} className="capitalize font-semibold">
                {m}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {sizes.map((s) => (
            <TableRow key={s.label} className="uppercase">
              <TableCell>{s.label}</TableCell>

              {s.measurements.map((m) => (
                <TableCell key={m.label}>{m.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Bounded>
  );
};
