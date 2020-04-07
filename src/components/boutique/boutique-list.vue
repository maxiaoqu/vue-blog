<template>
    <ul class="boutique-list">
        <li class="boutique-list-item"
            v-for="item in boutiqueData"
            @click="gotoBoutiqueHome(item.href)"
            :key="item.name">
            <div class="item-logo">
                <img :src="item.logo"/>
            </div>
            <div class="item-info">
                <h4 class="boutique-title">{{item.name}}</h4>
                <div class="boutique-tags">
                    <span v-for="tag in item.technology" :key="tag">{{tag}}</span>
                </div>
                <div class="boutique-describe">{{item.describe}}</div>
                <div class="boutique-github"
                     v-if="item.gitHub != ''"
                     @click.stop="gotoGitHub(item.gitHub)">
                    <img src="../../assets/img/logo/github.png">
                </div>
                <span class="boutique-messages">更新时间：{{item.time}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "boutique-list",
        props: {
            boutiqueData: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        methods:{
            gotoBoutiqueHome(href){
                window.open(href);
            },
            gotoGitHub(gitHub){
                window.open(gitHub);
            }
        }
    }
</script>

<style lang="less" scoped>
    .boutique {
        &-list {
            width: 100%;

            &-item {
                display: flex;
                padding: 25px;
                box-sizing: border-box;
                background-color: #fff;
                position: relative;
                border-bottom: 1px solid #e6e8e8;

                &:hover {
                    background-color: #f7f9f9;
                }

                .item {
                    &-logo {
                        width: 100px;
                        height: 140px;
                        flex-shrink: 0;
                        box-shadow: 3px 4px 12px 0 rgba(0, 0, 0, .2);
                        overflow: hidden;
                        background-color: #ffffff;
                        line-height: 140px;

                        img {
                            width: 100%;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }

                    &-info {
                        position: relative;
                        flex-grow: 1;
                        overflow: hidden;
                        box-sizing: border-box;
                        font-size: 14px;
                        color: #2e3135;
                        padding-left: 22px;
                    }
                }
            }
        }

        &-title {
            font-size: 18px;
            font-weight: 500;
        }

        &-tags {
            padding: 5px 0;

            span {
                color: #eb2f96;
                line-height: 20px;
                background: #fff0f6;
                display: inline-block;
                height: 22px;
                margin: 2px 4px 2px 0;
                padding: 0 8px;
                border: 1px solid #e8eaec;
                border-radius: 3px;
                font-size: 12px;
                vertical-align: middle;
                opacity: 1;
                overflow: hidden;
            }
        }

        &-describe {
            max-height: 35px;
            padding: 5px 0;
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: normal;
            font-size: 14px;
            color: #808695;
        }

        &-github {
            float: left;
            padding: 5px 15px 0 0;
            display: inline-block;

            img {
                width: 40px;
                height: 40px;
            }
        }

        &-messages {
            opacity: 0.6;
            display: inline-block;
            font-size: 14px;
            color: #71777c;
            height: 40px;
            line-height: 40px;
            padding-top: 5px;
        }
    }

    @media (max-width: 960px) {
        .boutique {
            &-list {
                &-item {
                    padding: 15px;
                }
            }

            &-title {
                padding-bottom: 5px;
            }

            &-describe, &-tags {
                padding: 0 0 5px 0;
            }

            &-github {
                padding: 0 10px 0;
            }
        }
    }
</style>