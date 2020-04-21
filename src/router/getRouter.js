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
    redirect: '/booklet/bookList',
    meta: {
        title: '小册',
        key: 'booklet'
    },
    component: Home,
    children: [{
        path: 'bookList',
        name: 'bookList',
        meta: {
            title: '小册首页'
        },
        component: () => import ("@/views/booklet/index.vue")
    },{
        path: 'bookDetail/:bookid',
        name: 'bookDetail',
        meta: {
            title: '小册详情'
        },
        component: () => import ("@/views/booklet/bookDetail.vue")
    }]
}];

// 话题
export const topicsRouter = [{
    path: '/topics',
    name: 'topics',
    redirect: '/topics/topicsList',
    meta: {
        title: '话题'
    },
    component: Home,
    children: [{
        path: 'topicsList',
        name: 'topicsList',
        meta: {
            title: '话题首页'
        },
        component: () => import ("@/views/topics/index.vue")
    },{
        path: 'topicsDetail/:topicid',
        name: 'topicsDetail',
        meta: {
            title: '话题详情'
        },
        component: () => import ("@/views/topics/topicsDetails.vue")
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

// 撰写文章
export const editorRouter = [{
    path: '/editor',
    name: 'editor',
    meta: {
        title: '撰写',
    },
    component: Child,
    redirect: '/editor/articleEditor',
    children: [{
        path: 'articleEditor',
        name: 'articleEditor',
        meta: {
            title: '撰写文章'
        },
        component: () => import ("@/views/article/articleEditor.vue")
    }]
}]

// 其余
export const serverRouter = [{
    path: '/server',
    name: 'server',
    meta: {
        title: '其他的',
    },
    component: Home,
    redirect: '/serve/articleDetails',
    children: [{
        path: 'articleDetails/:id',
        name: 'articleDetails',
        meta: {
            title: '文章详情'
        },
        component: () => import ("@/views/article/articleDetails.vue")
    }]
}]

export const errorRouter = [];
