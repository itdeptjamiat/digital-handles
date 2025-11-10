'use client';

import { useState } from 'react';

const SHARE_URL = 'https://handles.jamiat.org.pk/';
const SHARE_TITLE = 'Islami Jamiat-e-Talaba Pakistan — Official Digital Handles';
const SHARE_TEXT =
  'Access the verified digital platforms of Islami Jamiat-e-Talaba Pakistan.';

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: SHARE_TITLE,
          text: SHARE_TEXT,
          url: SHARE_URL,
        });
        return;
      } catch {
        // User may cancel the share sheet; ignore and try clipboard fallback.
      }
    }

    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error('Unable to copy share URL', error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group flex items-center gap-1.5 rounded-full border border-transparent bg-gradient-to-r from-[#0A4D8C] to-[#2D9BF0] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#0A4D8C]/15 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4D8C]"
      aria-label="Share Islami Jamiat-e-Talaba digital handles"
    >
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/15">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-3 w-3 text-white"
        >
          <path
            fill="currentColor"
            d="M15 13a3 3 0 1 0 1.732 5.5L9.8 14.4a3 3 0 0 0 0-2.8l6.932-4.1A3 3 0 1 0 15 5a2.98 2.98 0 0 0 .221 1.132l-6.932 4.1a3 3 0 1 0 0 2.536l6.932 4.1A2.98 2.98 0 0 0 15 17Z"
          />
        </svg>
      </span>
      {copied ? 'Link copied!' : 'Share handles'}
    </button>
  );
}

