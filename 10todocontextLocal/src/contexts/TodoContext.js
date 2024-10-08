import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  // eslint-disable-next-line
  addTodo: (todo) => {},
  // eslint-disable-next-line
  updatedTodo: (id, todo) => {},
  // eslint-disable-next-line
  deleteTodo: (id) => {},
  // eslint-disable-next-line
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
