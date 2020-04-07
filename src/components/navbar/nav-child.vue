<template>
    <nav class="nav-child" :class="{totop: isUpRoll}">
        <ul class="nav-child-list">
            <li class="nav-child-list-item"
                v-for="item in classifyData"
                :class="{ 'active': item.classify == activeClassify}"
                :key="item.classify"
                @click="gotoArticle(item)">
                {{item.name}}
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "nav-child",
        data() {
            return {
                classifyData: [],
                activeClassify: ''
            }
        },
        props: {
            isUpRoll: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            navClassify() {
                return this.$store.state.Nav.navClassify;
            }
        },
        mounted() {
            this.getActiveClassify();
        },
        methods: {
            gotoArticle(route) {
                let path = '/nettext/' + route.path + '/' + route.classify;
                this.$router.push({
                    path: path
                })
            },
            // 获取当前路由
            getActiveClassify() {
                let classify = this.$route.name == 'index' ? 'recommend' : this.$route.params.classify;
                this.classifyData = this.navClassify;
                this.activeClassify = classify;
            },
        },
        watch: {
            navClassify(newVal) {
                this.classifyData = newVal;
            },
            $route() {
                this.getActiveClassify();
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-child {
        width: 100%;
        height: 44px;
        position: fixed;
        top: 60px;
        left: 0;
        z-index: 100;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
        transition: all .2s;
        transform: translateZ(0);
        background: #ffffff;

        &-list {
            max-width: 960px;
            height: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            line-height: 1;
            overflow: hidden;
            overflow-x: auto;

            &-item {
                height: 100%;
                align-items: center;
                display: flex;
                flex-shrink: 0;
                font-size: 15px;
                padding: 0 15px 0 15px;

                &.active {
                    color: #e7475d;
                }
            }
        }

        &.totop {
            transform: translate3d(0, -60px, 0);
        }
    }
</style>