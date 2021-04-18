<template>
  <div class="es-row" :class="rowClasses">
    <slot/>
  </div>
</template>

<script>
  import * as changeCase from "change-case";

  export default {
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
          classes.push(`es-row-cols-${this.col}`);
        }

        this.noGutter ? classes.push('es-no-gutters') : false;

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
  }
</script>

<style scoped>

</style>
