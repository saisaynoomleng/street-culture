import { Dispatch, JSX, SetStateAction, useEffect, useState } from 'react';
import Bounded from './Bounded';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Button } from '../ui';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

type HeroProps = {
  banners: Banner[];
  className?: string;
};

type Banner = {
  title: string;
  text: string;
  position: 'left' | 'right';
  media: Media;
};

type Media = {
  imageUrl: string;
  imageAlt: string;
};

type BannerControls = {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  banners: Banner[];
};

const handleNext = ({ setCurrentIndex, banners }: BannerControls): void => {
  setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
};
const handlePrev = ({ setCurrentIndex, banners }: BannerControls): void => {
  setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
};

const Hero = ({ banners, className }: HeroProps): JSX.Element | null => {
  if (!banners.length) return null;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentBanner = banners[currentIndex];

  if (!currentBanner) return null;

  useEffect(() => {
    const interval = setInterval(
      () => handleNext({ setCurrentIndex, banners }),
      3000,
    );

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <Bounded
      aria-label="hero banner"
      as="section"
      className={twMerge(
        clsx(
          'min-h-screen bg-no-repeat bg-cover bg-center flex items-end',
          currentBanner.position === 'left'
            ? 'md:justify-start'
            : 'md:justify-end',
          className,
        ),
      )}
      style={{ backgroundImage: `url(${currentBanner.media.imageUrl})` }}
    >
      <div
        className={twMerge(
          clsx(
            'flex flex-col gap-y-3 max-w-100 bg-neutral-50/10 px-2 md:px-4 py-6 max-md:text-fs-300 backdrop-blur-2xl text-neutral-50',
          ),
        )}
      >
        <h1 className="text-fs-500 md:text-fs-600 lg:text-fs-700 font-heading font-semibold">
          {currentBanner.title}
        </h1>
        <p data-testid="text">{currentBanner.text}</p>

        <div className="flex items-center justify-between">
          <Button
            className="bg-brand-neutral-950 text-brand-neutral-50"
            onClick={() => handlePrev({ setCurrentIndex, banners })}
            aria-label="Prev Hero banner"
          >
            <FaAnglesLeft />
          </Button>

          <p>
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(banners.length).padStart(2, '0')}
          </p>

          <Button
            className="bg-brand-neutral-950 text-brand-neutral-50"
            onClick={() => handleNext({ setCurrentIndex, banners })}
            aria-label="Next hero banner"
          >
            <FaAnglesRight />
          </Button>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
