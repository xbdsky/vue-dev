import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // 必填且唯一
  state: () => {
    return {
      name: 'TFBoys',
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
