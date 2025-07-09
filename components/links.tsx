import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import Icon from '@/components/icons';
import { links } from '@/lib/links';
import { twMerge } from 'tailwind-merge';
import EmailLink from './emailLink';
import Link from './link';
import Resume from './resume';
import Modal from './modal';

const PDFViewer = dynamic(() => import('./pdf-viewer'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center p-8">
      <div className="text-white font-secondary">Loading PDF viewer...</div>
    </div>
  ),
});

interface LinksProps {
  isMobile: boolean;
  open: boolean;
}

const Links: FC<LinksProps> = ({ isMobile, open }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResumeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/JordanRobertsResume.pdf';
    link.download = 'JordanRobertsResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadButton = (
    <button
      onClick={handleDownloadResume}
      className="flex items-center gap-2 px-3 py-1 text-sm bg-bg-secondary border border-white text-white hover:opacity-80 transition-opacity font-secondary"
      aria-label="Download resume"
    >
      <Icon
        iconName="Download"
        size={16}
      />
      Download
    </button>
  );

  return (
    <>
      <div
        className={twMerge(
          !isMobile ?
            ' flex flex-row justify-end gap-6 lg:gap-8 w-full mb-6'
          : 'flex flex-col gap-6 items-end fixed right-2 bg-bg-primary p-6 border-2 border-white',
          isMobile && !open ? 'hidden' : 'flex'
        )}
      >
        {links.map((link) => (
          <Link
            isMobile={isMobile}
            key={link.id}
            title={link.title}
            url={link.url}
            mailTo={link.mailTo}
          />
        ))}
        <Resume onClick={handleResumeClick} />
        <EmailLink />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Resume"
        headerActions={downloadButton}
      >
        {isModalOpen && <PDFViewer />}
      </Modal>
    </>
  );
};

export default Links;
