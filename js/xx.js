var vm=new Vue({
	el:'#zhu',
	data:{
		dh:[{
			src:'img/daohang/主页.png',txt:'今选',href:'index.html'
		},{
			src:"img/daohang/笑脸.png",txt:'大学圈',href:'dxq.html'
		},{
			src:'img/daohang/服务号.png',txt:'服务',href:'fw.html'
		},{
			src:'img/daohang/消息 (1).png',txt:'消息',href:'#',style:'color: red;'
		},{
			src:'img/daohang/我的.png',txt:'我的',href:'wd.html'
		}],
		xx:[{
			atxt:'互动消息'
		},{
			atxt:'长商职院易班学生工作总站'
		},{
			atxt:'辅导员通知'
		},{
			atxt:'软件学院易班学生工作分站'
		},{
			atxt:'易班解忧树洞'
		},{
			atxt:'今日校园小黑板'
		},{
			atxt:'校园活动'
		},{
			atxt:'长商心协温心工作室'
		}]
	}
})
var vm=new Vue({
	el:'.txl',
	data:{
		txl:[{
			aa:'txl_gn',img:'img/xx/IMG_20210703_203538.png',name:'校园号',wb:'掌握最新动态信息'
		},{
			aa:'txl_gn dd',img:'img/xx/IMG_20210703_203559.png',name:'找同学',wb:'快速找到本校学生'
		},{
			aa:'txl_gn',img:'img/xx/IMG_20210703_203615.png',name:'找老师',wb:'快速找到本校老师'
		},{
			aa:'txl_gn dd',img:'img/xx/1.jpg',name:'故裏舊倳',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/2.jpg',name:'二次元男神',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/3.jpg',name:'dδù覀霺笑恏мā',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/4.jpg',name:'温情湿吻',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/5.jpg',name:'劫外身',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/6.jpg',name:'小黑君!',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/7.jpg',name:'零紀年',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/8.jpg',name:'━殺神絶孌—',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/9.jpg',name:'画角声中',wb:'19级 软件学院',xx:'img/xx/消息.png'
		},{
			aa:'txl_gn dd',img:'img/xx/10.jpg',name:'怪大叔',wb:'19级 软件学院',xx:'img/xx/消息.png'
		}]
	}
})
var zhu=document.querySelector('#zhu');
var fh=document.querySelector('.fh');
var txl_rk=document.querySelector('.txl_rk');
var txl=document.querySelector('.txl');
txl_rk.onclick=function(){
		txl.style.display='block';
		zhu.style.display='none';
	}
	fh.onclick=function(){
		txl.style.display='none';
		zhu.style.display='flex';
	}