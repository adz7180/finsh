<template>
  <div class="admin-panel p-6">
    <h1 class="text-3xl font-bold mb-6">Admin Panel</h1>
    <div v-if="!isAdmin" class="text-red-500">Access denied. Admins only.</div>

    <div v-else>
      <h2 class="text-xl font-semibold mb-4">Registered Users</h2>
      <div v-if="loading" class="text-gray-500">Loading users...</div>

      <table v-if="!loading" class="w-full text-left">
        <thead>
          <tr>
            <th class="border-b py-2">Email</th>
            <th class="border-b py-2">Role</th>
            <th class="border-b py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.uid">
            <td class="py-2">{{ user.email }}</td>
            <td class="py-2">{{ user.role || 'user' }}</td>
            <td class="py-2">
              <select v-model="user.role" @change="updateUserRole(user)">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { fetchAllUsers, updateRole } from '@/services/roleservice';
// import firebase from 'firebase/app';

export default {
  data() {
    return {
      users: [],
      loading: true,
      isAdmin: false
    };
  },
  async created() {
    const currentUser = firebase.auth().currentUser;
    const idTokenResult = await currentUser.getIdTokenResult();
    this.isAdmin = idTokenResult.claims.admin === true;

    if (this.isAdmin) {
      this.users = await fetchAllUsers();
    }
    this.loading = false;
  },
  methods: {
    async updateUserRole(user) {
      await updateRole(user.uid, user.role);
      alert(`Role for ${user.email} updated to ${user.role}`);
    }
  }
};
</script>

<style scoped>
.admin-panel {
  max-width: 800px;
  margin: auto;
}
</style>
