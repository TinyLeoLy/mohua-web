<template>
	<el-container class="mh-container flex-column">
		<MhHeader />

		<el-main class="mh-main">
			<RouterView />
		</el-main>
	</el-container>
</template>
<script setup>
import MhHeader from '@/components/header.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';

const route = useRoute();
onMounted(() => {
	watch(
		() => route.name,
		() => {
			const dom = document.querySelector('.board');
			dom?.scrollIntoView();
		}
	);
});
</script>
<style lang="scss" scoped>
.mh-container {
	width: 100%;
	height: 100%;
}
.mh-main {
	padding: 0;
	width: 100%;
	height: 100%;
}
</style>
