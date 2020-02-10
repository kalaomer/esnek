import Container from "./components/container.vue";
import Row from "./components/row.vue";
import Col from "./components/col.vue";


const Esnek = {
  install(Vue, options) {
    Vue.component(Container.name, Container);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
  }
};


export default Esnek;
