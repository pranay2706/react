import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 3;

interface initialTask {
  id: number;
  text: string;
  done: boolean;
}

const initialState: initialTask[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

type Action =
  | { type: "added"; payload: { id: number; text: string; done: boolean } }
  | { type: "deleted"; payload: { id: number } }
  | { type: "changed"; payload: { id: number; text: string; done: boolean } };

function reducer(tasks: initialTask[], action: Action): initialTask[] {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        },
      ];
    }

    case "deleted": {
      return tasks.filter((t) => t.id !== action.payload.id);
    }

    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return action.payload;
        } else {
          return t;
        }
      });
    }

    default: {
      throw new Error("Unknown action: ");
    }
  }
}

export default function UseReducerUse() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      payload: { id: nextId++, text: text, done: false },
    });
  }

  function handleChangeTask(task: initialTask) {
    dispatch({
      type: "changed",
      payload: { id: task.id, text: task.text, done: task.done },
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      payload: { id: taskId },
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
