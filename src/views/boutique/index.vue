<template>
    <div class="page">
        <div class="page-list">
            <booklet-list></booklet-list>
        </div>
        <div class="page-sidebar" id="sidebar">
            <sidebar-box title="精品标签" icon="tags" color="red">
                <sidebar-tags slot="list"></sidebar-tags>
            </sidebar-box>
        </div>
    </div>
</template>

<script>
    import BookletList from "../../components/booklet/booklet-list";
    import SidebarBox from "../../components/sidebar/sidebar-box";
    import SidebarTags from "../../components/sidebar/sidebar-tags";
    import {getBoutiqueList} from "../../api/boutique";

    export default {
        name: 'index',
        data() {
            return {}
        },
        components: {BookletList, SidebarTags, SidebarBox},
        mounted() {},
        methods: {},
        watch: {}
    }
</script>

<style scoped lang="less">

</style>
