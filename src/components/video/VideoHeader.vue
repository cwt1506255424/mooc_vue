<template>
    <section id="myvideo"  class="pattern" >
        <a id="back" @click="routerBack">
            <img src="../../public/imgs/back.png"/>
        </a>
        <video id="video" ref="player" @canplaythrough="totalTime()"  style="width: 100%;height: 100%" src="src/public/video/happy.mp4" webkit-playsinline="true" x-webkit-airplay="true"  type="video/mp4" preload="none" x5-video-player-type="h5" x5-video-player-fullscreen="true" poster="src/public/imgs/video.png"  ></video>
        <div id="box">
            <!--播放暂停按钮-->
            <div id="playBox">
                <div id="play" class="play"></div>
            </div>

            <span id="times" style="display: none"></span>
            <span id="time"></span>
            <!--进度条-->
            <div id="progress">
                <span id="bar"></span>
                <div id="control"></div>
            </div>
            <span id="total"></span>
            <div id="full"></div>
        </div>

    </section>
</template>


<script type='text/ecmascript-6'>
    export default {
		data() {
			return {
				played:0
			}
		},
        methods:{
			addEventListener:function(){
				const self = this;
				self.$refs.player.addEventListener('timeupdate', self._currentTime);

			},
			removeEventListener:function(){
				const self = this;
				self.$refs.player.removeEventListener('timeupdate', self._currentTime);
			},
			_currentTime:function(){
				const self = this;
				self.played = self.$refs.player.currentTime;
                var times=self.played;
                document.getElementById("times").innerHTML=times;

                var timeHour =parseInt(self.played/3600);
                var timeMin = parseInt((self.played-timeHour*60)/60);
                var timeSec = parseInt(self.played-timeHour*3600-timeMin*60);
                //小时第一位
                var timeHour1 = timeHour>10 ? timeHour.toString().charAt(0) : "0";
                //小时第二位
                var timeHour2 = timeHour>10 ? timeHour.toString().charAt(1) : timeHour.toString().charAt(0);
                //分钟第一位
                var timeMin1 = timeMin>10 ? timeMin.toString().charAt(0) : "0";
                //分钟第二位
                var timeMin2 = timeMin>10 ? timeMin.toString().charAt(1) : timeMin.toString().charAt(0);
                //秒第一位
                var timeSec1 = timeSec>10 ? timeSec.toString().charAt(0) : "0";
                //秒第二位
                var timeSec2 =timeSec>10 ? timeSec.toString().charAt(1) :timeSec.toString().charAt(0);
                document.getElementById("time").innerHTML=timeHour1+timeHour2+":"+timeMin1+timeMin2+":"+timeSec1+timeSec2;

            },
            routerBack(){
                this.$router.go(-1);
            },
            totalTime(){
                var hour =parseInt(video.duration/3600);
                var min = parseInt((video.duration-hour*60)/60);
                var sec = parseInt(video.duration-hour*3600-min*60);
                //小时第一位
                var hour1 = hour>10 ? hour.toString().charAt(0) : "0";
                //小时第二位
                var hour2 = hour>10 ? hour.toString().charAt(1) : hour.toString().charAt(0);
                //分钟第一位
                var min1 = min>10 ? min.toString().charAt(0) : "0";
                //分钟第二位
                var min2 = min>10 ? min.toString().charAt(1) : min.toString().charAt(0);
                //秒第一位
                var sec1 = sec>10 ? sec.toString().charAt(0) : "0";
                //秒第二位
                var sec2 =sec>10 ? sec.toString().charAt(1) :sec.toString().charAt(0);
                document.getElementById("total").innerHTML=hour1+hour2+":"+min1+min2+":"+sec1+sec2;
            }
        },
        mounted:function(){
			 this.addEventListener();
            //box对象
            var box=document.getElementById("box");
            //视频对象
            var video=document.getElementById("video");
            //播放按钮
            var play=document.getElementById("play");
            //进度条
            var progress=document.querySelector("#progress");
            //灰色进度条
            var bar=document.getElementById("bar");
            //圆球
            var control=document.querySelector("#control");
            //播放时间进度
            var time=document.querySelector("#time");
            var total=document.querySelector("#total");
            //全屏
            var full=document.getElementById("full")
             full.addEventListener("click",function(){
             video.setAttribute('class','fullScreen');
             },false)

            var hideBars;
            var boxChild=document.getElementById('box').children;
            function boxChildHide(){
                for(i=0;i<boxChild.length;i++){
                    boxChild[i].setAttribute('class','hide');
                }
                box.setAttribute('class','hide');
            }
            //视频单击出现播放控件
            var i = 0;
            var video = document.querySelector("#video");
            video.addEventListener("touchstart",function(){
                box.setAttribute('class','showBox');
                for(i=0;i<boxChild.length;i++){
                    boxChild[i].removeAttribute('class','hide');
                    clearInterval(hideBars);
                }
                setInterval(boxChildHide,5000);
            });





            play.onclick=function(){
                if(video.paused){
                    play.className="pause";
                    video.play();
                    setInterval(boxChildHide,5000);
                    $("#back").css({"display":"none"});
                }else{
                    play.className="play";
                    video.pause();
                    $("#back").css({"display":"block"});
                }
            };
            //进度条	timeupdate播放位置更改时触发	duration 秒
            video.addEventListener("timeupdate",function(){
                var selfPlayed=document.getElementById("times").innerHTML;
                var scales=selfPlayed/video.duration;
                bar.style.width=progress.offsetWidth*scales+"px";
                control.style.left=progress.offsetWidth*scales+"px";
            },false);

//手机上JS事件是ontouchstart、ontouchend、ontouchmove;
//和PC上JS事件onmousedown、onmouseup、onmousemove是对应的
//进度条拖拽
            var oW;
            control.addEventListener('touchstart', function(event) {
                video.pause();
                var touches = event.touches[0];
                oW = touches.clientX - control.offsetLeft;
                // 判断默认行为是否可以被禁用
                if (event.cancelable) {
                    // 判断默认行为是否已经被禁用
                    if (!event.defaultPrevented) {
                        event.preventDefault();
                    }
                }
            }, false);
            control.addEventListener("touchmove", function(event) {
                
                var touches = event.touches[0];
                var leftv = touches.clientX - oW;
                if(leftv<=0){
                    leftv=0;
                }
                if(leftv>=progress.offsetWidth){
                    leftv=progress.offsetWidth-control.clientWidth;
                }
                control.style.left=leftv+"px";
            },false);
            control.addEventListener("touchend",function() {
                var scales=control.offsetLeft/progress.offsetWidth;
				const self = this;
                self.$refs.currentTime =video.duration*scales;
                //document.getElementById("times").innerHTML =video.duration*scales;
				
				console.log(self.$refs.currentTime);
                video.play();
                document.removeEventListener("touchmove",defaultEvent,false);
            },false);
            function defaultEvent(e) {
                e.preventDefault();
            }

        },
		beforeDestroy(){
			this.removeEventListeners();
		}
    }
