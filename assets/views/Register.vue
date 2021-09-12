<template>
    <user-layout>
        <v-app>
        <v-main>
            <v-card class="mx-auto mt-5" width="400px">
            <v-card-title>
                <h1 class="display-1">Register</h1>
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submit" v-model="formValidity">
                    <v-text-field
                        label="Name"
                        prepend-icon="mdi-account-circle"
                        v-model="form.name"
                        :rules="nameRules"
                        required>
                    </v-text-field>
                    <v-text-field
                        type="email"
                        label="Email"
                        prepend-icon="mdi-email"
                        v-model="form.email"
                        :rules="emailRules"
                        required>
                    </v-text-field> 
                    <v-text-field
                        label="Password"
                        prepend-icon="mdi-lock"
                        v-model="form.password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        :rules="passwordRules"
                        @click:append="showPassword = !showPassword"
                        required>
                    </v-text-field>                      
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn
                    type="submit"
                    color="primary"
                    :disabled="!formValidity"
                    @click="register">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-main>
    </v-app>
    </user-layout>
</template>

<style scoped>
</style>

<script>
import UserLayout from '../components/UserLayout.vue';
export default {
    name: "Register",
    components: {
        UserLayout
    },
    data:()=>({
        showPassword: false,
        formValidity: false,
        form:{
            email:'',
            roles: [],
            password:'',
            username:'',
        },
        emailRules: [
            value => !!value || 'Email is required.',
            value => value.indexOf('@') !== 0 || 'Email should have a usename.',
            value => value.includes('@') || 'Email should include an @ symbol.',
            value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain a valid domain.',
            value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain extension.'
        ],
        nameRules: [
            value => !!value || 'Name is required.',
        ],
        passwordRules: [
            value => !!value || 'Password is required.',
            value => (value && value.length > 7) || 'Password length must be 8 or more characters long.',
        ]
    }),
    methods:
    {
      register() {
        this.$store.dispatch('user/create', this.form);
      },
    },
};
</script>