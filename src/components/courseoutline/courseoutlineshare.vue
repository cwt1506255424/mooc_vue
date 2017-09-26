<template>
    <div>
        <section id="share">
            <ul>
                <li>
                    <a href="#">
                        <img src="../../public/imgs/share_qq.png" alt="">
                        <span>QQ好友</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../public/imgs/share_email.png" alt="">
                        <span>邮箱</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../public/imgs/share_wechat.png" alt="">
                        <span>微信好友</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../public/imgs/share_qqzone.png" alt="">
                        <span>QQ空间</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../public/imgs/share_wechat_friend.png" alt="">
                        <span>盆友圈</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../public/imgs/share_weibo.png" alt="">
                        <span>新浪微博</span>
                    </a>
                </li>
            </ul>
            <h6 class="cancel">取消</h6>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>

    export default {
        components:{

        },
        mounted:function () {

        }
    }

</script>

<style scoped>
    #share {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0rem;
        height: 100%;
        width: 100%;
        display: none;
        z-index: 2; }
    #share ul {
        position: absolute;
        bottom: 1.2rem;
        height: 7.2rem;
        background-color: #ffffff;
        border-top: 0.01rem solid #3fc394; }
    #share ul li {
        float: left;
        width: 25%;
        height: 2.5rem;
        margin: 0.6rem 0; }
    #share ul li a {
        display: block; }
    #share ul li a img {
        display: block;
        height: 1.96rem;
        width: 1.96rem;
        margin-left: 0.4rem; }
    #share ul li a span {
        display: block;
        text-align: center;
        font: 0.32rem/0.6rem "";
        color: #ababab; }
    #share h6 {
        font: 700 0.46rem/1.19rem "";
        text-align: center;
        width: 100%;
        background: #ffffff;
        height: 1.19rem;
        border-top: 1px solid #a7a7a7;
        position: absolute;
        bottom: 0rem; }
</style>