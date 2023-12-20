<template>
  <div class="groups-list__container teal-lighten-3">
    <v-btn
      v-if="!hasGroups"
      class="button"
      @click="createDefaultGroups" 
      variant="outlined"
      min-width="400"
    >
      {{ $t('CreateDefaultGroups') }}
    </v-btn>
    <template v-if="hasGroups">
      <h4 class="header">{{ $t('Groups') }}</h4>
      <div class="groups-list">
        <v-card v-for="(group, i) in groups" :key="i" width="300" height="300">
          <v-card-item>
            <v-card-title>This is a title</v-card-title>
    
            <v-card-subtitle>This is a subtitle</v-card-subtitle>
          </v-card-item>
    
          <v-card-text>
            This is content
          </v-card-text>
        </v-card>
      </div>
    </template>
      <v-card width="300" height="300">
          <v-card-item>
            <v-card-title>This is a title</v-card-title>
    
            <v-card-subtitle>This is a subtitle</v-card-subtitle>
          </v-card-item>
    
          <v-card-text>
            This is content
          </v-card-text>
        </v-card>
  </div>
</template>

<script lang="ts">
import type { AccountViewModel } from '@/types'
import api from '@/api'
import AuthTokenStorage from '@/auth-token-storage'
import router from '@/router'

export type LoginCredentials = {
  email: AccountViewModel['email']
  password: AccountViewModel['password']
}

export default {
  data() {
    return {
      groups: [],
    }
  },
  computed: {
    hasGroups() {
      return this.groups.length > 0
    }
  },
  methods: {
    createDefaultGroups() {

    }
  },
  async created() {
    try {
      const { data: groups } = await api.getGroups();
      console.log('groups: ', groups);
      this.groups = groups;
    } catch (error) {
      console.log('Failed to fetch groups! ', error)
    }
  }
}
</script>


<style>
.header {
  margin: 10px 0;
  font-size: 24px;
}

.groups-list__container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1024px;
  margin: 0 auto;
}

.groups-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>