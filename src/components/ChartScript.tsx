'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Use unknown instead of any for better type safety
declare global {
  interface Window {
    Chart: unknown;
  }
}

export default function ChartScript() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.Chart) {
      setIsLoaded(true);
      if (isLoaded) {
        console.log('Chart.js already loaded');
      }
    }
  }, [isLoaded]);

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        setIsLoaded(true);
        console.log('Chart.js loaded');
      }}
    />
  );
}