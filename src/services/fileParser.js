import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';

// Set up PDF.js worker for Vite
// Use a more reliable approach that works with Vite's build system
if (typeof window !== 'undefined') {
  // For browser environment, use the worker from node_modules
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
}

export const parseDocument = async (file) => {
  const fileType = file.type;
  let text = '';

  try {
    if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
        fileType === 'application/msword') {
      // Parse DOCX
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      text = result.value;
    } else if (fileType === 'application/pdf') {
      // Parse PDF
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      
      const numPages = pdf.numPages;
      const textPages = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        textPages.push(pageText);
      }

      text = textPages.join('\n\n');
    } else {
      throw new Error('Unsupported file type. Please upload a DOCX or PDF file.');
    }

    return { success: true, text };
  } catch (error) {
    console.error('Error parsing document:', error);
    return { success: false, error: error.message };
  }
};

