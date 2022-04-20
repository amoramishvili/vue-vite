import { reactive } from "vue";
import { state } from "./state";
import axios from "axios";
export const useApp = () => {
  const getApp = async () => {
    try {
      const res = await axios("http://api.plos.org/search?q=title:DNA");
      state.info = res.data;
    } catch (error) {}
  };

  const getTodos = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/todos/1");
      state.todos = res.data;
    } catch (error) {}
  };

  return {
    getApp,
    getTodos,
  };
};
