<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>父{{text}}</p>
    父<input type="text" v-model="text">
    <HelloWorld :word.sync="text"><HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import './assets/scss/common';
export default {
    data () {
        return {
            text:''
        }
    },
    components: {
        HelloWorld
    },
    mounted(){
        let a=10;
        console.log(a);
    }
}
</script>

