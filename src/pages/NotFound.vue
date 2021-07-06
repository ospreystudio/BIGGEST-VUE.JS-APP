<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>This page could not be found - maybe check out all our coaches.</p>
      <router-link to="/coaches">coaches</router-link>
    </base-card>
  </section>
</template>

<script>
  export default {
    name: 'NotFound'
  };
</script>

<style scoped>

</style>