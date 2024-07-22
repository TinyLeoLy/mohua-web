<template>
	<div class="product-view">
		<div class="board">
			<img src="@/assets/images/product/bg.png" alt="" />
			<div class="left">
				<div class="title">产品中心</div>
				<div class="line"></div>
				<p>
					模华科技利用最新的深度学习技术，开发高性能的大规模预训练模型，深度挖掘私
					域场景需求，为客户提供定制化、高效率的大模型解决方案，帮助客户实现数据驱
					动、智能化的发展目标。
				</p>
				<div class="btn mh-btn" @click="contactService">沟通咨询</div>
			</div>
		</div>

		<div class="product-list">
			<div class="product-item flex-row" @click="jumpTo('product-pkqa')">
				<div class="desc-warp flex-column">
					<div class="title">私有知识问答平台</div>
					<div class="line"></div>
					<p>
						结合先进的大语言模型技术，轻松识别各种文档，自动生成专属知识库，
						带来知识归纳、构建、问答、推荐等体验，帮助用户提升工作效率。
					</p>
					<div class="btn mh-btn" @click="jumpTo('product-pkqa')">探索更多</div>
				</div>
				<img src="@/assets/images/product/01.png" alt="" />
			</div>
			<div class="product-item flex-row" @click="jumpTo('product-twp')">
				<img src="@/assets/images/product/02.png" alt="" />
				<div class="desc-warp flex-column">
					<div class="title">规范文本写作平台</div>
					<div class="line"></div>
					<p>
						提供高效、灵活的创作环境，通过先进的自然语言处理技术，帮助用户快
						速生成高质量的文本内容，拓展了创作的可能性，提升效率，满足多样化
						的写作需求。
					</p>
					<div class="btn mh-btn" @click="jumpTo('product-twp')">探索更多</div>
				</div>
			</div>
			<div class="product-item flex-row" @click="jumpTo('product-bpp')">
				<div class="desc-warp flex-column">
					<div class="title">业务副驾驶产品 Copilot</div>
					<div class="line"></div>
					<p>
						Copilot产品是“AI+业务”最直观的表现形式。用户只需通过语音或文本下
						达指令，便可以随时随地调用大模型来完成各种业务操作。这种直接的调用
						方式大大提高了用户的操作效率。相比传统的窗口式交互方式，Copilot
						避免了重复跳转的问题，更有针对性地聚焦于用户当前的任务，使得交互更加
						流畅、高效。
					</p>
					<div class="btn mh-btn" @click="jumpTo('product-bpp')">探索更多</div>
				</div>
				<img src="@/assets/images/product/03.png" alt="" />
			</div>
			<div class="product-item flex-row" @click="jumpTo('product-bap')">
				<img src="@/assets/images/product/04.png" alt="" />
				<div class="desc-warp flex-column">
					<div class="title">员工助手平台 Agents</div>
					<div class="line"></div>
					<p>
						只需给出业务目标，员工助手平台会独立思考并做出行动，根据给定任务
						详细拆解出每一步的计划步骤，与内外部系统进行交互，直到目标达成。
						业务系统的功能被封装为Agents的插件和工作流，大量的日常任务可以借
						由Agents来完成，员工下达指令就可以完成操作，人工操作和决策的效率
						可以提高50%以上。
					</p>
					<div class="btn mh-btn" @click="jumpTo('product-bap')">探索更多</div>
				</div>
			</div>
			<div class="product-item flex-row" @click="jumpTo('product-bsp')">
				<div class="desc-warp flex-column">
					<div class="title">业务仿真平台 Multi-Agents</div>
					<div class="line"></div>
					<p>
						在进行业务模拟仿真时，有一些能根据环境信息自主做出决策的目标能
						让仿真结果更接近真实情况，例如在军事作战仿真中可以包含一些自主
						决策的蓝方目标。同时，面向需要多工种协作来达成目标的复杂场景时，
						Multi-Agents平台可以扮演多个角色，启发式地输出一系列业务仿真结 果。
					</p>
					<div class="btn mh-btn" @click="jumpTo('product-bsp')">探索更多</div>
				</div>
				<img src="@/assets/images/product/05.png" alt="" />
			</div>
		</div>
		<MhFooter />
	</div>
</template>
<script setup>
import MhFooter from '@/components/footer.vue';
import { useRouter } from 'vue-router';
import { scrollIntoView } from '@/utils/hook';

scrollIntoView();

const router = useRouter();
const jumpTo = (name) => {
	router.push({ name });
};

const contactService = () => {};
</script>
<style lang="scss" scoped>
.product-view {
	.board {
		position: relative;
		width: 100%;
		height: 934px;
		img {
			width: 100%;
			height: 934px;
		}
		.left {
			position: absolute;
			left: 270px;
			top: 0;
			height: 100%;
		}
		.title {
			margin-top: 224px;
			height: 67px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 48px;
			color: #177cbe;
			line-height: 67px;
		}
		.btn {
			margin-top: 135px;
			border: 1px solid #177cbe;
			color: #177cbe;
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
		.line {
			margin-top: 37px;
			margin-bottom: 32px;
			width: 587px;
			height: 0px;
			border: 1px solid #177cbe;
			opacity: 0.3;
		}
		p {
			width: 648px;
			height: 85px;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 18px;
			color: #177cbe;
			line-height: 1.5em;
		}
	}
	.product-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 68px;
		padding-bottom: 63px;
	}
	.product-item {
		padding: 0 61px;
		padding-top: 64px;
		padding-bottom: 72px;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 42px;
		width: 1380px;
		height: 477px;
		background: #f2f4f8;
		cursor: pointer;
		&:hover {
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
		}
		&:last-child {
			margin-bottom: unset;
		}
		.desc-warp {
			box-sizing: border-box;
			padding-left: 35px;
			height: 100%;
			.title {
				height: 45px;
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32px;
				color: #177cbe;
				line-height: 45px;
			}
			.btn {
				margin-top: auto;
				border: 1px solid #177cbe;
				color: #177cbe;
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
			.line {
				margin-top: 30px;
				margin-bottom: 39px;
				width: 335px;
				height: 0px;
				border: 1px solid;
				opacity: 0.5;
				border-image: linear-gradient(
						90deg,
						rgba(4, 117, 180, 1),
						rgba(4, 117, 180, 0)
					)
					1 1;
			}
			p {
				width: 580px;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 18px;
				color: #333333;
				line-height: 1.5em;
			}
		}
		&:nth-child(3) {
			p {
				width: 600px;
			}
		}
		&:nth-child(4) {
			p {
				width: 584px;
			}
		}
		img {
			width: 580px;
			height: 309px;
		}
	}
}
</style>
