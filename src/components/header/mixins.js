import {mapGetters} from "vuex";

export const headerNav = {
    data() {
        return {
            navData: [],
            activeNav: 'index'
        }
    },
    mounted() {
        this.getNavDataArr();
        this.getActiveNav();
    },
    methods: {
        ...mapGetters([
            'getNavData'
        ]),
        // 获取当前路由
        getActiveNav(){
            let fullPath = this.$route.fullPath;
            this.activeNav = fullPath.split('/')[1];
        },
        // 点击跳转
        gotoLink(name) {
            this.activeNav = name;
            this.$router.push({
                name: name
            })
        }
    }
}