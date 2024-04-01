import type { FC, ReactElement } from 'react';
import style from './header.module.scss';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { download, readFile, createHtmlElement } from '@tool-pack/dom';
import { getClassNames } from '@tool-pack/basic';

export const Header: FC = (): ReactElement => {
  // import.meta.env.APP_LAST_MODIFIED 来自于 vite.config.ts
  const lastModified = import.meta.env.APP_LAST_MODIFIED;
  return (
    <div className={getClassNames(style.root, 'print-hidden')}>
      <div className="left">
        <button className="generate-pdf btn " onClick={generatePdf}>
          生成PDF
        </button>
        |
        <button className="generate-pdf btn" onClick={addPDFPage}>
          为 PDF 文件生成页码
        </button>
      </div>
      <div className="right">
        <p className="last-modified">最后更新于 {lastModified}</p>
      </div>
    </div>
  );

  function generatePdf() {
    window.print();
  }
  function addPDFPage() {
    const input = createHtmlElement('input', {
      props: {
        type: 'file',
        accept: 'application/pdf',
        onchange: async () => {
          const file = input.files?.[0];
          input.remove();
          if (!file) return;

          const r = await readFile(file, 'readAsArrayBuffer');
          if (!r || typeof r === 'string') return;

          const u8a = await modifyPDF(new Uint8Array(r));
          download(file.name, new Blob([u8a]));
        },
      },
      parent: document.body,
    });
    input.click();
  }
  async function modifyPDF(u8a: Uint8Array): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.load(u8a);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const len = pages.length;
    pages.forEach((page, i) => {
      const { width } = page.getSize();
      const text = `${i + 1} / ${len}`;
      const size = 8;
      page.drawText(text, {
        font: helveticaFont,
        x: width - (text.length + 1) * (size / 2),
        y: size,
        size,
      });
    });

    return pdfDoc.save();
  }
};
