import { useState } from "react";
import type { Task } from "../../models/Task";

export function useCreateTask(setTasks: React.Dispatch<React.SetStateAction<Task[]>>) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"ready" | "inprogress" | "complete">("ready");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("ready");
  };

  const handleCreate = () => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status,
    };

    setTasks((prev) => [...prev, newTask]);

    console.log("New task created:", newTask);
    resetForm();
  };

  return {
    title,
    description,
    setTitle,
    setDescription,
    handleCreate,
    status,
    setStatus,
  };
}
