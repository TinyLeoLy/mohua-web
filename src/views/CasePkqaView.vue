<template>
	<div class="case-view">
		<div class="board">
			<img src="@/assets/images/case/pkqa/bg.png" alt="" />
			<div class="left">
				<div class="title">私有知识问答平台</div>
				<div class="line"></div>
				<p>
					结合先进的大语言模型技术，轻松识别各种文档，自动生成专属知识库，
					带来知识归纳、构建、问答、推荐等体验，帮助用户提升工作效率。
				</p>
				<div class="btn">沟通咨询</div>
			</div>
		</div>

		<div class="structure">
			<div class="title">产品结构图</div>
			<div class="structure-box flex-column">
				<div class="structure-item flex-row">
					<div class="left">
						<img src="@/assets/images/case/pkqa/pie.png" alt="" />
						<div class="name">应用层</div>
					</div>
					<div class="right flex-row">
						<span v-for="item in list1" :key="item">{{ item }}</span>
					</div>
				</div>
				<div class="structure-item flex-row">
					<div class="left">
						<img src="@/assets/images/case/pkqa/pie.png" alt="" />
						<div class="name">功能层</div>
					</div>
					<div class="right flex-row">
						<span v-for="item in list2" :key="item">{{ item }}</span>
					</div>
				</div>
				<div class="structure-item flex-row">
					<div class="left">
						<img src="@/assets/images/case/pkqa/pie.png" alt="" />
						<div class="name">模型层</div>
					</div>
					<div class="right flex-row">
						<span v-for="item in list3" :key="item">{{ item }}</span>
					</div>
				</div>
				<div class="structure-item flex-row">
					<div class="left">
						<img src="@/assets/images/case/pkqa/pie.png" alt="" />
						<div class="name">组件层</div>
					</div>
					<div class="right flex-row">
						<span v-for="item in list4" :key="item">{{ item }}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="center flex-column">
			<div class="title">产品功能</div>
			<div class="center-warper flex-row">
				<div class="item">
					<span class="name">知识建库</span>
					<span class="des"
						>提供智能化管理能力，支持多格式知识文档上传、自动向量化生成统一的面向
						全域非结构化数据处理的AI知识库。</span
					>
					<img src="@/assets/images/case/pkqa/01.png" alt="" />
				</div>
				<div class="item">
					<span class="name">知识总结</span>
					<span class="des"
						>精确快速地从非结构化文本中进行知识抽取，构建领域知识图谱，可对用户给
						出的信息进行归类，准确总结长文本摘要。</span
					>
					<img src="@/assets/images/case/pkqa/02.png" alt="" />
				</div>
				<div class="item">
					<span class="name">智能搜索</span>
					<span class="des"
						>理解用户提出的问题并准确抽取关键信息，基于上下文理解能力，平台可以提
						供智能搜索功能，根据用户提出的问题和上下文信息，准确匹配相关内容。</span
					>
					<img src="@/assets/images/case/pkqa/03.png" alt="" />
				</div>
				<div class="item">
					<span class="name">集成扩展</span>
					<span class="des"
						>提供与其他系统的集成能力，或外部服务的集成，以及具有一定的扩展性，支持
						定制化需求和功能扩展。</span
					>
					<img src="@/assets/images/case/pkqa/04.png" alt="" />
				</div>
			</div>
		</div>

		<div class="advantage">
			<div class="title">产品优势</div>
			<div class="warper flex-row">
				<div class="item flex-column">
					<p class="name">开箱即用</p>
					<div class="desc">
						只需上传文件即可，具备强大的文件 处理能力，高效处理多种类型文档，
						解决企业在文件解析与处理方面的复 杂需求。
					</div>
				</div>
				<div class="item flex-column">
					<p class="name">回答精准</p>
					<div class="desc">
						支持多种语言互译和跨语种理解，理 解企业知识并进行推理，回答精准有
						依据，不随意编造答案。
					</div>
				</div>
				<div class="item flex-column">
					<p class="name">安全可靠</p>
					<div class="desc">
						私有化部署，确保用户数据和知识内 容的安全性和隐私保护
					</div>
				</div>
				<div class="item flex-column">
					<p class="name">灵活定制</p>
					<div class="desc">
						根据不同客户的业务需求，与内部的 知识与企业内部的知识库集成，提供
						定制化服务，提供API，可接入到网 页、App等多种载体。
					</div>
				</div>
			</div>
		</div>

		<MhFooter />
	</div>
