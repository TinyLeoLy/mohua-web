<template>
	<div class="product-view">
		<div class="board">
			<img src="@/assets/images/product/common/bg.png" alt="" />
			<div class="left">
				<div class="title">规范文本写作平台</div>
				<div class="line"></div>
				<p>
					提供高效、灵活的创作环境，通过先进的自然语言处理技术，帮助用户快速生成高质量的文本内容，拓展了创作的可能性，提升效率，满足多样化的写作需求。
				</p>
				<div class="btn mh-btn" @click="contactService">沟通咨询</div>
			</div>
		</div>

		<div class="structure">
			<div class="title">产品结构图</div>
			<div class="structure-box flex-column">
				<img src="@/assets/images/product/twp.png" alt="" />
			</div>
		</div>

		<div class="center flex-column">
			<div class="title">产品功能</div>
			<div class="center-warper flex-row">
				<div class="item">
					<span class="name">定制化文本生成</span>
					<div class="des">
						提供定制化的文本生成服务，生成特定主题、风格或形式的文本内容，包括学术论文、专利软著、政府公文、产品描述等。
					</div>
					<img src="@/assets/images/product/common/01.png" alt="" />
				</div>
				<div class="item">
					<span class="name">文本扩写及续写</span>
					<div class="des">
						根据客户输入的文本内容，扩展生成更多的相关内容，还可根据已有文本进行续写，保持文本风格和逻辑连贯性。
					</div>
					<img src="@/assets/images/product/common/02.png" alt="" />
				</div>
				<div class="item">
					<span class="name">智能建议和修正</span>
					<div class="des">
						提供润色服务，对文本进行语法检查、拼写检查、修正错误、调整语言表达等操作。
					</div>
					<img src="@/assets/images/product/common/03.png" alt="" />
				</div>
				<div class="item">
					<span class="name">文本引用及摘要</span>
					<div class="des">
						根据客户需求自动生成合适的参考文献，自动从长文本种提取关键信息和要点。
					</div>
					<img src="@/assets/images/product/common/04.png" alt="" />
				</div>
			</div>
		</div>

		<div class="advantage">
			<div class="title">产品优势</div>
			<div class="warper flex-row">
				<div class="item flex-column">
					<p class="name">自动化和高效性</p>
					<div class="desc">
						具有更深层次的语言理解和生成能力，能够自动生成高质量的文本，帮助客户快速生成创意性和丰富的文本内容提高写作效率。
					</div>
				</div>
				<div class="item flex-column">
					<p class="name">多样性和创造性</p>
					<div class="desc">
						可生成多样化的文本内容，可以满足不同领域、不同风格和不同主题的写作需求，提供新颖的想法和概念，为客户提供灵感，推动文本的创新和发展。
					</div>
				</div>
				<div class="item flex-column">
					<p class="name">精准性和个性化</p>
					<div class="desc">
						可对文本进行修订、调整和改进，并根据用户的写作风格提供个性化建议，帮助用户深入理解文本内容，提高写作技巧，从而改进文本的准确性和专业性。
					</div>
				</div>
				<div class="item flex-column">
					<p class="name">跨领域应用</p>
					<div class="desc">
						由于模型接触了大量的文本数据，不仅可以应用于传统的文学创作，还可用于新闻报道、专利软著、法律文件等多个方面，为各个领域提供高效准确的文本支持。
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
