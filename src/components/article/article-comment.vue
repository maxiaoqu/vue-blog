<template>
    <div class="article-comment comment">
        <div class="comment-title">文章点评</div>
        <ul class="comment-list">
            <li class="comment-list-item"
                v-for="item in 5"
                :key="item">
                <img class="user-img" src="../../assets/img/logo/min-logo.png"/>
                <div class="user-comment">
                    <div class="user-comment-meg">
                        <h4 class="user-name">用户名称{{item}}<b>Lv3</b></h4>
                        <div class="user-work">用户职位职位职位</div>
                    </div>
                    <div class="user-comment-conntent">
                        这里是评论的内容呀，这里是评论的内容呀，这里是评论的内容呀，
                        <a v-if="item%2 != 0" href="javascript:void(0)">
                            <icon-fa class="icon-link" icon="link"></icon-fa>
                            sadfsd/asdf/asdf/asd
                        </a>
                    </div>
                    <div class="user-comment-reply">
                        <time>2020-02-02</time>
                        <div class="action-box">
                            <span>
                                <icon-fa icon="trash"></icon-fa>删除
                            </span>
                            <span>
                                <icon-fa icon="thumbs-up"></icon-fa>点赞
                            </span>
                            <span>
                                <icon-fa icon="comments"></icon-fa>评论
                            </span>
                        </div>
                    </div>
                    <ul class="user-comment-sub" v-if="item%2 ==0">
                        <li class="user-comment-sub-item" v-for="child in 2" :key="child">
                            <img class="user-img" src="../../assets/img/logo/min-logo.png"/>
                            <div class="user-comment">
                                <div class="user-comment-meg">
                                    <h4 class="user-name user-nameov">用户名称{{item}}{{child}}<b>Lv3</b></h4>
                                    <div class="user-work">用户职位职位职位</div>
                                </div>
                                <div class="user-comment-conntent">
                                    <span class="reply">回复</span>
                                    <h4 class="user-name reply-user">用户名称{{item}}{{child}}<b>Lv3</b></h4>：
                                    这里是评论的内容呀，这里是评论的内容呀，这里是评论的内容呀，
                                </div>
                                <div class="user-comment-reply">
                                    <time>2020-02-02</time>
                                    <div class="action-box">
                                        <span>
                                            <icon-fa icon="trash"></icon-fa>删除
                                        </span>
                                        <span>
                                            <icon-fa icon="thumbs-up"></icon-fa>点赞
                                        </span>
                                        <span>
                                            <icon-fa icon="comments"></icon-fa>评论
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import IconFa from "../icon/icon-fa";

    export default {
        name: "c",
        components: {IconFa}
    }
</script>

<style lang="less" scoped>
    .comment {
        padding: 24px 0 0;
        margin: 0 24px 36px;
        position: relative;
        border-top: 2px dashed #eee;

        &-title {
            color: #8a9aa9;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            padding: 15px 0 25px;
        }

        &-list {
            margin: 0 20px 0 20px;

            .user-name {
                font-size: 15px;
                font-weight: 700;
                color: #333;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 3px;

                &.user-nameov {
                    overflow: inherit;
                }

                b {
                    color: #ffffff;
                    font-size: 12px;
                    background: #e7475d;
                    padding: 1px 5px;
                    margin-left: 10px;
                    vertical-align: middle;
                    border-radius: 2px
                }

                &.reply-user {
                    color: #406599;
                    display: initial;
                    padding: 0 10px;
                    font-size: 13px;

                    b {
                        padding: 0px 5px;
                    }
                }
            }

            &-item {
                margin-bottom: 15px;
                display: flex;

                .user-img {
                    width: 33px;
                    height: 33px;
                    display: inline;
                }

                .user-comment {
                    margin-left: 10px;
                    flex: 1;
                    min-width: 0;
                    border-bottom: 1px solid #f1f1f1;

                    .reply {
                        font-size: 14px;
                        color: #17181a;
                    }

                    &-meg {
                        display: flex;
                        align-items: center;
                        font-size: 13px;
                        line-height: 1.2;
                        white-space: nowrap;

                        .user-work {
                            color: #8a9aa9;
                            font-size: 14px;
                            margin-left: 15px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 16rem;
                        }
                    }

                    &-conntent {
                        margin-top: 10px;
                        font-size: 14px;
                        line-height: 20px;
                        word-wrap: break-word;
                        white-space: pre-wrap;
                        word-break: break-all;
                        color: #505050;

                        a {
                            color: #027fff;
                            cursor: pointer;

                            &:active, &:hover {
                                outline-width: 0;
                                text-decoration: none;
                            }

                            .icon-link {
                                color: #027fff;
                                font-size: 12px;
                                padding: 0 0 0 5px;
                            }
                        }
                    }

                    &-reply {
                        display: flex;
                        margin: 12px 0;
                        font-weight: 400;

                        time {
                            font-size: 13px;
                            color: #8a9aa9;
                            cursor: default;
                        }

                        .action-box {
                            flex: 0 0 auto;
                            display: flex;
                            justify-content: space-between;
                            margin-left: auto;
                            min-width: 110px;
                            color: #8a93a0;
                            user-select: none;

                            span {
                                padding: 0 5px;
                            }
                        }
                    }

                    &-sub {
                        margin: 12px 0;
                        padding: 0 0 0 12px;
                        background-color: #fafbfc;
                        border-radius: 3px;

                        &-item {
                            position: relative;
                            padding: 12px 0 0;
                            display: flex;
                            align-items: start;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 720px) {
        .comment {
            margin: 0 15px 30px;

            &-title {
                padding: 15px 0 20px;
            }

            &-list {
                margin: 0;

                .user-name {
                    &.reply-user {
                        padding: 0 5px;
                    }
                }

                &-item {
                    .user-comment {
                        &-sub {
                            padding: 0 7px
                        }
                    }
                }
            }
        }
    }
</style>