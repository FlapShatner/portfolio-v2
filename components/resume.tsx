import Icon from './icons';
import { useWindowSize } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';

interface ResumeProps {
  onClick?: () => void;
}

function Resume({ onClick }: ResumeProps) {
  const { width } = useWindowSize();
  const isMobile = width < 952;

  return (
    <div
      onClick={onClick}
      className={twMerge(
        'cursor-pointer text-lg md:text-xl items-center flex gap-2 sm:gap-1 md:gap-2 text-white border-white border-2 px-2 opacity-70 hover:opacity-100 bg-bg-secondary font-secondary transition-opacity duration-200',
        isMobile && 'w-[300px] justify-center py-2'
      )}
    >
      <Icon
        iconName="Resume"
        size={24}
      />
      Résumé
      <Icon
        iconName="Link"
        size={18}
      />
    </div>
  );
}

export default Resume;
