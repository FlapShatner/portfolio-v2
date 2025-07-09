'use client';
import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useCopyToClipboard, useWindowSize } from 'usehooks-ts';
import Icon from './icons';
interface EmailLinkProps {}

const EmailLink: FC<EmailLinkProps> = () => {
  const [value, copy] = useCopyToClipboard();
  const { width } = useWindowSize();
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    copy('jordan@jrobertsweb.dev');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const isMobile = width < 952;

  return (
    <div
      onClick={handleCopy}
      className={twMerge(
        'cursor-pointer text-lg md:text-xl items-center flex gap-2 sm:gap-1 md:gap-2 text-white border-white border-2 px-2 opacity-70 hover:opacity-100 bg-bg-secondary font-secondary',
        isMobile && 'w-[300px] justify-center py-2'
      )}
    >
      <Icon
        iconName="Email"
        size={24}
      />
      {copied ? 'Copied' : 'Email'}
      <Icon
        iconName="Copy"
        size={22}
      />
    </div>
  );
};

export default EmailLink;
