import Index from '../frame/frame/index';
import Home from '../frame/frame/home';
import Child from '../frame/frame/child';

export const indexRouter = [{
    path: '/',
    name: '_index',
    redirect: '/index',
    meta: {
        title: '首页',
        hideInMenu: false,
        notCache: true,
        icon: 'ios-add'
    },
    component: Index,
    children: [{
        path: '/index',
        name: 'index',
        meta: {
            title: '首页',
            hideInMenu: false,
            notCache: true,
        },
        component: () => import ("@/views/index/index.vue")
    }]
}]

export const useRouter = [];

export const errorRouter = [];
