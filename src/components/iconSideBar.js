import React from 'react';

import SvgIconDiscord from '../Icons/IconDiscord';
import SvgIconLaravel from '../Icons/IconLaravel';
import SvgIconTailwind from '../Icons/IconTailwind';
import IconPlus from '../Icons/IconPlus';
import IconSearch from '../Icons/IconSearch';
import IconDownload from '../Icons/IconDownload';

const IconSideBar = () => {
  return (
    <div className='bg-gray-900 w-20 flex-none flex flex-col min-h-screen h-screen px-2 py-2'>
      <div className='overflow-y-auto'>
        <ul className='text-center'>
          <li className='mt-3'>
            <SvgIconDiscord
              tailwindProps={'w-12 h-12 rounded-full mx-auto'}
              alt={'discord'}
            />
          </li>
          <li className='border-b border-gray-700 mx-4 mt-3'></li>
          <li className='mt-3'>
            <img src='https://cdn.discordapp.com/icons/577983109409275904/95e26ff833c7998a556913cf3fd52c06.png' alt='MalVivIcon' className='w-12 h-12 rounded-full mx-auto'/>
          </li>
          <li className='mt-3'>
            <IconPlus />
          </li>
        
          
         
        </ul>
      </div>
    </div>
  );
};

export default IconSideBar;
