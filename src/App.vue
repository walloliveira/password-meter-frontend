<template>
  <div id="app">
    <div class="container">
      <PassworVerification/>
    </div>
  </div>
</template>

<script>
import PassworVerification from './components/PassworVerification.vue';

export default {
  name: 'App',
  components: {
    PassworVerification,
  },
};
</script>

<style lang="sass">
  @import '~bulma/bulma'
</style>
