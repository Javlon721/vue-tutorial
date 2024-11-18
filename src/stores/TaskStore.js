import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, computed } from "vue";

// export const useTaskStore = defineStore('taskStore', {
//   state: () => ({
//     tasks: [],
//     name: "122"
//   }),
//   getters: {
//     favs() {
//       return this.tasks.filter((task) => task.isFav);
//     },
//     favsCount() {
//       return this.favs.length;
//     },
//   },
//   actions: {
//     addNewTask(newTask) {
//       this.tasks.push(newTask);
//     },
//     toggleFav(id) {
//       const currentTasks = this.tasks.find(el => el.id == id);
//       currentTasks.isFav = !currentTasks.isFav;
//     },
//     deleteTask(id) {
//       this.tasks = this.tasks.filter(el => el.id !== id);
//     },
//   }
// }
// );


export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([
    {
      "id": "3",
      "title": "title 4",
      "isFav": true
    },
    {
      "id": "1731484922207",
      "title": "asdasdasd",
      "isFav": true
    },
    {
      "id": "1731566423353",
      "title": "dasasdass",
      "isFav": false
    }
  ]);
  const name = ref('Javlon');

  const favs = computed(() => {
    return tasks.value.filter((task) => task.isFav);
  });
  const favsCount = computed(() => {
    return favs.value.length;
  });
  function addNewTask(newTask) {
    tasks.value.push(newTask);
  }
  function toggleFav(id) {
    const currentTasks = tasks.value.find(el => el.id == id);
    currentTasks.isFav = !currentTasks.isFav;
  }
  function deleteTask(id) {
    tasks.value = tasks.value.filter(el => el.id !== id);
  }

  return {
    tasks,
    favsCount, favs, name,
    addNewTask,
    toggleFav,
    deleteTask,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}