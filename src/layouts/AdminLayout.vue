<template>
    <v-app>
        <admin-header @changeShowMenu="showMenu = !showMenu"></admin-header>

        <side-menu :show="showMenu"></side-menu>

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
            showMenu: true,
        };
    },
    methods: {},
};
</script>

<style scoped></style>
