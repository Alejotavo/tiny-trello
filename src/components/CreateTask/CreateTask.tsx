
import type { Task } from "../../models/Task";
import { useCreateTask } from "./UseCreateTask";

interface CreateTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function CreateTask({ setTasks }: CreateTaskProps) {
  const {
    title,
    description,
    status,
    setTitle,
    setDescription,
    handleCreate,
    setStatus
  } = useCreateTask(setTasks);

  return (
    <div className="flex flex-row gap-4 bg-white p-4 rounded shadow">
      <input type="text" placeholder="Task Title" name="taskTitle" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded"/>
      <textarea placeholder="Task Description" name="taskDescription" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded h-11"></textarea>
      <select name="taskStatus" value={status} onChange={(e) => setStatus(e.target.value as "ready" | "inprogress" | "complete")} className="border p-2 rounded">
        <option value="ready">Ready</option>
        <option value="inprogress">In Progress</option>
        <option value="complete">Complete</option>
      </select>
      <button onClick={handleCreate} className="bg-blue-500 text-white p-2 rounded">Create Task</button>
    </div>
  )
}

export default CreateTask
