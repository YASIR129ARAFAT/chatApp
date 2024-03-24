import React, { useState } from "react";
import {io} from 'socket.io-client'
const socket =  io.connect("http://localhost:8000")

function ChatsPage() {



  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit('send_message',message,"secondAgr","thirdArg",{name:"yasir",age:22})
    }
    setChats((prev)=>{
      return [...prev,message]
    })
    setMessage("")
  };

  return (
    <div className="flex p-2 flex-col bg-gray-700 w-full h-screen">
      <div className="flex-grow w-full overflow-auto">
        {chats.map((chat, index) => (
          <div key={index} className="p-2 text-white">
            {chat}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200">
        <form className="w-[50%] flex flex-row m-2 p-2">
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            className="flex-grow border border-gray-400 rounded-l"
          />
          <button
            onClick={handleClick}
            className="bg-blue-500 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatsPage;
