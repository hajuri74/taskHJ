<template>
  <div class="app">
    <div class="con1">
      Crawling Task!
    </div>
    <div class="con2">
      <Header/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  components:{Header}
}
</script>

<style lang="scss">
  @import "./assets/css/common.scss";
  
  body{
    background-color: #f4f7fc;
  }
  .con1 {
    height: 180px;
    background-color:#153d77; 
    font-size: 30px;
    color: #fff; 
    padding: 50px 0 0 230px;
    box-sizing: border-box;
  }
  .con2 {position: relative; z-index: 1; top:-40px;}
  header,.crawlWrap {float: left;}
</style>