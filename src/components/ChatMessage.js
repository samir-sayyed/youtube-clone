import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 ">
      <img
        className="h-5 p-0 mx-2 rounded-full"
        alt=""
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
      <h3 className=" text-[14px] font-semibold mr-1">{name}</h3>
      <p className="text-[13px]">{message}</p>
    </div>
  );
};

export default ChatMessage;
