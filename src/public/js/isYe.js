/**
 * Created by Administrator on 2017/8/23.
 */
if(localStorage.getItem('bg')==0&&localStorage.getItem('bg')!=null){
    $("head").append('<link class="changeBg" rel="stylesheet" href="css/newBg.css"/>')
}
if(localStorage.getItem('bg')==1&&localStorage.getItem('bg')!=null){
    $("head link").remove('.changeBg');
}