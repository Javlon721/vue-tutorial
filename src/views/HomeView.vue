<template>
	<main>
		<h1>this is home page {{ taskStore.name }}</h1>
		{{ taskStore.favsCount }}
		<div class="tasks">
			<h2 class="tasks__title">Tasks</h2>
			<div class="toggle-tasks">
				<button
					type="button"
					class=""
					@click="toggleBtwTasks = !toggleBtwTasks"
				>
					toggle-tasks
				</button>
			</div>
			<form class="add-new-task" @submit.prevent="addNewTask">
				<input
					autocomplete="off"
					v-model="newTaskTitle"
					type="text"
					placeholder=""
					class="input"
				/>
				<button type="submit" class="add">add new task</button>
			</form>
			<div class="task-count">Fav tasks count: {{ taskStore.favsCount }}</div>
			<div v-if="toggleBtwTasks" class="">
				<h3>All</h3>
				<ul class="tasks__list">
					<TaskDetails
						v-for="task in taskStore.tasks"
						:key="task.id"
						:info="task"
					/>
				</ul>
			</div>
			<div v-else class="">
				<h3>favs</h3>
				<ul class="tasks__list">
					<TaskDetails
						v-for="task in taskStore.favs"
						:key="task.id"
						:info="task"
					/>
				</ul>
			</div>
		</div>
	</main>
</template>
<script>
import TaskDetails from '@/components/TaskDetails.vue';
import { useTaskStore } from '@/stores/TaskStore';
import { ref, nextTick, toValue } from 'vue';

export default {
	components: { TaskDetails },
	setup() {
		const taskStore = useTaskStore();
		const toggleBtwTasks = ref(true);
		const newTaskTitle = ref('');
		function addNewTask() {
			console.log(newTaskTitle);
			if (newTaskTitle.value.trim()) {
				taskStore.addNewTask({
					id: Date.now().toString(),
					title: newTaskTitle.value,
					isFav: false,
				});
				newTaskTitle.value = '';
			}
		}
		return {
			taskStore,
			toggleBtwTasks,
			addNewTask,
			newTaskTitle,
		};
	},
};
</script>

<style lang="scss">
main {
	padding: 15px;
}
.toggle-tasks {
	margin-bottom: 15px;
}
.tasks {
	// .tasks__title

	&__title {
	}

	// .tasks__list

	&__list {
		max-width: 400px;
		display: grid;
		gap: 10px;
	}
}
</style>
