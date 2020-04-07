import Index from '../components/frame/index';
import Home from '../components/frame/home';
import Child from '../components/frame/child';

// 首页
export const indexRouter = [{
    path: '/',
    name: '_index',
    redirect: '/index/',
    meta: {
        title: '首页',
    },
    component: Index,
    children: [{
        path: 'index',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import ("@/views/article/index.vue")
    }]
}]

// 文章、精品
export const nettextRouter = [{
    path: '/nettext',
    name: 'nettext',
    meta: {
        title: '首页',
    },
    component: Index,
    redirect: '/nettext/article',
    children: [{
        path: 'article/:classify',
        name: 'article',
        meta: {
            title: '首页文章'
        },
        component: () => import ("@/views/article/index.vue")
    },{
        path: 'boutique/:classify',
        name: 'boutique',
        meta: {
            title: '精品推荐'
        },
        component: () => import ("@/views/boutique/index.vue")
    }]
}]

// 小册
export const bookletRouter = [{
    path: '/booklet',
    name: 'booklet',
    redirect: '/booklet/vueOrg',
    meta: {
        title: '小册',
        key: 'booklet'
    },
    component: Home,
    children: [{
        path: 'vueOrg',
        name: 'vueOrg',
        meta: {
            title: 'vue文档'
        },
        component: () => import ("@/views/booklet/index.vue")
    }]
}];

// 话题
export const topicsRouter = [{
    path: '/topics',
    name: 'topics',
    redirect: '/topics/huanti',
    meta: {
        title: '话题'
    },
    component: Home,
    children: [{
        path: 'huanti',
        name: 'huanti',
        meta: {
            title: '前端开发'
        },
        component: () => import ("@/views/topics/index.vue")
    }]
}];

// 我的
export const useRouter = [{
    path: '/use',
    name: 'use',
    redirect: '/use/myslf',
    meta: {
        title: '我的'
    },
    component: Home,
    children: [{
        path: 'myslf',
        name: 'myslf',
        meta: {
            title: '前端开发'
        },
        component: () => import ("@/views/use/index.vue")
    }]
}];

// 其余
export const serverRouter = [{
    path: '/server',
    name: 'server',
    meta: {
        title: '首页',
    },
    component: Child,
    redirect: '/serve/articleDetails',
    children: [{
        path: 'articleDetails/:id',
        name: 'articleDetails',
        meta: {
            title: '首页'
        },
        component: () => import ("@/views/article/articleDetails.vue")
    }]
}]

export const errorRouter = [];
