// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import searchbox from '@/components/SearchBox';
import hits from '@/components/Hits';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#InnerSearch',
  components : {
    searchbox,
    hits
  }
});