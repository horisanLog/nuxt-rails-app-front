<template>
  <bef-login-form-card #user-form-card-content>
    <v-form ref="form" v-model="isValid" @submit.prevent="login">
      <user-form-email v-model:email="params.auth.email" no-validation />
      <user-form-password v-model:password="params.auth.password" no-validation />

      <v-card-actions>
        <nuxt-link to="#" class="body-2 text-decoration-none">
          パスワードを忘れた?
        </nuxt-link>
      </v-card-actions>
      <v-card-text class="px-0">
        <v-btn
          type="submit"
          :disabled="!isValid || loading"
          :loading="loading"
          block
          color="myblue"
          class="white--text"
        >
          ログインする
        </v-btn>
      </v-card-text>
    </v-form>
  </bef-login-form-card>
</template>

<script>
import BefLoginFormCard from '~/components/molecules/BefLoginFormCard'
import UserFormEmail from '~/components/atoms/user/UserFormEmail'
import UserFormPassword from '~/components/atoms/user/UserFormPassword'

export default {
  components: {
    BefLoginFormCard,
    UserFormEmail,
    UserFormPassword
  },
  layout: 'BeforeLogin',
  data({ $store }) {
    return {
      isValid: false,
      loading: false,
      params: { auth: { email: '', password: '' } },
      redirectPath: $store.state.loggedIn.homePath
    }
  },
  methods: {
    login() {
      this.loading = true
      this.$router.push(this.redirectPath)
    }
  }
}
</script>
