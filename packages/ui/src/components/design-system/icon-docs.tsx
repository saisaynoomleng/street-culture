import Bounded from '#components/shared/Bounded.tsx';
import { FaRegNewspaper } from 'react-icons/fa';
import { GiGearHammer, GiNewspaper, GiPencil } from 'react-icons/gi';
import { GrCircleQuestion } from 'react-icons/gr';
import {
  MdCategory,
  MdOutlineFormatAlignJustify,
  MdOutlineStoreMallDirectory,
} from 'react-icons/md';
import { SiNike } from 'react-icons/si';
import { VscMilestone } from 'react-icons/vsc';
import { PiFlagBanner } from 'react-icons/pi';

const IconList = [
  <GiPencil />,
  <GiNewspaper />,
  <MdCategory />,
  <GrCircleQuestion />,
  <FaRegNewspaper />,
  <VscMilestone />,
  <SiNike />,
  <MdOutlineStoreMallDirectory />,
  <MdOutlineFormatAlignJustify />,
  <GiGearHammer />,
  <PiFlagBanner />,
];

const IconDocs = () => {
  return (
    <Bounded>
      <h1 className="font-semibold text-fs-600">Icons</h1>
      <p>
        The icon pack is based on Material Design Icons, Grommet Icons, Game
        Icons, Simple Icons, Font Awesome Icons, Tabler Icons, Lucide Icons,
        Circum Icons, Radix Icons, Phosphor Icons, Typicons and VS Code Icons.
      </p>
      <div className="grid grid-cols-12 gap-4 place-items-center">
        {IconList.map((icon) => (
          <span
            key={icon.key}
            className="border p-2 rounded-sm border-brand-neutral-200"
          >
            {icon}
          </span>
        ))}
      </div>
    </Bounded>
  );
};

export default IconDocs;
