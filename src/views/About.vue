<template>
    <div>
        <card-container>
            <v-row>
                <v-col cols="12" sm="6" class="py-2">
                    <v-btn-toggle dense borderless>
                        <v-btn color="#FFFFFF"> <v-icon>mdi-add</v-icon> 新增 </v-btn>

                        <v-btn> <v-icon>mdi-refresh</v-icon>刷新 </v-btn>

                        <v-btn> <v-icon>mdi-download</v-icon>下载 </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            123
        </card-container>
        <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
</template>

<script>
// @ is an alias to /src

import CardContainer from '@/components/CardContainer';
export default {
    name: 'About',
    components: { CardContainer },
    data() {
        return {
            href: '',
            page: 1,
        };
    },
    created() {
        console.log('about created');
        this.href = window.location.href;
    },
};
</script>
