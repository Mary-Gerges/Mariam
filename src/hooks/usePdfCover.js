import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const cache = new Map();

export function usePdfCover(pdfUrl) {
  const [src, setSrc] = useState(() => (pdfUrl && cache.get(pdfUrl)) || null);

  useEffect(() => {
    if (!pdfUrl) return;
    if (cache.has(pdfUrl)) {
      setSrc(cache.get(pdfUrl));
      return;
    }

    let cancelled = false;

    async function render() {
      try {
        const doc = await pdfjsLib.getDocument(encodeURI(pdfUrl)).promise;
        const page = await doc.getPage(1);
        const vp = page.getViewport({ scale: 0.6 });

        const canvas = document.createElement("canvas");
        canvas.width = vp.width;
        canvas.height = vp.height;

        await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;

        const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
        cache.set(pdfUrl, dataUrl);
        if (!cancelled) setSrc(dataUrl);
      } catch {
        /* silently fail — fallback placeholder */
      }
    }

    render();
    return () => { cancelled = true; };
  }, [pdfUrl]);

  return src;
}