</template>
<script setup>
import { ref } from 'vue';
import MhFooter from '@/components/footer.vue';
const list1 = ref(['财务', '能源', '教育', '政务', '金融', '制造']);
const list2 = ref([
	'知识图谱问答',
	'个性化推荐',
	'文件问答',
	'文档预处理',
	'知识库问答',
	'数据分析与统计',
	'多语言支持',
	'检索/查询',
	'数据库问答',
]);
const list3 = ref([
	'文本分割',
	'文本段落',
	'Embedding',
	'向量数据库',
	'向量查询',
]);
const list4 = ref([
	'模型训练',
	'模型推理',
	'模型安全加固',
	'模型微调',
	'结果追溯',
	'提示词引擎',
	'语义检索',
	'关键词检索',
	'多路召回',
	'问题改写',
	'相关度排序',
	'相关度排序',
]);
</script>
<style lang="scss" scoped>
.case-view {
	font-family: PingFang SC;
	.board {
		position: relative;
		width: 100%;
		height: 690px;
		img {
			width: 100%;
			height: 690px;
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
			width: 576px;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 18px;
			color: #177cbe;
			line-height: 1.5em;
		}
	}

	.structure {
		.title {
			margin-top: 52px;
			margin-bottom: 56px;
			height: 50px;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
			text-align: center;
		}
		.structure-box {
      justify-content: center;
      align-items: center;
		}
		.structure-item {
			margin-bottom: 35px;
			.left {
				position: relative;
				width: 150px;
				height: 150px;
				img {
					width: 150px;
					height: 150px;
				}
				.name {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					font-weight: 500;
					font-size: 24px;
					color: #333333;
					line-height: 34px;
				}
			}
			.right {
				flex-wrap: wrap;
				align-items: center;
        align-content: space-evenly;
				margin-left: 38px;
				padding: 0 48px;
				width: 1188px;
				height: 151px;
				background: #f8fafd;
				border-radius: 16px;
				border: 1px solid rgba(47, 78, 107, 0.5);
				span {
					display: block;
          margin-right: 23px;
					width: 162px;
					height: 70px;
					background: #ffffff;
					border-radius: 12px;
					border: 1px solid rgba(47, 78, 107, 0.5);
					font-weight: 500;
					font-size: 20px;
					color: #333333;
					line-height: 68px;
					text-align: center;
				}
        span:nth-child(6),
        span:nth-child(12) {
          margin-right: unset;
        }
			}
		}
    .structure-item:nth-child(2n) {
      .right {
        span {
          height: 51px;
          line-height: 49px;
        }
      }
    }
		.structure-item:last-child {
			margin-bottom: 10px;
		}
	}

	.center {
		height: 100%;
		height: 733px;
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

	.advantage {
		width: 100%;
		height: 672px;
		background: linear-gradient(180deg, #ffffff 0%, #d3e6ff 100%);
		.title {
			margin-top: 64px;
			margin-bottom: 101px;
			height: 50px;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
			text-align: center;
		}
		.warper {
			justify-content: center;
			.item {
				align-items: center;
				margin-right: 32px;
				width: 321px;
				height: 373px;
				background: #ffffff;
				border-top: 3px #177cbe solid;
				.name {
					margin-top: 58px;
					margin-bottom: 48px;
					height: 34px;
					font-weight: 500;
					font-size: 24px;
					color: #000000;
					line-height: 34px;
				}
				.desc {
					width: 252px;
					font-weight: 500;
					font-size: 16px;
					color: #555555;
					line-height: 1.5em;
				}
			}
			.item:last-child {
				margin-right: unset;
			}
		}
	}
}
</style>
