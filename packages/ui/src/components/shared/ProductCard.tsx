import { JSX } from 'react';
import Bounded from './Bounded';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { calculateDiscountPrice, formatCurrency } from '@street-culture/utils';
import ColorBlock from './ColorBlock';

type ProductCardProps = {
  className?: string;
  media: Media;
  discountInPercent: number;
  title: string;
  price: number;
  currency: 'usd' | 'krw';
  colors: Color[];
};

type Media = {
  imageUrl: string;
  imageAlt: string;
};

type Color =
  | `#${string}`
  | `rgb(${number} ${number} ${number})`
  | `rgba(${number} ${number} ${number})/${number}`;

const ProductCard = ({
  className,
  media,
  discountInPercent,
  title,
  price,
  currency,
  colors,
}: ProductCardProps): JSX.Element => {
  const finalPrice = discountInPercent
    ? calculateDiscountPrice(price, discountInPercent)
    : price;

  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('flex flex-col gap-y-2 w-100 h-100 group', className),
      )}
    >
      <div className="overflow-hidden relative border-4">
        <img
          loading="lazy"
          src={media.imageUrl}
          alt={media.imageAlt}
          className="object-cover relative group-hover:scale-[1.04] transition-transform duration-200 ease-in-out"
        />

        <div className="flex flex-col gap-y-1 absolute right-1 top-1">
          {discountInPercent && (
            <p className="bg-brand-neutral-950 text-brand-neutral-50 px-2">
              Sale {discountInPercent}%
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-1 text-center">
        <div className="flex items-center gap-x-1 justify-center">
          {colors.map((color, i) => (
            <ColorBlock key={i} color={color} data-testid="color" />
          ))}
        </div>
        <p className="font-semibold">{title}</p>

        {discountInPercent ? (
          <p className="flex items-center gap-x-4 justify-center">
            <span>{formatCurrency(finalPrice, currency)}</span>
            <span className="line-through">
              {formatCurrency(price, currency)}
            </span>
          </p>
        ) : (
          <p>{formatCurrency(price, currency)}</p>
        )}
      </div>
    </Bounded>
  );
};

export default ProductCard;
