<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'LoggedIn',
  validate ({ route }) {
    return route.name !== 'account'
  }
}
</script>
