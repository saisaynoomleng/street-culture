import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useState } from 'react';
import { Bounded } from '../Bounded';
import { ProductCard } from '../ProductCard';
import { Color, Media } from '@/lib/types';

type ShopTheLookProps = {
  title: string;
  media: Media;
  hotspots: Hotspot[];
  className?: string;
};

type Hotspot = {
  title: string;
  price: number;
  discountInPercent: number;
  currency: 'krw' | 'usd';
  colors: Color[];
  media: Media;
  x: number;
  y: number;
};

export const ShopTheLook = ({
  title,
  media,
  hotspots,
  className,
}: ShopTheLookProps) => {
  if (!hotspots.length) return null;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const currentProduct = hotspots[currentIndex];

  if (!currentProduct) return null;

  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('grid md:grid-cols-2 md:gap-x-5 gap-y-4', className),
      )}
    >
      <div className="overflow-hidden relative">
        <img
          loading="lazy"
          src={media.imageUrl}
          alt={media.imageAlt}
          className="relative"
        />
        {hotspots.map((h, i) => (
          <button
            key={i}
            className="absolute w-5 h-5 bg-brand-accent-800 rounded-full z-10 animate-pulse"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
            data-testid="button"
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-fs-500 capitalize">{title}</p>

        <ProductCard
          title={hotspots[currentIndex]?.title as string}
          media={{
            imageUrl: hotspots[currentIndex]?.media.imageUrl as string,
            imageAlt: hotspots[currentIndex]?.media.imageAlt as string,
          }}
          colors={hotspots[currentIndex]?.colors as Color[]}
          currency={hotspots[currentIndex]?.currency as 'usd' | 'krw'}
          discountInPercent={
            hotspots[currentIndex]?.discountInPercent as number
          }
          price={hotspots[currentIndex]?.price as number}
          renderImage={(props) => (
            <img
              src={props.src}
              alt={props.alt}
              className="w-full h-full object-cover"
            />
          )}
        />
      </div>
    </Bounded>
  );
};
