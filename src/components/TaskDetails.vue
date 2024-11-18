<template>
	<div class="task" :class="{ fav: info.isFav }">
		<div class="task__title">{{ info.title }}</div>
		<div class="task__btns">
			<button type="button" class="task__fav task__btn" @click="taskStore.toggleFav(info.id)">make fav</button>
			<button type="button" class="task__remove task__btn" @click="taskStore.deleteTask(info.id)">remove</button>
		</div>
	</div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';

export default {
	props: ['info'],
	setup() {
		const taskStore = useTaskStore();
		return {
			taskStore,
		};
	},
};
</script>

<style lang="scss" scoped>
.task {
	display: flex;
	justify-content: space-between;
	padding: 10px;
	border: 1px solid #000;
	&.fav {
		border-color: red;
	}
	// .task__title

	&__title {
	}

	// .task__btns

	&__btns {
	}

	// .task__fav

	&__fav {
	}

	// .task__btn

	&__btn {
	}

	// .task__remove

	&__remove {
	}
}
</style>
