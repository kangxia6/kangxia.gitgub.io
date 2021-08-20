	
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
			src:'img/daohang/消息.png',txt:'消息',href:'xx.html'
		},{
			src:'img/daohang/我的 (1).png',txt:'我的',href:'#',style:'color: red;'
		}],
		sj:[{
			atxt:'91699',btxt:'获赞'
		},{
			atxt:'3956',btxt:'粉丝'
		},{
			atxt:'3669',btxt:'获赞/收藏'
		},{
			atxt:'11560',btxt:'访客'
		}],
		gn:[{
			atxt:'我发布的'
		},{
			atxt:'评论与回答'
		},{
			atxt:'赞过/收藏'
		},{
			atxt:'浏览历史'
		}],
		fw:[{
			atxt:'创作中心',class:'a'
		},{
			atxt:'校园号管理',class:'b'
		},{
			atxt:'我的话题',class:'c'
		},{
			atxt:'我的问答',class:'a'
		},{
			atxt:'头饰商城',class:'a'
		},{
			atxt:'我的活动',class:'a'
		},{
			atxt:'我的简历',class:'a'
		},{
			atxt:'我的班级',class:'a'
		},{
			atxt:'帮助反馈',class:'a'
		},{
			atxt:'VIP',class:'a'
		}],
		lb:[{
			class:'xt_zs',sz:[{
			name:'校内身份管理'
		},{
			name:'账号设置'
		},{
			name:'消息通知'
		},{
			name:'隐私设置'
		},{
			name:'黑名单'
		},{
			name:'个人资料'
		}]
		},{
			class:'xt_zs',style:'margin-top:10px;height:410px;',sz:[{
				name:'校内身份管理'
			},{
				name:'账号设置'
			},{
				name:'消息通知'
			},{
				name:'隐私设置'
			}]
		}]
	}
})

	
var vm=new Vue({
	el:'.xt',
	data:{
		lb:[{
			class:'xt_zs',sz:[{
			name:'校内身份管理'
		},{
			name:'账号设置'
		},{
			name:'消息通知'
		},{
			name:'隐私设置'
		},{
			name:'黑名单'
		},{
			name:'个人资料'
		}]
		},{
			class:'xt_zs',style:'margin-top:10px;height:410px;',sz:[{
				name:'校内身份管理'
			},{
				name:'账号设置'
			},{
				name:'消息通知'
			},{
				name:'隐私设置'
			}]
		}]
	}
})


var ewm=document.querySelector('.rwm');
	var ewm_fh=document.querySelector('.tc');
	var wd_ewm=document.querySelector('.wd_rwm');
	var zhu=document.querySelector('#zhu');
	var fh=document.querySelector('.ffh');
	var sz=document.querySelector('.sz');
	var xt=document.querySelector('.xt');
	var llq=document.querySelector('.llq');
	var llq_fh=document.querySelector('.llq_fh');
	var a=document.querySelector('.a')
	var b=document.querySelector('.b')
	var ck=document.querySelector('.ck')
	ewm.onclick=function(){
		wd_ewm.style.display='flex';
		zhu.style.display='none';
	}
	ewm_fh.onclick=function(){
		wd_ewm.style.display='none';
		zhu.style.display='flex';
	}
	sz.onclick=function(){
		wd_ewm.style.display='none';
		zhu.style.display='none';
		xt.style.display='block';
		
	}
	fh.onclick=function(){
		xt.style.display='none';
		wd_ewm.style.display='none';
		zhu.style.display='block';
	}
	a.onclick=function(){
		zhu.style.display='none';
		llq.style.display='block';
		ck.src='https://static.campushoy.com/activity/workplace-h5/prod/index.html?dragBackDisabled=true&hideNavBar=1&timestamp=1625109627857#/plan';
	}
	llq_fh.onclick=function(){
		llq.style.display='none';
		zhu.style.display='block';
	}
	b.onclick=function(){
		zhu.style.display='none';
		llq.style.display='block';
		ck.src='https://static.campushoy.com/apps/h5-media-intro/prod/index.html?timestamp=1625115124914#/index';
	}