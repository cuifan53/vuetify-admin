import router from '@/router';

function getFirstTabMenuPath(sideMenuPath) {
    return router.options.routes
        .filter(r => r.path === '/')[0]
        .children.filter(r => r.path === sideMenuPath)[0].children[0].path;
}

export { getFirstTabMenuPath };
