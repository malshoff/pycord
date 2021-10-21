import React,{useEffect} from 'react';
import IconSideBar from './iconSideBar';
import TopBar from './topBar';
import LeftSideBar from './leftSideBar';
import MainContentBody from './mainContentBody';
import UserSidebar from './userSidebar';
import { io } from 'socket.io-client';

const Discord = () => {

    useEffect(() => {
    const socket =  io('ws://localhost:8000', {
      path: '/ws/socket.io',
      autoConnect: true
  })

    socket.on('connect', (data) => {
      console.log("connected")
    })
    
      socket.on('message', (data) => {
        console.log(data);
    })
    
    return () => socket.off();
  },[]);

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
            <MainContentBody/>
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
