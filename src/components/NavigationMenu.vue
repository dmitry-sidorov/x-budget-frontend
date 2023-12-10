<template>
  <v-app-bar app color="primary" dark scroll-behavior="collapse">
    <v-toolbar-title>{{ $t('Menu') }}</v-toolbar-title>
    <v-tabs>
      <v-tab 
        v-for="({ path, name }) in tabs" :key="path" :to="path"
        class="router-link"
        :class="{'router-link__active': path === activeTabPath}"
      >
        {{ name }}
      </v-tab>
    </v-tabs>
    <v-app-bar-nav-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { WebRoutes } from '@/router/index'

export default {
  name: 'NavigationMenu',
  computed: {
    activeTabPath() {
      const route = useRoute()
  
      return route.path
    }
  },
  data() {
    return {
      tabs: [
        { path: `/${WebRoutes.account}`, name: this.$t('Account') },
        { path: `/${WebRoutes.groups}`, name: this.$t('Groups') },
        { path: `/${WebRoutes.invoices}`, name: this.$t('Invoices') },
        { path: `/${WebRoutes.incomes}`, name: this.$t('Incomes') },
      ]
    }
  }
}
</script>

<style scoped>
  .router-link {
    color: rgb(151, 142, 142);
  }

  .router-link__active {
    color: white;
  }
</style>