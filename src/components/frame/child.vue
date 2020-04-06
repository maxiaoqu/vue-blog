<template>
    <div class="frame-pege child">
        <header-index></header-index>
        <main class="frame-pege-box">
            <router-view></router-view>
        </main>
        <header-bar></header-bar>
    </div>
</template>

<script>
    import HeaderIndex from "../header/index";
    import HeaderBar from "../header/header-bar";
    export default {
        components: {HeaderBar, HeaderIndex}
    }
</script>
<style lang="less" scoped>

</style>
