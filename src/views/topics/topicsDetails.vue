<template>
    <div class="page">
        <div class="page-list">
            <topics-detail></topics-detail>
        </div>
        <div class="page-sidebarx" id="sidebar">
            <sidebar-box title="推荐话题" icon="tags" color="red">
                <sidebar-topics slot="list"></sidebar-topics>
            </sidebar-box>
        </div>
    </div>
</template>

<script>
    import SidebarBox from "../../components/sidebar/sidebar-box";
    import SidebarTopics from "../../components/sidebar/sidebar-topics";
    import TopicsDetail from "../../components/topics/topics-detail";
    export default {
        name: "topicsDetails",
        components: {TopicsDetail, SidebarTopics, SidebarBox},
    }
</script>

<style scoped>

</style>