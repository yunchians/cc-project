<template>
  <span> 打開console.log預覽 </span>
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
      numbers: [10, 20, 30, 40, 50],
      peoples: [
        {
          name: "Casper",
          like: "鍋燒意麵",
          age: 18,
        },
        {
          name: "Wang",
          like: "炒麵",
          age: 24,
        },
        {
          name: "Bobo",
          like: "蘿蔔泥",
          age: 1,
        },
        {
          name: "滷蛋",
          like: "蘿蔔泥",
          age: 3,
        },
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
      return item.year > 1878;
    });
    console.log("filter", filter);
    // find 只會回傳一次值，且是第一次為 true 的值
    const find = this.list.find((item) => {
      return item.year > 1878;
    });
    console.log("find(只會回傳一次值，且是第一次為 true 的值)", find);
    // forEach 不會額外回傳值，只單純執行每個陣列內的物件或值 用return不會有作用
    const forEach = this.list.forEach((item, index, array) => {
      console.log("forEach", item, index, array);
    });
    // map 可以回傳一個新的陣列，並保有原本的舊陣列
    const map = this.numbers.map((item) => {
      return item * 2;
    });
    console.log("map", map, "原本的陣列", this.numbers);
    // sort a<b -1, a>b 1, a=b 0
    const sort = this.list.sort((a, b) => {
      return a.year - b.year;
    });
    console.log("sort", sort);
    // reduce accumulator前一個 currentValue當前  currentIndex當前索引 array全部陣列 initialValue初始值
    const reduce = this.peoples.reduce(
      (accumulator, currentValue, currentIndex, array) => {
        // 前一個回傳值, 目前值, 當前索引值
        console.log(accumulator, currentValue, currentIndex);
        return accumulator + currentValue.age;
      },
      0
    );
    console.log("reduce", reduce);
  },
  methods: {},
  // END--生命週期
};  
</script>

<style lang="scss" scoped></style>
