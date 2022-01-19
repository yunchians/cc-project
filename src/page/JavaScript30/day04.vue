<template>
  <span>
    這是一個範例元件
  </span>
</template>

<script>
export default {
  name: "index",
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
      text: "example",
      list: [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
      ],
    };
  },
  computed: {
    // 相依的資料改變時才做計算方法
  },
  watch: {
    // 監聽值
  },
  mounted() {
    // filter
    const filter = this.list.filter((item) => {
      return item.year > 1878
    })
    console.log('filter', filter)
    // find 只會回傳一次值，且是第一次為 true 的值
    const find = this.list.find((item) => {
      return item.year > 1878
    })
    console.log('find(只會回傳一次值，且是第一次為 true 的值)', find)
    // forEach 不會額外回傳值，只單純執行每個陣列內的物件或值
    const forEach = this.list.forEach((item, index, array) => {
      console.log('forEach', item, index, array)
    })
  },
  methods: {},
  // END--生命週期
};
</script>

<style lang="scss" scoped></style>
