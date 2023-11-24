export const createTask = (task) => {
  return {
    type: "CREATE_TASK",
    createdTask: task,
  };
};

export const removeTask = (task) => {
  return {
    type: "REMOVE_TASK",
    taskId: task.id,
  };
};

export const updateTask = (updatedTask) => {
  return {
    type: "UPDATE_TASK",
    updatedTask,
    taskId: updatedTask.id,
  };
};

export const checkedTask = (checkedTask) => {
  return {
    type: "CHECKED_TASK",
    checkedTask,
    taskId: checkedTask.id,
    isChecked: checkedTask.isChecked,
  };
};
