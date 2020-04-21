<template>
    <div class="page">
        <markdownEditor class="markdownEditor" v-model="handbook"></markdownEditor>
    </div>
</template>

<script>
    import markdownEditor from '../../components/markdown/markdown-editor';

    export default {
        name: "articleEditor",
        components: {markdownEditor},
        data() {
            return {
                handbook: "## 欢迎使用码小趣MarkDown编辑器"
            };
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    .markdownEditor {
        width: 100%;
        height: 100%;
    }
</style>