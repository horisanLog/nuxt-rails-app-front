<template>
  <v-app-bar app dense elevation="1" :clipped-left="clippedLeft" color="white">
    <slot name="navigation-toggle-button" />
    <nuxt-link :to="homePath" class="text-decoration-none">
      <app-logo />
    </nuxt-link>

    <app-title
     :class="{ 'hidden-mobile-and-down': isNotHomePath }"
    />
    <logged-in-app-bar-breadcrumbs
      v-if="isNotHomePath"
     />

    <v-spacer />
    <logged-in-app-bar-account-menu />
  </v-app-bar>
</template>

<script>
import AppLogo from '~/components/ui/AppLogo'
import AppTitle from '~/components/atoms/AppTitle'
import LoggedInAppBarAccountMenu from '~/components/molecules/loggedIn/LoggedInAppBarAccountMenu'
import LoggedInAppBarBreadcrumbs from './LoggedInAppBarBreadcrumbs.vue'

export default {
  components: {
    AppLogo,
    AppTitle,
    LoggedInAppBarAccountMenu,
    LoggedInAppBarBreadcrumbs
  },
  props: {
    clippedLeft: {
      type: Boolean,
      default: false
    }
  },
  data({ $store }) {
    return {
      homePath: $store.state.loggedIn.homePath
    }
    // loggedInに変更
    // return store.state.loggedIn ? 'loggedIn' : 'welcome'
    // return store.state.loggedIn ? 'default' : 'welcome'
  },
  computed: {
    isNotHomePath() {
      return this.$route.name !== this.homePath.name
    }
  }
}
</script>
