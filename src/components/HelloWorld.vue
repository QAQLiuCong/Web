<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>子{{ word }}</p>
    子<input type="text" v-model="str">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      str: ""
    };
  },
  props: {
    word: ""
  },
  watch: {
    str: function(newValue, oldValue) {
      //每当str的值改变则发送事件update:word , 并且把值传过去
      this.$emit("update:word", newValue);
    }
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
  text-align: center;
}
</style>