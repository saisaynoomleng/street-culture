import { twMerge } from 'tailwind-merge';
import Bounded from './Bounded';
import clsx from 'clsx';
import { JSX, useEffect, useState } from 'react';
import { Button } from '../ui';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type HeroProps = {
  banners: Banner[];
  className?: string;
};

type Banner = {
  _key: string;
  title: string;
  text: string;
  media: Media;
  callToAction: CallToAction;
};

type Media = {
  imageUrl: string;
  imageAlt: string;
};

type CallToAction = {
  label: string;
  href: string;
};

const Hero = ({ banners, className }: HeroProps): JSX.Element | null => {
  if (!banners.length) return null;

  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);

  const currentBanner = banners[currentBannerIndex];

  if (!currentBanner) return null;

  const nextBanner = (): void => {
    setCurrentBannerIndex((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1,
    );
  };

  const prevBanner = (): void => {
    setCurrentBannerIndex((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextBanner, 2000);

    return () => clearInterval(intervalId);
  }, [banners.length]);

  return (
    <Bounded
      className={twMerge(
        clsx(
          'h-screen flex items-end border bg-cover bg-no-repeat bg-center',
          className,
        ),
      )}
      style={{
        backgroundImage: `url(${currentBanner.media.imageUrl})`,
      }}
    >
      <div
        className={twMerge(
          clsx(
            'flex flex-col text-neutral-50 md:max-w-100 bg-neutral-50/5 backdrop-blur-xl p-10 gap-y-3',
          ),
        )}
      >
        <h2 className="text-fs-600 font-semibold">{currentBanner.title}</h2>
        <p className="font-medium">{currentBanner.text}</p>

        <div className="flex justify-between items-center">
          <Button onClick={prevBanner}>
            <FaAngleLeft />
          </Button>
          <p>
            0{currentBannerIndex + 1} / 0{banners.length}
          </p>
          <Button onClick={nextBanner}>
            <FaAngleRight />
          </Button>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
