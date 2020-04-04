<template>
    <div class="header-index">
        <header class="header-index-header" :class="{visible: !isUpRoll}">
            <div class="header-index-header-container">
                <header-logo></header-logo>
                <header-nav></header-nav>
                <header-search></header-search>
                <header-user></header-user>
            </div>
        </header>
    </div>
</template>

<script>
    import HeaderLogo from "./header-logo";
    import HeaderNav from "./header-nav";
    import HeaderSearch from "./header-search";
    import HeaderUser from "./header-user";

    export default {
        name: "header-index",
        components: {HeaderUser, HeaderSearch, HeaderNav, HeaderLogo},
        props: {
            isUpRoll:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="less" scoped>
    .header-index {
        width: 100%;
        height: 60px;
        position: relative;

        &-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            transition: all .2s;
            transform: translate3d(0,-100%,0);
            background: #fff;
            border-bottom: 1px solid #f1f1f1;
            color: #909090;
            height: 60px;
            z-index: 200;

            &-container {
                max-width: 960px;
                height: 100%;
                margin: auto;
                display: flex;
                align-items: center;
            }
            &.visible{
                transform: translateZ(0);
            }
        }
    }
</style>