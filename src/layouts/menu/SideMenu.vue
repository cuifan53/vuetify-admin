<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        expand-on-hover
        width="200"
        :mini-variant.sync="mini"
    >
        <v-list dense style="padding: 0">
            <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
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
            items: [
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
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
            .children.filter(r => !r.meta || !r.meta.invisible);
        this.items = menuRoutes.map(mr => ({ text: mr.name, icon: mr.meta.icon || '' }));
    },
};
</script>

<style scoped></style>
