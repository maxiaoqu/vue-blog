export default {
    state: {
        navData: [
            {name: '首页', path: 'article', classify: 'recommend', icon: 'home'},
            {name: '精品', path: 'boutique', classify: 'ui', icon: 'heart'},
            {name: '小册', path: 'booklet', classify: '', icon: 'book'},
            {name: '话题', path: 'topics', classify: '', icon: 'telegram'},
            {name: '我的', path: 'user', classify: '', icon: 'user'}
        ],
        navClassify: []
    },
    getters: {
        getNavData(state) {
            return state.navData;
        },
        getNavClassify(state) {
            return state.navClassify;
        }
    },
    mutations: {
        updateNavData(state, navData) {
            state.navData = navData;
        },
        updateNavClassify(state, navClassify) {
            state.navClassify = navClassify;
        }
    },
    actions: {
        setNavData({commit}, navData) {
            commit('updateNavData', navData);
        },
        setNavClassify({commit}, navClassify) {
            commit('updateNavClassify', navClassify);
        }
    }
};