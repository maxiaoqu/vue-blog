<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="less">
    html, body, #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        color: #333;
        word-break: break-word;
        text-rendering: optimizeLegibility;
        background-color: #f4f5f5;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
