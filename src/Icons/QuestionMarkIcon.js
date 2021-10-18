import React from 'react';

const QuestionMarkIcon = () => {
  return (
    <a href='#' class='ml-4'>
      <svg
        class='w-6 h-6 text-gray-500 hover:text-gray-200'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <g data-name='Layer 2'>
          <g data-name='menu-arrow-circle'>
            <rect
              width='24'
              height='24'
              transform='rotate(180 12 12)'
              opacity='0'
            ></rect>
            <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z'></path>
          </g>
        </g>
      </svg>
    </a>
  );
};

export default QuestionMarkIcon;
