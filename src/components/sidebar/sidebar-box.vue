<template>
    <div class="sidebar-box">
        <header class="sidebar-box-header">
            <icon-fa class="sidebar-icon"
                     v-if="icon != ''"
                     :icon="icon"
                     :style="{color: color!='' ? color:'#2b9688'}"></icon-fa>
            <h4 class="sidebar-title">{{title}}</h4>
        </header>
        <div class="sidebar-box-list">
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script>
    import IconFa from "../icon/icon-fa";

    export default {
        name: "sidebar-box",
        components: {IconFa},
        props: {
            title: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .sidebar {
        &-box {
            width: 100%;
            height: fit-content;
            background: #ffffff;
            margin-top: 15px;

            &:first-child {
                margin-top: 0;
            }

            &-header {
                width: 210px;
                display: flex;
                padding: 12px 15px;
                border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
            }

            &-list {
                width: 210px;
                padding: 12px 15px;
            }
        }

        &-icon {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-title {
            flex: 1;
            min-width: 0;
        }
    }
</style>