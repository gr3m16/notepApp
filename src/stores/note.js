import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
  const notes = ref([
    {
      id: "1",
      title: "Estudiar node.js",
      marked: false,
    },
    {
      id: "2",
      title: "Estudiar Express.js",
      marked: true,
    },
  ]);

  return {
    notes,
  };
});
