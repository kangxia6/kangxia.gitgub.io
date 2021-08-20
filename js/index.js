var vm=new Vue({
	el:'#zhu',
	data:{
		dh:[{
			src:'img/daohang/主页 (1).png',txt:'今选',href:'#',style:'color: red;'
		},{
			src:"img/daohang/笑脸.png",txt:'大学圈',href:'dxq.html'
		},{
			src:'img/daohang/服务号.png',txt:'服务',href:'fw.html'
		},{
			src:'img/daohang/消息.png',txt:'消息',href:'xx.html'
		},{
			src:'img/daohang/我的.png',txt:'我的',href:'wd.html'
		}],
		lb:[{
			src:'img/jx/20210628102823Aicy.png'
		},{
			src:'img/jx/20210628102828Aicy.png'
		},{
			src:'img/jx/20210628102834Aicy.png'
		}],
		gn:[{
			href:'#',src:'img/jx/a/IMG_20210628_104537.png',txt:'签到领福利'
		},{
			href:'#',src:'img/jx/a/IMG_20210628_104633.png',txt:'问答广场'
		},{
			href:'#',src:'img/jx/a/IMG_20210628_104720.png',txt:'校园号申请'
		},{
			href:'#',src:'img/jx/a/IMG_20210628_104803.png',txt:'赞助福利'
		},{
			href:'#',src:'img/jx/a/IMG_20210628_104826.png',txt:'返校防疫'
		},{
			href:'#',src:'img/jx/a/IMG_20210628_104920.png',txt:'查寝'
		},{
			href:'#',src:'img/jx/a/IMG_20210628_104938.png',txt:'签到'
		},{
			href:'#',src:'img/jx/a/IMG_20210628_104949.png',txt:'请假'
		},{
			href:'#',src:'img/jx/a/IMG_20210628_105006.png',txt:'信息收集'
		},{
			href:'fw.html',src:'img/jx/a/IMG_20210628_105026.png',txt:'更多'
		}],
		nr:[{
			class:'zs',scr:'img/jx/a/1.png',atxt:'学党史',btxt:'中国共产党百年述职报告'
		},{
			class:'ls',scr:'img/jx/a/2.png',atxt:'听党话',btxt:'彩绘中国.觉醒'
		},{
			class:'cs',scr:'img/jx/a/3.png',atxt:'感恩党',btxt:'100个关键词，回顾党史100年'
		}],
		znr:[{
			class:'znr',
			scr:'img/dxq/22.jpg',
			name:'长商职院易班学生工作总站',
			wb:"他们无惧风雨，只为成就建党伟业他们砥砺前行，只为建立新的时代“重温建党历程，感悟初心使命”，本月30日19:00《建党伟业》带你探索他们的时代打开今日校园→我的大学→校园活动，参与抢票即可参加观影活动6月29日中午12:30,等你来抢票哦～",
			style:'margin-top: 10px;height:610px;',
			img:'img/dxq/1625040248540.jpg'
		},{
			class:'znr',
			scr:'img/dxq/1.jpg',
			name:'拿笔小新',
			wb:'春酒 热夏 秋酿 知寒 相遇很难 记的说晚安',
			img:'img/dxq/1625039774260.jpg'
		},{
			class:'znr',
			scr:'img/dxq/2.jpg',
			name:'蜡笔小新',
			wb:'要不是德云社，我怎么会向往那举目无亲的北京城。',
			img:'img/dxq/1625039786509.jpg'
		},{
			class:'znr',
			scr:'img/dxq/3.jpg',
			name:'那笔小新',
			wb:'海的那边还是海吗？换句话说 你的心里还是我吗',
			img:'img/dxq/1625040266384.jpg'
		},{
			class:'znr',
			scr:'img/dxq/4.jpg',
			name:'那比小新',
			wb:'你给了我别人都没有的偏爱，可是在你身边的人从不是我，不知道我们从什么时候开始，渐行渐远直至今日的断了联系。同学，朋友，兄弟，无论是哪种关系，我们终是断了……',
			style:'height:610px;',
			img:'img/dxq/1625040308049.jpg'
		}]
	}
})
//轮播图
	var lunbo=document.getElementById('lunbo');
	var liDom=lunbo.getElementsByTagName('li');
	var spans=document.getElementById('num').getElementsByTagName('span');
	var len=liDom.length;
	var n=0,t;
	//隐藏第一张之后的图片
	for(var i=1;i<len;i++){
		liDom[i].style.display='none';}	
	function prev(){
		if(n<=0){
			n=len;
		}
		n--;
		play();
	}
	function next(){
		n++;
		if(n>=len){
			n=0;
		}
		play();	
	}
	function play(){
		//隐藏所有的图片	
		//移除所有span上的current
		for(var i=0;i<len;i++){
			liDom[i].style.display='none';
			spans[i].className='';}
		//显示当前的图片
		//给当前的span加上current
		liDom[n].style.display='block';
		spans[n].className='current';
	}
	for(var i=0;i<spans.length;i++){
		/*spans[i].onclick=function(){
			var index=parseInt(this.innerHTML);
			n=index-1;
			play();	
		}*/
		spans[i].onmouseover=function(){
			var index=parseInt(this.innerHTML);
			n=index-1;
			play();	
		}	
	}
	function autoPlay(){
		t=setInterval(function(){
			n++;
			if(n>=len){
				n=0;	
			}
			play();
		},2000);
	}
	autoPlay();
	lunbo.onmouseover=function(){
		clearInterval(t);	
	}
	lunbo.onmouseout=function(){
		autoPlay();	
	}