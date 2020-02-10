<template>
  <div class="es-col col" :class="colClasses">
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
  }
</script>

<style scoped>

</style>
