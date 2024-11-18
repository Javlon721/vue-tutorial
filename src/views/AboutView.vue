<template>
	<div class="about">
		<h1 v-test>This is an about page</h1>
		{{ count }}
		<button type="button" class="class" @myClick="eFn" v-my-click:count="count">
			Текст
		</button>
	</div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['myClick']);
const count = ref(0);
const vTest = {
	mounted(el) {
		// console.log(el);
	},
};
const vMyClick = {
	mounted(el, binding) {
		el.addEventListener('click', (params) => {
			console.log('dispatch emit');
			emit('myClick', 'works');
		});
		// console.dir({
		// 	binding,
		// });
	},
	unmounted(el, binding) {
		el.removeEventListener('click', (params) => {
			console.log(binding.value);
		});
	},
};
function eFn(msg) {
	console.log('msg', msg);
}
</script>
