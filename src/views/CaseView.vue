<template>
	<div class="product-view">
		<div class="board">
			<img src="@/assets/images/case/bg.png" alt="" />
			<div class="left">
				<div class="title">案例中心</div>
				<div class="line"></div>
				<p>
					根据不同企业/组织的实际需求，模华科技提供不同阶段的服务，包括方案咨
				</p>
				<p>
					询-专业培训-定制交付。我们的目标是将大模型与企业战略、业务流程、员
				</p>
				<p>工生产力紧密结合，为企业搭建AI引擎。</p>
				<div class="btn">
					<QrCodeButton />
				</div>
			</div>
		</div>
		<div class="product-content flex-column">
			<div class="product-item">
				<div class="title flex-row">
					<img src="@/assets/images/case/dot.png" alt="" />
					<span>模型训练和部署典型案例</span>
				</div>
				<div class="product-item-warper flex-row">
					<img class="product-img" src="@/assets/images/case/01.png" alt="" />

					<div class="desc-box flex-column">
						<div class="name">农业农村部大模型</div>
						<img src="@/assets/images/case/line.png" alt="" />
						<div class="desc">
							<p>本案例充分发挥农业农村部数据优势，针对大模型进行改造优化，在粮食安</p>
							<p>全、生猪稳产保供、乡村动态分析三个方向上训练行业大模型，实现粮食安</p>
							<p>全风险全流程的自主判决、实现乡村发展态势动态融合判断、实现生猪产业</p>
							<p>重点环节的及时预警，推进数据要素在农业农村相关领域的应用，为乡村振</p>
							<p>兴发展和现代农业建设提供大数据工具支撑。</p>
						</div>
					</div>
				</div>
			</div>
			<div class="product-item">
				<div class="title flex-row">
					<img src="@/assets/images/case/dot.png" alt="" />
					<span>私有知识问答案例</span>
				</div>
				<div class="product-item-warper flex-row">
					<div class="desc-box flex-column">
						<div class="name">某研究院私有知识问答平台</div>
						<img src="@/assets/images/case/line.png" alt="" />
						<div class="desc">
							<p>本案例基于军事百科知识和其他内部私有数据，面向各类用户提供集成性、智能</p>
							<p>化的知识服务。主要功能包括交互式知识问答、摘要及文书生成、智能辅助决策</p>
							<p>等。</p>
						</div>
					</div>
					<img class="product-img" src="@/assets/images/case/02.png" alt="" />
				</div>
			</div>
			<div class="product-item">
				<div class="title flex-row">
					<img src="@/assets/images/case/dot.png" alt="" />
					<span>业务副驾驶案例</span>
				</div>
				<div class="product-item-warper flex-row">
					<img class="product-img" src="@/assets/images/case/03.png" alt="" />

					<div class="desc-box flex-column">
						<div class="name">某研究院作战仿真系统</div>
						<img src="@/assets/images/case/line.png" alt="" />
						<div class="desc">
							<p>本案例面向作战仿真场景，利用大模型进行情报收集和分析、作战决策</p>
							<p>支持、目标识别和追踪、智能无人系统、生成打击方案、生成战损报告</p>
							<p>等。在实际场景中，极大地提升了实时决策的效率。</p>
						</div>
					</div>
				</div>
			</div>
			<div class="product-item">
				<div class="title flex-row">
					<img src="@/assets/images/case/dot.png" alt="" />
					<span>员工助手案例</span>
				</div>
				<div class="product-item-warper flex-row">
					<div class="desc-box flex-column">
						<div class="name">水利部信息中心大模型</div>
						<img src="@/assets/images/case/line.png" alt="" />
						<div class="desc">
							<p>本案例面向水务场景，大模型通过识别用户对话，结合水环境知识，分析污染事</p>
							<p>件的关键要素、事件成因与本地流域分布、历史事件、地理地形、环境生态，追</p>
							<p>湖污染严重根因，结合污染治理知识体系，给出针对性的污染治理方案。</p>
						</div>
					</div>
					<img class="product-img" src="@/assets/images/case/04.png" alt="" />
				</div>
			</div>
		</div>
		<MhFooter />
	</div>
</template>
<script setup>
import MhFooter from '@/components/footer.vue';
import { scrollIntoView } from '@/utils/hook';
import QrCodeButton from '@/components/qrCodeButton.vue';

scrollIntoView();
</script>
<style lang="scss" scoped>
.product-view {
	font-family: PingFang SC;
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
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 18px;
			color: #177cbe;
			line-height: 1.5em;
		}
	}
	.product-content {
		align-items: center;
		padding-top: 54px;
		padding-bottom: 61px;
	}
	.product-item {
		margin-bottom: 80px;
		width: 1380px;
		.title {
			align-items: center;
			justify-content: center;
			margin-bottom: 61px;
			height: 50px;
			img {
				width: 24px;
				height: 24px;
				margin-right: 18px;
			}
			span {
				font-weight: bold;
				font-size: 36px;
				color: #333333;
			}
		}
		.product-item-warper {
			justify-content: space-between;
		}
		.product-img {
			width: 633px;
			height: 370px;
			background: #f1f7fe;
			border-radius: 0px 0px 0px 0px;
		}
		.desc-box {
			.name {
				margin-top: 16px;
				height: 34px;
				font-weight: bold;
				font-size: 24px;
				color: #333333;
				line-height: 34px;
			}
			img {
				margin-top: 22px;
				margin-bottom: 54px;
				width: 638px;
				height: 3px;
			}
			.desc {
				font-weight: 500;
				font-size: 16px;
				color: #555555;
				line-height: 1.8em;
			}
		}
	}
	.product-item:last-child {
		margin-bottom: unset;
	}
}
</style>
