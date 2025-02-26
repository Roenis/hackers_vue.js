<template>
   <div>
    <span>부모 컴포넌트 입니다.</span>
    <ChildComponent :sendProps="data"/>
   </div>
</template>

<script setup lang="ts">
import ChildComponent from "./ChildComponent.vue";

const data = {
    title: "부모 컴포넌트 - title",
    type: "부모 컴포넌트 - type",
};
</script>

<style lang="scss" scoped>

</style>