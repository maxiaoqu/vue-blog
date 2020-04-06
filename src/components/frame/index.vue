<template>
    <div class="frame-pege index">
        <header-index :isUpRoll="isUpRoll"></header-index>
        <nav-child :isUpRoll="isUpRoll"></nav-child>
        <main class="frame-pege-boxi">
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