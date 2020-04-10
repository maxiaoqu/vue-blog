<template>
    <div class="page">
        <div class="page-list">
            <booklet-list></booklet-list>
        </div>
        <div class="page-sidebarx" id="sidebar">
            <sidebar-box title="小册标签" icon="tags" color="red">
                <sidebar-tags slot="list"></sidebar-tags>
            </sidebar-box>
        </div>
    </div>
</template>

<script>
    import SidebarBox from "../../components/sidebar/sidebar-box";
    import SidebarTags from "../../components/sidebar/sidebar-tags";
    import BookletList from "../../components/booklet/booklet-list";

    export default {
        name: 'index',
        data() {
            return {}
        },
        components: {BookletList, SidebarTags, SidebarBox},
        mounted() {
        },
        methods: {},
        watch: {}
    }
</script>

<style scoped lang="less">

</style>
