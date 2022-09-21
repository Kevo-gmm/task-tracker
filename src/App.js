import { useState } from "react";

import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "24 feb 2022 at 2:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meet at school",
      day: "24 feb 2022 at 8:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "go shopping",
      day: "24 feb 2022 at 12:00Pm",
      reminder: false,
    },
  ]);
  // Add Tasks
  const addTask = (task) => {
    setTasks(tasks.concat(task));
    // console.log(task);
    // setTasks([...tasks, task]);
  };

  // Delete Tasks
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        "No tasks available"
      )}
    </div>
  );
}

export default App;
