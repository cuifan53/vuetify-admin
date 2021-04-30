<template>
    <v-card elevation="0">
        <div v-show="false">{{ sideMenuPath }}</div>
        <v-tabs v-model="activeTab" icons-and-text center-active show-arrows>
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="(menu, i) in tabMenus" :key="i" @click="tapMenu(menu.path)">
                {{ menu.name }}
                <v-icon>{{ menu.icon }}</v-icon>
            </v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
import router from '@/router';

export default {
    name: 'TabMenu',
    data() {
        return {
            tabMenus: [],
            activeTab: 0,
        };
    },
    computed: {
        sideMenuPath() {
            const sideMenuPath = this.$store.state.menu.sideMenuPath;
            this.getTabMenus(sideMenuPath);
            return sideMenuPath;
        },
    },
    created() {},
    methods: {
        getTabMenus(sideMenuPath) {
            const routes = router.options.routes;
            const tabRoutes =
                routes
                    .filter(r => r.path === '/')[0]
                    .children.filter(r => r.path === sideMenuPath)[0].children || [];
            this.tabMenus = tabRoutes.map(tr => ({
                path: tr.path,
                name: tr.name,
                icon: tr.meta.icon,
            }));

            this.activeTab = this.tabMenus
                .map(m => m.path)
                .indexOf(this.$store.state.menu.tabMenuPath);
        },
        tapMenu(path) {
            if (path === this.$store.state.menu.tabMenuPath) {
                return;
            }
            this.$store.commit('menu/setTabMenuPath', path);
            this.$router.push({ path: this.sideMenuPath + '/' + path });
        },
    },
};
</script>

<style scoped></style>
