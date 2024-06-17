import React, { useState } from "react";

interface Props {
  onAddTask: (text: string) => void;
}

const AddTask: React.FC<Props> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
