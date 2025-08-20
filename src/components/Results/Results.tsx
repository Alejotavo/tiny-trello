import { useState } from "react";
import type { Task } from "../../models/Task";
import CardComponent from "../Card/CardComponent";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";


interface ResultsProps {
  tasks: Task[];
}

function Results({ tasks: initialTasks }: ResultsProps) {
  const [tasks, setTasks] = useState(initialTasks);

const handleDragEnd = (result: DropResult) => {
  const { destination, source, draggableId } = result;
  if (!destination) return;

  // si no se mueve, no hagas nada
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  // crear copia mutable de tasks
  const updatedTasks = Array.from(tasks);

  // remover el task que movemos
  const [movedTask] = updatedTasks.splice(
    updatedTasks.findIndex((t) => t.id.toString() === draggableId),
    1
  );

  // actualizarle el status si cambió de columna
  movedTask.status = destination.droppableId as Task["status"];

  // encontrar posición destino entre tasks con mismo status
  const beforeTasks = updatedTasks.filter(
    (t) => t.status === destination.droppableId
  );

  // calcular índice real en el array global
  let insertAt = updatedTasks.findIndex(
    (t) =>
      t.status === destination.droppableId &&
      beforeTasks.indexOf(t) === destination.index
  );

  if (insertAt === -1) {
    // si no hay nadie adelante → insertar al final
    insertAt = updatedTasks.length;
  }

  // insertar en la posición calculada
  updatedTasks.splice(insertAt, 0, movedTask);

  setTasks(updatedTasks);
};


  return (
    <>
      <h2>Task Results</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="results-container">
          {/* READY */}
          <Droppable droppableId="ready">
            {(droppableProvided) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className="column"
              >
                <h3>READY</h3>
                {tasks
                  .filter((task) => task.status === "ready")
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CardComponent task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>

          {/* IN PROGRESS */}
          <Droppable droppableId="inprogress">
            {(droppableProvided) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className="column"
              >
                <h3>IN PROGRESS</h3>
                {tasks
                  .filter((task) => task.status === "inprogress")
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CardComponent task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>

          {/* COMPLETE */}
          <Droppable droppableId="complete">
            {(droppableProvided) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className="column"
              >
                <h3>COMPLETE</h3>
                {tasks
                  .filter((task) => task.status === "complete")
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CardComponent task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
}

export default Results;
