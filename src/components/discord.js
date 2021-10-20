import React from 'react';
import IconSideBar from './iconSideBar';
import TopBar from './topBar';
import LeftSideBar from './leftSideBar';
import MainContentBody from './mainContentBody';
import UserSidebar from './userSidebar';

const Discord = () => {
  var ws = new WebSocket("ws://localhost:8001/ws/1");

  return (
    <div className='flex'>
      {/* Icon left sidebar */}
      <IconSideBar />
      <div className='flex flex-1 flex-col min-h-screen h-screen '>
        {/* Top bar */}
        <TopBar />
        {/* End of top bar */}

        {/* Body */}
        <div className='flex-1 bg-blue-500 flex overflow-y-hidden'>
          {/* Left side bar */}
          <LeftSideBar />
          {/* End of left sidebar */}
          <div className='flex-1 flex justify-between'>
            {/* Main content area */}
            <MainContentBody ws={ws} />
            {/* End of main content */}
            {/* User sidebar */}
            <UserSidebar />
            {/* End of user sidebar */}
          </div>
        </div>
        {/* Body */}
      </div>
    </div>
  );
};

export default Discord;
