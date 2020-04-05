<template>
    <div class="index">
        <div class="index-list">
            <article-list></article-list>
        </div>
        <div class="index-sidebar" id="sidebar">
            <sidebar-box title="标签" icon="tags" color="red">
                <sidebar-tags slot="list"></sidebar-tags>
            </sidebar-box>
            <sidebar-box title="作者榜" icon="tags">
                <sidebar-user slot="list"></sidebar-user>
            </sidebar-box>
        </div>
    </div>
</template>

<script>
    import ArticleList from "../../components/article/article-list";
    import SidebarBox from "../../components/sidebar/sidebar-box";
    import SidebarTags from "../../components/sidebar/sidebar-tags";
    import SidebarUser from "../../components/sidebar/sidebar-user";

    export default {
        name: 'index',
        components: {SidebarUser, SidebarTags, SidebarBox, ArticleList},
        mounted() {},
        methods: {}
    }
</script>

<style scoped lang="less">
    .index {
        width: 100%;
        height: 100%;
        background: transparent;

        &-list {
            background: #ffffff;
            margin-right: 260px;
            border-radius: 2px;
            width: 700px;
        }

        &-sidebar {
            margin-left: 20px;
            width: 240px;
            position: absolute;
            top: 120px;
            right: 0;
        }
    }

    @media (max-width: 720px) {
        .index {
            &-sidebar {
                display: none;
            }
        }
    }
</style>
