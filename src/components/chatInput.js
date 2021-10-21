import React, { useState } from 'react';
import PlusCircle from '../Icons/PlusCircle';
import IconGift from '../Icons/IconGift';
import IconGIF from '../Icons/IconGIF';
import IconSmiley from '../Icons/IconSmiley';

const ChatInput = (props) => {
  const [message, setMessage] = useState("");

  // eslint-disable-next-line no-unused-vars
  function sendMessage(event) {
    event.preventDefault();
    //props.ws.send(message);
    setMessage('');
  }

  async function postMessage(event) {
    event.preventDefault();
    if (!message || !message.trim()) {
      setMessage('');
      return;
    }
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          msg: message ,
          user_id: 1
        })   
    };
    try {
      const response = await fetch("/api/v1/room/1/message", settings);
      const data = await response.json();
      setMessage('');
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
   }

  const onChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className='bg-gray-750 h-24 flex items-center mx-3 border-t border-gray-600'>
      <button className='px-2 h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white border-r border-gray 600'>
        <PlusCircle />
      </button>
      <div className='flex-1'>
        <form onSubmit={postMessage}>
          <input
          type='text'
          className='w-full text-sm h-10 px-2 py-2 bg-gray-700 text-gray-200 focus:outline-none rounded'
          value={message} onChange={onChange}
        />
        </form>
      </div>
      <div className='px-2 py-2 bg-gray-700 rounded-r flex items-center h-10'>
        <button class='h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white'>
          <IconGift />
        </button>
        <button class='h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white ml-3'>
          <IconGIF />
        </button>
        <button class='h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white ml-3'>
          <IconSmiley />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
