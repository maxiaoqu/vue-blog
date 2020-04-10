<template>
    <div class="booklet-detail">
        <div class="booklet-detail-info">
            <div class="info-card">
                <div class="info-card-img">
                    <img src="../../assets/img/logo/max-logo.png">
                </div>
                <div class="info-card-content">
                    <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
                    <div class="info-description">
                        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                    </div>
                    <div class="info-btns">
                         <span>
                            <icon-fa icon="eye"></icon-fa>909
                        </span>
                        <span>
                            <icon-fa icon="comments"></icon-fa>909
                        </span>
                        <span class="action-active" @click.stop="thumbsUp">
                            <icon-fa icon="thumbs-up"></icon-fa>909
                        </span>
                        <span class="action-active" @click.stop="starArticle">
                            <icon-fa icon="star"></icon-fa>909
                        </span>
                    </div>
                </div>
            </div>
            <div class="info-star">
                <div class="star-name">666 人已关注</div>
                <div class="star-users">
                    <div class="star-users-item" v-for="ind in 15">
                        <img src="../../assets/img/logo/min-logo.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="booklet-detail-list">
            <article-list></article-list>
        </div>
    </div>
</template>

<script>
    import IconFa from "../icon/icon-fa";
    import ArticleList from "../article/article-list";

    export default {
        name: "booklet-detail",
        components: {ArticleList, IconFa}
    }
</script>

<style lang="less" scoped>
    .booklet-detail {
        width: 100%;
        background: #f4f5f5;

        &-info {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 12px;
            position: relative;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
            background-color: #fff;

            .info-card {
                padding: 20px;
                display: flex;

                &-img {
                    width: 130px;
                    height: 182px;
                    border-radius: 2px;
                    background-repeat: no-repeat;
                    float: left;
                    margin-right: 20px;
                    box-shadow: 3px 4px 12px 0 rgba(0, 0, 0, 0.2);

                    img {
                        width: 100%;
                        object-fit: cover;
                        cursor: zoom-in;
                    }
                }

                &-content {
                    flex: 1;
                    min-width: 0;
                    font-size: 14px;
                    min-height: 182px;

                    h4 {
                        font-size: 20px;
                        font-weight: 700;
                        color: #333;
                    }

                    .info-description {
                        flex-direction: column;
                        margin-top: 10px;
                        min-height: 40px;
                        line-height: 20px;
                        overflow: hidden;
                        color: #71777c;
                    }

                    .info-btns {
                        padding: 10px 0;

                        span {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            height: 24px;
                            border-radius: 1px;
                            padding: 0 10px;
                            color: #b3bac1;
                            font-size: 14px;
                            font-weight: 500;
                            white-space: nowrap;

                            &.action-active {
                                color: #e7475d;
                            }
                        }
                    }
                }
            }

            .info-star {
                display: flex;
                align-items: center;
                padding: 8px 22px 8px 15px;
                border-top: 1px solid #ecf0f3;
                cursor: pointer;

                .star-name {
                    display: inline-flex;
                    align-items: center;
                    color: #666;
                    font-size: 16px;
                    font-weight: 400;
                    flex-shrink: 0;
                }

                .star-users {
                    height: 30px;
                    flex-grow: 1;
                    margin-left: 24px;
                    display: inline-flex;
                    flex-wrap: wrap;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    &-item {
                        flex-shrink: 0;
                        width: 25px;
                        height: 25px;
                        margin: 2.5px 0 2.5px 10px;
                        border-radius: 50%;
                        background-size: cover;
                        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);

                        img {
                            width: 100%;
                        }

                        &:first-child {
                            margin: 2.5px 0 2.5px 0;
                        }
                    }
                }
            }
        }

        &-list {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
            background-color: #fff;
        }
    }
</style>