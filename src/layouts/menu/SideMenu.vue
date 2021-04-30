<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        expand-on-hover
        width="200"
        :mini-variant.sync="mini"
    >
        <v-list style="padding: 0">
            <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item
                    style="height: 48px"
                    v-for="(item, i) in items"
                    :key="i"
                    @click="tapMenu(item.path)"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import router from '@/router';
import { getFirstTabMenuPath } from '@/router/util';

export default {
    name: 'SideMenu',
    props: {
        show: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            mini: true,

            selectedItem: 0,
            items: [],
        };
    },
    computed: {
        drawer: {
            get() {
                return this.show;
            },
            set() {},
        },
    },
    created() {
        const routes = router.options.routes;
        const menuRoutes = routes
            .filter(r => r.path === '/')[0]
            .children.filter(r => !r.meta.invisible);

        this.items = menuRoutes.map(mr => ({
            path: mr.path,
            text: mr.name,
            icon: mr.meta.icon || '',
        }));

        const hrefSideMenuPath = window.location.pathname.split('/')[1];
        const hrefTabMenuPath = window.location.pathname.split('/')[2].split('?')[0];
        this.selectedItem = this.items.map(item => item.path).indexOf('/' + hrefSideMenuPath);
        this.$store.commit('menu/setSideMenuPath', '/' + hrefSideMenuPath);
        this.$store.commit('menu/setTabMenuPath', hrefTabMenuPath);
    },
    methods: {
        tapMenu(path) {
            const firstTabMenuPath = getFirstTabMenuPath(path);
            if (
                path === this.$store.state.menu.sideMenuPath &&
                firstTabMenuPath === this.$store.state.menu.tabMenuPath
            ) {
                return;
            }
            this.$store.commit('menu/setSideMenuPath', path);
            this.$store.commit('menu/setTabMenuPath', firstTabMenuPath);
            this.$router.push({ path: path + '/' + firstTabMenuPath });
        },
    },
};
</script>

<style scoped></style>
