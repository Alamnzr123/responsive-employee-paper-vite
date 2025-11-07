import React from 'react';

export default function FlagGB({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
      <rect x="22" y="0" width="16" height="30" fill="#fff" />
      <rect x="0" y="12" width="60" height="6" fill="#fff" />
      <rect x="24" y="0" width="12" height="30" fill="#C8102E" />
      <rect x="0" y="14" width="60" height="2" fill="#C8102E" />
    </svg>
  );
}
