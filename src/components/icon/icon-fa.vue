<template>
    <i v-if="icon != ''" class="fa icon-fa" :class="'fa-'+icon"></i>
</template>

<script>
    export default {
        name: "icon-fa",
        props:{
            icon:{
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="less" scoped>
.icon-fa{
    padding: 0 5px;
}
</style>