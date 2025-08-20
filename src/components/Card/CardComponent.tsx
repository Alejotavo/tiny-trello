import type { Task } from "../../models/Task";

interface CardProps {
  task: Task;
};

function CardComponent({ task }: CardProps) {

  return (
    <div key={task.id} className="card">
           <h3>{task.title}</h3>
           <p>{task.description}</p>
           <p>Status: {task.status}</p>
    </div>
  )
}

export default CardComponent
