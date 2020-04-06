<template>
    <div class="page">
        <div class="page-list">
            <article-detail></article-detail>
            <article-comment></article-comment>
        </div>
        <div class="page-sidebarx" id="sidebar">
            <sidebar-box title="关于作者" icon="tags" color="red">
                <sidebar-user slot="list"></sidebar-user>
            </sidebar-box>
            <sidebar-box title="作者文章推荐" icon="tags" color="red">
                <sidebar-article slot="list"></sidebar-article>
            </sidebar-box>
        </div>
        <div class="page-recommend">
            <sidebar-box title="相关文章推荐" icon="tags" color="red">
                <article-list slot="list"></article-list>
            </sidebar-box>
        </div>
        <nav-article></nav-article>
    </div>
</template>

<script>
    import ArticleDetail from "../../components/article/article-detail";
    import SidebarBox from "../../components/sidebar/sidebar-box";
    import SidebarTags from "../../components/sidebar/sidebar-tags";
    import ArticleComment from "../../components/article/article-comment";
    import SidebarUser from "../../components/sidebar/sidebar-user";
    import SidebarArticle from "../../components/sidebar/sidebar-article";
    import ArticleList from "../../components/article/article-list";
    import NavArticle from "../../components/navbar/nav-article";

    export default {
        name: 'articleDetails',
        components: {
            NavArticle,
            ArticleList, SidebarArticle, SidebarUser, ArticleComment, ArticleDetail, SidebarTags, SidebarBox},
        mounted() {},
        methods: {}
    }
</script>

<style scoped lang="less">

</style>
