<template>
    <v-card elevation="24" style="margin: 10px 0" :height="containerHeight">
        <slot></slot>
    </v-card>
</template>

<script>
export default {
    name: 'CardContainer',
    data() {
        return {
            containerHeight: 0,
        };
    },
    created() {
        this.getContainerHeight();
    },
    methods: {
        getContainerHeight() {
            const clientHeight = document.documentElement.clientHeight;
            this.containerHeight = clientHeight - 196;
        },
    },
};
</script>

<style scoped></style>
