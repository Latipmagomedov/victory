<template>
    <div class="user">
        <div class="user__wrapper container" v-if="user">
            <header class="user__header">
                <h1>{{ user?.name }}</h1>
                <span class="user__header-nickname">@{{ user?.username }}</span>
            </header>

            <div class="user__cards">
                <UserInfoCard
                    title="email"
                    :subtitle="user?.email"/>

                <UserInfoCard
                    title="Phone"
                    :subtitle="user?.phone"/>

                <UserInfoCard
                    title="Website"
                    :subtitle="user?.website"/>

                <UserInfoCard
                    title="Company"
                    :subtitle="user?.company.name"/>

                <UserInfoCard
                    title="Address"
                    :subtitle="address"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue"
import {useRoute} from "vue-router"
import IUser from "@/types/user"
import users from '@/api/users'
import UserInfoCard from '@/components/UserInfoCard.vue'

const route = useRoute()

const address = computed(() => {
    return `${user.value?.address.suite}
            ${user.value?.address.street}
            ${user.value?.address.city}
            ${user.value?.address.zipcode}`
})

const user = ref<IUser>()
const getUsers = async () => {
    user.value = await users.getUser(route.params.id)
}

onMounted(() => getUsers())
</script>

<style scoped lang="scss">
.user {
    &__header {
        margin-top: 56px;
        display: flex;

        @media (max-width: $mobile) {
            margin-top: 32px;
            flex-direction: column;
        }
    }

    &__header-title {
        font-size: 40px;
        font-weight: 800;
    }

    &__header-nickname {
        margin-left: 16px;
        font-size: 14px;
        font-weight: 400;

        @media (max-width: $mobile) {
            margin-left: 0;
            margin-top: 8px;
        }
    }

    &__cards {
        margin-top: 48px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 32px;
        grid-row-gap: 32px;

        @media (max-width: $tablet) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 670px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: $mobile) {
            margin-top: 32px;
            grid-template-columns: 1fr;
        }
    }
}
</style>
