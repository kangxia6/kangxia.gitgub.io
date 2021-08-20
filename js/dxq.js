var vm=new Vue({
	el:'#zhu',
	data:{
		dh:[{
			src:'img/daohang/主页.png',txt:'今选',href:'index.html'
		},{
			src:"img/daohang/笑脸 (1).png",txt:'大学圈',href:'#',style:'color: red;'
		},{
			src:'img/daohang/服务号.png',txt:'服务',href:'fw.html'
		},{
			src:'img/daohang/消息.png',txt:'消息',href:'xx.html'
		},{
			src:'img/daohang/我的.png',txt:'我的',href:'wd.html'
		}],
		ht:[{
			nr:'百年回望，心声向党'
		},{
			nr:'才艺圈'
		},{
			nr:'致毕业后的自己'
		},{
			nr:'暑假随手拍'
		},{
			nr:'庆祝建党100周年'
		},{
			nr:'今天你学习里吗'
		}],
		nr:[{
			class:'nr',
			scr:'img/dxq/22.jpg',
			name:'长商职院易班学生工作总站',
			wb:"他们无惧风雨，只为成就建党伟业他们砥砺前行，只为建立新的时代“重温建党历程，感悟初心使命”，本月30日19:00《建党伟业》带你探索他们的时代打开今日校园→我的大学→校园活动，参与抢票即可参加观影活动6月29日中午12:30,等你来抢票哦～",
			style:'margin-top: 110px;height:610px;',
			img:'img/dxq/1625040248540.jpg'
		},{
			class:'nr',
			scr:'img/dxq/1.jpg',
			name:'拿笔小新',
			wb:'春酒 热夏 秋酿 知寒 相遇很难 记的说晚安',
			img:'img/dxq/1625039774260.jpg'
		},{
			class:'nr',
			scr:'img/dxq/2.jpg',
			name:'蜡笔小新',
			wb:'要不是德云社，我怎么会向往那举目无亲的北京城。',
			img:'img/dxq/1625039786509.jpg'
		},{
			class:'nr',
			scr:'img/dxq/3.jpg',
			name:'那笔小新',
			wb:'海的那边还是海吗？换句话说 你的心里还是我吗',
			img:'img/dxq/1625040266384.jpg'
		},{
			class:'nr',
			scr:'img/dxq/4.jpg',
			name:'那比小新',
			wb:'你给了我别人都没有的偏爱，可是在你身边的人从不是我，不知道我们从什么时候开始，渐行渐远直至今日的断了联系。同学，朋友，兄弟，无论是哪种关系，我们终是断了……',
			style:'height:610px;',
			img:'img/dxq/1625040308049.jpg'
		}]
	}
})

var zhu=document.querySelector('#zhu');
var fh=document.querySelector('.fh');
var dxq_fx=document.querySelector('.dxq_fx');
var jia=document.querySelector('.jia');

jia.onclick=function(){
		dxq_fx.style.display='block';
		zhu.style.display='none';
	}
	fh.onclick=function(){
		dxq_fx.style.display='none';
		zhu.style.display='block';
	}
	

var gz=document.querySelector('.gz1');
gz.onclick=function(){
	window.location.href="dxq_fu.html";
};
