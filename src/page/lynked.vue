<template lang="pug">
  .wrapper(:style="bgStyle")
    .content(v-if="settingsData !== null")
      img.avatar(:src="settingsData.photoUrl")
      .name {{ settingsData.name }}
      ul.btn-list
        li(v-for="item in settingsData.urlList")
          a.btn(:href="item.url", :style="btnStyle") {{ item.title }}
      .href-block
        a(href="https://www.lynked.me/util/PrivacyPolicy.html") 隱私權政策
        span 以及
        a(href="https://www.lynked.me/util/UserTerms.html") 使用者條款
    .no-data(v-else) 請先至後台更新設定
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
      settingsData: null,
      btnStyle: null,
      bgStyle: null,
    };
  },
  computed: {
    // 相依的資料改變時才做計算方法
  },
  watch: {
    // 監聽值
  },
  // BEGIN--生命週期
  beforeCreate: function () {
    // 實體初始化
  },
  created: function () {
    // 實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    this.setHeight100();
    this.getLocalStorageSettings();
  },
  beforeMount: function () {
    // 執行元素掛載之前。
  },
  mounted: function () {
    // 元素已掛載， $el 被建立。
  },
  beforeUpdate: function () {
    // 當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function () {
    // 當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function () {
    // 實體還可使用。
  },
  destroyed: function () {
    // 實體銷毀。
  },
  methods: {
    /**
     * 高度100%
     */
    setHeight100() {
      const bodyEl = document.querySelector("body");
      const htmlEl = document.querySelector("html");
      const appEl = document.querySelector("#app");
      bodyEl.style.height = "100%";
      htmlEl.style.height = "100%";
      appEl.style.height = "100%";
    },
    /**
     * 取得localStorage的設定
     */
    getLocalStorageSettings() {
      if (localStorage.getItem("settingsData") !== null) {
        this.settingsData = JSON.parse(localStorage.getItem("settingsData"));
        this.btnStyle = {
          "--button-background-color": this.settingsData.btnColor,
          "--button-background-color--hover": this.settingsData.btnHoverColor,
        };
        this.bgStyle = {
          "--bg-background-image": `url(${this.settingsData.bgUrl})`,
          "--bg-background-color": this.settingsData.bgColor,
        };
      } else {
        this.settingsData = null;
        this.bgStyle = {
          "--bg-background-image": `url()`,
        };
      }
    },
  },
  // END--生命週期
};
</script>

<style lang="scss" scoped>
a.btn {
  background-color: var(--button-background-color);
  &:hover {
    background-color: var(--button-background-color--hover);
  }
}
.wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--bg-background-color);
  background-image: var(--bg-background-image);
  background-position: bottom;
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: 50%;
}
.content {
  max-width: 680px;
  margin: auto;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
img.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.href-block {
  font-size: 14px;
  a {
    color: #2757b1;
    text-decoration: underline;
  }
}
ul.btn-list {
  margin: 10px 0px 20px 0px;
  padding: 0px;
  width: 100%;
  li {
    margin: 10px 0px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
      border-radius: 32px;
      color: #fff;
      box-shadow: rgb(0 0 0 / 20%) 0px 4px 4px 0px,
        rgb(0 0 0 / 20%) 0px 4px 4px 0px;
      font-size: 18px;
      margin: auto;
    }
  }
}
@media screen and (max-width: 1023px) {
  .wrapper {
    background-size: 70%;
  }
}
</style>
