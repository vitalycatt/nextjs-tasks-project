"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createTask, updateTask, removeTask } from "../../actions";

const TasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const { reset, register, handleSubmit } = useForm();

  const onCreateTask = (data) => {
    const taskDataPrepatation = {
      id: tasks.length,
      taskMessage: data.todoCreator,
    };

    if (data.todoCreator) {
      dispatch(createTask(taskDataPrepatation));
      reset();
    }
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <form
      className="w-[600px] flex flex-col items-stretch m-auto"
      onSubmit={handleSubmit(onCreateTask)}
    >
      <h1 className="mb-6 text-2xl font-medium italic">
        <span className="underline">Tasks</span> page!
      </h1>

      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          className="py-2 px-4 w-full mr-[1px] bg-inherit rounded-bl-md border-l border-b border-black border-solid text-lg font-normal -skew-x-12"
          {...register("todoCreator")}
        />

        <button
          type="submit"
          className="px-[18px] py-[6px] rounded-r font-semibold italic text-base hover:underline"
        >
          Create
        </button>
      </div>

      {tasks.map((task) => (
        <div
          className="group flex justify-between items-center h-9 mb-2"
          key={task.id}
        >
          <div className="mr-5 text-lg">{task.id + 1}.</div>

          <div className="w-full mr-5 text-xl italic">{task.taskMessage}</div>

          <div className="group-hover:flex items-center justify-center hidden">
            <button
              className="px-2 py-[6px] mr-2 font-semibold italic text-base hover:underline"
              onClick={() => dispatch(updateTask(task, task.id))}
            >
              edit
            </button>

            <button
              className="px-2 py-[6px] font-semibold italic text-base hover:underline"
              onClick={() => dispatch(removeTask(task))}
            >
              del
            </button>
          </div>
        </div>
      ))}
    </form>
  );
};

export default TasksPage;
