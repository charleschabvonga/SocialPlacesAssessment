<template>
    <v-app>
        <v-main>
            <v-card class="mx-auto mt-5" width="400px">
                <v-card-title>
                    <h1 class="display-1">See You Soon</h1>
                </v-card-title>
                <v-card-text>
                    <p>Thank you so much for reviewing my assessment.
                        <br>I hope you enjoyed demoing it has much as I enjoyed developing it.
                        I must say there was a bit of hair loss in process.
                        <br><br>I look forward to hearing from you soon.
                        <br><br>Best Regards,<br><br>Charlie the dev</p>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="info" @click="logout">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-main>
        </v-app>
</template>

<style scoped>
</style>

<script>
export default {
    name: "SeeYouSoon",
    methods: {
        async logout() {
            await this.$router.push({ name: 'logout' });
            await this.$router.go(0);
        },
    }
}
</script>