import router from './routers';
import {
    indexRouter,
    articleRouter,
    recommendRouter,
    bookletRouter,
    topicsRouter,
    useRouter,
    serverRouter,
    errorRouter
} from './getRouter';

// 添加参数，避免多次循环导致的错误
var getRouters;

// 合并当前所有的路由
const newRouters = (to, next, getrouter) => {
    const routerArr = indexRouter.concat(articleRouter).concat(recommendRouter).concat(bookletRouter).concat(topicsRouter).concat(useRouter).concat(serverRouter).concat(errorRouter);
    router.addRoutes(routerArr);
    next({...to, replace: true});
};

// 当前路由的标题
const routersTitle = title => {
    title = "码小趣-" + title || '码小趣';
    window.document.title = title;
};

// 路由跳转之前
router.beforeEach((to, from, next) => {
    if (!getRouters) {
        getRouters = true;
        newRouters(to, next);
    }
    if (to.path === '' || to.path === '/') {
        next({
            path: '/'
        })
        return;
    } else {
        next()
        return;
    }
})
// 路由跳转之后
router.afterEach((to, from) => {
    routersTitle(to.meta.title)
})

export default router
