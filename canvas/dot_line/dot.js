	/*
	 * 动画优化
	 利用离屏canvas缓冲
	 * */
	function Dot(x,y,r,speedX,speedY,opcity,id){
		this.id=id;
		this.x=x;
		this.y=y;
		this.r=r;
		this.speedX=speedX;
		this.speedY=speedY;
		this.opcity=opcity;
		ctx.fillStyle = "#fff";
		this.draw()
	}
	
	Dot.prototype={
		draw:function(){
			ctx.beginPath();
		    ctx.arc(this.x,this.y,this.r, 0,  Math.PI*2)
		    ctx.fill();
		},
		animate:function (){
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
		}
	}

