<template>
    <ul class="sidebar-booklet">
        <li class="booklet-item"
            v-for="item in 5"
            @click="gotobookletHome(item)"
            :key="item">
            <div class="booklet-item-img">
                <img src="../../assets/img/logo/max-logo.png">
            </div>
            <div class="booklet-item-info">
                <h4 class="booklet-name">标题标题标题标题标题标题标题</h4>
                <p class="booklet-tags">
                    <span class="booklet-tags-item" v-for="tag in 5" :key="tag">描述{{tag}}</span>
                </p>
                <p class="booklet-description">描述、描述、描述、描述、描述{{item}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "sidebar-booklet",
        methods: {
            gotobookletHome(bookid) {
                this.$router.push({
                    path: '/booklet/bookDetail/id' + bookid
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .sidebar-booklet {
        width: 100%;

        .booklet-item {
            padding: 12px 0;
            display: flex;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px dashed #eeeeee;

            &:last-child {
                border-bottom: 1px dashed transparent;
            }

            .booklet {
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
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: 3px;
                    }

                    p {
                        color: #909090;
                        font-size: 12px;
                        margin-bottom: 3px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        span {
                            margin: 0 1px;
                            display: inline-block;
                            border: 1px dashed #17b5c5;
                            color: #17b5c5;
                            padding: 0px 5px;
                        }
                    }
                }

            }
        }
    }
</style>