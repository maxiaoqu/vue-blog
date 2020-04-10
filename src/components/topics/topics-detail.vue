<template>
    <div class="topics-detail">
        <div class="topics-detail-editor">
            <div class="editor-body">
                <div class="body-content">
                    <div class="editor-content">
                        <div class="auth-card">
                            <div class="rich-editor"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="editor-buttom">
                <div class="editor-toolbar">
                    <div class="tool">
                        <span>表情</span>
                        <span>表情</span>
                        <span>表情</span>
                    </div>
                    <div class="submit">
                        <button class="submit-button">发布话题</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="topics-detail-comment">
            <div class="comment">
                <div class="comment-box">
                    <div class="comment-header">
                        <div class="comment-user">
                            <img class="user-img" src="../../assets/img/logo/min-logo.png">
                            <div class="user-info">
                                <h4>人员名称</h4>
                                <div class="info">
                                    前端工程师·8小时前
                                </div>
                            </div>
                        </div>
                        <div class="comment-action">
                            <button class="action-button">关注</button>
                        </div>
                    </div>
                    <div class=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topics-detail"
    }
</script>

<style lang="less" scoped>
    .topics-detail {
        &-editor {
            border-radius: 2px;
            width: 100%;
            background-color: #fff;
            position: relative;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

            .editor-body {
                padding: 15px 20px 0;
                background: #fff;
                position: relative;
                border-radius: 2px;

                .body-content {
                    position: relative;
                    border-radius: 2px;
                    border: 1px solid hsla(0, 0%, 59.2%, .2);
                    background-color: rgba(226, 230, 235, .2);
                }

                .editor-content {
                    position: relative;
                    font-size: 16px;
                    word-wrap: break-word;

                    .auth-card {
                        position: relative;

                        .rich-editor {
                            min-height: 77px;
                            position: relative;
                            height: 100%;
                            outline: none;
                            border-radius: 2px;
                            color: #17181a;
                            font-size: 14px;
                            padding: 8px 10px;
                        }
                    }
                }
            }

            .editor-buttom {
                padding: 10px 20px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: -2px;

                .editor-toolbar {
                    display: flex;
                    color: #007fff;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;

                    .tool {
                        display: flex;
                        align-items: center;

                        span {
                            z-index: 3;
                            margin-right: 18px;
                            user-select: none;
                        }
                    }

                    .submit {
                        &-button {
                            height: 32px;
                            width: 100px;
                            font-size: 15px;
                            cursor: pointer;
                            opacity: 1;
                            padding: 0;
                            background-color: #027fff;
                            color: #fff;
                            border-radius: 2px;
                            border: none;
                            outline: none;
                            transition: background-color .3s, color .3s;
                        }
                    }
                }
            }
        }

        &-comment {
            width: 100%;

            .comment-box {
                border-radius: 2px;
                background: #fff;
                margin-bottom: 12px;
            }

            .comment-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px 24px 0 20px;
                .comment-user{
                    align-items: center;
                    display: flex;
                    .user-img{
                        display: inline;
                        width: 45px;
                        height: 45px;
                        border-radius: 50%;
                    }
                    .user-info{
                        margin-left:12px;
                        h4{
                            font-size: 14px;
                            font-weight: 600;
                            color: #2e3135;
                        }
                        .info{
                            display: flex;
                            align-items: center;
                            margin: 3px 0 0;
                            font-size: 13px;
                            color: #8a9aa9;
                            cursor: default;
                        }
                    }
                }
                .comment-action{
                    display: flex;
                    .action-button{
                        margin: 0 0 0 auto;
                        padding: 0;
                        width: 55px;
                        height: 26px;
                        font-size: 13px;
                        border-color: #6cbd45;
                        color: #6cbd45;
                        border: 1px solid #37c700;
                        background-color: #fff;
                        outline: none;
                        transition: background-color .3s,color .3s;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>