import {
  useNavigateToStudioDocument,
  type DocumentHandle,
} from '@sanity/sdk-react';
import { Button } from '@street-culture/ui';
import { type JSX } from 'react';

export const EditInStudio = ({
  handler,
}: {
  handler: DocumentHandle;
}): JSX.Element => {
  const { navigateToStudioDocument } = useNavigateToStudioDocument(handler);

  return (
    <Button variant="default" onClick={navigateToStudioDocument}>
      Edit In Studio
    </Button>
  );
};
