<template>
  <v-sheet class="mx-auto create-form teal-lighten-3">
    <h4 class="header">{{  $t('Signup') }}:</h4>
    <v-form validate-on="submit lazy" @submit.prevent v-on:keyup.enter="createAccount">
      <v-text-field
        class="input"
        :label="$t('Email')"
        type="email"
        variant="outlined"
        v-model="account.email"
      />
      <v-text-field
        class="input"
        :label="$t('Password')"
        type="password"
        variant="outlined"
        v-model="account.password"
      />
      <v-text-field
        class="input"
        :label="$t('FirstName')"
        type="text"
        variant="outlined"
        v-model="account.firstName"
      />
      <v-text-field
        class="input"
        :label="$t('LastName')"
        type="text"
        variant="outlined"
        v-model="account.lastName"
      />
      <v-text-field
        class="input"
        :label="$t('Gender')"
        type="text"
        variant="outlined"
        v-model="account.gender"
      />
      <v-text-field
        class="input"
        :label="$t('Birthdate')"
        type="text"
        variant="outlined"
        v-model="account.birthdate"
      />
      <v-btn class="button" @click="createAccount" variant="outlined">{{ $t('Login') }}</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import type { AccountViewModel } from '@/types';
import api from '../api'

export default {
  data() {
    return {
      account: {} as AccountViewModel,
    }
  },
  methods: {
    async createAccount() {
      try {
        const result = await api.createAccount(this.account);
        console.log('Create account successed', result)
      } catch (error) {
        console.log('Create account failed! ', error);
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