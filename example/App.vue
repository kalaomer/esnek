<template>
  <div id="app">
    <es-container class="colorized-container">
      <h2>Col Order</h2>
      <es-row justify-content-end>
        <es-col :order="2">
          1. kolon 2. sıra
        </es-col>
        <es-col :order="1">
          2. kolon 1. sıra
        </es-col>
      </es-row>
    </es-container>

    <es-container class="colorized-container">
      <h2>Align Row</h2>
      <es-row align-content-center style="height: 8rem;">
        <es-col>
          1. kolon
        </es-col>
        <es-col>
          2. kolon
        </es-col>
      </es-row>
    </es-container>

    <es-container class="colorized-container">
      <h2>Align Col</h2>
      <es-row style="height: 8rem;">
        <es-col align-self-start>
          1. kolon
        </es-col>
        <es-col align-self-center>
          2. kolon
        </es-col>
        <es-col align-self-end>
          3. kolon
        </es-col>
      </es-row>
    </es-container>

    <es-container class="colorized-container">
      <h2>Justify Row</h2>
      <es-row justify-content-center>
        <es-col size="3">
          1. kolon
        </es-col>
        <es-col size="3">
          2. kolon
        </es-col>
        <es-col size="3">
          3. kolon
        </es-col>
      </es-row>
    </es-container>

    <es-container class="colorized-container">
      <h2>No Gutter</h2>
      <es-row no-gutter>
        <es-col style="text-align: left">
          1. kolon
        </es-col>
        <es-col style="text-align: left">
          2. kolon
        </es-col>
      </es-row>
    </es-container>

    <es-container class="colorized-container">
      <h2>MD 3-5-4</h2>
      <es-row justify-content-center>
        <es-col :md="3">
          1. kolon
        </es-col>
        <es-col :md="5">
          2. kolon
        </es-col>
        <es-col :md="4">
          3. kolon
        </es-col>
      </es-row>
    </es-container>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import "../src/scss/functions";
  @import "../src/scss/variables";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .colorized-container {
    margin-bottom: 2rem;

    .row {
      background-color: $gray-400;
      border-radius: 4px;
      overflow: hidden;
    }

    .col {
      border: 1px solid $gray-500;
      background-color: $gray-100;

      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
</style>
