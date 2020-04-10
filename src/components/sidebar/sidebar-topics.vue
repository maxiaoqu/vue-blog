<template>
    <ul class="sidebar-topics">
        <li class="topics-item"
            v-for="item in 5"
            @click="gotoTopicsDetails(item)"
            :key="item">
            <div class="topics-item-img">
                <img src="../../assets/img/logo/max-logo.png">
            </div>
            <div class="topics-item-info">
                <h4 class="topics-name">标题标题标题标题标题标题标题</h4>
                <div class="topics-content">
                    <span>
                        <icon-fa icon="eye"></icon-fa>909
                    </span>
                    <span class="action-active">
                        <icon-fa icon="thumbs-up"></icon-fa>909
                    </span>
                    <span class="action-active">
                        <icon-fa icon="star"></icon-fa>909
                    </span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import IconFa from "../icon/icon-fa";

    export default {
        name: "sidebar-topics",
        components: {IconFa},
        methods: {
            gotoTopicsDetails(topicid) {
                this.$router.push({
                    path: '/topics/topicsDetail/topicid' + topicid
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .sidebar-topics {
        width: 100%;

        .topics-item {
            padding: 12px 0;
            display: flex;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px dashed #eeeeee;

            &:last-child {
                border-bottom: 1px dashed transparent;
            }

            .topics {
                &-item-img {
                    width: 45px;
                    height: 65px;
                    box-shadow: 3px 4px 12px 0 rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                    background-color: #ffffff;
                    line-height: 140px;
                    margin-right: 10px;

                    img {
                        width: 45px;
                        height: 100%;
                    }
                }

                &-item-info {
                    flex: 1;
                    min-width: 0;

                    h4 {
                        font-size: 15px;
                        font-weight: 400;
                        color: #333;
                        margin-bottom: 3px;
                    }
                }

            }
        }
    }
</style>