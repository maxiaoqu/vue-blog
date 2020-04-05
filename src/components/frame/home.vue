<template>
    <div class="home_Page">
        <header-index></header-index>
        <main class="home_Page-box">
            <router-view></router-view>
        </main>
        <header-bar></header-bar>
    </div>
</template>

<script>
    import HeaderIndex from "../header/index";
    import HeaderBar from "../header/header-bar";
    export default {
        components: {HeaderBar, HeaderIndex},
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    .home_Page{
        max-width: 960px;
        position: relative;
        margin: 0 auto;
        padding-bottom: 60px;

        &-box {
            width: 100%;
            margin-top: 20px;
        }
    }
</style>
