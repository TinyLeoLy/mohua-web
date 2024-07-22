<template>
	<div class="home-view">
		<div class="carousel" id="carousel">
			<img src="@/assets/images/home/carousel.png" alt="" />
			<div class="title-container">
				<div class="title">让大模型走进每一家企业</div>
				<div class="deliver-line"></div>
				<div class="desc">
					<p>
						模华科技是企业大模型综合解决方案先行者，致力于以智能、高效、灵活、准确、全
					</p>
					<p>
						面的人工智能大模型技术，为客户提供最优质、最具价值的人工智能解决方案
					</p>
				</div>
				<div class="btn">
					<QrCodeButton>探索更多</QrCodeButton>
				</div>
			</div>
		</div>
		<div class="company flex-row" id="company">
			<img src="@/assets/images/home/company.png" alt="" />
			<div class="title-container flex-column">
				<div class="title">企业简介</div>
				<div class="desc">
					北京模华科技有限公司是一家专业提供大模型解决方案的领先科技企业，<br />
					立足于为各行各业提供高效、智能的技术支持。<br />
					我们的产品涵盖了多个方向，<br />
					包括但不限于私有知识问答平台、规范文本写作平台、业务副驾驶产品copilot、<br />
					员工助手平台Agents以及业务仿真平台Multi-Agents等，<br />
					我们注重与客户的紧密合作，倾听客户需求，深入了解行业特点，为客户量身定制符合实际需求的解决方案。<br />
				</div>
				<div class="btn mh-btn" @click="jumpTo('aboutus')">探索更多</div>
			</div>
		</div>
		<div class="product flex-column" id="product">
			<div class="title">产品体系</div>
			<div class="system-box flex-row">
				<div class="system flex-column">
					<div class="img-box flex-column">
						<img src="@/assets/images/home/system.png" alt="" />
						<span>知识库系列</span>
						<span>面向数据</span>
					</div>
					<div class="tag-box flex-row">
						<span>长文档问答</span>
						<span>知识图谱问答</span>
						<span>数据库问答</span>
						<span>资料库问答</span>
						<span>材料写作</span>
					</div>
				</div>

				<div class="system flex-column">
					<div class="img-box flex-column">
						<img src="@/assets/images/home/system.png" alt="" />
						<span>Agent系列</span>
						<span>面向业务</span>
					</div>
					<div class="tag-box flex-row">
						<span>业务副驾驶</span>
						<span>业务仿真</span>
						<span>员工助手</span>
						<span>复杂业务调度</span>
					</div>
				</div>
			</div>
		</div>
		<div class="center" id="center">
			<div class="title">产品中心</div>
			<div class="center-box flex-row">
				<div class="item" @click="jumpTo('product-pkqa')">
					<img src="@/assets/images/home/c_01.png" alt="" />
					<div class="name">私有知识问答平台</div>
				</div>
				<div class="item" @click="jumpTo('product-twp')">
					<img src="@/assets/images/home/c_02.png" alt="" />
					<div class="name">规范文本写作平台</div>
				</div>
				<div class="item" @click="jumpTo('product-bpp')">
					<img src="@/assets/images/home/c_03.png" alt="" />
					<div class="name">业务副驾驶产品</div>
				</div>
				<div class="item" @click="jumpTo('product-bap')">
					<img src="@/assets/images/home/c_04.png" alt="" />
					<div class="name">业务助手平台</div>
				</div>
				<div class="item" @click="jumpTo('product-bsp')">
					<img src="@/assets/images/home/c_05.png" alt="" />
					<div class="name">业务仿真平台</div>
				</div>
			</div>
		</div>
		<div class="solution" id="solution">
			<div class="title">解决方案</div>
			<div class="center-box">
				<img src="@/assets/images/home/solution.png" alt="" />
				<div class="tag">方案咨询</div>
				<div class="tag">定制交付</div>
				<div class="tag">专业培训</div>
			</div>
		</div>
		<div class="case" id="case">
			<div class="title">案例中心</div>
			<div class="product-box flex-row">
				<div class="item flex-column">
					<img src="@/assets/images/home/case_01.png" alt="" />
					<span class="name">模型训练和部署典型案例</span>
				</div>
				<div class="item flex-column">
					<img src="@/assets/images/home/case_02.png" alt="" />
					<span class="name">私有知识问答案例</span>
				</div>
				<div class="item flex-column">
					<img src="@/assets/images/home/case_03.png" alt="" />
					<span class="name">员工助手案例</span>
				</div>
			</div>
			<div class="button mh-btn" @click="jumpTo('case')">探索更多</div>
		</div>
		<MhFooter />
		<QrCode />
	</div>
</template>
<script setup>
import MhFooter from '@/components/footer.vue';
import { useRouter } from 'vue-router';
import { scrollIntoView } from '@/utils/hook';
import QrCodeButton from '@/components/qrCodeButton.vue';

const router = useRouter();
const jumpTo = (name) => {
	router.push({ name });
};

