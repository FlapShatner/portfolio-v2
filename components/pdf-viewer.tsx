'use client';
import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';

let pdfjs: any;
let Document: any;
let Page: any;

type PDFFile = string | File | null;

function PDFViewer() {
  const [file, setFile] = useState<PDFFile>('./JordanRobertsResume.pdf');
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    const initializePDFJS = async () => {
      try {
        const pdfjsLib = await import('react-pdf');

        pdfjs = pdfjsLib.pdfjs;
        Document = pdfjsLib.Document;
        Page = pdfjsLib.Page;

        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize PDF.js:', error);
        setPdfError('Failed to load PDF library');
        setIsLoading(false);
      }
    };

    initializePDFJS();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const getPageWidth = () => {
    const maxWidth = Math.min(width * 0.8, 900);
    return maxWidth > 300 ? maxWidth : 300;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-white font-secondary">Loading PDF viewer...</div>
      </div>
    );
  }

  if (pdfError) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-400 font-secondary">{pdfError}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex justify-center"
        loading={
          <div className="text-white font-secondary">Loading PDF...</div>
        }
        error={
          <div className="text-red-400 font-secondary">Failed to load PDF</div>
        }
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="border border-gray-300"
          width={getPageWidth()}
          loading={
            <div className="text-white font-secondary">Loading page...</div>
          }
        />
      </Document>

      {numPages && numPages > 1 && (
        <div className="flex items-center gap-4 text-white">
          <button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-3 py-1 bg-bg-secondary border border-white disabled:opacity-50 hover:opacity-80 transition-opacity"
          >
            Previous
          </button>

          <span className="font-secondary">
            Page {pageNumber} of {numPages}
          </span>

          <button
            onClick={() =>
              setPageNumber((prev) => Math.min(prev + 1, numPages))
            }
            disabled={pageNumber >= numPages}
            className="px-3 py-1 bg-bg-secondary border border-white disabled:opacity-50 hover:opacity-80 transition-opacity"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default PDFViewer;
