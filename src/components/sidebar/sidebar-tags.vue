<template>
    <ul class="sidebar-tags">
        <li class="tag-item"
            v-for="index in 20"
            :key="index">
            标签{{index}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "sidebar-tags"
    }
</script>

<style lang="less" scoped>
.sidebar-tags{
    width: 100%;
    .tag-item{
        display: inline-block;
        border: 1px dashed #17b5c5;
        padding: 5px 10px;
        margin: 4px 2px;
    }
}
</style>