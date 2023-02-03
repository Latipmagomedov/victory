<template>
    <div class="create-user">
        <div class="create-user__wrapper container">
            <h1 class="create-user__title">Create User</h1>

            <CreateUserForm @submit="submit" class="create-user__form"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
import users from "@/api/users";
import IFrom from "@/types/form";
import CreateUserForm from '@/components/CreateUserForm.vue'

const router = useRouter()

const submit = async (form: IFrom) => {
    try {
        await users.postUser(form)
        await router.push('/')
    } catch (error) {
        console.log(error)
    }
}
</script>

<style scoped lang="scss">
.create-user {
    padding-bottom: 32px;

    &__title {
        margin-top: 56px;

        @media (max-width: $mobile) {
            margin-top: 32px;
        }
    }

    &__form {
        margin-top: 48px;

        @media (max-width: $mobile) {
            margin-top: 32px;
        }
    }
}
</style>
