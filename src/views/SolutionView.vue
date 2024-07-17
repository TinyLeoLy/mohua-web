<template>
	<div class="solution-view">
		<div class="board">
			<img src="@/assets/images/solution/bg.png" alt="" />
			<div class="left">
				<div class="title">解决方案</div>
				<div class="line"></div>
				<p>
					模华科技擅长利用最新的深度学习技术，开发高性能的大规模预训练模型，无
				</p>
				<p>
					论在企业的业务智能化、政府的决策支持还是军队的信息化建设，都能提供定
				</p>
				<p>制化、高效率的大模型解决方案。</p>
				<div class="btn mh-btn" @click="contactService">沟通咨询</div>
			</div>
		</div>
		<div class="custom">
			<div class="title">我们的理想客户</div>
			<div class="custom-warper flex-column">
				<div class="item flex-row">
					<div class="left flex-column">
						<img src="@/assets/images/solution/user_01.png" alt="" />
						<span class="name">企业/组织领导者 决策者</span>
					</div>
					<div class="desc">
						我想了解全球范围内大模型在同行业的落地经验，评估在我们企业
						落地的可行性，预估实际带来的效能提升。
					</div>
				</div>
				<div class="item flex-row">
					<div class="desc">
						我希望有一些直接能上手的大模型工具，稍微学习一下就可以在工作中应
						用；我希望有大模型技术栈的专业培训，让我能自己配置和训练大模型。
					</div>
					<div class="left flex-column">
						<img src="@/assets/images/solution/user_02.png" alt="" />
						<span class="name">业务团队/研发团队</span>
					</div>
				</div>
				<div class="item flex-row">
					<div class="left flex-column">
						<img src="@/assets/images/solution/user_03.png" alt="" />
						<span class="name">合作伙伴</span>
					</div>
					<div class="desc">
						我们数智化建设的项目正在进行，想与伙伴公司合作开发，利用大型的
						能力打造亮点项目，将智能化水平提升到新的高度。
					</div>
				</div>
			</div>
		</div>
		<div class="center flex-column" id="center">
			<div class="title">技术支持</div>
			<div class="center-warper flex-row">
				<div class="item">
					<span class="name">大模型产品培训</span>
					<div class="des">
						提供国内外大模型的操作培训，在实际场景中对比效果。提供一系列免费的大模型产品培训，包括A1写文案、AI写代码、AI画海报、AI画脑图、AI写PPT、AI搜索、提示词工程等。
					</div>
					<img src="@/assets/images/solution/01.png" alt="" />
				</div>
				<div class="item">
					<span class="name">免费提供大模型产品</span>
					<div class="des">
						北京模华科技有限公司自研的知识库平台、规范文本写作平台，均提供账号和使用培训，也可以部署在客户私有化环境。
					</div>
					<img src="@/assets/images/solution/02.png" alt="" />
				</div>
				<div class="item">
					<span class="name">模型技术进阶培训</span>
					<div class="des">
						提供大模型训练和部署框架，培训大模型原理和实战教学。重点突出大模型在企业应用时的核心技术例如ReAct框架：LangChain和大模型的微调。
					</div>
					<img src="@/assets/images/solution/03.png" alt="" />
				</div>
				<div class="item">
					<span class="name">方案咨询</span>
					<div class="des">
						全面研究同行业大模型落地经验，结合企业现状，对投入产出比进行估算，对不同级别的预算可以达到的效果充分论证，协助撰写建设方案。
					</div>
					<img src="@/assets/images/solution/04.png" alt="" />
				</div>
			</div>
		</div>
		<div class="service" id="service">
			<div class="title">免费产品和选配服务</div>
			<div class="warper flex-row">
				<div class="item flex-column">
					<img src="@/assets/images/solution/s_01.png" alt="" />
					<div class="name">
						北京模华科技有限公司提供一揽子免费产
						品，帮助客户快速上手体验大模型带来的
						生产力提升，涵盖了AI问答、AI绘画、私
						有文件/数据库/知识图谱问答等等，同时 提供培训。
					</div>
				</div>
				<div class="item flex-column">
					<img src="@/assets/images/solution/s_02.png" alt="" />
					<div class="name">
						北京模华科技有限公司提供大量免费的大
						模型技术相关技术框架，涵盖了大模型可
						视化训练(预训练、微调、RLHF)，大模型
						部署，以及30余种大模型应用套件，5套
						智能体应用框架。同步提供大模型从原理 到应用的培训辅导。
					</div>
				</div>
				<div class="item flex-column">
					<img src="@/assets/images/solution/s_03.png" alt="" />
					<div class="name">
						北京模华科技有限公司提供的长文写作平
						台，基于前后端分离架构以及Vue3、uni-
						app、ThinkPHP6.x、PHP8.0技术栈开发，
						包含PC端、H5自适应，只需要几分钟，大 模型为客户生成万字长文。
					</div>
				</div>
				<div class="item flex-column">
					<img src="@/assets/images/solution/s_04.png" alt="" />
					<div class="name">
						依托北京模华科技有限公司免费提供的智
						能体搭建平台，客户能轻松构建基于多代 理对话的下一代 LLM
						应用程序。它简化了 复杂的 LLM 工作流程的编排、自动化和优
						化。它最大限度地提高了 LLM 模型的性能 并克服了它们的弱点。
					</div>
				</div>
			</div>
		</div>
		<MhFooter />
	</div>
