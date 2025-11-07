import React from 'react';

export default function NavCountryIcon({ className = 'w-6 h-6 text-blue-700 dark:text-blue-300' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M2 12h20M12 2c2 3 3 6 3 10s-1 7-3 10M12 2c-2 3-3 6-3 10s1 7 3 10"
        stroke="white"
        strokeWidth="0.8"
      />
    </svg>
  );
}
