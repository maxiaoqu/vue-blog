<template>
    <div class="page">
        <header-editor></header-editor>
        <markdownEditor class="markdownEditor" v-model="handbook"></markdownEditor>
    </div>
</template>

<script>
    import HeaderEditor from "../../components/header/header-editor";
    import markdownEditor from '../../components/markdown/markdown-editor';

    export default {
        name: "articleEditor",
        components: {HeaderEditor, markdownEditor},
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
        z-index: 9;
    }
</style>