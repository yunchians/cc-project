<template lang="pug">
  .wrapper
    h4 執行中的項目: 
      span(v-if='implementList.length > 0') {{ implementList }}
    ul.list
      li(v-for='(item, index) in list', @click='sendToImplement(item)')
        span {{ item }}
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
      implementList: [],
      list: [],
      setInterval_fn: null,
      setItem: null
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
    this.randomArray()
    // 模擬背景作業上傳功能
    this.setInterval_fn = setInterval(this.updateItem, 5000);

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
    clearInterval(this.setInterval_fn)
  },
  methods: {
    /**
    * 判斷當前的item
    * params(item)
    **/
    async sendToImplement(item) {
      this.setItem = item
      const index = this.implementList.indexOf(item)
      console.log('索引', index, 'item', this.setItem)
      if (index !== -1) {
        // 已存在
        console.log('已存在', item)
        this.removeFromQueue(index)
      } else {
        // 不存在
        console.log('不存在', item)
        this.addToQueue(item)
      }
    },
    /**
    * 隨機產生26字母
    **/
    randomArray() {
      let words = []
      for(let i = 65; i < 91; i++) {
        words.push(String.fromCharCode(i))
      }
      this.list = words
    },
    /**
    * 空陣列判斷
    **/
    isEmpty() {
      if (this.implementList.length == 0) {
        return true
      }
      return false
    },
    /**
    * 新增
    * params(item)
    **/
    addToQueue(item) {
      this.implementList.unshift(item)
    },
    /**
    * 移除
    * params(index 索引)
    **/
    removeFromQueue(index) {
      this.implementList.splice(index, 1)
    },
    /**
    * 項目執行
    **/
    async updateItem() {
      const isEmpty = await this.isEmpty()
      if (isEmpty === true) {
        // 空陣列不執行
        return
      }
      return this.implementList.shift()
    }
  }
  // END--生命週期
}
</script>

<style scoped>
.wrapper {
  width: 80%;
  margin: 0px auto;
}
ul.list {
  margin: 20px 0px 0px 0px;
  padding: 0px;
  text-align: left;
}
ul.list li {
  list-style-type: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #94ffff;
  cursor: pointer;
  font-weight: bold;
}
</style>