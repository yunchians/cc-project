<template lang="pug">
  span 這是一個範例元件
</template>

<script>
export default {
  name: 'index',
  components: {},
  // 父組件來源
  props: {
    // example: {
    //   type: Number | String | Boolean | Function,
    //   default: function() {
    //     console.log('example')
    //     return 'example'
    //   }
    // }
  },
  data() {
    return {
      text: 'example'
    }
  },
  computed: {
    // 相依的資料改變時才做計算方法
  },
  watch: {
    // 監聽值
  },
  // BEGIN--生命週期
  beforeCreate: function() {
    // 實體初始化
  },
  created: function() {
    // 實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
  },
  beforeMount: function() {
    // 執行元素掛載之前。
  },
  mounted: function() {
    // 元素已掛載， $el 被建立。
  },
  beforeUpdate: function() {
    // 當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    // 當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    // 實體還可使用。
  },
  destroyed: function() {
    // 實體銷毀。
  },
  methods: {
  }
  // END--生命週期
}
</script>

<style lang="scss" scoped>

</style>
