import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require('path');

const projectRootDir = resolve(__dirname);
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '/@',
                replacement: resolve(projectRootDir, 'src')
            }
        ]
    }
})
