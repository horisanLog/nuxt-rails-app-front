<template>
  <bef-login-form-card #user-form-card-content>
    <v-form ref="form" v-model="isValid" @submit.prevent="signup">
      <!-- <user-form-name
        :name="name"
        @input="name = $event"
      /> -->

      <!-- OR -->
      <!-- 親にsync修飾子を使った場合、データの送受信を一度に行える -->
      <user-form-name v-model:name="params.user.name" />
      <user-form-email v-model:email="params.user.email" />
      <user-form-password v-model:password="params.user.password" />
      <v-btn
        type="submit"
        :disabled="!isValid || loading"
        :loading="loading"
        block
        color="myblue"
        class="white--text"
      >
        登録する
      </v-btn>
    </v-form>
  </bef-login-form-card>
</template>

<script>
import BefLoginFormCard from '~/components/molecules/BefLoginFormCard'
import UserFormEmail from '~/components/atoms/user/UserFormEmail'
import UserFormName from '~/components/atoms/user/UserFormName'
import UserFormPassword from '~/components/atoms/user/UserFormPassword'

export default {
  components: {
    BefLoginFormCard,
    UserFormEmail,
    UserFormName,
    UserFormPassword
  },
  layout: 'BeforeLogin',
  data() {
    return {
      isValid: false,
      loading: false,
      params: { user: { name: '', email: '', password: '' } }
    }
  },
  methods: {
    signup() {
      this.loading = true
      setTimeout(() => {
        this.formReset()
        this.loading = false
      }, 1500)
    },
    formReset() {
      this.$refs.form.reset()
      for (const key in this.params.user) {
        this.params.user[key] = ''
      }
    }
  }
}
</script>
