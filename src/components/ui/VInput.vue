<template>
    <div class="v-input">
        <p class="v-input__label">{{ label }}</p>
        <input
            v-model="inputVal"
            type="text"
            :class="['v-input__inp', {'v-input__inp_error': error}]">
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue"

const props = defineProps<{
    modelValue?: string,
    label: string,
    error?: boolean
}>()

const emit = defineEmits(["update:modelValue"])

const inputVal = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value)
});
</script>

<style scoped lang="scss">
.v-input {

    &__label {
        font-size: 14px;
        font-weight: 400;
    }

    &__inp {
        width: 100%;
        height: 40px;
        padding-left: 16px;
        margin-top: 8px;
        background-color: #fff;
        font-size: 16px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

        &_error {
            border: 1px solid $red;
        }
    }
}
</style>
