import Vue from 'vue';
import VueRouter from 'vue-router';
//import first from '@component/first.vue'

// 引入组件 
import home from './views/home.vue';
import xxx from './views/xxx.vue';

// 告诉 vue 使用 vueRouter

Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/home',
//     component: home
//   },
//   {
//     path: '/xxx',
//     component: xxx
//   },
//   {
//     path: '*', // 其他没有的页面都重定向到 home页面去
//     redirect: '/home'
//   }
// ]

// var router = new VueRouter({
//   routes: routes
// });

export default new VueRouter({
  routes: [

    {
      path: '/xxx', // 對應的虛擬路徑
      component: xxx // 對應的元件，本文件上面自訂的分頁元件名稱
    }, 
    {
      path: '/home', // 對應的虛擬路徑
      component: home // 對應的元件，本文件上面自訂的分頁元件名稱
    }, 

],

});