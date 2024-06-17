import React, { useState } from "react";

interface initialTask {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  onChange: (task: initialTask) => void;
  onDelete: (taskId: number) => void;
  task: initialTask;
}

const Task: React.FC<Props> = ({ task, onDelete, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent = (
    <>
      <span>{task.text}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </>
    );
  }

  return <div>{taskContent}</div>;
};

export default Task;
