import {defineStore} from "pinia";

export const useMainLayoutStore = defineStore("MainLayoutStore", {
  state: () => ({
    isRightDrawerOpen: false,
    id: null,
    isCommentShow: false,
  }),
});
