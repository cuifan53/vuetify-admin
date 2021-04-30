<template>
    <v-app-bar app clipped-left dense elevation="24">
        <v-app-bar-nav-icon @click="changeShowMenu"></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <header-magnify></header-magnify>
    </v-app-bar>
</template>

<script>
import HeaderMagnify from '@/layouts/header/HeaderMagnify';

export default {
    name: 'AdminHeader',
    components: { HeaderMagnify },
    methods: {
        changeShowMenu() {
            this.$emit('changeShowMenu');
        },
    },
};
</script>

<style scoped></style>
