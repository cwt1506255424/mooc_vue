<template>
    <section id="calculate" class="pattern">
        <ul>
            <li>
                <b>商品金额</b>
                <span id="money">448.00</span>
                <span>￥</span>

            </li>
            <li>
                <b>优惠券抵扣</b>
                <span>0.00</span>
                <span>-￥</span>
            </li>
        </ul>
    </section>
</template>

<script type="text/ecmascript-6">


</script>

<style scoped>
    #calculate {
      background-color: #ffffff;
      margin-bottom: 0.5rem;
      padding: 0 0.52rem; }
      #calculate ul li {
        height: 1.5rem;
        font: 700 0.3rem/1.5rem ""; }
        #calculate ul li b {
          color: #6b7074;
          float: left; }
        #calculate ul li span {
          float: right;
          color: #cb3340; }
</style>