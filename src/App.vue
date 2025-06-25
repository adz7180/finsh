<template>
  <div id="app">
    <!-- Watermark Logo -->
    <div v-if="logoExists" class="watermark-logo">
      <img :src="logoPath" alt="HexaNest Logo" @error="handleLogoError" />
    </div>

    <!-- Main Content -->
    <transition name="fade" mode="out-in">
      <router-view v-if="routeLoaded" key="router-view" />
    </transition>

    <!-- Fallback UI if something fails -->
    <div v-if="!routeLoaded" class="fallback-ui">
      Loading application...
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      logoExists: true,
      routeLoaded: true
    };
  },
  computed: {
    logoPath() {
      return require('@/assets/logo.png');
    }
  },
  methods: {
    handleLogoError() {
      this.logoExists = false;
      console.warn('Logo failed to load');
    }
  },
  mounted() {
    // Ensure app renders even if there are slow loads
    setTimeout(() => {
      this.routeLoaded = true;
    }, 500);
  }
};
</script>

<style lang="scss">
// Import global styles safely
@import './assets/global.scss';

#app {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
  position: relative;
}

// Smooth fade transitions between routes
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// Pulsing watermark in top-right corner
.watermark-logo {
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0.6;
  animation: pulse 3s infinite;
  z-index: 1000;

  img {
    width: 120px;
  }
}

@keyframes pulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

.fallback-ui {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #555;
}
</style>
