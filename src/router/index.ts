import {createRouter, createWebHistory, RouteRecordRaw, _RouteLocationBase} from 'vue-router';
import {getToken} from '/@/util/auth';
import HomeRouters from "./modules/home";
import AuthRouters from './modules/auth';
import NoteRouters from './modules/note';
import NoteLayoutRouters from './modules/note/mainLayoutNote';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        HomeRouters,
        AuthRouters,
        NoteRouters,
        NoteLayoutRouters
    ]
})
router.beforeEach(async (to: _RouteLocationBase, from: _RouteLocationBase, next: any) => {
    if (to.meta.title) {
        (document as any).title = to.meta.title;
    }
    if(to.meta.verification){
        const accessToken = getToken();
        if (!accessToken) {
            if(from.path!=='/login'){
                toLogin();
            }
            return next();
        }
    }
    next();
});

// 登录
export function toLogin() {
    router.push({
        name: '/login'
    })
}

export default router
