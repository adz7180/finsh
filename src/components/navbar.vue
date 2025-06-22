<template>
  <div class="nav">
    <!-- other nav items -->
    <router-link
      v-if="isAdmin"
      to="/admin"
      class="admin-button"
    >
      Admin Panel
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAdmin']),
  },
};
</script>
