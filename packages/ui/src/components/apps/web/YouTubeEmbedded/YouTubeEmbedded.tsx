import { twMerge } from 'tailwind-merge';
import { Bounded } from '../../../shared/Bounded';
import clsx from 'clsx';

type YouTubeEmbeddedProps = {
  videoId: string;
  title: string;
  className?: string;
};

export const YouTubeEmbedded = ({
  videoId,
  className,
  title,
}: YouTubeEmbeddedProps) => {
  return (
    <Bounded
      as="div"
      className={twMerge(clsx('relative aspect-video', className))}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=0&fs=0&rel=0&disablekb=1&iv_load_policy=3`}
        loading="lazy"
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="pointer-events-none w-full h-[60%] border-0 relative saturate-0"
        data-testid="iframe"
      />
    </Bounded>
  );
};
