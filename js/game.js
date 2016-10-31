// Create the canvas创建画布
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;//长宽
canvas.height = 480;
document.body.appendChild(canvas);

// Background image背景图片
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image英雄图片
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image怪物图片
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

var hero = {
	speed: 256 // 英雄每秒移动像素
};
var monster = {};//怪物不会移动
var monstersCaught = 0;//怪物被抓到次数初始值为0

// 处理用户的按键
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// 抓到怪物后重新开始游戏
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// 把怪物放在canvas中的随机位置
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// 通过上下左右控制英雄坐标并且控制移动速度在一秒后恒定
var update = function (modifier) {
	if (38 in keysDown) { // 上
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // 下
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // 左
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // 右
		hero.x += hero.speed * modifier;
	}

	// 判断英雄和怪物是否碰到
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;//要是碰到这个值就+1
		reset();
	}
};

// 把背景、英雄、怪物等在屏幕上显示出来
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// 显示分数
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
};

//主循环，把modifier值传回上面的update
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// 连续操作
	requestAnimationFrame(main);
};

// 跨浏览器支持requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//启动游戏
var then = Date.now();
reset();
main();
