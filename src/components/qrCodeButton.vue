<template>
	<div class="button mh-btn" @click="contactService">
		<slot>沟通咨询</slot>
	</div>
	<div :class="['qr-code', 'animated', animateName]">
		<img src="../assets/images/qr-code.png" alt="" />
	</div>
</template>
<script setup>
import { ref } from 'vue';
let toggle = false;
const animateName = ref('');
window.addEventListener('click', () => {
	animateName.value = toggle
		? 'animate__slideInRight'
		: 'animate__slideOutRight';
	toggle = false;
});

const contactService = () => {
	animateName.value = toggle
		? 'animate__slideInRight'
		: 'animate__slideOutRight';
	toggle = !toggle;
};
</script>
<style lang="scss" scoped>
.button {
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

.animated {
	animation-duration: 1s;
	animation-fill-mode: both;
}

.qr-code {
	position: fixed;
	right: 0;
	top: 40%;
	z-index: 100;
	border-radius: 20px 0 0 20px;
	padding: 10px 6px 6px 6px;
	overflow: hidden;
	background-color: #fff;
	transform: translate3d(100%, 0, 0);
	img {
		width: 150px;
	}
}

.animate__slideInRight {
	-webkit-animation-name: slideInRight;
	animation-name: slideInRight;
}

.animate__slideOutRight {
	-webkit-animation-name: slideOutRight;
	animation-name: slideOutRight;
}

@keyframes slideInRight {
	from {
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
		visibility: visible;
	}

	to {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
}

@keyframes slideOutRight {
	from {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}

	to {
		visibility: hidden;
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
	}
}
</style>
