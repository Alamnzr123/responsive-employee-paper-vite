import React from 'react';

export default function FlagID({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="15" fill="#ed2939" />
      <rect y="15" width="60" height="15" fill="#fff" />
    </svg>
  );
}
