<template>
    <div class="page">
        <div class="page-list">
            <booklet-detail></booklet-detail>
        </div>
        <div class="page-sidebarx" id="sidebar">
            <sidebar-box title="推荐小册" icon="tags" color="red">
                <sidebar-booklet slot="list"></sidebar-booklet>
            </sidebar-box>
        </div>
    </div>
</template>

<script>
    import SidebarBox from "../../components/sidebar/sidebar-box";
    import SidebarBooklet from "../../components/sidebar/sidebar-booklet";
    import BookletDetail from "../../components/booklet/booklet-detail";

    export default {
        name: "bookDetail",
        data() {
            return {}
        },
        components: {SidebarBooklet, BookletDetail, SidebarBox},
        mounted() {
        },
        methods: {},
        watch: {}
    }
</script>

<style scoped>

</style>