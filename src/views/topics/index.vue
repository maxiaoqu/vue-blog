<template>
    <div class="page">
        <div class="page-list">
            <topics-list></topics-list>
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
    import TopicsList from "../../components/topics/topics-list";

    export default {
        name: 'index',
        components: {TopicsList, SidebarTopics, SidebarBox},
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .index {
        width: 100%;
        height: 100%;
        background: transparent;
        display: flex;
    }

    @media (max-width: 720px) {
        .index {

        }
    }
</style>
