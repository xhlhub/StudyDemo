	//	window.requestAnimationFrame=null;
	if (!window.requestAnimationFrame) {
	    window.requestAnimationFrame = function(fn) {
	        setTimeout(fn, 17);
	    };
	}
	/*
	 * 动画优化
	 利用离屏canvas缓冲
	 * */
	function Dot(x,y,r,speedX,speedY){
		this.x=x;
		this.y=y;
		this.r=r;
		this.speedX=speedX;
		this.speedY=speedY;
		ctx.fillStyle = "#fff";
		this.draw()
		this.animate();
	}
	
	Dot.prototype={
		draw:function(){
			ctx.beginPath();
		    ctx.arc(this.x,this.y,this.r, 0,  Math.PI*2)
		    ctx.fill();
		},
		animate:function (){
			ctx.clearRect(this.x-this.r-1,this.y-this.r-1,2*this.r+2, 2*this.r+2);
			
			let maxX = canvasWidth+this.r;
			let maxY = canvasHeight+this.r;
			
			this.y+=this.speedY;
			this.x+=this.speedX;
			
			if(this.x>maxX){
				this.x=-this.r
			}
			if(this.x<-this.r){
				this.x=maxX
			}
			if(this.y>maxY){
				this.y=-this.r
			}
			if(this.y<-this.r){
				this.y=maxY
			}
			this.draw()
			
			requestAnimationFrame(()=>{
				this.animate()
			})	

		}
	}

