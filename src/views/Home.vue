<template>
  <div class="home">
    <h1 style="color: green;">✔ HexaNest Loaded Successfully</h1>
    <p>If you see this, routing and rendering are working.</p>
    <router-link to="/customize">Go to Customize</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  padding: 40px;
  font-family: sans-serif;
}
</style>