scrollIntoView();
</script>
<style lang="scss" scoped>
@mixin btn() {
	width: 192px;
	height: 55px;
	border-radius: 82px;
	font-family: PingFang SC;
	font-weight: 500;
	font-size: 18px;
	line-height: 55px;
	text-align: center;
	cursor: pointer;
}
.home-view {
	width: 100%;
	height: 100%;
	.carousel {
		position: relative;
		img {
			width: 100%;
			height: 924px;
		}
		.title-container {
			position: absolute;
			top: 192px;
			left: 270px;
		}
		.title {
			// width: 528px;
			// height: 134px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 50px;
			color: #177cbe;
			line-height: 1.5em;
			text-align: left;
		}
		.deliver-line {
			margin: 32px 0;
			width: 587px;
			height: 2px;
			border: 1px solid #177cbe;
			opacity: 0.3;
		}
		.desc {
			width: 666px;
			height: 50px;
			p {
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 18px;
				color: #177cbe;
				line-height: 1.5em;
				text-align: left;
			}
		}
		.btn {
			margin-top: 100px;
		}
	}
	.company {
		position: relative;
		justify-content: center;
		img {
			width: 100%;
			height: 632px;
		}
		.title-container {
			align-items: center;
			position: absolute;
			top: 52px;
			.title {
				// width: 144px;
				height: 50px;
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 40px;
				color: #ffffff;
				line-height: 50px;
				text-align: center;
			}
			.desc {
				margin-top: 67px;
				// width: 768px;
				height: 152px;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 18px;
				color: #ffffff;
				line-height: 1.5em;
				text-align: center;
			}
			.btn {
				align-self: flex-end;
				transform: translateX(50%);
				margin-top: 146px;
				border: 1px solid #ffffff;
				color: #ffffff;
				@include btn();
			}
		}
	}
	.product {
		align-items: center;
		width: 100%;
		height: 754px;
		background: linear-gradient(180deg, #ffffff 0%, #d3e6ff 100%);
		.title {
			margin-top: 60px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
		}
		.system-box {
			width: 100%;
			height: 100%;
			justify-content: center;
		}
		.system {
			align-items: center;
			margin-right: 81px;

			.img-box {
				position: relative;
				align-items: center;
				justify-content: center;
				margin-top: 86px;
				width: 324px;
				height: 336px;
				img {
					position: absolute;
					width: 324px;
					height: 336px;
					z-index: 1;
				}
				span {
					position: relative;
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 28px;
					color: #ffffff;
					line-height: 39px;
					z-index: 2;
				}
				span:last-of-type {
					margin-right: 2px;
					font-weight: 500;
					font-size: 18px;
					line-height: 25px;
				}
			}
			.tag-box {
				align-items: center;
				justify-content: center;
				margin-top: 20px;
				width: 649px;
				height: 98px;
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0.34) 0%,
					rgba(255, 255, 255, 0.45) 100%
				);
				border-radius: 12px;
				border: 1px solid #ffffff;
				box-sizing: border-box;
				span {
					display: inline-block;
					padding: 0 18px;
					border-right: 1px solid #c7cfd9;
					height: 44px;
					line-height: 44px;
					font-size: 18px;
				}
				span:last-child {
					border-right: unset;
				}
			}

			&:last-child {
				margin-right: unset;
				.tag-box {
					span {
						padding: 0 36px;
					}
				}
			}
		}
	}
	.center {
		padding: 56px 0;
		width: 100%;
		height: 379px;
		.title {
			height: 50px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
			text-align: center;
		}
		.center-box {
			justify-content: center;
			margin-top: 37px;
			height: 184px;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 298px;
				height: 100%;
				border-right: 1px solid rgba(0, 0, 0, 0.2);
				cursor: pointer;
				&:last-child {
					border-right: unset;
				}
			}
			img {
				width: 68px;
				height: 68px;
			}
			.name {
				margin-top: 24px;
				height: 22px;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 16px;
				color: #333333;
				line-height: 22px;
			}
			.item:hover {
				img {
					transform: scale(1.2);
					transition: 0.8s all;
				}
				.name {
					color: #177cbe;
				}
			}
		}
	}
	.solution {
		width: 100%;
		height: 867px;
		background: linear-gradient(180deg, #ffffff 0%, #d3e6ff 100%);
		.title {
			margin-right: 21px;
			width: 100%;
			height: 50px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
			text-align: center;
		}
		.center-box {
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			margin-top: 77px;
			width: 974px;
			height: 635px;
		}
		img {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			width: 577px;
			height: 566px;
		}
		.tag {
			position: absolute;
			width: 149px;
			height: 83px;
			background: linear-gradient(180deg, #90cfff 0%, #44aefe 100%);
			border-radius: 12px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 24px;
			color: #ffffff;
			line-height: 83px;
			text-align: center;
			&:nth-child(2) {
				top: 96px;
				left: 0;
			}
			&:nth-child(3) {
				top: 261px;
				right: 0;
			}
			&:nth-child(4) {
				bottom: 0;
				left: 204px;
			}
		}
	}
	.case {
		width: 100%;
		height: 731px;
		.title {
			margin-top: 52px;
			width: 100%;
			height: 50px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
			text-align: center;
		}
		.product-box {
			justify-content: center;
			margin-top: 58px;
			.item {
				margin-right: 24px;
				width: 443px;
				height: 378px;
				background: #f2f4f8;
				img {
					width: 443px;
					height: 283px;
				}
				.name {
					padding-left: 23px;
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 24px;
					color: #333333;
					line-height: 95px;
				}
				&:last-child {
					margin-right: 0;
				}
			}
		}
		.button {
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			margin-top: 52px;
			width: 192px;
			height: 55px;
			border-radius: 82px;
			border: 1px solid #777777;
			text-align: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 18px;
			color: #777777;
			line-height: 55px;
			cursor: pointer;
			&:hover {
				color: #177cbe;
				border-color: #177cbe;
			}
		}
	}
}
</style>
