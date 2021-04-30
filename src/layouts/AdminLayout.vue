<template>
    <v-app>
        <admin-header @changeShowMenu="drawer = !drawer"></admin-header>

        <side-menu :drawer="drawer"></side-menu>

        <v-main>
            <v-container fluid> <router-view /> </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AdminHeader from '@/layouts/header/AdminHeader';
import SideMenu from '@/layouts/menu/SideMenu';

export default {
    name: 'AdminLayout',
    components: { SideMenu, AdminHeader },
    data() {
        return {
            drawer: true,
        };
    },
    methods: {},
};
</script>

<style scoped></style>
