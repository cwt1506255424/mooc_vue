<template>
    <div>
        <router-link to="/video">
            <footer id="stratlearn">
                <a href="#">
                    开始学习
                </a>
            </footer>
        </router-link>
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
    #stratlearn {
        z-index: 1;
        position: fixed;
        bottom: 0;
        height: 1.43rem;
        width: 100%;
        font: 700 0.44rem/1.43rem "";
        background-color: #ff2d50;
        text-align: center;
        border-top: 1px solid #b84d5f; }
    #stratlearn a {
        color: #ffffff;
        width: 100%;
        display: block; }

</style>