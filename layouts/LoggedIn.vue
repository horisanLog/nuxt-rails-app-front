<template>
  <v-app>
    <logged-in-app-bar />
    <v-main>
      <nuxt />
    </v-main>
    <bef-login-footer />
  </v-app>
</template>

<script>
import LoggedInAppBar from '~/components/molecules/loggedIn/LoggedInAppBar'
import BefLoginFooter from '~/components/molecules/BefLoginFooter'

export default {
  components: {
    LoggedInAppBar,
    BefLoginFooter
  }
}
</script>
