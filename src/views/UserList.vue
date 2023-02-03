<template>
    <div class="users">
        <HomeHeader/>
        <div class="users__wrapper container">
            <div class="users__cards">
                <UserCard
                    v-for="user in userList"
                    :key="user.id"
                    :user="user"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import IUser from "@/types/user"
import users from '@/api/users'
import HomeHeader from "@/components/HomeHeader.vue"
import UserCard from "@/components/UserCard.vue"

const userList = ref<IUser[]>()
const getUsers = async () => {
    userList.value = await users.getUsers()
}

onMounted(() => getUsers())
</script>

<style scoped lang="scss">
.users {
    padding-top: 56px;
    padding-bottom: 32px;

    @media (max-width: $mobile) {
        padding-top: 32px;
    }

    &__wrapper {
        margin-top: 48px;
    }

    &__cards {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 20px;

        @media (max-width: $tablet) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: $mobile) {
            grid-template-columns: 1fr;
            grid-column-gap: 0;
        }
    }
}
</style>