</template>
<script setup>
import MhFooter from '@/components/footer.vue';
import { scrollIntoView } from '@/utils/hook';

scrollIntoView();
const contactService = () => {};
</script>
<style lang="scss" scoped>
.solution-view {
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
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 18px;
			color: #177cbe;
			line-height: 1.5em;
		}
	}
	.custom {
		width: 100%;
		height: 748px;
		background: linear-gradient(180deg, #ffffff 0%, #d3e6ff 100%);
		.title {
			margin-top: 54px;
			height: 50px;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
			text-align: center;
		}
		.custom-warper {
			margin: 0 auto;
			margin-top: 65px;
			width: 1347px;
			.item {
				margin-bottom: 15px;
				.left {
					align-items: center;
					img {
						width: 113px;
						height: 127px;
					}
					.name {
						margin-top: 14px;
						display: inline-block;
						width: 139px;
						height: 50px;
						font-weight: bold;
						font-size: 18px;
						color: #177cbe;
						line-height: 1.5em;
						text-align: center;
					}
				}
				.desc {
					margin-top: 26px;
					margin-left: 56px;
					padding: 20px;
					width: 546px;
					height: 93px;
					background: #ffffff;
					border-radius: 13px;
					font-weight: 500;
					font-size: 16px;
					color: #555555;
					line-height: 1.6em;
				}
			}
			.item:nth-child(2) {
				align-self: flex-end;
				img {
					width: 194px;
					height: 116px;
				}
				.name {
					width: unset;
				}
				.desc {
					margin: 0;
					margin-top: 23px;
					width: 560px;
				}
			}
			.item:nth-child(3) {
				margin-bottom: unset;
				img {
					width: 74px;
					height: 105px;
				}
				.name {
					width: unset;
				}
				.desc {
					margin-top: 12px;
					margin-left: 75px;
				}
			}
		}
	}
	.center {
		height: 100%;
		height: 741px;
		font-family: PingFang SC;
		align-items: center;

		.title {
			margin-top: 52px;
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
				line-height: 1.7em;
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
	.service {
		width: 100%;
		height: 727px;
		background: linear-gradient(180deg, #ffffff 0%, #d3e6ff 100%);
		.title {
			margin-top: 62px;
			margin-bottom: 53px;
			height: 50px;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 42px;
			text-align: center;
		}
		.warper {
			justify-content: center;
			.item {
				align-items: center;
				margin-right: 32px;
				width: 321px;
				height: 466px;
				background: #ffffff;
				border-top: 3px #177cbe solid;
				img {
					margin-top: 32px;
					margin-bottom: 14px;
					width: 296px;
					height: 237px;
				}
				.name {
					width: 252px;
					font-weight: 500;
					font-size: 14px;
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
