"use client";

import classnames from "classnames";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components";
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

  return (
    <form
      className="w-[600px] flex flex-col items-stretch m-auto"
      onSubmit={handleSubmit(onCreateTask)}
    >
      <h1 className="mb-6 text-2xl font-medium uppercase italic">
        <span className="underline">Tasks</span> page
      </h1>

      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          className="py-2 px-4 w-full mr-[1px] bg-inherit rounded-l rounded-bl-md border border-r-0 border-black border-solid text-lg font-normal -skew-x-12"
          {...register("todoCreator")}
        />

        <button
          type="submit"
          className="px-[18px] py-[6px] h-[45px] ml-2 rounded-r rounded-br-md border border-black border-solid -skew-x-12 font-semibold italic text-base hover:underline"
        >
          Create
        </button>
      </div>

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            className="relative group flex justify-between items-center h-9 mb-2"
            key={task.id}
          >
            <Checkbox task={task} className="bg-white" />

            <div className="mr-5 text-lg">{task.id + 1}.</div>

            <div
              className={classnames("w-full mr-5 text-xl italic", {
                "line-through": task.isChecked,
              })}
            >
              {task.taskMessage}
            </div>

            <div className="group-hover:flex items-center justify-center hidden">
              <button
                className="px-2 py-[6px] mr-2 rounded-l rounded-bl-md border border-black border-solid -skew-x-12 font-semibold italic text-base hover:underline"
                onClick={() => dispatch(updateTask(task))}
              >
                edit
              </button>

              <button
                className="px-2 py-[6px] rounded-r-md rounded-br-md border border-black border-solid -skew-x-12 font-semibold italic text-base hover:underline"
                onClick={() => dispatch(removeTask(task))}
              >
                del
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <div className="text-3xl uppercase italic">
            It&apos;s time to create first task {`:)`}
          </div>
        </div>
      )}

      {tasks.length > 0 && (
        <div className="mt-4">
          <hr className="h-0 mb-2 border-b-1 border-black border-solid" />

          <div className="ml-auto text-medium uppercase italic">
            Total tasks: {tasks.length}
          </div>
        </div>
      )}
    </form>
  );
};

export default TasksPage;
