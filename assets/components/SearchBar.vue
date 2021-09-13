<template>
    <div class="input-group">
        <v-text-field
            type="search"
            class="search"
            placeholder="Search here ..."
            prepend-icon="mdi-magnify"
            v-model="searchTerm"
            @input="onInput">
        </v-text-field>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: '',
        };
    },
    methods: {
        onInput() {
            this.$emit('search-messages', { term: this.searchTerm });
        },
    },
};
</script>
