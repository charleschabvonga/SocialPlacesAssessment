<template>
    <user-layout>
        <v-app>
            <v-main>
                <v-progress-linear
                    v-if="loadingStatus"
                    indeterminate
                    color="yellow darken-2"/>
                <v-alert v-if="loginError" border="top" color="red lighten-2" dark>{{ loginError }}</v-alert>
                <v-card class="mx-auto mt-5" width="400px">
                    <v-card-title>
                        <h1 class="display-1">Login</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form v-model="formValidity">
                            <v-text-field
                                type="email"
                                label="Username"
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
                        <v-btn color="success" to="/register">Register</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            type="submit"
                            color="info"
                            :disabled="!formValidity"
                            @click="login"
                            >Login
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
import UserLayout from "../components/UserLayout";

export default {
    name: "Login",
    components: {
        UserLayout,
    },
    computed: {
        loadingStatus() {
            return this.$store.state.user.loadingStatus;
        },
        loginError() {
            return this.$store.state.user.loginError;
        },
    },
    data:()=>({
        showPassword: false,
        formValidity: false,
        form: {
            email: '',
            password: '',
        },
        emailRules: [
            value => !!value || 'Username/email is required.',
            value => value.indexOf('@') !== 0 || 'Username/email should have a usename.',
            value => value.includes('@') || 'Username/email should include an @ symbol.',
            value => value.indexOf('.') - value.indexOf('@') > 1 || 'Username/email should contain a valid domain.',
            value => value.indexOf('.') <= value.length - 3 || 'Username/email should contain a valid domain extension.'
        ],
        passwordRules: [
            value => !!value || 'Password is required.',
        ]
    }),
    methods:
    {
      login() {
        this.$store.dispatch('user/login', this.form);
      },
    },
};
</script>