<template>
    <div class="page">
        <div class="page-list">
            <article-list></article-list>
        </div>
        <div class="page-sidebar">
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
