import React from "react";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import ContactCard from "./ContactCard/ContactCard";
import { IoMdCall } from "react-icons/io";
import { HiVideoCamera } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { AiTwotoneSchedule } from "react-icons/ai";

function LeftSidebar({ setSchedule, setMail, setVideo, setMessage }) {
  function ShowSchedule(s) {
    setSchedule(true);
  }
  function ShowVideo(s) {
    setVideo(true);
  }
  function ShowMail(s) {
    setMail(true);
  }
  function ShowMessage(s) {
    setMessage(true);
  }

  return (
    <div className="left-sidebar">
      <ContactCard />
      <AdditionalInfo />
      <div className="activity">
        <IoMdCall />
        <div className="activity-menu">
          <AiTwotoneSchedule onClick={() => ShowSchedule()} />
          <AiFillMail onClick={() => ShowMail()} />
          <HiVideoCamera onClick={() => ShowVideo()} />
          <MdOutlineMessage
            onClick={() => {
              ShowMessage();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
