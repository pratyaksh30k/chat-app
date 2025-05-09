import { useSocket } from "@/context/socketContext";
import { useAppStore } from "@/store";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";

const MessageBar = () => {
  const emojiRef = useRef();
  const socket = useSocket();
  const [message, setMessage] = useState("");
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const {selectedChatData,selectedChatType,userInfo} = useAppStore();

  useEffect(() => {
    function handleClickOutside(e) {
      if (emojiRef.current && !emojiRef.current.contains(e.target)) {
        setEmojiPickerOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [emojiRef]);

  const handleAddEmoji = (emoji) => {
    setMessage((msg) => msg + emoji.emoji);
  };

  const handleOpenEmojiPicker = () => {
    if (emojiPickerOpen) setEmojiPickerOpen(false);
    else setEmojiPickerOpen(true);
  };

  const handleSendMessage = async () => {
    if(selectedChatType==="contact"){
      socket.emit("sendMessage",{
        sender:userInfo.id,
        content:message,
        recipient:selectedChatData._id,
        messageType:"text",
        fileUrl:undefined
      })
    }
  };

  return (
    <div className="h-[10vh] flex justify-center items-center px-8 mb-6 gap-4">
      <div className="flex-1 flex bg-[#F8F9FA] rounded-md items-center gap-5 pr-5">
        <input
          type="text"
          className="flex-1 p-4 bg-transparent rounded-md focus:border-none focus:outline-none"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="text-[#9E9E9E] focus:outline-none focus:border-none hover:text-[#212121] duration-300 transition-all cursor-pointer">
          <GrAttachment className="text-xl" />
        </button>
        <div className="relative flex items-center">
          <button
            onClick={() => setEmojiPickerOpen(true)}
            className="text-[#9E9E9E] focus:outline-none focus:border-none hover:text-[#212121] duration-300 transition-all cursor-pointer"
          >
            <RiEmojiStickerLine className="text-xl" />
          </button>
          <div className="absolute bottom-16 right-0" ref={emojiRef}>
            <EmojiPicker
              open={emojiPickerOpen}
              onEmojiClick={handleAddEmoji}
              autoFocusSearch={false}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSendMessage}
        className="flex items-center rounded-md bg-[#F8F9FA] p-4 focus:outline-none focus:border-none hover:bg-[#212121] text-[#9E9E9E] hover:text-[#FFFFFF] duration-300 transition-all cursor-pointer"
      >
        <IoSend className="text-xl" />
      </button>
    </div>
  );
};

export default MessageBar;
