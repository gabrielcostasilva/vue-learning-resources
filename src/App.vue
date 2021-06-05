<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheResources from './components/TheResources'

export default {
  components: {
    TheHeader,
    TheResources,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>