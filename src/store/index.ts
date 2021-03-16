import {createStore} from 'vuex'
import user from './modules/user';

export interface RootState {
    user?: any;
}

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user
    }
})
export default store;
