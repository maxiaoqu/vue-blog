<template>
    <ul class="sidebar-user">
        <li class="user-item"
            v-for="item in 5"
            :key="item">
            <img src="../../assets/img/logo/min-logo.png">
            <div class="user-item-info">
                <h4 class="user-name">用户名称{{item}}<b>Lv3</b></h4>
                <p class="user-work">用户职位职位职位职位职位职位{{item}}</p>
                <p class="user-description">用户描述、描述、描述、描述、描述{{item}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "sidebar-user"
    }
</script>

<style lang="less" scoped>
    .sidebar-user {
        width: 100%;

        .user-item {
            padding: 12px 0;
            display: flex;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px dashed #eeeeee;

            &:last-child {
                border-bottom: 1px dashed transparent;
            }

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
                    h4{
                        font-size: 15px;
                        font-weight: 400;
                        color: #333;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: 3px;
                        b{
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
                        color: #909090;
                        font-size: 12px;
                        margin-bottom: 3px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

            }
        }
    }
</style>