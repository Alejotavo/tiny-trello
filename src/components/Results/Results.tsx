
import type { Task } from '../../models/Task';
import CardComponent from '../Card/CardComponent';

interface ResultsProps {
  tasks: Task[];
}

function Results({ tasks }: ResultsProps) {
  return (
    <>
     <h2>Task Results</h2>
     <div className='results-container'>
      <div>
      <h3>READY</h3>
       {tasks.filter(task => task.status === 'ready').map((task) => (
           <CardComponent key={task.id} task={task} />
         ))
       }
       </div>
       <div>
        <h3>IN PROGRESS</h3>
      {tasks.filter(task => task.status === 'inprogress').map((task) => (
           <CardComponent key={task.id} task={task} />
         ))
       }
       </div>
       <div>
        <h3>COMPLETE</h3>
      {tasks.filter(task => task.status === 'complete').map((task) => (
           <CardComponent key={task.id} task={task} />
         ))
       }
       </div>
     </div>
    </>
  )
}

export default Results