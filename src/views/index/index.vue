<template>
    <div class="index">
        <div class="index-list">
            <article-list></article-list>
        </div>
        <div class="index-sidebar">
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
        display: flex;
        &-list{
            flex: 1;
            min-width: 0;
            width: 100%;
            background: #ffffff;
        }
        &-sidebar{
            margin-left: 20px;
            width: 240px;
        }
    }
    @media (max-width: 720px) {
        .index {
            &-sidebar{
                display: none;
            }
        }
    }
</style>
