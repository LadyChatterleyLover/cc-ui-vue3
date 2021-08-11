<template>
	<span
		:style="{ color: color, fontSize: size + 'px' }"
		class="uni-icons"
		:class="[customIcons, customIcons ? type : '']"
		@click="onClick"
	>{{ icon }}</span>
</template>

<script lang='ts' setup>
import { defineProps, defineEmits, computed } from 'vue'
import icons from './icons'

let emit = defineEmits(['click'])
let props = defineProps({
	type: {
		type: String,
		default: ''
	},
	color: {
		type: String,
		default: '#333333'
	},
	size: {
		type: [Number, String],
		default: 16
	},
	customIcons: {
		type: String,
		default: ''
	}
})
let onClick = (e: MouseEvent) => {
	emit('click', e)
}
let icon = computed(() => (icons as any)[props.type])
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: uniicons;
		src: url('./uni.ttf') format('truetype');
	}
.uni-icons {
	font-family: uniicons;
	text-decoration: none;
	text-align: center;
	position: relative;
}
</style>
