<template>
    <div>

        <div class="iconf" @click="routerBack">
            <div class="padd">
                <i class="icon iconfont">&#xe624;</i>
            </div>
        </div>

    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        methods:{
            routerBack(){
                this.$router.go(-1);
            }
        }
    }

</script>

<style scoped>
    @font-face {font-family: "iconfont";
        src: url('../../public/fontLog/iconfont.eot'); /* IE9*/
        src: url('../../public/fontLog/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../../public/fontLog/iconfont.woff') format('woff'), /* chrome, firefox */
        url('../../public/fontLog/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('../../public/fontLog/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    .iconf{
        width:100%;
        height:0.42rem;
        /*padding-top: 0.16rem;*/
        /*padding-left: 0.16rem;*/
    }
    .iconf .padd{
        width:100%;
        height:100%;
        padding-top: 0.32rem;
    }
    .iconf .padd .icon{
        font-size: 0.44rem;
        color: #fff;
        line-height: 0.42rem;
        margin-left: 0.32rem;
    }
</style>