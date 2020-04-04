<template>
    <ul class="header-bar">
        <li class="header-bar-item"
            v-for="(item,index) in navData"
            :class="{ 'active': item.router == activeNav}"
            :key="index"
            @click="gotoLink(item.router)">
            <icon-fa class="barIcon" :icon="item.icon"></icon-fa>
            {{item.name}}
        </li>
    </ul>
</template>

<script>
    import {headerNav} from "./mixins";
    import IconFa from "../icon/icon-fa";

    export default {
        name: "header-bar",
        components: {IconFa},
        mixins: [headerNav],
        methods: {
            // 获取菜单数据
            getNavDataArr() {
                this.navData = this.getNavData();
            }
        }
    }
</script>

<style lang="less" scoped>
    .header-bar {
        width: 100%;
        height: 50px;
        line-height: 22px;
        position: fixed;
        bottom: 0;
        background: #ffffff;
        border-top: 1px solid #f1f1f1;
        display: none;

        &-item {
            flex: 1;
            text-align: center;
            .barIcon{
                display: block;
                font-size: 18px;
                padding-top: 8px;
            }
            &.active{
                color: #e7475d;
            }
        }
    }

    @media (max-width: 720px) {
        .header-bar {
            display: flex;
        }
    }
</style>