<template>
    <div class="header-logo" @click="gotoIndex">
        <img class="header-logo-max" src="../../assets/img/logo/max-logo.png">
        <img class="header-logo-min" src="../../assets/img/logo/min-logo.png">
    </div>
</template>

<script>
    export default {
        name: "header-logo",
        methods:{
            gotoIndex(){
                this.$router.push({
                    name: 'article'
                })
            }
        }
    }
</script>

<style lang="less" scoped>
.header-logo{
    min-width: 120px;
    height: 100%;
    display: inline-block;
    img{
        height: 60%;
        padding: 10px 0;
    }
    &-max{
        display: block;
    }
    &-min{
        display: none;
    }
}
@media (max-width: 720px) {
    .header-logo{
        min-width: 45px;
        &-max{
            display: none;
        }
        &-min{
            display: block;
        }
    }
}
</style>