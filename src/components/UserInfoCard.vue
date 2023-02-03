<template>
    <div class="user-card">
        <h4 class="user-card__title">{{ title }}</h4>
        <p class="user-card__subtitle">{{ subtitle }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    subtitle: string
}>();
</script>

<style scoped lang="scss">
.user-card {
    &__title {
        font-size: 16px;
        font-weight: 700;
    }

    &__subtitle {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 400;
    }
}
</style>
