import React from "react";
import FileImage from "../../Utils/dashboardimage.png";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

function Main({
  schedule,
  mail,
  message,
  video,
  setSchedule,
  setMail,
  setVideo,
  setMessage,
}) {
  console.log(schedule);
  function HideSchedule(s) {
    setSchedule(false);
  }
  function HideMessage(s) {
    setMessage(false);
  }
  function HideVideo(s) {
    setVideo(false);
  }
  function HideMail(s) {
    setMail(false);
  }

  return (
    <div className="main">
      <div className="head">
        <h3>Workspace</h3>
        <div>
          <AiOutlineFile />
          <ImProfile />
        </div>
      </div>
      <div className="activity-bar">
        {schedule ? (
          <div className="bar" id="sch">
            Schedule
            <AiOutlineClose onClick={() => HideSchedule()} />
          </div>
        ) : null}
        {mail ? (
          <div className="bar" id="mail">
            Mail(1)
            <AiOutlineClose onClick={() => HideMail()} />
          </div>
        ) : null}
        {video ? (
          <div className="bar" id="video">
            Video Conference
            <AiOutlineClose onClick={() => HideVideo()} />
          </div>
        ) : null}
        {message ? (
          <div className="bar" id="msg">
            Messages
            <AiOutlineClose onClick={() => HideMessage()} />
          </div>
        ) : null}
      </div>

      {!schedule && !mail && !message && !video ? (
        <div className="img">
          <img src={FileImage} />
          <p>Your workspace is empty!</p>
        </div>
      ) : null}
    </div>
  );
}

export default Main;
