const data = [
  {
    id: 0,
    taskMessage: "Make todo app",
    isChecked: true,
  },
  {
    id: 1,
    taskMessage: "Finish work with todo app",
    isChecked: false,
  },
  {
    id: 2,
    taskMessage: "Finish work",
    isChecked: true,
  },
];

export const tasksReducer = (state = data, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      return [...state, action.createdTask];

    case "UPDATE_TASK":
      const taskMessage = prompt("Write your task desctiption");
      const updatedTask = {
        ...action.updatedTask,
        id: action.taskId,
        taskMessage,
      };

      if (taskMessage) {
        state.splice(action.taskId, 1, updatedTask);
      }

      return [...state];

    case "CHECKED_TASK":
      const checkedTask = {
        ...action.checkedTask,
        isChecked: !action.isChecked,
      };

      state.splice(action.taskId, 1, checkedTask);

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
