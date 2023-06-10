import React from "react";
import ChatMessage from "./ChatMessage";
import {
  generateRandomMessage,
  generateRandomName,
} from "../utils/applicationUtils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { store } from "../utils/store";
import { useState } from "react";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interVal = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);

    return () => {
      clearInterval(interVal);
    };
  }, []);

  return (
    <>
      <div className="p-2 h-[400px] bg-slate-50 mr-2 mt-4 border border-gray-200 overflow-y-scroll flex flex-col-reverse">
        {messages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>

      <form
        className="flex w-full  items-center"
        onSubmit={(e) => {
          e.preventDefault();

          if (liveMessage != "") {
            dispatch(
              addMessage({
                name: "samir",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }
        }}
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="h-6 border border-gray-200 my-2 w-80 p-2"
        />
        <img
          className="h-6 px-2 bg-gray-100 rounded-r-full"
          alt="send_icon"
          src="https://e7.pngegg.com/pngimages/891/367/png-clipart-computer-icons-symbol-send-email-button-miscellaneous-blue.png"
        />
      </form>
    </>
  );
};

export default LiveChatContainer;
