<template>
    <div class="child_Page">
        <header-index></header-index>
        <main class="child_Page-box">
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
    .child_Page{
        max-width: 960px;
        position: relative;
        margin: 0 auto;
        padding-bottom: 60px;

        &-box {
            width: 100%;
            margin-top: 60px;
        }
    }
</style>
