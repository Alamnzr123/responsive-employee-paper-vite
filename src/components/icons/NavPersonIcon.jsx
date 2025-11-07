import React from 'react';

export default function NavPersonIcon({ className = 'w-6 h-6 text-gray-700 dark:text-gray-200' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="8" r="3" fill="currentColor" />
      <path
        d="M4 20c1.5-4 7-6 8-6s6.5 2 8 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
