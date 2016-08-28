$(document).ready(function(){
	$("#fullpage").fullpage({
		'verticalCentered': true,
		'resize':true,
        'css3': true,
       'sectionsColor': ['#fff', '#620635', '#254587', '#695684','#ccc'],
        'anchors': ['page1', 'page2', 'page3', 'page4','page5', 'page6','page7'],
        'navigation': true,
        'loopBottom':true,
        'autoScrolling':true,
         afterLoad:function(anchorLink,index){
        	//debugger;
        	if(index==1){
        		
   		    $(".section1 .desc").addClass("animated bounceIn");
        	}
        	if(index==2){
        		
   		    $(".section22 .desc").addClass("animated bounceIn");
        	}
        	 	if(index==3){
        		
   		    $(".section3 .desc").addClass("animated bounceIn");
        	}
        	 	 	if(index==4){
        		
   		    $(".section4 .desc").addClass("animated bounceIn");
        	}
        	 	 	 	if(index==5){
        		
   		    $(".section5 .desc").addClass("animated bounceIn");
        	}
        	 	if(index==6){
        		
   		    $(".section6 .desc").addClass("animated bounceIn");
        	}
        	 	 if(index==7){
        		
   		    $(".section7 .desc").addClass("animated bounceIn");
        	}
        	}

	});
	initBg("canvas");
	initBg("canvas2");
	initBg("canvas3");
	initBg("canvas4");
	initBg("canvas5");
	initBg("canvas6");
})
function initBg(id){
	"use strict";

var canvas = document.getElementById(id),
  ctx = canvas.getContext('2d'),
  w = canvas.width = window.innerWidth,
  h = canvas.height = window.innerHeight,
    
  hue = 217,
  stars = [],
  count = 0,
  maxStars = 400;

// Thanks @jackrugile for the performance tip! http://codepen.io/jackrugile/pen/BjBGoM
// Cache gradient
var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    canvas2.fillStyle="red"
var half = canvas2.width/2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = "#ddaf73";
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

// End cache

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }
  
  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x,y) {
  var max = Math.max(x,y),
      diameter = Math.round(Math.sqrt(max*max + max*max));
  return diameter/2;
}

var Star = function() {

  this.orbitRadius = random(maxOrbit(w,h));
  this.radius = random(60, this.orbitRadius) / 12;
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 100000;
  this.alpha = random(2, 10) / 10;

  count++;
  stars[count] = this;
}

Star.prototype.draw = function() {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = '#620635';
    ctx.fillRect(0, 0, w, h)
  
  ctx.globalCompositeOperation = 'lighter';
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
  };  
  
  window.requestAnimationFrame(animation);
}

animation();
}
