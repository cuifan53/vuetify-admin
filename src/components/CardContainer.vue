<template>
    <div>
        <v-card elevation="24" :height="containerHeight" style="margin-bottom: 12px">
            <slot></slot>
        </v-card>
        <slot name="footer"></slot>
    </div>
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
            this.containerHeight = clientHeight - 198;
        },
    },
};
</script>

<style scoped></style>
