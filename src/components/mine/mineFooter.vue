<template>
    <footer>
        <ul>
            <li>
                <a href="index.html">
                    <img src="../../public/imgs/subtitle_home_normal.png" alt="">
                    <span class="indexspan">首页</span>
                </a>
            </li>
            <li>
                <a href="course.html">
                    <img src="../../public/imgs/subtitle_course_normal.png" alt="">
                    <span>课程</span>
                </a>
            </li>
            <li>
                <a href="download.html">
                    <img src="../../public/imgs/subtitle_download_normal.png" alt="">
                    <span>下载</span>
                </a>
            </li>
            <li>
                <a href="mine.html">
                    <img src="../../public/imgs/subtitle_mine.png" alt="">
                    <span>我的</span>
                </a>
            </li>

        </ul>
    </footer>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    footer ul {
        height: 1.5rem;
        background-color: #ffffff;
        padding: 0.2rem 1.02rem 0.15rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 0px 5px #a1a1a1;
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 100; }
    footer ul li a img {
        height: 0.62rem;
        width: 0.66rem; }
    footer ul li a span {
        display: block;
        text-align: center;
        font: 0.24rem/0.24rem "";
        margin-top: 0.28rem; }
</style>