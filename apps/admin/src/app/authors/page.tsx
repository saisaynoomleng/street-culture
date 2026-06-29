import { Bounded, Button, SectionTitle } from '@street-culture/ui';
import { JSX } from 'react';
import AuthorList from './AuthorList';
import { FaPlusCircle } from 'react-icons/fa';
import EditAuthor from './EditAuthor';

const AuthorPage = (): JSX.Element => {
  return (
    <Bounded isCentered={false} className="space-y-3" size="full">
      <SectionTitle as="h3" size="sm" label="Authors" />

      <div className="grid grid-cols-[300px_1fr] gap-x-3">
        <div className="flex flex-col gap-y-3">
          <Button variant="success" className="self-end">
            <span>New Author</span>
            <span>
              <FaPlusCircle />
            </span>
          </Button>
          <AuthorList />
        </div>

        <div>
          <EditAuthor />
        </div>
      </div>
    </Bounded>
  );
};

export default AuthorPage;
