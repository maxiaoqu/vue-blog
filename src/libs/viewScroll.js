// 距离顶部的距离
export const scrollTopNum = () => {
    let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    return top
}

// 获取右侧的高度
export const getAttriHeight = (event) => {
    let height = event.offsetHeight || event.clientHeight;
    return height;
}

// 自动滚动到顶部
export const scrollToTop = () => {
    let top = scrollTopNum();
    const timeToTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
            clearInterval(timeToTop);
        }
    }, 10);
}