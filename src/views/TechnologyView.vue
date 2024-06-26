<template>
	<div class="technology-view">
		<div class="board">
			<img src="@/assets/images/technology/bg.png" alt="" />
			<div class="left">
				<div class="title">核心技术</div>
				<div class="line"></div>
				<p>
					模华科技在大模型技术生态蓬勃发展的背景下，依托自主领先的大模型技术方
					案，潜心打造了“语言即结果”的技术架构，来辅助政府、军工、央国企等企业
					组织直面真需求、解决真问题
				</p>
				<div class="btn">沟通咨询</div>
			</div>
		</div>
		<div class="center flex-column">
			<div class="title">技术专栏</div>
			<div class="center-warper flex-row">
				<div class="item">
					<span class="name">语言即答案</span>
					<span class="des"
						>基于大模型和RAG技术，自主研发了一系列套件，使大模型链接到企业专有的文
						件、材料、数据库、知识图谱，针对用户的问题，大模型结合企业内部数据生成
						&nbsp;&nbsp; 答案和图表。</span
					>
					<img src="@/assets/images/technology/01.png" alt="" />
				</div>
				<div class="item">
					<span class="name">语言即文章</span>
					<span class="des"
						>基于自研的文章写作套件，大模型可以根据企业内外部材料自动生成上万字带引文
						的结构化文章/报告。</span
					>
					<img src="@/assets/images/technology/02.png" alt="" />
				</div>
				<div class="item">
					<span class="name">语言即界面</span>
					<span class="des"
						>在海量现实世界的API上进行了训练，具备领先的Copilot能力。大模型链接到企业
						的系统后，用户只需下达指令，大模型直接完成操作并展示结果，无需用户切换各
						种操作界面，极大提高决策效率。</span
					>
					<img src="@/assets/images/technology/03.png" alt="" />
				</div>
				<div class="item">
					<span class="name">语言即成果</span>
					<span class="des"
						>基于自研的智能体和多智能体架构，配合规划、记忆、对话状态管理、插件调用等
						自研套件，大模型可以代替员工完成有难度的复杂任务，例如数据分析和建模、跨
						系统调度。</span
					>
					<img src="@/assets/images/technology/04.png" alt="" />
				</div>
			</div>
		</div>
		<div class="core flex-column">
			<div class="title">核心算法</div>
			<div class="desc">
				<p>
					模华科技的核心技术覆盖大模型从训练到应用的完整技术栈，支持面向各类企业组织实际业务的高度定制训练。
				</p>
				<p>
					同时所有产品和服务都支持私有化部署，在国产信创软硬件环境中也可以正常部署运行，保证客户的隐私和数据安全。
				</p>
			</div>
			<div class="core-main">
				<img class="img" src="@/assets/images/technology/pie.png" alt="" />
				<div
					v-for="item in keyWordList"
					:key="item.name"
					class="keyword"
					@mouseover="onMouseOver(item)"
				>
					<span class="keyword-name">{{ item.name }}</span>
					<!-- <span v-show="item.visible" class="keyword-bg">{{
						item.toolTip
					}}</span> -->
				</div>
			</div>
		</div>
		<MhFooter />
	</div>
</template>
<script setup>
import MhFooter from '@/components/footer.vue';
import { ref } from 'vue';

const keyWordList = ref([
	{ name: '提示词优化算法', toolTip: '', visible: false },
	{ name: '记忆压缩算法', toolTip: '', visible: false },
	{ name: '结构化信息抽取算法', toolTip: '', visible: false },
	{ name: '多模态RAG向量化算法', toolTip: '', visible: false },
	{ name: '自研大模型', toolTip: '', visible: false },
	{ name: '对话状态管理算法', toolTip: '', visible: false },
	{ name: '智能体(Agent)对齐算法', toolTip: '', visible: false },
	{ name: '函数调用(function calling)算法', toolTip: '', visible: false },
	{ name: '智能规划和验证算法', toolTip: '', visible: false },
	{ name: 'API检索算法', toolTip: '', visible: false },
	{ name: '智能文本分块算法', toolTip: '', visible: false },
	{ name: 'RAG向量化算法', toolTip: '', visible: false },
]);

