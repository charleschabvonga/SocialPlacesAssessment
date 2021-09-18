<template>
  <admin-layout>
    <v-app>
      <v-main>
        <v-progress-linear
          v-if="loadingStatus"
          indeterminate
          color="yellow darken-2"/>
        <v-card class="card mx-auto mt-5">
          <v-card-title>
              <h1 class="display-1">Messages</h1>
          </v-card-title>
          <v-card-text>
            <search-bar class="search" @search-messages="onSearchMessages"></search-bar>
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
                    v-for="item in filteredMessages"
                    :key="item['@id']"
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
    width: 50%;
  }
  .card {
    width: 80%;
  }
</style>

<script>
  import AdminLayout from '../components/AdminLayout.vue';
  import SearchBar from '../components/SearchBar.vue';
  import axios from 'axios';
  export default {
    name: "Messages",
    components: {
    AdminLayout,
    SearchBar,
  },
  computed: {
    filteredMessages() {
      if (!this.searchTerm) {
        return this.messages;
      }
      return this.messages.filter((message) => (
        message.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      ));
    },
    loadingStatus() {
        return this.$store.state.message.loadingStatus;
    },
  },
  async created() {
      const response = await axios.get('/api/messages');
      this.messages = response.data['hydra:member'];
  },
  data:()=> {
    return {
      searchTerm: '',
      messages: []
    }
  },
  methods: {
      onSearchMessages(event) {
          this.searchTerm = event.term;
      },
  },
}
</script>