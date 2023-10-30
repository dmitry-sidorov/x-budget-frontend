<template>
  <h1 class="header">Account page</h1>
  <v-table class="create-form">
    <tbody>
      <tr>
        <td>First Name</td>
        <td>{{ account.firstName }}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>{{ account.lastName }}</td>
      </tr>
      <tr>
        <td>Gender</td>
        <td>{{ account.gender }}</td>
      </tr>
      <tr>
        <td>Birthdate</td>
        <td>{{ account.birthdate }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import type { AccountViewModel } from '@/types';
import api from '../api'
import { AccountToViewMapper } from '../api/mappers'

export default {
  data() {
    return {
      account: {} as AccountViewModel,
    }
  },
  mounted() {
    this.fetchCurrentAccount()
  },
  methods: {
    async fetchCurrentAccount() {
      try {
        const { data: { data } } = await api.getCurrentAccount();
        console.log('Current account successed', data)
        this.account = AccountToViewMapper(data)
      } catch (error) {
        console.log('Current account failed! ', error);
      }
    },
  }
}
</script>


<style>
:root {
  --main-color-light: rgba(0, 128, 128, 0.5);
  --main-color: rgba(0, 128, 128, 1);
}

.create-form {
  width: 600px;
}

.header {
  margin: 10px 0;
  font-size: 24px;
}

.button {
  width: 200px;
  min-height: 60px;
}

form {
  display: flex;
  flex-direction: column;
}

button:hover {
  background-color: var(--main-color);
}

.amount {
  display: flex;
  gap: 16px;
}

.textarea {
  height: 200%;
}

.input:hover {
  border-color: var(--main-color);
}

.input:hover::placeholder {
  color: var(--main-color);
}
</style>