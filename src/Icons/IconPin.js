import React from 'react';

const IconPin = () => {
  return (
    <a href='#' class='ml-4'>
      <svg
        class='w-6 h-6 text-gray-500 hover:text-gray-200'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          class='secondary'
          d='M2.24 20.35l6.5-7.5a1 1 0 0 1 1.47-.06l1 1a1 1 0 0 1-.06 1.47l-7.5 6.5c-.93.8-2.22-.48-1.4-1.41z'
        ></path>
        <path
          class='primary'
          d='M15 15.41V18a1 1 0 0 1-.3.7l-1 1a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.4l1-1A1 1 0 0 1 6 9h2.59L13 4.59V3a1 1 0 0 1 1.7-.7l7 7A1 1 0 0 1 21 11h-1.59L15 15.41z'
        ></path>
      </svg>
    </a>
  );
};

export default IconPin;
