<template>
    <div class="header-editor">
        <header class="header-editor-header">
            <img class="header-editor-header-logo" src="../../assets/img/logo/min-logo.png"/>
            <div class="header-editor-header-input">
                <input placeholder="请输入文章标题..." maxlength="80"></input>
            </div>
            <div class="header-editor-header-tools">
                <div class="todoSave">文章每20秒会自动保存<span>草稿箱</span></div>
                <icon-fa class="articleImg" icon="photo"></icon-fa>
                <button class="addActicle">发布</button>
            </div>
        </header>
    </div>
</template>

<script>
    import IconFa from "../icon/icon-fa";

    export default {
        name: "header-editor",
        components: {IconFa}
    }
</script>

<style lang="less" scoped>
    .header-editor {
        width: 100%;
        height: 60px;
        position: relative;

        &-header {
            width: 100%;
            height: 60px;
            display: flex;
            background: #fff;

            &-logo {
                width: 60px;
                height: 60px;
                padding: 10px;
                align-items: center;
            }

            &-input {
                flex: 1;
                min-width: 0;

                input {
                    width: 100%;
                    height: 60px;
                    margin: 0;
                    padding: 0;
                    font-size: 20px;
                    font-weight: 700;
                    color: #000;
                    border: none;
                    outline: none;
                }
            }

            &-tools {
                width: 380px;
                line-height: 60px;

                .todoSave {
                    display: inline-block;
                    font-size: 16px;
                    font-weight: 600;
                    white-space: nowrap;
                    color: #ddd;
                    cursor: default;
                    user-select: none;

                    span {
                        margin: 0 0 0 6px;
                        padding: 3px 10px;
                        color: inherit;
                        text-decoration: none;
                        border: 1px solid currentColor;
                        border-radius: 2px;
                    }
                }

                .articleImg {
                    color: #ddd;
                    font-size: 25px;
                    padding: 1px 15px;
                    vertical-align: middle;
                }

                .addActicle {
                    height: 32px;
                    line-height: 32px;
                    padding: 0 20px;
                    font-size: 15px;
                    font-weight: 600;
                    white-space: nowrap;
                    color: #007fff;
                    cursor: pointer;
                    background: transparent;
                    border: 1px solid;
                    user-select: none;
                    outline: none;
                    cursor: pointer;
                }
            }
        }
    }
</style>