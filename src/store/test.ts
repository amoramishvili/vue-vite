import { defineStore } from "pinia";

export interface test {
  id: number;
}

export const useTest = defineStore("test", {
  state(): test {
    return {
      id: 1,
    };
  },
  actions: {},
});
