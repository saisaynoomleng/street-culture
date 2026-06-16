import { twMerge } from 'tailwind-merge';
import Bounded from './Bounded';
import clsx from 'clsx';

type CategoryCardProps = {
  className?: string;
  media: Media;
  title: string;
  numberInStocks: number;
};

type Media = {
  imageUrl: string;
  imageAlt: string;
};

const CategoryCard = ({
  className,
  media,
  title,
  numberInStocks,
}: CategoryCardProps) => {
  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('flex flex-col gap-y-2 w-100 h-100 aspect-square', className),
      )}
      aria-label={`${title} category card`}
    >
      <div className="overflow-hidden border-4">
        <img
          loading="lazy"
          src={media.imageUrl}
          alt={media.imageAlt}
          className="object-cover"
        />
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">{title}</p>
        <p>
          <span className="font-semibold">{numberInStocks}</span> products in
          stocks
        </p>
      </div>
    </Bounded>
  );
};

export default CategoryCard;
