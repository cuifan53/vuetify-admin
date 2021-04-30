<template>
    <div class="home">
        {{ href }}
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'About',
    data() {
        return {
            href: '',
        };
    },
    created() {
        console.log('about created');
        this.href = window.location.href;
    },
};
</script>
