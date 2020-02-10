<template>
  <div class="es-container container-fluid" :class="{'container': ! fluid}">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "es-container",
    props: {
      fluid: Boolean
    }
  }
</script>

<style scoped>

</style>
