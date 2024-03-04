"use client";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import {
  useTasks,
  useNewTasks,
  useUpdateTask,
  useDeleteTask,
} from "@/api/tasks";
// import { Checkbox } from "@/components";
// import { updateTask, removeTask } from "@/actions";
// import { createTask, useSelector, useDispatch } from "react-redux";

const TasksPage = () => {
  // const tasks = useSelector((state) => state.tasks);
  // const dispatch = useDispatch();

  const tasks = useTasks();
  const deleteTask = useDeleteTask();
  const updateTask = useUpdateTask();
  const createNewTask = useNewTasks();

  const { reset, register, handleSubmit } = useForm();

  const onCreateTask = async (data) => {
    // const taskDataPrepatation = {
    //   id: tasks.length,
    //   taskMessage: data.todoCreator,
    // };

    if (data.todoCreator) {
      const taskPreparing = {
        title: data.todoCreator,
      };
      await createNewTask.mutateAsync(taskPreparing);
      reset();
      // dispatch(createTask(taskDataPrepatation));
    }
  };

  const onEditTask = async (task) => {
    const editTaskMessage = prompt("Write your task desctiption");
    const taskPreparing = {
      ...task,
      title: editTaskMessage,
    };
    await updateTask.mutateAsync(taskPreparing);
  };

  if (tasks.isLoading) return null;

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

      {tasks.data.length > 0 ? (
        tasks.data.map((task, index) => (
          <div
            className="relative group flex justify-between items-center h-9 mb-2"
            key={task._id}
          >
            {/* <Checkbox task={task} className="bg-white" /> */}

            <div className="mr-5 text-lg">{index + 1}.</div>

            <div
              className={classnames("w-full mr-5 text-xl italic", {
                "line-through": task.isChecked,
              })}
            >
              {task.title}
            </div>

            <div className="group-hover:flex items-center justify-center hidden">
              <button
                className="px-2 py-[6px] mr-2 rounded-l rounded-bl-md border border-black border-solid -skew-x-12 font-semibold italic text-base hover:underline"
                onClick={() => onEditTask(task)}
                // onClick={() => dispatch(updateTask(task))}
              >
                edit
              </button>

              <button
                className="px-2 py-[6px] rounded-r-md rounded-br-md border border-black border-solid -skew-x-12 font-semibold italic text-base hover:underline"
                onClick={() => deleteTask.mutate(task._id)}
                // onClick={() => dispatch(removeTask(task))}
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

      {tasks.data.length > 0 && (
        <div className="mt-4">
          <hr className="h-0 mb-2 border-b-1 border-black border-solid" />

          <div className="ml-auto text-medium uppercase italic">
            Total tasks: {tasks.data.length}
          </div>
        </div>
      )}
    </form>
  );
};

export default TasksPage;
