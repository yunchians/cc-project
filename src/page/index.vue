<template>
  <div class="wrapper signup-buttons">
    <div class="step-wrapper step01" v-if="step === 1">
      <a href="#" class="google-signup" @click.prevent="loginWithGoogle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          aria-hidden="true"
        >
          <title>Google</title>
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#4285F4"
              d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
            ></path>
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
            ></path>
            <path
              fill="#FBBC05"
              d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
            ></path>
            <path
              fill="#EA4335"
              d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
            ></path>
          </g>
        </svg>
        Google
      </a>
    </div>
    <div class="step-wrapper step02" v-if="step === 2">
      <a href="#" class="facebook-signup" @click.prevent="loginWithFacebook">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#3578E5"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          />
        </svg>
        Facebook
      </a>
    </div>
    <div class="step-wrapper step03" v-if="step === 3">
      <span>第三步驟</span>
    </div>
  </div>
</template>

<script>
import { initFbsdk } from "@/config/facebook_oAuth.js";
import { getMapData } from "@/api/map.js"

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
      step: 1 // 步驟1 google 步驟2 facebook 步驟3 資料顯示
    };
  },
  computed: {
    // 相依的資料改變時才做計算方法
  },
  watch: {
    // 監聽值
    'step': function(val) {
      if (val === 3) {
        getMapData()
      }
    }
  },
  // BEGIN--生命週期
  beforeCreate: function () {
    // 實體初始化
  },
  created: function () {
    // 實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
  },
  beforeMount: function () {
    // 執行元素掛載之前。
  },
  mounted: function () {
    initFbsdk();
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
    * google登入
    **/
    loginWithGoogle() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          // on success do something
          // console.log('GoogleUser', GoogleUser)
          // console.log("getId", GoogleUser.getId());
          // console.log("basicprofile", GoogleUser.getBasicProfile().getName());
          // console.log("getBasicProfile", GoogleUser.getBasicProfile());
          // console.log("getAuthResponse", GoogleUser.getAuthResponse());
          const userInfo = {
            loginType: "google",
            google: {
              auth: GoogleUser.getAuthResponse(),
              user: {
                name: GoogleUser.getBasicProfile().getName(),
                email: GoogleUser.getBasicProfile().getEmail(),
                profileImage: GoogleUser.getBasicProfile().getImageUrl(),
              },
            },
          };
          this.$store.dispatch("googleInfo/setGoogleInfo", userInfo);
          this.step = 2;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    /**
    * facebook登入
    **/
    loginWithFacebook() {
      window.FB.login((response) => {
        if (response && response.authResponse) {
          // console.log("response", response);
          const userInfo = {
            loginType: "fb",
            fb: {
              auth: response.authResponse,
            },
          };
          this.$store.dispatch("facebookInfo/setFBInfo", userInfo);
          // Graph API
          window.FB.api(
            `/${response.authResponse.userID}`,
            (userResponse) => {
              if (userResponse) {
                // console.log(userResponse);
                const userInfo = {
                  loginType: "fb",
                  fb: {
                    auth: response.authResponse,
                    user: userResponse,
                  },
                };
                this.$store.dispatch("facebookInfo/setFBInfo", userInfo);
                this.step = 3;
              }
            },
            this.params
          );
        }
      }, this.params);
    }
  },
  // END--生命週期
};
</script>

<style lang="scss" scoped>
.step-wrapper {
  margin: 20px 0px;
}
.facebook-signup,
.google-signup {
  color: #031b4e;
  background: #f2f8ff;
  border: 1px solid rgba(0, 105, 255, 0.2);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  display: inline-block;
  margin-top: 0;
  width: 280px;
  padding: 15px;
  text-align: center;
  position: inherit;
  vertical-align: middle;
  text-decoration: none;
  position: relative;
}
.signup-buttons svg {
    left: 16px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
</style>
