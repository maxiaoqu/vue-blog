<template>
    <div class="header-user">
        <button class="addArticle">写文章</button>
        <user-logo></user-logo>
    </div>
</template>

<script>
    import UserLogo from "../user/user-logo";

    export default {
        name: "header-user",
        components: {UserLogo}
    }
</script>

<style lang="less" scoped>
    .header-user {
        width: 200px;
        height: 100%;
        text-align: right;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            height: 35px;
            line-height: 35px;
            font-size: 15px;
            font-weight: 500;
            color: #fff;
            background-color: #007fff;
            padding: 0 15px;
            border-radius: 3px;
            cursor: pointer;
            outline: none;
            margin-right: 25px;
        }
    }

    @media (max-width: 720px) {
        .header-user {
            display: none;
        }
    }
</style>