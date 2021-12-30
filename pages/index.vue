<template>
  <div>
    <h2 class="hoge">Borrowersテーブルの取得</h2>
    <table v-if="borrowers.length" class="users-table">
      <thead class="head">
        <tr class="row">
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(borrower, i) in borrowers" :key="`borrower-${i}`">
          <td>{{ borrower.id }}</td>
          <td>{{ borrower.name }}</td>
          <td>{{ borrower.email }}</td>
          <td>{{ dateFormat(borrower.created_at) }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else>ユーザーが取得できませんでした</div>

    <h2 class="hoge">nuxt-i18nの検証</h2>
    <table v-if="borrowers.length" class="users-table">
      <thead class="head">
        <th>en</th>
        <th>ja</th>
      </thead>
      <tbody>
        <tr v-for="(path, i) in ['signup', 'login']" :key="`path-${i}`">
          <td>{{ path }}</td>
          <td>{{ $t(`title.${path}`) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ app }) {
    const borrowers = await app.$axios.$get('/api/borrower/borrowers')
    return { borrowers }
  },
  // 算出プロパティ
  computed: {
    dateFormat() {
      return (date: Date) => {
        const dateTimeFormat = new Intl.DateTimeFormat('ja', {
          dateStyle: 'medium',
          timeStyle: 'short',
        })
        return dateTimeFormat.format(new Date(date))
      }
    },
  },
})
</script>

<style scoped>
.users-table {
  border: 2px solid blue
}
</style>
