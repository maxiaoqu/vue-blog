<template>
    <div class="topics-list">
        <div class="topics-list-item" v-for="item in 21" :key="item" @click="gotoTopicsDetails(item)">
            <div class="item-box">
                <img src="../../assets/img/logo/max-logo.png">
                <div class="topics-info">
                    <h4 class="topics-info-title">标题标题标题标题标题</h4>
                    <p>创建时间：2020-02-02</p>
                    <div class="topics-info-btn">
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
            </div>
        </div>
    </div>
</template>

<script>
    import IconFa from "../icon/icon-fa";

    export default {
        name: "topics-list",
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
    .topics-list {
        width: 100%;
        background: #f4f5f5;

        &-item {
            display: inline-block;
            width: 33.33333%;
            cursor: pointer;
            padding-left: 7px;
            padding-right: 7px;
            box-sizing: border-box;
            transition: all .2s linear;
            position: relative;
            margin-bottom: 30px;

            &:hover, &:before {
                transform: translateY(-3px);
                box-shadow: 0 7px 15px rgba(0, 0, 0, .1);
            }

            &:before {
                content: "";
                position: absolute;
                left: 7px;
                right: 7px;
                top: 0;
                bottom: 0;
                z-index: -1;
                border-radius: 2px;
                overflow: hidden;
                background-color: #fff;
                transition: all .2s linear;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, .15);
            }

            .item-box {
                color: #333;
                border-radius: 2px;
                overflow: hidden;
                background: #ffffff;

                img {
                    width: 100%;
                    height: 85px;
                    max-height: 85px;
                }

                .topics-info {
                    padding: 20px 12px 15px;

                    h4 {
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        height: 40px;
                        font-size: 14px;
                        font-weight: 700;
                        text-align: center;
                    }

                    p {
                        margin-top: 6px;
                        color: #333;
                    }

                    &-btn {
                        margin-top: 6px;
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
        }
    }

    @media (max-width: 720px) {
        .topics-list {
            &-item {
                width: 50%;
            }
        }
    }
</style>