const keywordHoverStr = ref('');
const onMouseOver = (item) => {
	keywordHoverStr.value = item.toolTip;
	keyWordList.value.forEach((item) => {
		item.visible = false;
	});
	item.visible = true;
};
</script>
<style lang="scss" scoped>
.technology-view {
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
			width: 646px;
			height: 85px;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 18px;
			color: #177cbe;
			line-height: 1.5em;
			// white-space: pre-wrap;
		}
	}
	.center {
		height: 100%;
		height: 791px;
		font-family: PingFang SC;
		align-items: center;

		.title {
			margin-top: 54px;
			margin-bottom: 59px;
			height: 50px;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 42px;
		}
		.center-warper {
			flex-wrap: wrap;
			justify-content: space-between;
			align-content: space-between;
			width: 1380px;
			height: 536px;
		}
		.item {
			position: relative;
			display: flex;
			flex-direction: column;
			padding: 38px 42px;
			width: 674px;
			height: 252px;
			background: #ffffff;
			box-shadow: 0px 0px 51px 0px rgba(73, 130, 216, 0.08);
			box-sizing: border-box;
			.name {
				height: 34px;
				font-weight: bold;
				font-size: 24px;
				color: #177cbe;
				line-height: 34px;
			}
			.des {
				margin-top: 32px;
				height: 76px;
				font-weight: 500;
				font-size: 16px;
				color: #666666;
				line-height: 1.5em;
				white-space: pre-wrap;
			}
			img {
				top: 12px;
				right: 32px;
				margin-top: 32px;
				position: absolute;
				width: 54px;
				height: 24px;
			}
		}
	}
	.core {
		align-items: center;
		width: 100%;
		height: 867px;
		font-family: PingFang SC;
		background: linear-gradient(180deg, #ffffff 0%, #d3e6ff 100%);
		.title {
			margin-top: 14px;
			margin-bottom: 35px;
			height: 50px;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
		}
		.desc {
			width: 850px;
			height: 49px;
			font-weight: 500;
			font-size: 16px;
			color: #555555;
			line-height: 1.6em;
			white-space: pre-wrap;
			text-align: center;
		}
		.core-main {
			position: relative;
			margin-top: 126px;
			width: 885px;
			height: 505px;
			.img {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 505px;
				height: 505px;
			}
			.keyword {
				display: inline-block;
				position: absolute;
				height: 22px;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 16px;
				color: #333333;
				line-height: 22px;
				cursor: pointer;
				&:nth-of-type(1) {
					top: 6px;
					left: 236px;
				}
				&:nth-of-type(2) {
					top: 118px;
					left: 115px;
				}
				&:nth-of-type(3) {
					top: 230px;
					left: 34px;
				}
				&:nth-of-type(4) {
					top: 342px;
					left: 36px;
				}
				&:nth-of-type(5) {
					top: 454px;
					left: 230px;
				}
				&:nth-of-type(6) {
					top: 483px;
					right: 270px;
				}
				&:nth-of-type(7) {
					top: 395px;
					right: 60px;
				}
				&:nth-of-type(8) {
					top: 305px;
					right: -36px;
				}
				&:nth-of-type(9) {
					top: 229px;
					right: 30px;
				}
				&:nth-of-type(10) {
					top: 148px;
					right: 106px;
				}
				&:nth-of-type(11) {
					top: 67px;
					right: 122px;
				}
				&:nth-of-type(12) {
					top: 3px;
					right: 246px;
				}
			}
			.keyword-bg {
				position: absolute;
				display: inline-block;
				background-image: url(@/assets/images/technology/chart.png);
				width: 267px;
				height: 78px;
				background-size: 267px 78px;
				transform: translate(-50%, -100%);
				z-index: 1;
			}
		}
	}
}
</style>
