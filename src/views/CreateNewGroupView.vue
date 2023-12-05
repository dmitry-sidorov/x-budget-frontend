<template>
  <v-sheet class="mx-auto create-form teal-lighten-3">
    <h4 class="header">{{ $t('Create New Group') }}</h4>
    <v-form validate-on="submit lazy" @submit.prevent v-on:keyup.enter="login">
      <v-text-field
        class="input"
        :label="$t('Name')"
        type="name"
        variant="outlined"
        v-model="group.name"
      />
      <v-textarea
        class="input"
        :label="$t('Description')"
        variant="outlined"
        v-model="group.description"
        />
      <v-btn class="button" @click="login" variant="outlined">{{ $t('Login') }}</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import type { Group } from '@/types'
import api from '../api'
import TokenStorage from '../token-storage'
import router from '@/router'

export default {
  data() {
    return {
      group: {} as Group,
    }
  },
  methods: {
    async login() {
      try {
        // TODO
      } catch (error) {
        console.log('Login failed! ', error)
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