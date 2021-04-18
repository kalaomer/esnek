<template>
  <div class="es-container-fluid" :class="{'es-container': ! fluid}">
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
