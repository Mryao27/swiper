var sBody=document.getElementsByTagName('body')[0]
var sSwiper=document.getElementsByClassName('swiper')
var sSpan=document.getElementsByTagName('span')
var sPrev=document.getElementsByClassName('prev')[0]
var sNext=document.getElementsByClassName('next')[0]

sSwiper[0].style.opacity="1"
sSpan[0].className="on"
var num=0
for(var i=0;i<sSpan.length;i++){
    sSpan[i].index=i
    sSpan[i].onclick=function () {
        for(var j=0;j<sSpan.length;j++){
            num=this.index
            sSpan[j].className=""
            sSwiper[j].style.opacity="0"
        }
        sSpan[num].className="on"
        sSwiper[num].style.opacity="1"
    }

    sNext.onclick=function () {
        for(var j=0;j<sSpan.length;j++){
            if(sSpan[j].className=="on"){
                sSpan[j].className=""
                sSwiper[j].style.opacity="0"
                j++
                num++
                if(j>4){
                    j=0
                }
                sSpan[j].className="on"
                sSwiper[j].style.opacity="1"
            }

        }
    }
    sPrev.onclick=function () {
        for(var j=0;j<sSpan.length;j++){
            if(sSpan[j].className=="on"){
                sSpan[j].className=""
                sSwiper[j].style.opacity="0"
                j--
                num--
                if(j<0){
                    j=4
                }
                sSpan[j].className="on"
                sSwiper[j].style.opacity="1"
            }

        }
    }
}
function time() {
    num++
    if(num<5){
        for(var i=0;i<sSpan.length;i++){
            sSpan[i].className=""
            sSwiper[i].style.opacity="0"
        }
        sSpan[num].className="on"
        sSwiper[num].style.opacity="1"
    }else{
        num=-1
        for(var i=0;i<sSpan.length;i++){
            sSpan[i].className=""
            sSwiper[i].style.opacity="0"
        }
        num++
        sSpan[num].className="on"
        sSwiper[num].style.opacity="1"

    }
}
// clearInterval(timer)
var timer=setInterval("time()",2000)
sBody.onmouseenter=function () {
    clearInterval(timer)
}
sBody.onmouseleave=function () {
    clearInterval(timer)
    timer=setInterval("time()",2000)
}


