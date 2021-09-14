<template>
    <user-layout>
        <v-app>
            <v-main>
                <v-progress-linear
                    v-if="loadingStatus"
                    indeterminate
                    color="yellow darken-2"/>
                <v-alert v-if="messageSuccess" @click="clear" dense text dismissible type="success">
                    Your message has been successfully sent.
                </v-alert>
                <v-card class="mx-auto mt-5" width="400px">
                <v-card-title>
                    <h1 class="display-1">Contact Us</h1>
                </v-card-title>
                <v-card-text>
                    <v-form v-model="formValidity">
                        <v-text-field
                            label="Name"
                            prepend-icon="mdi-account-circle"
                            v-model="message.name"
                            :rules="nameRules"
                            required>
                        </v-text-field>
                        <v-text-field
                            type="email"
                            label="Email"
                            prepend-icon="mdi-email"
                            v-model="message.email"
                            :rules="emailRules"
                            required>
                        </v-text-field>
                        <v-autocomplete
                            label="Gender"
                            prepend-icon="mdi-gender-male-female"
                            v-model="message.gender"
                            :items="genders"
                            :rules="genderRules"
                            required>
                        </v-autocomplete>
                        <v-textarea
                            label="Message"
                            prepend-icon="mdi-message-text"
                            v-model="message.content"
                            :rules="contentRules"
                            required>
                        </v-textarea>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn
                        type="submit"
                        color="success"
                        :disabled="!formValidity"
                        @click="createMessage">
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
    name: "ContactUs",
    components: {
        UserLayout
    },
    computed: {
        loadingStatus() {
            return this.$store.state.message.loadingStatus;
        },
        messageSuccess() {
            return this.$store.state.message.messageSuccess;
        }
    },
    data:()=>({
        formValidity: false,
        genders: ['Male', 'Female'],
        message:{
            name:'',
            email:'',
            gender:'',
            content: '',
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
        genderRules: [
            value => !!value || 'Selection of at least one gender option is required.',
        ],
        contentRules: [
            value => !!value || 'Message is required.',
        ],
    }),
    methods:
    {
      createMessage() {
        this.$store.dispatch('message/create', this.message);
      },
      clear() {
        this.$router.go(0);
      },
      async deleteAnswer() {
      const params = {
        clientId: this.$route.params.clientId,
        moduleId: this.$route.params.moduleId,
        questionId: this.$route.params.questionId,
        answerId: this.answerId,
      };
      await this.$store.dispatch('answer/destroy', params);
      this.answerModalOpen = false;
      await this.$store.dispatch('answer/findAll', this.$route.params);
    },
    },
};
</script>