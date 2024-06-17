import React, { FC, ReactElement, useContext, useRef } from 'react';
import style from './header.module.scss';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { download, readFile } from '@tool-pack/dom';
import { getClassNames } from '@tool-pack/basic';
import { SettingContext } from '@/context';

export const Header: FC = (): ReactElement => {
  const { lastModified } = useContext(SettingContext);
  const pdfPageInputRef = useRef<HTMLInputElement>(null);
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
        <input
          onChange={onPDFPageChange}
          className="pdf-page-input"
          accept="application/pdf"
          ref={pdfPageInputRef}
          type="file"
        />
      </div>
      <div className="right">
        <p className="last-modified">最后更新于 {lastModified}</p>
      </div>
    </div>
  );

  function generatePdf() {
    window.print();
  }
  async function onPDFPageChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> {
    const input = e.target;
    if (!input) return;

    const file = input.files?.[0];
    if (!file) return;

    input.value = '';
    const r = await readFile(file, 'readAsArrayBuffer');
    if (!r || typeof r === 'string') return;

    const u8a = await modifyPDF(new Uint8Array(r));
    download(file.name, new Blob([u8a]));
  }
  function addPDFPage() {
    pdfPageInputRef.current!.click();
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
