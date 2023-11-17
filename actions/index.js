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

export const updateTask = (updatedTask, taskId) => {
  return {
    type: "UPDATE_TASK",
    updatedTask,
    taskId,
  };
};
