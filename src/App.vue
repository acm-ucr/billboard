<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'ACM-Billboard',
  components: {
    Home
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
  overflow: hidden;
}

div {
  height: inherit;
  width: inherit;
}
</style>
