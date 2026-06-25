'use client';

import { Bounded } from '@street-culture/ui';
import {
  useDocumentProjection,
  useDocuments,
  type DocumentHandle,
} from '@sanity/sdk-react';
import { JSX, Suspense, useRef } from 'react';
import Image from 'next/image';

type ProjectionResult = {
  data: {
    name: string;
    imageUrl: string;
    imageAlt: string;
  };
};

const SizeChartPage = () => {
  const { data: sizeCharts } = useDocuments({
    documentType: 'sizeChart',
    orderings: [{ field: '_createdAt', direction: 'desc' }],
  });

  return (
    <Bounded isCentered={false} className="flex flex-col gap-y-2">
      {sizeCharts.map((sizeChart) => (
        <Suspense key={sizeChart.documentId}>
          <SizeChartPreview documentHandle={sizeChart} />
        </Suspense>
      ))}
    </Bounded>
  );
};

const SizeChartPreview = ({
  documentHandle,
}: {
  documentHandle: DocumentHandle;
}): JSX.Element => {
  const ref = useRef(null);

  const {
    data: { name, imageUrl, imageAlt },
  }: ProjectionResult = useDocumentProjection({
    ...documentHandle,
    ref,
    projection: `{
      name,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    }`,
  });

  return (
    <div ref={ref} className="flex items-center border p-2">
      <div className="overflow-hidden relative aspect-square w-20 h-20">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover w-full"
          sizes="(max-width: 768px) 100vw"
        />
      </div>

      <p>{name}</p>
    </div>
  );
};

export default SizeChartPage;
