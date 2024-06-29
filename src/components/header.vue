<template>
	<el-header class="mh-header flex-row">
		<img
			class="logo"
			src="@/assets/images/home/logo.png"
			@click="jumpTo('/')"
		/>
		<div class="nav">
			<span
				:class="['nav-item', currentRouteName === nav.key ? 'is-active' : '']"
				v-for="nav in navList"
				:key="nav.name"
				@click="jumpTo(nav.path)"
			>
				{{ nav.name }}
			</span>
		</div>
	</el-header>
</template>
<script setup>
import { computed, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const navList = reactive([
	{ name: '关于我们', path: '/aboutus', key: 'aboutus' },
	{ name: '核心技术', path: '/technology', key: 'technology' },
	{ name: '产品中心', path: '/product', key: 'product' },
	{ name: '解决方案', path: '/solution', key: 'solution' },
	{ name: '案例中心', path: '/case', key: 'case' },
]);
const router = useRouter();
const jumpTo = (path) => {
	router.push({ path });
};
const route = useRoute();
const currentRouteName = computed(() => route.name);
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
