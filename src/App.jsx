import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Greeting from "../src/components/Greeting";
import StudentCard from "./components/StudentCard";
import Badge from "./components/Badge";
import StudentList from "./components/StudentList";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName="Harper" />

      <Greeting firstName="Michelle" />

      <Greeting firstName="Andrea" />

      <StudentList>
        <StudentCard
          name="Eva"
          week={7}
          info={{ city: "BCN", course: "WEB" }}
        />
        <StudentCard
          name="Mat"
          week={8}
          info={{ city: "MIA", course: "DATA" }}
        />
      </StudentList>

      <hr />

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        playing
        controls
        volume="0.5"
      />
    </div>
  );
}
export default App;
