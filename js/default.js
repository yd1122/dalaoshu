var score = 0;//获得的成绩
var randomNum ;  //获取的随机数
var stoped = false;
var num = 16;
var jihui = 5;
//一次点击
var onceClick = false;
//console.log(seconds);

var chance = document.querySelector("#mesg span");
var startGame = document.querySelector("#start-game");
/*倒计时的秒数*/
var seconds = document.querySelector("#countTime span");
var down = document.querySelector(".down");

/*结束游戏*/
var endGame = function(){
	var endImg = document.createElement("div");
				endImg.id = "endDiv";
			endImg.innerHTML = 	    '<div><img id="close" src="img/pop_box_close.png" /></div>'+
									'<img src="img/pop_score_bg.png" />'+
									'<h3>'+score+'分</h3>'+
									'<h2 id="again">再来一次</h2>';
			
	document.body.appendChild(endImg);
	document.querySelector("#mesg").style.display = "none";
	/*重新刷新页面*/
	document.querySelector("#again").onclick = function(){
		//console.log(window);
		location.reload();
	}
	/*关闭的监听*/
	document.querySelector("#close").onclick = function(){
		location.reload();
	}
}


/*点击开始游戏的事件*/
startGame.onclick = function(){
	document.querySelector("#start-game").style.display = "none";
	var clearTime = setInterval(function(){
		//状态为停止时候结束
		if(stoped){
			clearInterval(clearTime);
			endGame();
		}
		
		/*清除出洞的地鼠*/
		for(var i=0; i<12; i++){
			document.querySelector("#ds"+i).src = "img/vendor_people00.png";
		}
		
		
		seconds.innerHTML = num+'"';
		/*随机出现地鼠*/
		randomNum = parseInt(Math.random()*12);
		/*给地鼠换动作*/
		document.querySelector("#ds"+randomNum).src = "img/vendor_hole01.png";

		if(num == 1){
			//停止游戏
			stoped = true;
		}
		
		/*倒计时*/
		num--;
		onceClick = false;
	},800)
	
var clickMice = function(event){
	var str = "ds"+randomNum;
	if(event.target.id == str && !onceClick){
		score += 100;
		event.target.src = "img/vendor_hole02.png";
			}
console.log(randomNum);
console.log(event.target.id);
console.log(score);
	if(event.target.id != str){
		onceClick = true;
		jihui -= 1;
		chance.innerHTML = jihui;
		}
	if(jihui<=0){
		clearInterval(clearTime);
		endGame();
	}
}
		
	down.addEventListener("click",clickMice);
	

}
