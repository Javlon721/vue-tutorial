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
//     async addNewTask(newTask) {
//       this.tasks.push(newTask);
//       const responce = await fetch("http://localhost:3000/tasks", {
//         method: "POST",
//         body: JSON.stringify(newTask),
//         headers: {
//           'Content-Type': "application/json"
//         }
//       });
//     },
//     async toggleFav(id) {
//       const currentTasks = this.tasks.find(el => el.id == id);
//       currentTasks.isFav = !currentTasks.isFav;
//       const responce = await fetch(`http://localhost:3000/tasks/${id}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           isFav: currentTasks.isFav
//         }),
//         headers: {
//           'Content-Type': "application/json"
//         }
//       });
//     },
//     async deleteTask(id) {
//       this.tasks = this.tasks.filter(el => el.id !== id);
//       const responce = await fetch(`http://localhost:3000/tasks/${id}`, {
//         method: "DELETE",
//       });
//     },
//     async getTasks() {
//       const responce = await fetch("http://localhost:3000/tasks");
//       if (responce.ok) {
//         const tasks = await responce.json();
//         this.tasks = tasks;
//       }
//     }
//   }
// });


export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([]);
  const name = ref('Javlon');

  const favs = computed(() => {
    return tasks.value.filter((task) => task.isFav);
  });
  const favsCount = computed(() => {
    return favs.value.length;
  });
  async function addNewTask(newTask) {
    tasks.value.push(newTask);
    const responce = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        'Content-Type': "application/json"
      }
    });
  }
  async function toggleFav(id) {
    const currentTasks = tasks.value.find(el => el.id == id);
    currentTasks.isFav = !currentTasks.isFav;
    const responce = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isFav: currentTasks.isFav
      }),
      headers: {
        'Content-Type': "application/json"
      }
    });
  }
  async function deleteTask(id) {
    tasks.value = tasks.value.filter(el => el.id !== id);
    const responce = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
  }
  async function getTasks() {
    const responce = await fetch("http://localhost:3000/tasks");
    if (responce.ok) {
      const newTasks = await responce.json();
      tasks.value = newTasks;
    }
  }
  return {
    tasks,
    favsCount, favs, name,
    addNewTask,
    toggleFav,
    deleteTask,
    getTasks
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}