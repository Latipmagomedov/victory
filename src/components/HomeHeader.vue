<template>
    <header class="header">
        <div class="header__wrapper container">
            <h1>Users</h1>
            <VButton lable="Create user" to="/create-user"/>
        </div>
    </header>
</template>

<script setup lang="ts">
import VButton from '@/components/ui/VButton.vue'
</script>

<style scoped lang="scss">
.header {
    width: 100%;

    &__wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
