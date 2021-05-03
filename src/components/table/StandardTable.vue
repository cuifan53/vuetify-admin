<template>
    <div>
        <v-btn-toggle class="btn-toggle" dense borderless>
            <v-menu v-if="btnFilter">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" text>
                        <v-icon left>mdi-layers-search-outline</v-icon> 筛选
                    </v-btn>
                </template>
                <slot name="tableFilter"></slot>
            </v-menu>
            <v-btn v-if="btnAdd" text @click="tapAdd"> <v-icon left>mdi-plus</v-icon> 新增 </v-btn>
            <v-btn v-if="btnRefresh" text @click="tapRefresh">
                <v-icon left>mdi-refresh</v-icon>刷新
            </v-btn>
            <v-btn v-if="btnDownload" text @click="tapDownload">
                <v-icon left>mdi-download</v-icon>下载
            </v-btn>
        </v-btn-toggle>
        <v-divider></v-divider>
        <v-data-table
            disable-pagination
            hide-default-footer
            fixed-header
            :height="tableHeight"
            :headers="headers"
            :items="items"
            :dense="dense"
        ></v-data-table>
    </div>
</template>

<script>
export default {
    name: 'StandardTable',
    props: {
        btnFilter: { type: Boolean, default: false },
        btnAdd: { type: Boolean, default: false },
        btnRefresh: { type: Boolean, default: false },
        btnDownload: { type: Boolean, default: false },
        dense: { type: Boolean, default: false },
        headers: { type: Array, default: () => [] },
        items: { type: Array, default: () => [] },
    },
    data() {
        return {
            tableHeight: 0,
        };
    },
    created() {
        this.getTableHeight();
    },
    methods: {
        getTableHeight() {
            this.tableHeight = document.documentElement.clientHeight - 198 - 56;
        },
        tapAdd() {
            this.$emit('btnAdd');
        },
        tapRefresh() {
            this.$emit('btnRefresh');
        },
        tapDownload() {
            this.$emit('btnDownload');
        },
    },
};
</script>

<style scoped>
.btn-toggle {
    margin: 10px;
    box-shadow: 5px 5px 5px #bdbdbd;
}
</style>
