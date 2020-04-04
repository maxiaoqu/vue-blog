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
        height: 100%;
        position: relative;
        margin: 0 auto;
        &-box{
            position: absolute;
            top: 45px;
            width: 100%;
        }
    }
</style>
