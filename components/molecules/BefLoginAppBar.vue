<template>
  <v-app-bar
    app
    :height="appBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <signup-link />
    <login-link />
  </v-app-bar>
</template>

<script>
import LoginLink from '~/components/atoms/beforeLogin/LoginLink'
import SignupLink from '~/components/atoms/beforeLogin/SignupLink'
import AppTitle from '~/components/atoms/AppTitle'
import AppLogo from '~/components/ui/AppLogo'

export default {
  components: {
    LoginLink,
    SignupLink,
    AppTitle,
    AppLogo
  },
  data({ $store }) {
    return {
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  }
}
</script>
