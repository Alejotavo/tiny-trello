import { useState } from "react";
import CreateTask from "../../components/CreateTask/CreateTask";
import Results from "../../components/Results/Results";
import type { Task } from "../../models/Task";

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <CreateTask setTasks={setTasks} />
      <Results tasks={tasks} setTasks={setTasks}/>
    </>
  );
}

export default Dashboard;