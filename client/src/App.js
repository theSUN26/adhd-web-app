import React from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import PomodoroTimer from "./components/PomodoroTimer";
import FocusExercise from "./components/FocusExercise";

function App() {
  return (
    <div>
      <Navbar />
      <TaskList />
      <PomodoroTimer />
      <FocusExercise />
    </div>
  );
}

export default App;
