<template>
    <div class="public-layout-content">
        <div class="backgound" v-if="showBG" :style="{'background':`url(${backgroundImg})`}"></div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {defineComponent, getCurrentInstance, computed, reactive, toRefs, onMounted} from 'vue';
    import {useRouter} from 'vue-router';
    import imgSrc from '../../assets/images/backgound-img.jpg';

    export default defineComponent({
        name: 'PublicLayout',
        setup() {
            onMounted(() => {
            })
            const {ctx} = getCurrentInstance() as any;
            const {currentRoute} = useRouter();
            const meta = currentRoute.value.meta;
            const state = reactive({
                showBG: computed(() => {
                    return !meta.hideBG;
                }),
                backgroundImg: imgSrc,
            });
            return {
                ...toRefs(state),
            };
        }
    });
</script>

<style scoped>
    .public-layout-content {
        position: relative;
    }
</style>
