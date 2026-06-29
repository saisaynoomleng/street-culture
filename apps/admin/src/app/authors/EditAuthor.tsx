import { Bounded, SectionTitle } from '@street-culture/ui';
import React from 'react';

const EditAuthor = () => {
  return (
    <Bounded className="border" isCentered={false}>
      <SectionTitle as="h3" size="sm" label="Edit Author" />
    </Bounded>
  );
};

export default EditAuthor;
