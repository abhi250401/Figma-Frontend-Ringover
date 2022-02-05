import { useEffect, useState } from "react";
import "./App.css";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import RightSidebar from "./Components/RightSidebar/RightSidebar";
function App() {

  const [schedule, setSchedule] = useState(false);
  const [video, setVideo] = useState(false);
  const [message, setMessage] = useState(false);
  const [mail, setMail] = useState(false);
  return (

    <div className="App">
      <Navbar />
      <div className="mainContent">
        <LeftSidebar
          setSchedule={setSchedule}
          setVideo={setVideo}
          setMail={setMail}
          setMessage={setMessage}
        />
        <Main
          schedule={schedule}
          video={video}
          mail={mail}
          message={message}
          setSchedule={setSchedule}
          setVideo={setVideo}
          setMail={setMail}
          setMessage={setMessage}
        />

        <RightSidebar />
      </div>
    </div>

  );
}

export default App;
