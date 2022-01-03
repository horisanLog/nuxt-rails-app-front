<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="appBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <app-logo @click.native="goTo('scroll-top')" />
    <app-title
      class="hidden-mobile-and-down"
    />
    <v-spacer />
    <v-toolbar-items class="ml-2 hidden-ipad-and-down">
      <v-btn v-for="(menu, i) in menus" :key="`menu-btn-${i}`" text @click="$vuetify.goTo(`#${menu.title}`)">
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
    <signup-link />
    <login-link />
    <v-menu
      bottom
      nudge-left="110"
      nudge-width="100"
    >
      <template #activator="{ on }">
        <v-app-bar-nav-icon
          class="hidden-ipad-and-up"
          v-on="on"
        />
      </template>
      <v-list
        dense
        class="hidden-ipad-and-up"
      >
        <v-list-item
          v-for="(menu, i) in menus"
          :key="`menu-list-${i}`"
          exact
          @click="$vuetify.goTo(`#${menu.title}`)"
        >
          <v-list-item-title>
            {{ $t(`menus.${menu.title}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import AppLogo from '~/components/ui/AppLogo'
import SignupLink from '~/components/atoms/beforeLogin/SignupLink'
import LoginLink from '~/components/atoms/beforeLogin/LoginLink'
import AppTitle from '~/components/atoms/AppTitle'

export default {
  // data (context: { $config: { appName: "Value" } })
  components: {
    AppLogo,
    SignupLink,
    LoginLink,
    AppTitle
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  data({ $store }) {
    return {
      scrollY: 0,
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  },
  // computed追加
  computed: {
    isScrollPoint() {
      return this.scrollY > this.imgHeight - this.appBarHeight
    },
    toolbarStyle() {
      const color = this.isScrollPoint ? 'white' : 'transparent'
      const elevation = this.isScrollPoint ? 4 : 0
      return { color, elevation }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY
    },
    goTo(id) {
      this.$vuetify.goTo(`#${id}`)
    }
  }
}
</script>
