export default {
    namespaced: true,
    state: {
        sideMenuPath: '/',
        tabMenuPath: '',
    },
    getters: {
        sideMenuPath: state => {
            return state.sideMenuPath;
        },
        tabMenuPath: state => {
            return state.tabMenuPath;
        },
    },
    mutations: {
        setSideMenuPath(state, path) {
            state.sideMenuPath = path;
        },
        setTabMenuPath(state, path) {
            state.tabMenuPath = path;
        },
    },
};
