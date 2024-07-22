<template>
	<div class="product-view">
		<div class="board">
			<img src="@/assets/images/product/common/bg.png" alt="" />
			<div class="left">
				<div class="title">业务副驾驶产品</div>
				<div class="line"></div>
				<p>
					Copilot产品是“AI+业务”最直观的表现形式。用户只需通过语音或文本下达指令，便可以随时随地调用大模型来完成各种业务操作。这种直接的调用方式大大提高了用户的操作效率。相比传统的窗口式交互方式，Copilot避免了重复跳转的问题，更有针对性地聚焦于用户当前的任务，使得交互更加流畅、高效。
				</p>
				<div class="btn mh-btn" @click="contactService">沟通咨询</div>
			</div>
		</div>

		<div class="structure">
			<div class="title">产品结构图</div>
			<div class="structure-box flex-column">
				<img src="@/assets/images/product/bpp.png" alt="" />
			</div>
		</div>

		<div class="center flex-column">
			<div class="title">产品功能</div>
			<div class="center-warper flex-row">
				<div class="item">
					<span class="name">自动整理分析数据</span>
					<div class="des">
						用户下达指令后，大模型自动对数据进行收集整理和可视化，无需写SQL和代码，人人都是数据科学家。
					</div>
					<img src="@/assets/images/product/common/01.png" alt="" />
				</div>
				<div class="item">
					<span class="name">资源调度</span>
					<div class="des">
						用户下达指令后，大模型根据当前用户自动进行一系列业务操作，完成具体的业务工作，大大提升工作效率。
					</div>
					<img src="@/assets/images/product/common/02.png" alt="" />
				</div>
				<div class="item">
					<span class="name">实时情报分析</span>
					<div class="des">
						用户下达指令后，大模型根据当前用户正在浏览的内容，结合内外部信息，生成分析报告。
					</div>
					<img src="@/assets/images/product/common/03.png" alt="" />
				</div>
				<div class="item">
					<span class="name">辅助决策</span>
					<div class="des">
						用户下达指令后，大模型根据企业内部材料，给出策略性建议和参考材料。
					</div>
					<img src="@/assets/images/product/common/04.png" alt="" />
				</div>
			</div>
		</div>

		<div class="advantage">
			<div class="title">产品优势</div>
			<div class="warper flex-row">
				<div class="item flex-column">
					<p class="name">私有化部署</p>
					<div class="desc">
						<ul>
							<li>大模型在企业内网环境中训练和部署，保证数据安全；</li>
							<li>根据实际需求和预算，大模型尺寸在1B~400B之间灵活调整；</li>
							<li>支持兼容国产化信创环境；</li>
						</ul>
					</div>
				</div>
				<div class="item flex-column">
					<p class="name">场景化定制</p>
					<div class="desc">
						<ul>
							<li>面向不同的业务场景，定制不同的业务副驾驶；</li>
							<li>面向不同的业务角色，定制不同的交互方式；</li>
							<li>面向不同的业务规模，定制不同的大模型响应方案；</li>
						</ul>
					</div>
				</div>
				<div class="item flex-column">
					<p class="name">集成自研套件库</p>
					<div class="desc">
						<ul>
							<li>集成数据标注平台；</li>
							<li>集成提示词自动优化平台；</li>
							<li>集成语音识别平台；</li>
							<li>集成向量化数据库；</li>
							<li>集成大模型PEFT训练平台；</li>
						</ul>
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
.product-view {
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
			margin-top: 75px;
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
			margin-bottom: 26px;
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
			img {
				width: 1380px;
				height: 100%;
			}
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
			height: 232px;
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
				height: 56px;
				font-weight: 500;
				font-size: 16px;
				color: #666666;
				line-height: 1.5em;
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
					width: 222px;
					font-weight: 500;
					font-size: 16px;
					color: #555555;
					line-height: 1.5em;
					ul li {
						list-style: outside;
					}
				}
			}
			.item:last-child {
				margin-right: unset;
			}
		}
	}
}
</style>
