<template>
    <button
        v-if="!to"
        class="v-button">
        {{ lable }}
    </button>
    <router-link
        v-else
        :to="to"
        class="v-button">
        {{ lable }}
    </router-link>
</template>

<script setup lang="ts">
defineProps<{
    lable: string,
    to?: string,
    disabled?: boolean
}>()
</script>

<style scoped lang="scss">
.v-button {
    padding: 0 16px;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: #000000;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #000000;
    text-decoration: none;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: $gray;
    }
}
</style>
