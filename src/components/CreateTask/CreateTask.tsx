
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
    <div className="create-task">
      <input type="text" placeholder="Task Title" name="taskTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Task Description" name="taskDescription" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <select name="taskStatus" value={status} onChange={(e) => setStatus(e.target.value as "ready" | "inprogress" | "complete")}>
        <option value="ready">Ready</option>
        <option value="inprogress">In Progress</option>
        <option value="complete">Complete</option>
      </select>
      <button onClick={handleCreate}>Create Task</button>
    </div>
  )
}

export default CreateTask
