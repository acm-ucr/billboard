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
@import url("https://fonts.googleapis.com/css?family=Roboto:400,900");

html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
  overflow: hidden;
  font-family: Roboto;
}

div {
  height: inherit;
  width: inherit;
}
</style>
