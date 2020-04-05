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
        component: () => import ("@/views/index/index.vue")
    }]
}]

// 文章
export const articleRouter = [{
    path: '/article',
    name: 'article',
    meta: {
        title: '首页',
    },
    component: Index,
    redirect: '/article/web',
    children: [{
        path: 'web',
        name: 'web',
        meta: {
            title: '前端'
        },
        component: () => import ("@/views/index/index.vue")
    },{
        path: 'java/:id',
        name: 'java',
        meta: {
            title: 'java'
        },
        component: () => import ("@/views/index/index.vue")
    }]
}]


// 精品
export const recommendRouter = [{
    path: '/recommend',
    name: 'recommend',
    redirect: '/recommend/ui',
    meta: {
        title: '精品'
    },
    component: Index,
    children: [{
        path: 'ui',
        name: 'ui',
        meta: {
            title: 'ui框架'
        },
        component: () => import ("@/views/index/index.vue")
    },{
        path: 'ui2',
        name: 'ui2',
        meta: {
            title: 'ui框架'
        },
        component: () => import ("@/views/index/index.vue")
    }]
}];

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
        component: () => import ("@/views/index/index.vue")
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
        component: () => import ("@/views/index/index.vue")
    }]
}];

// 关于我的
export const useRouter = [{
    path: '/user',
    name: 'user',
    redirect: '/user/myslf',
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
        component: () => import ("@/views/index/index.vue")
    }]
}];

// 文章
export const serverRouter = [{
    path: '/server',
    name: 'server',
    meta: {
        title: '首页',
    },
    component: Index,
    redirect: '/serve/details',
    children: [{
        path: 'details/:id',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import ("@/views/index/index.vue")
    }]
}]

export const errorRouter = [];
