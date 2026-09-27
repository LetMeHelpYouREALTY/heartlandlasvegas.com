'use client';

import React, { useEffect, useRef } from 'react';

export default function RealScoutAdvancedSearch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content
      containerRef.current.innerHTML = '';
      
      // Create the web component element
      const element = document.createElement('realscout-advanced-search');
      element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
      
      containerRef.current.appendChild(element);
    }
  }, []);

  return (
    <div className="flex justify-center w-full" ref={containerRef} style={{ width: '100%', maxWidth: '100%' }} />
  );
}
