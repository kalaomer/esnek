<template>
  <div class="es-col" :class="colClasses">
    <slot/>
  </div>
</template>

<script>
  import * as changeCase from "change-case";

  export default {
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
          classes.push(`es-order-${this.order}`);
        }

        const propClasses = ["alignSelfStart", "alignSelfCenter", "alignSelfEnd"];

        for (let c of propClasses) {
          if (this[c]) {
            classes.push(changeCase.paramCase(`es-${c}`));
          }
        }

        if (this.size) {
          classes.push(`es-col-${this.size}`);
        }

        const propSizeClasses = ["xl", "lg", "md", "sm", "xs"];

        for (let c of propSizeClasses) {
          if (this[c]) {
            if (this[c] === true) {
              classes.push(`es-col-${c}`);
            } else {
              classes.push(`es-col-${c}-${this[c]}`);
            }
          }
        }

        return classes;
      }
    }
  }
</script>

<style scoped>

</style>
