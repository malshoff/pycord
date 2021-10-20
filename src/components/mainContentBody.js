import React, {useState} from 'react';
import ChatInput from './chatInput';
import mmlogo from '../assets/mmlogo.png'

const MainContentBody = (props) => {
  const [messages, setMessages] = useState(
    []
  );
  
  props.ws.onmessage = function(event) {
    setMessages(prevMessages => ([...prevMessages,JSON.parse(event.data)]))
  };

  
  
  return (
    <div className='bg-gray-750 flex-1 flex flex-col justify-between'>
      <div className='text-sm text-gray-400 overflow-y-auto'>
        {messages.map(data => (
          <div key={data.client} className='flex mx-6 my-3 py-4 border-t border-gray-700'>
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
                  Malachi
                </button>
                <span className='text-xs text-gray-600 ml-1'>07/19/2019</span>
              </div>
              <div>
                {data["message"]}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Chat input */}
      <ChatInput ws={props.ws} />
    </div>
  );
};

export default MainContentBody;
