<template>
    <router-link :to="`/user/${user.id}`" class="user-card">
        <h3 class="user-card__title">{{ user.name }}</h3>
        <p class="user-card__nickname">@{{ user.username }}</p>

        <div class="user-card__footer">
            <p class="user-card__text">{{ user.email }}</p>
            <p class="user-card__text">{{ user.phone }}</p>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import IUser from "@/types/user";

defineProps<{
    user: IUser
}>()
</script>

<style scoped lang="scss">
.user-card {
    height: 160px;
    padding: 24px;
    background-color: #fff;
    color: #000000;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: .3s;

    &:hover {
        background-color: $gray;
    }

    &__title {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }

    &__nickname {
        margin-top: 4px;
    }

    &__nickname {
        margin-top: 4px;
        color: $dark-gray;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }

    &__footer {
        margin-top: 16px;
    }

    &__text {
        color: $dark-gray;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;

        &:not(:first-child) {
            margin-top: 4px;
        }
    }
}
</style>
