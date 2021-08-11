import Vue from "vue";
import App from "@/App";

// @是一个别名 代表着 src 文件夹路径

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
