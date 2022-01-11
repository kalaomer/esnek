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
      gutter: Number,
      gutterX: Number,
      gutterY: Number,

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

        this.gutter !== undefined ? classes.push(`es-g-${this.gutter}`) : false;
        this.gutterX !== undefined ? classes.push(`es-gx-${this.gutter}`) : false;
        this.gutterY !== undefined ? classes.push(`es-gy-${this.gutter}`) : false;

        const propClasses = ["alignContentStart", "alignContentCenter", "alignContentEnd",
          "justifyContentStart", "justifyContentCenter", "justifyContentEnd", "justifyContentAround", "justifyContentBetween"];

        for (let c of propClasses) {
          if (this[c]) {
            classes.push(changeCase.paramCase(`es-${c}`));
          }
        }

        return classes
      }
    }
  }
</script>

<style scoped>

</style>
