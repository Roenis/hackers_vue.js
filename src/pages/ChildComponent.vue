<template>
    <div> {{ sendProps }}
    </div>
</template>

<script setup lang="ts">
import {toRefs, ref} from "vue";
import {Data} from "C:/Users/User/Desktop/vue-weather/src/types/about/childComponent.ts";


interface Props {
    sendProps:Data; 
}
const props = defineProps<Props>()
const {sendProps} = toRefs(props);

const number = ref<number>(0);
const string = ref<string>("");
const test = ref<string | number>();


</script>

<style lang="scss" scoped>

</style>