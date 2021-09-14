<template>
    <v-container>
      <v-app-bar app color="primary" dark>
            <v-toolbar-title>Social Places Assessment</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                v-for="link in links"
                :key="`${link.label}-header-link`"
                text
                rounded
                :to="link.url">
                {{ link.label }}
            </v-btn>        
        </v-app-bar>
      <slot></slot>
    </v-container>
</template>

<style scoped>
</style>

<script>
export default {
    name: "UserLayout",
    data:()=>({
    links: [
        {
            label: 'Contact Us',
            url: '/'
        },
        {
            label: 'Login',
            url: '/login'
        },
        {
            label: 'Register',
            url: '/register'
        },
    ]
})
}
</script>