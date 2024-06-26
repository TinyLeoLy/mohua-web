<template>
	<div class="about-view">
		<div class="board">
			<img src="@/assets/images/about/board.png" alt="" />
			<div class="title">关于我们</div>
		</div>
		<div class="company flex-column">
			<div class="title">企业简介</div>
			<p>
				北京模华科技有限公司是一家专业提供大模型解决方案的领先科技企业，立足于为各行各业提供高效、智能的技术支持。我们的产品涵盖了
				多个方向，包括但不限于私有知识问答平台、规范文本写作平台、业务副驾驶产品copilot、员工助手平台Agents以及业务仿真平台
				Multi-Agents等，我们注重与客户的紧密合作，倾听客户需求，深入了解行业特点，为客户量身定制符合实际需求的解决方案。
			</p>
			<p>
				作为人工智能领域的领先者，模华科技拥有一支技术实力雄厚、经验丰富的团队，擅长利用最新的深度学习技术，开发高性能的大规模预训练模型。无论
				是在企业的业务智能化、政府的决策支持，还是军队的信息化建设，我们都能够提供定制化、高效率的大模型解决方案，帮助客户实现数据驱动、
				智能化的发展目标。
			</p>
			<img src="@/assets/images/about/company.png" alt="" />
		</div>
		<div class="center">
			<div class="left flex-column">
				<div class="key-point flex-column">
					<span class="name">企业愿景</span>
					<span class="des">做全球信赖的中国AI供应商</span>
					<div class="img"></div>
				</div>
				<div class="key-point flex-column">
					<span class="name">企业使命</span>
					<span class="des">让大模型走进每一家企业</span>
					<div class="img"></div>
				</div>
				<div class="key-point flex-column">
					<span class="name">核心价值观</span>
					<span class="des">先进、真诚、团结，奋斗</span>
				</div>
			</div>
			<img class="bg" src="@/assets/images/about/bg.png" alt="" />
		</div>
		<MhFooter />
	</div>
</template>
<script setup>
import MhFooter from '@/components/footer.vue';
</script>
<style lang="scss" scoped>
.about-view {
	.board {
		position: relative;
		width: 100%;
		height: 690px;
		img {
			width: 100%;
			height: 690px;
		}
		.title {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 67px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 48px;
			color: #ffffff;
			line-height: 67px;
		}
	}
	.company {
		align-items: center;
		width: 100%;
		height: 973px;
		.title {
			margin-top: 52px;
			margin-bottom: 53px;
			height: 50px;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 36px;
			color: #333333;
			line-height: 50px;
		}
		p {
			margin-bottom: 32px;
			width: 976px;
			height: 74px;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 16px;
			color: #555555;
			line-height: 1.5em;
			text-align: center;
			white-space: pre-wrap;
			&:last-of-type {
				width: 1072px;
				margin-bottom: unset;
			}
		}
		img {
			margin-top: 52px;
			width: 1380px;
			height: 513px;
		}
	}
	.center {
		position: relative;
		width: 100%;
		height: 756px;
		.bg {
			width: 100%;
			height: 756px;
		}
		.left {
			position: absolute;
			left: 270px;
      justify-content: center;
      height: 100%;
			.key-point {
				.name {
					height: 39px;
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 28px;
					color: #177cbe;
					line-height: 39px;
				}
				.des {
					margin-top: 21px;
					height: 22px;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 16px;
					color: #555555;
					line-height: 22px;
				}
				.img {
          margin-top: 77px;
          margin-bottom: 79px;
					width: 466px;
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
			}
		}
	}
}
</style>
