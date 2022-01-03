<template>
  <v-app>
    <!-- toolbar -->
    <logged-in-app-bar clipped-left>
      <template #navigation-toggle-button>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </logged-in-app-bar>

    <!-- navigation drawer -->
    <project-navigation-drawer v-model:drawer="drawer" />

    <!-- main content -->
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBar from '~/components/molecules/loggedIn/LoggedInAppBar'
import ProjectNavigationDrawer from '~/components/molecules/project/ProjectNavigationDrawer'
import GetProjectCurrent from '~/middleware/GetProjectCurrent'

export default {
  components: {
    LoggedInAppBar,
    ProjectNavigationDrawer,
    GetProjectCurrent
  },
  middleware: 'GetProjectCurrent',
  data() {
    return {
      drawer: null
    }
  }
}
</script>
