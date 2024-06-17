import React from "react";
import Task from "./Task";

interface initialTask {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  onChangeTask: (task: initialTask) => void;
  onDeleteTask: (taskId: number) => void;
  tasks: initialTask[];
}

const TaskList: React.FC<Props> = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
