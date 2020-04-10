<template>
    <ul class="header-nav">
        <li class="header-nav-item"
            v-for="(item,index) in navData"
            :class="{ 'active': checkIsActive(item.path)}"
            :key="index"
            @click="gotoLink(item)">
            {{item.name}}
        </li>
    </ul>
</template>

<script>
    import {headerNav} from "./mixins";

    export default {
        name: "header-nav",
        mixins: [headerNav],
        mounted() {
            this.getNavDataArr();
        },
        methods: {
            // 获取菜单数据
            getNavDataArr() {
                let navData = this.getNavData().concat();
                navData.pop();
                this.navData = navData;
            },
            checkIsActive(path){
                if(this.activeNav.includes(path)){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .header-nav {
        height: 100%;
        width: 340px;
        margin: 0;
        padding: 0;

        &-item {
            height: 100%;
            padding: 0 15px;
            line-height: 60px;
            display: inline-block;
            cursor: pointer;
            color: #71777c;
            font-size: 16px;
            font-weight: 500;

            &:hover {
                color: #e7475d;
            }

            &.active{
                color: #e7475d;
            }
        }
    }

    @media (max-width: 720px) {
        .header-nav {
            display: none;
        }
    }
</style>