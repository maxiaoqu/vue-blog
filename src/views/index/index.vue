<template>
    <div class="index">
        <div class="index-list">
            <article-list></article-list>
        </div>
        <div class="index-sidebar">asfsaf</div>
    </div>
</template>

<script>
    import ArticleList from "../../components/article/article-list";
    export default {
        name: 'index',
        components: {ArticleList},
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
            width: 100%;
            background: #ffffff;
        }
        &-sidebar{
            display: flex;
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
