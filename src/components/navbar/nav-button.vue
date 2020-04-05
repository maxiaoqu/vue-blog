<template>
    <div class="nav-button">
        <button class="nav-button-top" @click.stop="scrollTop">
            <icon-fa icon="angle-double-up"></icon-fa>
        </button>
        <button class="nav-button-feedback">
            <icon-fa icon="window-restore"></icon-fa>
        </button>
    </div>
</template>

<script>
    import IconFa from "../icon/icon-fa";
    import {scrollToTop} from "../../libs/viewScroll";
    export default {
        name: "nav-button",
        components: {IconFa},
        methods:{
            scrollTop(){
                scrollToTop();
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: fixed;
        right: 24px;
        bottom: 120px;
        z-index: 1000;

        button {
            margin: 12px 0 0;
            padding: 0;
            width: 38px;
            height: 38px;
            line-height: 1;
            color: #909090;
            background-color: #fff;
            border: 1px solid #f1f1f1;
            border-radius: 50%;
            box-shadow: 0 0 5px rgba(0, 0, 0, .05);
            cursor: pointer;
            outline: none;

            &:hover {
                box-shadow: 0 0 5px #ddd;
            }
        }
    }


    @media (max-width: 720px) {
        .nav-button {
            right: 10px;
        }
    }
</style>