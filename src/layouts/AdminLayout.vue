<template>
    <v-app>
        <admin-header @changeShowMenu="showMenu = !showMenu"></admin-header>

        <side-menu :show="showMenu"></side-menu>

        <v-main>
            <v-container fluid>
                <tab-menu style="margin-bottom: 10px"></tab-menu>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AdminHeader from '@/layouts/header/AdminHeader';
import SideMenu from '@/layouts/menu/SideMenu';
import TabMenu from '@/layouts/menu/TabMenu';

export default {
    name: 'AdminLayout',
    components: { TabMenu, SideMenu, AdminHeader },
    data() {
        return {
            showMenu: true,
        };
    },
    methods: {},
};
</script>

<style scoped></style>
