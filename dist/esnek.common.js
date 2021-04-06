'use strict';

var vue = require('vue');
var changeCase = require('change-case');

var script = {
    name: "es-container",
    props: {
      fluid: Boolean
    }
  };

const _withId = /*#__PURE__*/vue.withScopeId("data-v-19d8ec21");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock("div", {
    class: ["es-container container-fluid", {'container': ! $props.fluid}]
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
});

script.render = render;
script.__scopeId = "data-v-19d8ec21";
script.__file = "src/components/container.vue";

var script$1 = {
    name: "es-row",
    props: {
      col: [Number, String],
      noGutter: Boolean,

      alignContentStart: Boolean,
      alignContentCenter: Boolean,
      alignContentEnd: Boolean,

      justifyContentStart: Boolean,
      justifyContentCenter: Boolean,
      justifyContentEnd: Boolean,
      justifyContentAround: Boolean,
      justifyContentBetween: Boolean,
    },
    computed: {
      rowClasses() {
        let classes = [];

        if (this.col) {
          classes.push(`row-cols-${this.col}`);
        }

        this.noGutter ? classes.push('no-gutters') : false;

        const propClasses = ["alignContentStart", "alignContentCenter", "alignContentEnd",
          "justifyContentStart", "justifyContentCenter", "justifyContentEnd", "justifyContentAround", "justifyContentBetween"];

        for (let c of propClasses) {
          if (this[c]) {
            classes.push(changeCase.paramCase(c));
          }
        }

        return classes
      }
    }
  };

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-23fc6a0c");

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock("div", {
    class: ["es-row row", $options.rowClasses]
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
});

script$1.render = render$1;
script$1.__scopeId = "data-v-23fc6a0c";
script$1.__file = "src/components/row.vue";

var script$2 = {
    name: "es-col",
    props: {
      order: Number,
      alignSelfStart: Boolean,
      alignSelfCenter: Boolean,
      alignSelfEnd: Boolean,
      size: [Number, String],

      xl: [Number, Boolean],
      lg: [Number, Boolean],
      md: [Number, Boolean],
      sm: [Number, Boolean],
      xs: [Number, Boolean],
    },
    computed: {
      colClasses() {
        let classes = [];

        if (this.order) {
          classes.push(`order-${this.order}`);
        }

        const propClasses = ["alignSelfStart", "alignSelfCenter", "alignSelfEnd"];

        for (let c of propClasses) {
          if (this[c]) {
            classes.push(changeCase.paramCase(c));
          }
        }

        if (this.size) {
          classes.push(`col-${this.size}`);
        }

        const propSizeClasses = ["xl", "lg", "md", "sm", "xs"];

        for (let c of propSizeClasses) {
          if (this[c]) {
            if (this[c] === true) {
              classes.push(`col-${c}`);
            } else {
              classes.push(`col-${c}-${this[c]}`);
            }
          }
        }

        return classes;
      }
    }
  };

const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-582d60c0");

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock("div", {
    class: ["es-col col", $options.colClasses]
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
});

script$2.render = render$2;
script$2.__scopeId = "data-v-582d60c0";
script$2.__file = "src/components/col.vue";

const Esnek = {
  install(Vue, options) {
    Vue.component(script.name, script);
    Vue.component(script$1.name, script$1);
    Vue.component(script$2.name, script$2);
  }
};

module.exports = Esnek;
//# sourceMappingURL=esnek.common.js.map
