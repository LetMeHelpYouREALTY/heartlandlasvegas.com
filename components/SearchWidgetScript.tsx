'use client';

import { useEffect, useCallback, useRef } from 'react';

export default function SearchWidgetScript() {
  const handlerRef = useRef<((event: MouseEvent) => void) | null>(null);

  const handleClick = useCallback((event: MouseEvent) => {
    // Optimized: Cache DOM queries and minimize work
    const searchText = (document.getElementById('SearchTextWidget') as HTMLInputElement)?.value;
    const errorElement = document.querySelector('#WidgetSearchValidationError') as HTMLElement;
    
    if (!searchText || searchText.trim() === '') {
      if (errorElement) {
        // Use requestAnimationFrame for non-critical DOM updates
        requestAnimationFrame(() => {
          errorElement.style.display = 'block';
        });
      }
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (errorElement) {
        requestAnimationFrame(() => {
          errorElement.style.display = 'none';
        });
      }
    }
  }, []);

  useEffect(() => {
    const searchButton = document.getElementById('HomeSearchBtnWidget');
    if (searchButton && !handlerRef.current) {
      handlerRef.current = handleClick;
      searchButton.addEventListener('click', handleClick, { passive: false });
      
      return () => {
        if (searchButton && handlerRef.current) {
          searchButton.removeEventListener('click', handlerRef.current);
          handlerRef.current = null;
        }
      };
    }
  }, [handleClick]);

  return null;
}


