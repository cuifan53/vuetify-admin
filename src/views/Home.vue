<template>
    <div class="home">
        {{ href }}
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    data() {
        return {
            href: '',
        };
    },
    created() {
        console.log('home created');
        this.href = window.location.href;
    },
};
</script>
