import { defineStore } from "pinia";
import axios from "axios";
export const useAppStore = defineStore({
  id: "appStore",
  state: () => ({
    info: null,
  }),
  getters: {
    setInfo: (state) => state.info,
  },
  actions: {
    async getInfo() {
      try {
        const res = await axios("http://api.plos.org/search?q=title:DNA");
        this.info = res.data;
      } catch (error) {}
    },
  },
});
