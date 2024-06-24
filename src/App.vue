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
