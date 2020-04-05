export default {
    state: {
        navData: [
            {name: '首页', router: 'article',icon:'home'},
            {name: '精品', router: 'recommend',icon:'heart'},
            {name: '小册', router: 'booklet',icon:'book'},
            {name: '话题', router: 'topics',icon:'telegram'},
            {name: '我的', router: 'user',icon:'user'}
        ]
    },
    mutations: {
        updateNavData(state, navData) {
            state.navData = navData;
        }
    },
    getters: {
        getNavData(state) {
            return state.navData;
        }
    },
    actions: {
        setNavData({commit}, navData) {
            commit('updateNavData', navData)
        }
    }
};