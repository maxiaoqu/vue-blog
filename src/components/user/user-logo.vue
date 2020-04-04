<template>
    <div class="user-logo">
        <img src="../../assets/img/logo/min-logo.png">
    </div>
</template>

<script>
    export default {
        name: "user-logo"
    }
</script>

<style lang="less" scoped>
.user-logo{
    width: min-content;
    height: 100%;
    display: inline-block;
    img{
        height: 80%;
        padding: 10%;
    }
}
</style>