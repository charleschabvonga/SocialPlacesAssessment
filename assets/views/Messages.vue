<template>
  <admin-layout>
    <v-app>
      <v-main>
        <v-card class="card mx-auto mt-5">
          <v-card-title>
              <h1 class="display-1">Messages</h1>
          </v-card-title>
          <v-card-text>
            <v-text-field
              class="search"
              placeholder="Search here ..."
              prepend-icon="mdi-magnify"
              v-model="search">
            </v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <template v-if="messages">
            <v-simple-table
              fixed-header
              height="300px"
            >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Gender</th>
                    <th class="text-left">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in messages"
                    :key="item.name"
                  >
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.content }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
          <h3 v-else>There is no information to display</h3>
        </v-card>
        </v-main>
    </v-app>
  </admin-layout>
</template>

<style scoped>
  .search {
    width: 30%;
  }
  .card {
    width: 80%;
  }
</style>

<script>
  import AdminLayout from '../components/AdminLayout.vue';
  export default {
    name: "Messages",
    components: {
    AdminLayout,
  },
    computed: {
      messages() {
        return this.$store.state.message.messages;
        // return this.$store.state.message.messages.filter(
        //   (message) => message.name.toLowerCase().includes(this.search.toLowerCase()),
        // );
      },
    },
    mounted() {
      this.fetchMessages();
    },
    data:()=> {
      return {
        search: '',
      }
    },
    methods: {
      fetchMessages() {
        this.$store.dispatch('message/findAll');
      },
    },
  }
</script>