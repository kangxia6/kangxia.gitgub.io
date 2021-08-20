//var numb = 0;	
//var img = document.querySelector('.dz');
//img.onclick=function(){
//	numb++;
//	if(numb%2==0){
//		img.src='img/dxq/点赞.png';
//	}else{
//		img.src='img/dxq/点赞1.png';
//	}
//}
//
var vm=new Vue({
	el:'.waizhi',
	data:{
		ck:[{
			wz:'动态操作'
		},{
			wz:'收藏'
		},{
			wz:'举报'
		},{
			wz:'取消'
		}],
		ckk:[{
			img:'img/zf/消息.png',wz:'私信'
		},{
			img:'img/zf/朋友圈.png',wz:'微信朋友圈'
		},{
			img:'img/zf/微信.png',wz:'微信好友'
		},{
			img:'img/zf/QQ.png',wz:'QQ'
		},{
			img:'img/zf/QQ空间.png',wz:'QQ空间'
		},{
			img:'img/zf/微博.png',wz:'新浪微博'
		}]
	}
})
window.onload=function(){


	var numb = 0;
	var img=document.getElementsByClassName('dz');
	for(var i=0; i<img.length; i++){
		img[i].onclick = function(){
			numb++;
			if(numb%2==0){
				this.src='img/dxq/点赞.png';
			}else{
				this.src='img/dxq/点赞1.png';
			}
		}
	};
	var fx_ck=document.querySelector('.fx_ck');
	var fx_ck1=document.querySelector('.fx_ck1');
	var fx=document.getElementsByClassName('fx');
	var xfx=document.getElementsByClassName('xfx');
	/* 分享 */
	for(var i=0; i<fx.length; i++){
		
		fx[i].onclick = function(){
			fx_ck.style.display='block';
		}
	};
	fx_ck.onclick=function(){
		fx_ck.style.display='none';
	};
	for(var i=0; i<xfx.length; i++){
		
		xfx[i].onclick = function(){
			fx_ck1.style.display='block';
		}
	};
	fx_ck1.onclick=function(){
		fx_ck1.style.display='none';
	};
}
var bx=document.querySelector('.bx');
bx.onclick=function(){
	window.location.href="dxq.html";
}