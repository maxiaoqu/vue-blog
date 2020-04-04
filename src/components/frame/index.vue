<template>
    <div class="index_Page">
        <header-index :isUpRoll="isUpRoll"></header-index>
        <nav-child :isUpRoll="isUpRoll"></nav-child>
        <main class="index_Page-box">
            <router-view></router-view>
        </main>
        <header-bar></header-bar>
    </div>
</template>

<script>
    import HeaderIndex from "../header/index";
    import HeaderBar from "../header/header-bar";
    import NavChild from "../navbar/nav-child";
    import {frameMixins} from "./mixins";

    export default {
        mixins: [frameMixins],
        components: {NavChild, HeaderBar, HeaderIndex}
    }
</script>


<style lang="less" scoped>
    .index_Page {
        max-width: 960px;
        height: 100%;
        position: relative;
        margin: 0 auto;

        &-box {
            width: 100%;
            height: 100%;
            margin-top: 60px;
        }
    }
</style>