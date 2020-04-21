<template>
    <div class="frame-pege child">
        <main class="frame-pege-box">
            <router-view></router-view>
        </main>
        <header-bar></header-bar>
    </div>
</template>

<script>
    import HeaderBar from "../header/header-bar";

    export default {
        components: {HeaderBar}
    }
</script>
<style lang="less" scoped>
    .child {
        width: 100%;
        height: 100%;
        max-width: none;
        padding: 0;
        margin: 0;
        overflow: hidden;

        .frame-pege-box {
            margin-top: 0;
            height: calc(100% - 60px);
        }
    }
</style>
