import Vue from "vue";
import Element from "element-ui/lib";

// Vue.use(Element);

import locale from "element-ui/lib/locale/lang/en";

export default () => {
    Vue.use(Element, { locale });
};