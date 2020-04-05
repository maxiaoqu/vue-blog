<template>
    <div class="header-search">
        <input placeholder="请输入搜索关键词...">
    </div>
</template>

<script>
    export default {
        name: "header-search"
    }
</script>

<style lang="less" scoped>
.header-search{
    flex: 1;
    min-width: 0;
    display: inline-block;
    text-align: center;
    input{
        border: 1px solid #dac5c5;
        border-radius: 1px;
        font-size: 14px;
        line-height: 32px;
        padding: 0 2px 0 10px;
        outline: none;
        transition: all 0.2s ease;
        background: transparent;
        &:focus {
            cursor: auto;
            border-color: #3eaf7c;
        }
    }
}
@media (max-width: 720px) {
    .header-search{
        flex: 1;
        min-width: 0;
        width: 100%;
        input{
            width: 85%;
        }
    }
}
</style>