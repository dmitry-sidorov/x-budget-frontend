<template>
  <v-sheet class="mx-auto create-form teal-lighten-3">
    <h4 class="header">{{ $t('Login') }}</h4>
    <v-form validate-on="submit lazy" @submit.prevent v-on:keyup.enter="login">
      <v-text-field
        class="input"
        :label="$t('Email')"
        type="email"
        variant="outlined"
        v-model="credentials.email"
      />
      <v-text-field
        class="input"
        :label="$t('Password')"
        type="password"
        variant="outlined"
        v-model="credentials.password"
        />
      <v-btn class="button" @click="login" variant="outlined">{{ $t('Login') }}</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import type { AccountViewModel } from '@/types'
import api from '../api'
import TokenStorage from '../token-storage'
import router from '@/router'

export type LoginCredentials = {
  email: AccountViewModel['email']
  password: AccountViewModel['password']
}

export default {
  data() {
    return {
      credentials: {} as AccountViewModel,
    }
  },
  methods: {
    async login() {
      // this.$emit('create', this.credentials)
      try {
        const { data: { token } } = await api.login(this.credentials);
        console.log('Login successed', token);
        TokenStorage.setAuthToken(token);
        router.push('account');
      } catch (error) {
        console.log('Login failed! ', error);
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