<template>
    <div>
        <v-head></v-head>
        <router-view></router-view>
        <v-foot></v-foot>
    </div>
</template>
<style>

</style>
<script>
    import head from './views/head.vue'
    export default {
        components: {
            "v-head": head,
            "v-foot": require('./views/foot.vue'),
        },
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>