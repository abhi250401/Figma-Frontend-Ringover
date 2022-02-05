import React from "react";
import { AiFillMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";

function AdditionalInfo() {
  return (
    <div className="additional-info">
      <h3>Topics</h3>
      <div className="buttons">
        <button>Some Topic</button>
        <button>Some Topic Name</button>
      </div>
      <h3>Contact</h3>
      <div className="info">
        <AiFillMail />
        j.najnudel@ringover.com
      </div>
      <div className="info">
        <IoMdCall />
        +33 99 53 05 19 21
      </div>
      <div className="info">
        <IoMdCall />
        +33 07 55 35 23 21{" "}
      </div>
    </div>
  );
}

export default AdditionalInfo;
