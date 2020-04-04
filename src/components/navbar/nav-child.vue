<template>
    <nav class="nav-child" :class="{totop: isUpRoll}">
        <ul class="nav-child-list">
            <li class="nav-child-list-item">123123231</li>
            <li class="nav-child-list-item">123123231</li>
            <li class="nav-child-list-item">123123231</li>
            <li class="nav-child-list-item">123123231</li>
            <li class="nav-child-list-item">123123231</li>
            <li class="nav-child-list-item">123123231</li>
            <li class="nav-child-list-item">123123231</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "nav-child",
        props: {
            isUpRoll:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-child {
        width: 100%;
        height: 44px;
        position: fixed;
        top: 60px;
        left: 0;
        z-index: 100;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
        transition: all .2s;
        transform: translateZ(0);
        background: #ffffff;

        &-list {
            max-width: 960px;
            height: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            line-height: 1;
            overflow: hidden;
            overflow-x: auto;

            &-item {
                height: 100%;
                align-items: center;
                display: flex;
                flex-shrink: 0;
                font-size: 15px;
                padding: 0 15px 0 0;
            }
        }

        &.totop {
            transform: translate3d(0, -60px, 0);
        }
    }
</style>