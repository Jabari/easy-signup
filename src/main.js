import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
Vue.directive('c-focus', {
	bind: function () {
		debugger
		this.$el.focus();
	}
});
