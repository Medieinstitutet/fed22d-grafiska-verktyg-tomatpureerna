<script setup>
const props = defineProps(['btnMsg']);

const emit = defineEmits(['btnClick']);

function handleClick() {
  emit('btnClick', props.btnMsg);
}
</script>

<template>
    <button tabindex="1" @click="handleClick">{{ btnMsg }}</button>
</template>

<style scoped lang="scss">
@import '_button.scss'
</style>
