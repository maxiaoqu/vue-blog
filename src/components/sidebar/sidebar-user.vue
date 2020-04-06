<template>
    <div class="sidebar-user">
        <div class="user-item">
            <img src="../../assets/img/logo/min-logo.png">
            <div class="user-item-info">
                <h4 class="user-name">用户名称<b>Lv3</b></h4>
                <p class="user-work">用户职位职位职位职位职位职位</p>
            </div>
        </div>
        <div class="info-item">
            <icon-fa class="itemIcon" icon="file-text"></icon-fa>
            <span class="itemContent">文章总数<b>1234</b></span>
        </div>
        <div class="info-item">
            <icon-fa class="itemIcon" icon="file-text"></icon-fa>
            <span class="itemContent">文章被阅读<b>1234</b></span>
        </div>
        <div class="info-item">
            <icon-fa class="itemIcon" icon="file-text"></icon-fa>
            <span class="itemContent">文章获点赞<b>1234</b></span>
        </div>
    </div>
</template>

<script>
    import IconFa from "../icon/icon-fa";

    export default {
        name: "sidebar-user",
        components: {IconFa}
    }
</script>

<style lang="less" scoped>
    .sidebar-user {
        width: 100%;

        .user-item {
            padding: 12px 0 15px;
            display: flex;
            align-items: center;
            cursor: pointer;

            img {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                margin-right: .8rem;
            }

            .user {
                &-item-info {
                    flex: 1;
                    min-width: 0;

                    h4 {
                        font-size: 15px;
                        font-weight: 700;
                        color: #333;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: 3px;

                        b {
                            color: #ffffff;
                            font-size: 12px;
                            background: #e7475d;
                            padding: 1px 5px;
                            margin-left: 10px;
                            vertical-align: middle;
                            border-radius: 2px
                        }
                    }

                    p {
                        margin-top: 10px;
                        font-size: 14px;
                        font-weight: 500;
                        color: #72777b;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

            }
        }

        .info-item {
            margin-bottom: 10px;

            .itemIcon {
                height: 30px;
                width: 30px;
                color: aliceblue;
                line-height: 30px;
                text-align: center;
                padding: 0;
                background: #e7485e;
                margin-right: 12px;
                border-radius: 50%;
            }

            .itemContent {
                font-size: 15px;
                color: #000;

                b {
                    margin-left: 10px;
                }
            }
        }
    }
</style>