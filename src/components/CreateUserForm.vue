<template>
    <form @submit.prevent="submit" class="create-user">
        <div class="create-user__inputs">
            <VInput
                v-model="form.name"
                label="Name"
                :error="v$.name.$error"/>

            <VInput
                v-model="form.username"
                label="Username"
                :error="v$.username.$error"/>

            <VInput
                v-model="form.email"
                label="Email"
                :error="v$.email.$error"/>

            <VInput
                v-model="form.phone"
                label="Phone"
                :error="v$.phone.$error"/>

            <VInput
                v-model="form.website"
                label="Website"
                :error="v$.website.$error"/>

            <VInput
                v-model="form.company"
                label="Company"
                :error="v$.company.$error"/>

            <VInput
                v-model="form.city"
                label="City"
                :error="v$.city.$error"/>

            <VInput
                v-model="form.street"
                label="Street"
                :error="v$.street.$error"/>

            <div class="create-user__inputs-group">
                <VInput
                    v-model="form.suite"
                    label="Suite"
                    :error="v$.suite.$error"/>

                <VInput
                    v-model="form.zipcode"
                    label="Zipcode"
                    :error="v$.zipcode.$error"/>
            </div>
        </div>
        <VButton lable="Create user" class="create-user__btn"/>
    </form>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useVuelidate} from '@vuelidate/core'
import {required} from '@vuelidate/validators'
import IFrom from "@/types/form";
import VInput from '@/components/ui/VInput.vue'
import VButton from '@/components/ui/VButton.vue'

const emit = defineEmits(['submit'])

const form = reactive<IFrom>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    city: '',
    street: '',
    suite: '',
    zipcode: '',
})
const rules = {
    name: {required},
    username: {required},
    email: {required},
    phone: {required},
    website: {required},
    company: {required},
    city: {required},
    street: {required},
    suite: {required},
    zipcode: {required},
}
const v$ = useVuelidate(rules, form)

const submit = async () => {
    const validate = await v$.value.$validate()
    if (!validate) return

    emit('submit', form)
}
</script>

<style scoped lang="scss">
.create-user {
    &__inputs {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 32px;

        @media (max-width: $tablet) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: $mobile) {
            grid-template-columns: 1fr;
        }
    }

    &__inputs-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;

        @media (max-width: $mobile) {
            grid-template-columns: 1fr;
            grid-row-gap: 32px;
        }
    }

    &__btn {
        margin-top: 48px;
    }
}
</style>
