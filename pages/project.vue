<template>
  <v-container>
    {{ $store.state.project.current }}
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'Project',
  validate({ store, route }) {
    return !!store.state.project.current && route.name !== 'project'
  }
}
</script>
