<template>
  <v-app-bar app color="primary" dark scroll-behavior="collapse" density="comfortable">
    <v-toolbar-title>{{ $t('Menu') }}</v-toolbar-title>
    <v-tabs>
      <v-tab 
        v-for="({ path, name }) in computedTabs" :key="path" :to="path"
        class="router-link"
        :class="{'router-link__active': path === activeTabPath}"
      >
        {{ name }}
      </v-tab>
      <v-select
        flat
        :items="$i18n.availableLocales"
        v-model="$i18n.locale"
        varian="outlined"
      />
    </v-tabs>
  </v-app-bar>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { WebRoutes } from '@/router/index'
import localeStorage from '@/locale-storage'

export default {
  name: 'NavigationMenu',
  computed: {
    activeTabPath() {
      const route = useRoute()
  
      return route.path
    },
    computedTabs() {
      return [
        { path: `/${WebRoutes.groups}`, name: this.$t('Groups') },
        { path: `/${WebRoutes.invoices}`, name: this.$t('Invoices') },
        { path: `/${WebRoutes.incomes}`, name: this.$t('Incomes') },
        { path: `/${WebRoutes.account}`, name: this.$t('Account') },
      ]
    }
  },
  watch: {
    '$i18n.locale': function(locale) {
      localeStorage.setLocale(locale);
    }
  },
}
</script>

<style scoped>
  .router-link {
    color: rgb(151, 142, 142);
  }

  .router-link__active {
    color: white;
  }

  .language-selector {
    color: white;
    max-height: 100px;
  }
</style>