<template>
  <v-app>
    <bef-login-app-bar />
    <v-main>
      <nuxt />
    </v-main>
    <bef-login-footer />
  </v-app>
</template>

<script>
import BefLoginAppBar from '~/components/molecules/BefLoginAppBar'
import BefLoginFooter from '~/components/molecules/BefLoginFooter'

export default {
  components: {
    BefLoginAppBar,
    BefLoginFooter
  },
}
</script>
