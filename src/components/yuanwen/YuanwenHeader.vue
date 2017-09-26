<template>
  <div>
    <header class="pattern">
      <div id="head">
        <router-link to="/index"></router-link>
        <span>猿问</span>
        <i class="search"></i>
      </div>
    </header>
  </div>

</template>


<script type='text/ecmascript-6'>
  export default{

  }
</script>

<style scoped>
header {
  background-color: #333949;
  color: #ffffff;
  height: 1.65rem;
  box-sizing: border-box;
  padding: 0.46rem 0.74rem 0.64rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100; }
  header #head a {
    display: block;
    margin-top: 0.16rem;
    background: url("../../public/imgs/image_selector_btn_back.png") no-repeat;
    background-size: 85% 85%;
    height: 0.54rem;
    width: 0.54rem;
    float: left; }
  header #head span {
    float: left;
    margin-top: 0.2rem;
    font: 0.38rem/0.38rem ''; }
  header #head i {
    float: left;
    display: block;
    height: 0.54rem;
    width: 0.54rem; }
  header #head .search {
    float: right;
    background: url("../../public/imgs/searchresults48.png") no-repeat center bottom;
    background-size: 85% 85%;
    margin-left: 5.05rem; }
</style>