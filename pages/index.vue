<template>
  <div>
    <button
      type="button"
      name="button"
      @click="getMsg"
    >
      RailsからAPIを取得する
    </button>
    <div
      v-for="(msg, i) in msgs"
      :key="i"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      msgs: [] as string[]
    }
  },
  methods: {
    getMsg () {
      this.$axios.$get('/api/borrower/hello')
        .then(res => this.msgs.push(res))
    }
  }
})
</script>
