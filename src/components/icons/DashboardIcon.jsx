import React from 'react';

export default function DashboardIcon({
  className = 'w-16 h-16 text-indigo-600 dark:text-indigo-300',
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="6" y="6" width="52" height="52" rx="8" fill="currentColor" />
      <rect x="14" y="18" width="10" height="10" fill="white" />
      <rect x="30" y="18" width="20" height="6" fill="white" />
      <rect x="14" y="34" width="36" height="10" fill="white" />
    </svg>
  );
}
