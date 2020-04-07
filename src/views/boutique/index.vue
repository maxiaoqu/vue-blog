<template>
    <div class="page">
        <div class="page-list">
            <boutique-list :boutiqueData="boutiqueData"></boutique-list>
        </div>
        <div class="page-sidebar" id="sidebar">
            <sidebar-box title="精品标签" icon="tags" color="red">
                <sidebar-tags slot="list"></sidebar-tags>
            </sidebar-box>
        </div>
    </div>
</template>

<script>
    import SidebarBox from "../../components/sidebar/sidebar-box";
    import SidebarTags from "../../components/sidebar/sidebar-tags";
    import SidebarUserlist from "../../components/sidebar/sidebar-userlist";
    import BoutiqueList from "../../components/boutique/boutique-list";
    import {getBoutiqueList} from "../../api/boutique";

    export default {
        name: 'index',
        data() {
            return {
                boutiqueData: []
            }
        },
        components: {BoutiqueList, SidebarUserlist, SidebarTags, SidebarBox},
        mounted() {
            this.getBoutiqueData();
        },
        methods: {
            getBoutiqueData(classify) {
                classify = !classify ? this.$route.params.classify : classify;
                this.boutiqueData = getBoutiqueList(classify)
                console.log(9999, this.boutiqueData);
            }
        },
        watch: {
            $route(to, from) {
                let classify = to.params.classify;
                this.getBoutiqueData(classify);
            }
        }
    }
</script>

<style scoped lang="less">

</style>
