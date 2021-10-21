import React, {useState,useEffect} from 'react';
import ChatInput from './chatInput';
import mmlogo from '../assets/mmlogo.png'
import axios from 'axios';
import { io } from 'socket.io-client';


const MainContentBody = (props) => {
  const [messages, setMessages] = useState(
    []
  );

  /** onmessage = function(event) {
    setMessages(prevMessages => ([...prevMessages,JSON.parse(event.data)]))
  }; **/

  useEffect(() => {
    axios.get('/api/v1/messages/1').then(res => {
      //console.log(typeof res);
      console.log(res.data);
      setMessages(prevMessages => ([...prevMessages, ...res.data]));
      console.log(messages);
    })
  },[]);
  
  
  return (
    <div className='bg-gray-750 flex-1 flex flex-col justify-between'>
      <div className='text-sm text-gray-400 overflow-y-auto'>
        {messages.map((data,index) => (
          <div key={index} className='flex mx-6 my-3 py-4 border-t border-gray-700'>
            <div className='flex-none '>
              <button>
                <img
                  className='w-10 h-10 rounded-full'
                  src={mmlogo}
                  alt='avatar'
                />
              </button>
            </div>
            <div className='ml-5'>
              <div>
                <button className='text-white hover:underline'>
                  {data.user["username"]}
                </button>
                <span className='text-xs text-gray-600 ml-1'>07/19/2019</span>
              </div>
              <div>
                {data.message}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Chat input */}
      <ChatInput />
    </div>
  );
};

export default MainContentBody;
