<template>
    <div class="markdown-preview v-note-read-content" v-html="markdownData"></div>
</template>

<script>
    import markdown from "./lib/mixins/markdown";
    import mdMixins from './lib/mixins/mdMixins';

    export default {
        name: "markdownPreview",
        mixins: [markdown, mdMixins],
        data() {
            return {
                markdownData: null
            }
        },
        props: {
            mdData: {
                type: String,
                default: ''
            }
        },
        mounted() {
            this.getMarkdownData();
        },
        methods: {
            getMarkdownData(mdDataStr) {
                let _this = this;
                let mdData = mdDataStr ? mdDataStr : this.mdData;
                _this.$render(mdData, function (res) {
                    _this.markdownData = res;
                })
            }
        },
        watch: {
            mdData(val) {
                if (val) {
                    this.getMarkdownData(val);
                }
            }
        }
    }
</script>

<style scoped>

</style>