import { Bounded } from '../Bounded';
import { PageSpinner } from '../PageSpinner';

export const PageLoading = () => {
  return (
    <Bounded className="flex flex-col w-full min-h-screen justify-center items-center">
      <PageSpinner fontSize={40} />
    </Bounded>
  );
};
