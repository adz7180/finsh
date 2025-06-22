<template>
  <div class="customization">
    <h2>Customize Your Dream Home</h2>
    <div class="options">
      <label>Choose Wall Color:
        <select>
          <option>White</option>
          <option>Beige</option>
          <option>Gray</option>
        </select>
      </label>
      <label>Choose Flooring:
        <select>
          <option>Wood</option>
          <option>Tile</option>
          <option>Carpet</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomizationView"
};
</script>

<style scoped>
.customization {
  padding: 40px;
}

.options {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}
</style>
