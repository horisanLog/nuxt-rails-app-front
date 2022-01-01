<template>
  <bef-login-form-card #user-form-card-content>
    <v-form v-model="isValid">
      <!-- <user-form-name
        :name="name"
        @input="name = $event"
      /> -->

      <!-- OR -->
      <!-- 親にsync修飾子を使った場合、データの送受信を一度に行える -->
      <user-form-name :name.sync="params.user.name" />
      <user-form-email :email.sync="params.user.email" />
      <user-form-password :password.sync="params.user.password" />
      <v-btn :disabled="!isValid" block color="myblue" class="white--text">
        登録する
      </v-btn>
    </v-form>
    {{params}}
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
      params: { user: { name: '', email: '', password: '' } }
    }
  }
}
</script>