</script>

<style scoped>
    #box{
        height:1.45rem;padding-top:0;
        background:#505664;
        border-bottom:1px solid #282c35;display:flex;justify-content:space-between;position:relative;bottom:1.4rem;
    }
    .hide { display:none!important;}
    .showBox { display:flex!important;}
    .show { display:block!important;}
    .play{
        width:0.42rem;height:0.48rem;
        background:url(../../public/imgs/play.png) no-repeat;background-size:100% 100%;
        margin-top:0.48rem;
        margin-left:0.7rem;cursor:pointer;
    }
    .pause{
        width:0.25rem;height:0.48rem;
        border-left:0.1rem solid #fff;
        border-right:0.1rem solid #fff;
        margin-top:0.48rem;
        margin-left:0.7rem;cursor:pointer;
    }
    #time,#total{
        font:0.35rem/1.45rem "";color:#fff;
    }
    #progress{
        width:41%;height:0.06rem;background:#6f767c;
        margin-top:0.65rem;
        position:relative;
    }
    #bar{
        width:0%;height:100%;background:#ccc;border-radius:3px;
        display:inline-block;position:absolute;top:0;left:0;
    }
    #control{
        width:0.3rem;height:0.3rem;
        position:absolute;border-radius:50%;
        left:0;top:-0.12rem;background:#ff2857;
        cursor:pointer;
    }
    #full{
        width:0.48rem;height:0.46rem;cursor:pointer;background:url(../../public/imgs/fullscreen.png) no-repeat;background-size:100% 100%;
        margin-top:0.48rem;margin-right:0.66rem;
    }

    .fullScreen{
        position: fixed; right: 0; bottom: 0;
        min-width: 100%; min-height: 100%;
        width: auto; height: auto; z-index: -100;
    }
    #myvideo {
        width: 100%;
        height: 6rem;
        background-color: #000;
        position: fixed;
        z-index: 100; }
    #myvideo #back {
        display: block;
        width: 0.9rem;
        height: 0.9rem;
        background: #4f5563;
        z-index:100;
        position: fixed;
        left: 0.4rem;
        top: 0.44rem; }
    #myvideo #back img {
        width: 0.9rem;
        height: 0.9rem; }
</style>