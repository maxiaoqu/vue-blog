<template>
    <ul class="article-list">
        <li class="article-list-item"
            v-for="item in 100"
            :key="item"
            @click="articleDetails(item)">
            <div class="article-list-item-content">
                <ul class="article-info">
                    <li class="article-info-row info-meta">
                        <ul class="info-meta-list">
                            <li class="item item-type">类别</li>
                            <li class="item item-user">发布人名称</li>
                            <li class="item item-date">发布时间</li>
                            <li class="item item-tag">标签1/标签2/标签3</li>
                        </ul>
                    </li>
                    <li class="article-info-row info-title">
                        <h4>文章标题啊啊啊文章标题啊啊啊文章标</h4>
                    </li>
                    <li class="article-info-row info-action">
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
                    </li>
                </ul>
                <div class="article-img">
                    <img src="../../assets/img/logo/max-logo.png">
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import IconFa from "../icon/icon-fa";

    export default {
        name: "article-list",
        components: {IconFa},
        methods:{
            // 文章详情
            articleDetails(id){
                this.$router.push({
                    path: '/server/details/'+id
                })
            },
            // 点赞
            thumbsUp(){
                console.log('点赞')
            },
            // 收藏
            starArticle(){
                console.log('收藏')
            }
        }
    }
</script>

<style lang="less" scoped>
    .article-list {
        &-item {
            border-bottom: 1px solid rgba(178, 186, 194, .15);

            &-content {
                display: flex;
                align-items: center;
                padding: 15px 20px;

                .article-info {
                    flex: 1 1 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-width: 0;

                    .info-meta {
                        height: 20px;
                        font-size: 13px;
                        color: #b2bac2;

                        &-list {
                            display: flex;
                            align-items: baseline;
                            white-space: nowrap;

                            .item {
                                &:after {
                                    content: "·";
                                    margin: 0 5px;
                                    color: #b2bac2;
                                    font-weight: 900;
                                }

                                &:last-child:after {
                                    content: "";
                                }

                                &-type {
                                    color: #e7475d;
                                    font-weight: 500;
                                }

                                &-user {
                                    text-decoration: none;
                                    cursor: pointer;
                                    color: #909090;

                                    &:hover {
                                        color: #e7475d;
                                    }
                                }

                                &-date {
                                    color: #909090;
                                }

                                &-tag {
                                    text-decoration: none;
                                    cursor: pointer;
                                    color: #909090;

                                    &:hover {
                                        color: #e7475d;
                                    }
                                }
                            }
                        }
                    }

                    .info-title {
                        padding: 10px 0;
                        cursor: pointer;

                        h4 {
                            font-size: 18px;
                            font-weight: 600;
                            line-height: 1.2;
                            color: #2e3135;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                        }
                    }

                    .info-action {
                        display: flex;
                        align-items: center;

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

                .article-img {
                    flex: 0 0 auto;
                    width: 100px;
                    height: 60px;
                    margin-left: 50px;
                    background-color: #fff;
                    border-radius: 2px;
                    background-size: cover;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    @media (max-width: 720px) {
        .article-list {
            padding-bottom: 100px;
            &-item {
                &-content {
                    .article-img {
                        display: none;
                    }
                }
            }
        }
    }
</style>