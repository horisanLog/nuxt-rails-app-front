<template>
  <v-app>
    <!-- toolbar -->
    <logged-in-app-bar clipped-left>
      <template #navigation-toggle-button>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </logged-in-app-bar>

    <!-- navigation drawer -->
    <project-navigation-drawer :drawer.sync="drawer" />

    <!-- main content -->
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBar from '~/components/molecules/loggedIn/LoggedInAppBar'
import ProjectNavigationDrawer from '~/components/molecules/project/ProjectNavigationDrawer'

export default {
  components: {
    LoggedInAppBar,
    ProjectNavigationDrawer
  },
  data() {
    return {
      drawer: null
    }
  }
}
</script>
