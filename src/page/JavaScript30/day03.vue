<template>
  <div class="wrapper">
    <h1>
      Update CSS Variables with <span :style="{ color: bgColor }">JS</span>
    </h1>
    <div class="content">
      <div class="controls">
        <ul>
          <li>
            <label for="spacing">Spacing:</label>
            <input
              id="spacing"
              type="range"
              name="spacing"
              :min="spacing.min"
              :max="spacing.max"
              data-sizing="px"
              v-model="spacing.value"
            />
          </li>
          <li>
            <label for="blur">Blur:</label>
            <input
              id="blur"
              type="range"
              name="blur"
              :min="blur.min"
              :max="blur.max"
              data-sizing="px"
              v-model="blur.value"
            />
          </li>
          <li>
            <label for="base">Base Color</label>
            <input id="base" type="color" name="base" v-model="bgColor" />
          </li>
        </ul>
      </div>
      <img
        :src="bgURL"
        :style="{
          padding: `${spacing.value}px`,
          background: bgColor,
          filter: 'blur(' + blur.value + 'px)',
        }"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "example",
  data() {
    return {
      spacing: {
        min: "0",
        max: "50",
        value: "10",
      },
      blur: {
        min: "0",
        max: "10",
        value: "1",
      },
      bgColor: "#007bff",
      bgURL: "https://source.unsplash.com/7bwQXzbF6KE/800x500",
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 80%;
  margin: 0px auto;
}
.content {
  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    li {
      label {
        font-size: 30px;
      }
      input {
        margin-left: 10px;
      }
    }
  }
}
img,
.controls {
}
.controls {
  margin-bottom: 20px;
}
</style>
