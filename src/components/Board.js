export default function Board({ task, index, taskList, setTaskList }) {
  const handleDelete = function (e) {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
  };

  return (
    <>
      <div className="max-w-md rounded-xl flex flex-col items-center justify-center border text-center text-lg pt-3 pb-4 px-4">
        <p>{task}</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
        >
          Delete
        </button>
      </div>
    </>
  );
}
