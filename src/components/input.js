import { useState } from "react";

export default function Input({ taskList, setTaskList }) {
  const [input, setInput] = useState("");

  const handleAddTask = function (e) {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg px-2.5 py-1.5 text-lg"
          type="text"
          placeholder="Add task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-violet-400 text-white py-1.5 px-3 rounded fond-semibold hover:opacity-70"
          onClick={handleAddTask}
        >
          Add
        </button>
      </form>
    </>
  );
}
