<template>
   <router-link to="/video">
    <li>
        <a href="#">
            <div class="four php">
                <div class="fourup">
                    <span>{{pro.name}}</span>
                </div>
                <div class="fourdown">
                    <h5>{{pro.qrcode}}</h5>
                    <p>{{pro.description}}</p>
                    <span>{{pro.number}}</span>
                </div>
            </div>
        </a>
    </li>
    </router-link>
</template>


<script type='text/ecmascript-6'>
	export default{
		props:["pro"]
	}
</script>

<style scoped>

    #kechengtuijian ul li {
        height: 4.2rem;
        width: 4.62rem;
        background-color: #ffffff;
        margin-bottom: 0.33rem; }


    #kechengtuijian ul a:nth-child(1) a  .fourup {
        background-color: #b169bf; }
    #kechengtuijian ul a:nth-child(2) a  .fourup {
        background-color: #04bebd; }
    #kechengtuijian ul a:nth-child(3) a  .fourup {
        background-color: #f97398; }
    #kechengtuijian ul a:nth-child(4) a  .fourup {
        background-color: #ce72e1; }
    #kechengtuijian ul a:nth-child(5) a  .fourup {
        background-color: #f39000; }
    #kechengtuijian ul a:nth-child(6) a  .fourup {
        background-color: #05af57; }
    #kechengtuijian ul li a .four .fourup {
        height: 1.02rem; }
    #kechengtuijian ul li a .four .fourup span {
        font: 0.22rem/1.02rem "";
        color: #ffffff;
        margin-left: 0.3rem; }
    #kechengtuijian ul li a .four .fourdown {
        height: 3.2rem;
        overflow: hidden;
        position: relative; }
    #kechengtuijian ul li a .four .fourdown h5 {
        box-sizing: border-box;
        padding: 0.18rem 0.65rem 0.18rem 0.32rem;
        font: 700 0.28rem/0.38rem ""; }
    #kechengtuijian ul li a .four .fourdown p {
        padding: 0rem 0.3rem;
        box-sizing: border-box;
        font: 700 0.22rem/0.32rem "";
        color: #b6b6b6; }
    #kechengtuijian ul li a .four .fourdown span {
        display: block;
        position: absolute;
        bottom: 0.54rem;
        left: 0.3rem;
        font: 700 0.22rem/0.32rem "";
        color: #707579; }
</style>