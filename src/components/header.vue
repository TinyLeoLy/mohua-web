<template>
	<el-header class="mh-header flex-row">
		<img
			class="logo"
			src="@/assets/images/home/logo.png"
			@click="jumpTo('home')"
		/>
		<div class="nav">
			<span
				:class="['nav-item', getRouteActive(nav.name) ? 'is-active' : '']"
				v-for="nav in navList"
				:key="nav.name"
				@click="jumpTo(nav.name)"
			>
				{{ nav.label }}
			</span>
		</div>
	</el-header>
</template>
<script setup>
import { computed, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const navList = reactive([
	{ label: '关于我们', name: 'aboutus' },
	{ label: '核心技术', name: 'technology' },
	{ label: '产品中心', name: 'product' },
	{ label: '解决方案', name: 'solution' },
	{ label: '案例中心', name: 'case' },
]);
const router = useRouter();

const jumpTo = (name) => {
	router.push({ name });
};
const route = useRoute();

const getRouteActive = (currentRouteName) => {
	const routeName = route.name ?? '';
	if (routeName.indexOf('product') !== -1 && currentRouteName === 'product') {
		return true;
	}
	if (routeName === currentRouteName) {
		return true;
	}

	return false;
};
</script>
<style lang="scss" scoped>
.mh-header {
	align-items: center;
	position: sticky;
	top: 0;
	padding: 0 270px;
	width: 100%;
	min-width: 1600px;
	height: 88px;
	background: #fff;
	.logo {
		// margin-right: 212px;
		width: 274px;
		height: 60px;
		cursor: pointer;
	}
	.nav {
		margin-left: auto;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 18px;
		color: #333333;
		line-height: 21px;
		cursor: pointer;
		.nav-item {
			position: relative;
			display: inline-block;
			padding: 0 42px;

			&::after {
				content: '';
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: -19px;
				width: 0px;
				height: 2px;
				background: #177cbe;
			}
			&:hover,
			&.is-active {
				&::after {
					width: 26px;
					transition: all 0.3s ease-in-out;
				}
				font-weight: bold;
				color: #177cbe;
			}
		}
	}
}
</style>
