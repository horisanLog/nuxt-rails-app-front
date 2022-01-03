<template>
  <div />
</template>
<script>
export default {
  // ページをレンダリングする前に実行される
  // nuxtServerInitの後
  async middleware ({ store, redirect }) {
    await store.dispatch('logout')
    return redirect('/')
  }
}
</script>
