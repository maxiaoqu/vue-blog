<template>
    <div class="index_Page">
        <header-index :isUpRoll="isUpRoll"></header-index>
        <nav-child :isUpRoll="isUpRoll"></nav-child>
        <main class="index_Page-box">
            <router-view></router-view>
        </main>
        <header-bar></header-bar>
        <nav-button></nav-button>
    </div>
</template>

<script>
    import HeaderIndex from "../header/index";
    import HeaderBar from "../header/header-bar";
    import NavChild from "../navbar/nav-child";
    import {frameMixins} from "./mixins";
    import navButton from "../navbar/nav-button";

    export default {
        mixins: [frameMixins],
        components: {navButton, NavChild, HeaderBar, HeaderIndex}
    }
</script>


<style lang="less" scoped>
    .index_Page {
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