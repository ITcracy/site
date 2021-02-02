// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "~/layouts/Default.vue";
import VueTypedJs from "vue-typed-js";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueTypedJs);

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: "og:url",
      property: "og:url",
      content: "https://itcracy.com" + to.path,
    });
    next();
  });
}
