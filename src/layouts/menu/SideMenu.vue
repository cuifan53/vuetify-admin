<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        expand-on-hover
        width="200"
        :mini-variant.sync="mini"
    >
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SideMenu',
    props: {
        drawer: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            mini: true,
        };
    },
};
</script>

<style scoped></style>
