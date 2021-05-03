<template>
    <v-app>
        <admin-header @changeShowMenu="showMenu = !showMenu"></admin-header>

        <side-menu :show="showMenu"></side-menu>

        <v-main>
            <v-card flat class="container" :height="containerHeight">
                <tab-menu></tab-menu>
                <router-view />
            </v-card>
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
            containerHeight: 0,
        };
    },
    created() {
        this.getContainerHeight();
    },
    methods: {
        getContainerHeight() {
            const clientHeight = document.documentElement.clientHeight;
            this.containerHeight = clientHeight - 48;
        },
    },
};
</script>

<style scoped>
.container {
    padding: 0 8px;
    background: #eeeeee;
}
</style>
