const data = [
  {
    id: 0,
    taskMessage: "Make todo app",
  },
  {
    id: 1,
    taskMessage: "Finish work with todo app",
  },
];

export const tasksReducer = (state = data, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      return [...state, action.createdTask];

    case "UPDATE_TASK":
      const taskMessage = prompt("Write your task desctiption");
      const updatedTask = {
        id: action.taskId,
        taskMessage,
      };

      if (taskMessage) {
        state.splice(action.taskId, 1, updatedTask);
      }

      return [...state];

    case "REMOVE_TASK":
      state.splice(action.taskId, 1);

      for (let i = 0; i < state.length; i++) {
        state[i].id = i;
      }

      return [...state];

    default:
      return state;
  }
};
