<template>
  <!-- v-bind:value="name" => 描写 -->
  <!-- v-on:input => インプットがあった時に発火する -->
  <!-- $emit('キー', $event) => 子から親へデータを送信 -->
  <!-- syncを使った場合、v-on:input="$emit('input', $event)"→ $emit('update:name', $event)とする -->
  <v-text-field
    v-model="setName"
    :rules="rules"
    :counter="max"
    label="ユーザー名を入力"
    placeholder="あなたの表示名"
    outlined
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    const max = 30
    return {
      max,
      rules: [
        v => !!v || '',
        v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
      ]
    }
  },
  computed: {
    setName: {
      get() {
        return this.name
      },
      set(newValue) {
        return this.$emit('update:name', newValue)
      }
    }
  }
}
</script>
