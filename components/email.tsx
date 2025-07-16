'use client';
import { useCopyToClipboard, useWindowSize } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import { FC, useState } from 'react';

interface EmailProps {}

const Email: FC<EmailProps> = () => {
  const [value, copy] = useCopyToClipboard();
  const { width } = useWindowSize();
  const [copied, setCopied] = useState(false);

  const isMobile = width < 952;

  const handleCopy = () => {
    copy('jrobertswebdev@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="cursor-pointer group  flex flex-col hover:bg-text-hl my-16 px-6 pt-8 pb-6 rounded-lg"
    >
      <h2 className="mb-4 text-center text-text-sec group-hover:text-bg-secondary text-2xl">{`Email me:`}</h2>
      <span className=" group-hover:text-bg-primary underline clamped">
        jrobertswebdev@gmail.com
      </span>
      <span
        className={twMerge('text-center', copied ? 'opacity-100' : 'opacity-0')}
      >
        copied!
      </span>
    </div>
  );
};

export default Email;
