export const frameMixins = {
    data() {
        return {
            startNum: 0,
            iScroll: 0,
            isUpRoll: false
        }
    },
    mounted() {
        // 监听（绑定）滚轮 滚动事件
        let _this = this;
        this.$nextTick(() => {
            window.addEventListener('scroll', _this.handleScroll, true);
            _this.scrollTop();
        })
    },
    methods: {
        handleScroll() {
            // 页面滚动距顶部距离
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                scrollDiffere = scrollTop - this.iScroll;
            this.iScroll = scrollTop;
            if (this.startNum == 0) {
                this.isUpRoll = false;
                this.startNum++;
            } else {
                if (scrollDiffere < -20) {
                    this.isUpRoll = false;  // 向上滚动
                } else if (scrollDiffere > 20) {
                    this.isUpRoll = true;  // 向下滚动
                }
            }
        },
        // 实现滚动到顶部的效果
        scrollTop() {
            let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const timeToTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                    clearInterval(timeToTop);
                }
            }, 10);
        }
    }
}