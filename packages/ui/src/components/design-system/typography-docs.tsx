import Bounded from '@/components/shared/Bounded/Bounded';

const Headings = [
  {
    name: 'h1',
    size: 'FS-900/4.5rem/72px',
    weight: 'semibold/600',
    lineHeight: '0.25rem/4px',
    fontSize: '4.5rem',
  },
  {
    name: 'h2',
    size: 'FS-800/3.75rem/60px',
    weight: 'semibold/600',
    lineHeight: '0.25rem/4px',
    fontSize: '3.75rem',
  },
  {
    name: 'h3',
    size: 'FS-700/3rem/48px',
    weight: 'semibold/600',
    lineHeight: '0.25rem/4px',
    fontSize: '3rem',
  },
  {
    name: 'h4',
    size: 'FS-600/2.25rem/36px',
    weight: 'semibold/600',
    lineHeight: '0.25rem/4px',
    fontSize: '2.25rem',
  },
  {
    name: 'h5',
    size: 'FS-500/1.5rem/24px',
    weight: 'semibold/600',
    lineHeight: '0.25rem/4px',
    fontSize: '1.5rem',
  },
  {
    name: 'h6',
    size: 'FS-400/1rem/16px',
    weight: 'semibold/600',
    lineHeight: '0.25rem/4px',
    fontSize: '1rem',
  },
];

const TypographyDocs = () => {
  return (
    <Bounded>
      <div className="grid grid-cols-2 justify-around font-heading">
        <div className="flex flex-col gap-y-3">
          <p className="text-fs-900 font-bold capitalize">Assistant</p>
          <p className="uppercase">abcdefghijklmnopqrstuvwxyz</p>
          <p className="lowercase">abcdefghijklmnopqrstuvwxyz</p>

          <div className="flex flex-col gap-y-3 my-4">
            <p className="font-black">Black</p>
            <p className="font-extrabold">Extra Bold</p>
            <p className="font-bold">Bold</p>
            <p className="font-semibold">Semibold</p>
            <p className="font-medium">Medium</p>
            <p className="font-regular">Regular</p>
            <p className="font-light">Light</p>
            <p className="font-extralight">Extra Light</p>
            <p className="font-thin">Thin</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Headings</p>
          <div className="space-y-2">
            {Headings.map((heading) => (
              <div key={heading.name} className="space-y-2">
                <p className="font-semibold text-neutral-400 uppercase">
                  {heading.name}
                </p>
                <p
                  style={{ fontSize: `${heading.fontSize}`, fontWeight: '600' }}
                >
                  Typography
                </p>
                <div className="flex justify-between items-center text-fs-300 text-neutral-500">
                  <p>Size: {heading.size}</p>
                  <p>Weight: {heading.weight}</p>
                  <p>Line Height: {heading.lineHeight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider my-12"></div>

      <div className="grid grid-cols-2 justify-around font-body">
        <div className="flex flex-col gap-y-3">
          <p className="text-fs-900 font-bold capitalize">Abel</p>
          <p className="uppercase">abcdefghijklmnopqrstuvwxyz</p>
          <p className="lowercase">abcdefghijklmnopqrstuvwxyz</p>
          <div className="flex flex-col gap-y-3">
            <p className="font-regular">Regular</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <p className="font-semibold">Body</p>
          <div className="flex justify-between items-center text-fs-300 text-neutral-500">
            <p>Size: FS-400/1rem/16px</p>
            <p>Weight: regular/400</p>
            <p>Line Height: 1.5</p>
          </div>
          <p>
            The red glint of paint sparkled under the sun. He had dreamed of
            owning this car since he was ten, and that dream had become a
            reality less than a year ago. It was his baby and he spent hours
            caring for it, pampering it, and fondling over it. She knew this all
            too well, and that's exactly why she had taken a sludge hammer to
            it.
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default TypographyDocs;
