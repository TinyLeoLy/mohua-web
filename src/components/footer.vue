<template>
	<el-footer class="mh-footer flex-row">
		<div class="footer-left flex-column">
			<img class="logo" src="@/assets/images/home/logo.png" alt="" />
			<span class="guide">联系我们</span>
			<div class="vector"></div>

			<div class="line">
				<img src="@/assets/images/home/phone.png" alt="" />
				<span>电话:15022610030</span>
			</div>
			<div class="line">
				<img src="@/assets/images/home/locate.png" alt="" />
				<span>地址:北京市海淀区上地信息产业基地三街1号楼2层C段</span>
			</div>
			<div class="line">
				<img src="@/assets/images/home/mail.png" alt="" />
				<span>邮箱:xiaonan@mohua-ai-tech.cc</span>
			</div>
		</div>
		<div class="footer-right flex-row">
			<div>
				<p>产品中心</p>
				<span @click="jumpTo('product-pkqa')">私有知识问答平台</span>
				<span @click="jumpTo('product-twp')">规范文本写作平台</span>
				<span @click="jumpTo('product-bpp')">业务副驾驶产品</span>
				<span @click="jumpTo('product-bap')">员工助手平台</span>
				<span @click="jumpTo('product-bsp')">业务仿真平台</span>
			</div>
			<div>
				<p>解决方案</p>
				<span @click="jumpTo('solution', 'center')">方案咨询</span>
				<span @click="jumpTo('solution', 'center')">专业培训</span>
				<span @click="jumpTo('solution', 'service')">定制交付</span>
			</div>
			<div>
				<p>核心技术</p>
				<span @click="jumpTo('technology', 'center')">语言即答案</span>
				<span @click="jumpTo('technology', 'center')">语言即文章</span>
				<span @click="jumpTo('technology', 'center')">语言即界面</span>
				<span @click="jumpTo('technology', 'center')">语言即成果</span>
			</div>
			<div>
				<p>关于我们</p>
				<span @click="jumpTo('aboutus', 'company')">公司介绍</span>
				<span @click="jumpTo('aboutus', 'center')">使命愿景</span>
			</div>
		</div>
	</el-footer>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const jumpTo = (path, hash = '') => {
	const query = hash ? { hash } : {};
	if (route.name === path) {
		router.replace({
			path,
			query,
		});
	} else {
		router.push({
			path,
			query,
		});
	}
};
</script>
<style lang="scss" scoped>
.mh-footer {
	align-items: center;
	width: 100%;
	min-width: 1600px;
	height: 423px;
	background: #f2f4f8;
	align-items: center;
	padding: 0 270px;
}
.footer-left {
	.logo {
		width: 274px;
		height: 60px;
	}
	.guide {
		margin-top: 45px;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 18px;
		color: #333333;
		line-height: 25px;
	}
	.vector {
		margin-top: 18px;
		margin-bottom: 23px;
		width: 136px;
		height: 0px;
		border: 1px solid;
		opacity: 0.5;
		border-image: linear-gradient(
				90deg,
				rgba(51, 51, 51, 1),
				rgba(153, 153, 153, 0)
			)
			1 1;
	}
	.line {
		display: flex;
		align-items: center;
		margin-bottom: 17px;
		img {
			margin-right: 8px;
			width: 24px;
			height: 24px;
		}
		span {
			height: 20px;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 14px;
			color: #333333;
			line-height: 20px;
		}
	}
}
.footer-right {
	margin-left: auto;
	div {
		margin-right: 124px;
		display: flex;
		flex-direction: column;
		font-family: PingFang SC;

		p {
			margin-bottom: 28px;
			height: 25px;
			font-weight: 500;
			font-size: 18px;
			color: #333333;
			line-height: 25px;
		}
		span {
			margin-bottom: 21px;
			height: 20px;
			font-weight: 500;
			font-size: 14px;
			color: #333333;
			line-height: 20px;
			cursor: pointer;
			&:hover {
				color: #177cbe;
			}
			&:last-child {
				margin-bottom: unset;
			}
		}
	}
	div:last-child {
		margin-right: unset;
	}
}
</style>
